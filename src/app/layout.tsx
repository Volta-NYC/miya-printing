import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Miya Graphics & Print | Sunnyside, Queens",
  description:
    "Miya Graphics & Print is a Sunnyside, Queens print shop for menus, flyers, cards, canvas prints, stickers, copies, and custom projects.",
  icons: {
    icon: "/favicon.svg",
  },
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
