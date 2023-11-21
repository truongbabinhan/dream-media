import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dream Media",
  description: "DREAM MEDIA IS A FULL SERVICES PRODUCTION HOUSE",
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
