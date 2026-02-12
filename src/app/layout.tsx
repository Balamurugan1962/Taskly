import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "taskly — minimal todo",
  description:
    "A minimal, focused todo app. No accounts, no cloud — your tasks stay in your browser.",
  keywords: ["todo", "task manager", "minimal", "local storage"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistMono.variable} antialiased bg-void text-text`}
        style={{ fontFamily: "var(--font-geist), monospace" }}
      >
        {children}
      </body>
    </html>
  );
}
