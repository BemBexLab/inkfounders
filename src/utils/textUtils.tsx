import React from "react";

/**
 * Convert newline characters in a string into a React fragment containing
 * `<br />` elements.  This lets you store ``\n`` inside a plain string and
 * have it render as a line break in JSX.
 *
 * Usage:
 * ```tsx
 * <p className="whitespace-pre-line">{nl2br(someString)}</p>
 * ```
 *
 * The output is safe to insert anywhere React accepts `ReactNode`.
 */
export function nl2br(text: string): React.ReactNode {
  const lines = text.split("\n");
  return lines.map((line, idx) => (
    <React.Fragment key={idx}>
      {line}
      {idx < lines.length - 1 && <br />}
    </React.Fragment>
  ));
}

// convenience component that applies the Tailwind pre-line class automatically
interface NewlineTextProps {
  /** string containing any number of `\n` characters */
  children: string;
  className?: string;
}
export const NewlineText: React.FC<NewlineTextProps> = ({ children, className = "" }) => (
  <span className={`${className} whitespace-pre-line`}>{nl2br(children)}</span>
);
