import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "miniature",
  description: "The choice to feel the drive",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
