"use client";

import React from "react";

type QuoteTriggerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function QuoteTrigger({
  children,
  className,
}: QuoteTriggerProps) {
  return (
    <button
      type="button"
      onClick={() => {
        window.dispatchEvent(new Event("open-quote-popup"));
      }}
      className={className}
    >
      {children}
    </button>
  );
}
