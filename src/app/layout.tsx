import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { workSans } from "./fonts";





export const metadata: Metadata = {
  title: "Ink Founders",
  description: "Ink Founders is an independent self-publishing platform dedicated to empowering authors with a full suite of digital services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${workSans.className}`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
