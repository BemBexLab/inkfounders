import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};


// next.config.js
module.exports = {
  env: {
    SMTP_HOST: process.env.SMTP_HOST,
    SMTP_PORT: process.env.SMTP_PORT,
    SMTP_SECURE: process.env.SMTP_SECURE,
    SMTP_USER: process.env.SMTP_USER,
    SMTP_PASS: process.env.SMTP_PASS,
    EMAIL_TO: process.env.EMAIL_TO,
  },
};


export default nextConfig;

