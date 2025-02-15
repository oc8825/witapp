import type { Metadata } from "next";
import { Open_Sans} from "next/font/google";

import "@/styles/globals.scss";
import "../styles/custom.scss";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "WIT Contests",
  description: "Landing Page for WIT voting contest.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={openSans.variable}>
      <body>{children}</body>
    </html>
  );
}
