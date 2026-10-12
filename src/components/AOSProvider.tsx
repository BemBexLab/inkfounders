"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

let initializedPath: string | null = null;

export default function AOSProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    if (initializedPath === null) {
      AOS.init({ duration: 1000, once: true });
      initializedPath = pathname;
      return;
    }

    if (initializedPath !== pathname) {
      AOS.refreshHard();
      initializedPath = pathname;
    }
  }, [pathname]);

  return <>{children}</>;
}
