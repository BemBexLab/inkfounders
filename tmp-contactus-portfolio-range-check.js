const { spawn } = require("child_process");
const fs = require("fs");
const http = require("http");
const path = require("path");

const chromePath = path.join(
  process.env.LOCALAPPDATA || "",
  "ms-playwright",
  "chromium_headless_shell-1208",
  "chrome-headless-shell-win64",
  "chrome-headless-shell.exe"
);
const port = 9239;
const profile = path.join(process.cwd(), `tmp-contactus-portfolio-profile-${Date.now()}`);
fs.mkdirSync(profile, { recursive: true });

function getJson(url, method = "GET") {
  return new Promise((resolve, reject) => {
    const req = http.request(url, { method }, (res) => {
      let data = "";
      res.on("data", (chunk) => {
        data += chunk;
      });
      res.on("end", () => {
        try {
          resolve(JSON.parse(data));
        } catch (error) {
          reject(error);
        }
      });
    });
    req.on("error", reject);
    req.end();
  });
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function waitForChrome() {
  for (let i = 0; i < 60; i += 1) {
    try {
      return await getJson(`http://127.0.0.1:${port}/json/version`);
    } catch (_) {
      await sleep(250);
    }
  }
  throw new Error("Chrome CDP did not start");
}

async function main() {
  const browser = spawn(
    chromePath,
    [
      `--remote-debugging-port=${port}`,
      `--user-data-dir=${profile}`,
      "--headless=new",
      "--disable-gpu",
      "--no-first-run",
      "--no-default-browser-check",
      "about:blank",
    ],
    { stdio: "ignore" }
  );

  await waitForChrome();
  const target = await getJson(`http://127.0.0.1:${port}/json/new?http://localhost:3000/contactus`, "PUT");
  const ws = new WebSocket(target.webSocketDebuggerUrl);
  let id = 0;
  const pending = new Map();
  ws.onmessage = (event) => {
    const msg = JSON.parse(event.data);
    if (msg.id && pending.has(msg.id)) {
      const { resolve, reject } = pending.get(msg.id);
      pending.delete(msg.id);
      msg.error ? reject(new Error(JSON.stringify(msg.error))) : resolve(msg.result);
    }
  };
  await new Promise((resolve) => { ws.onopen = resolve; });
  const send = (method, params = {}) => new Promise((resolve, reject) => {
    const callId = ++id;
    pending.set(callId, { resolve, reject });
    ws.send(JSON.stringify({ id: callId, method, params }));
  });
  await send("Page.enable");
  await send("Runtime.enable");

  const results = [];
  for (const width of [823, 900, 1023]) {
    await send("Emulation.setDeviceMetricsOverride", {
      width,
      height: 1000,
      deviceScaleFactor: 1,
      mobile: false,
    });
    await send("Page.navigate", { url: "http://localhost:3000/contactus" });
    await sleep(3500);
    const result = await send("Runtime.evaluate", {
      returnByValue: true,
      expression: `(() => {
        const cards = Array.from(document.querySelectorAll('section img[alt]')).slice(-6).map((img) => {
          const r = img.parentElement.getBoundingClientRect();
          return { left: Math.round(r.left), right: Math.round(r.right), width: Math.round(r.width), top: Math.round(r.top) };
        });
        return {
          width: innerWidth,
          scrollWidth: document.documentElement.scrollWidth,
          clientWidth: document.documentElement.clientWidth,
          cards
        };
      })()`,
    });
    results.push(result.result.value);
  }

  ws.close();
  console.log(JSON.stringify(results, null, 2));
  browser.kill();
  await sleep(750);
  fs.rmSync(profile, { recursive: true, force: true });
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
