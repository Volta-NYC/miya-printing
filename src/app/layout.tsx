import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Miya Printing",
  description: "Miya Printing website scaffold",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
