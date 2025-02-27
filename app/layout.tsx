/* layout.tsx
   Defines features for the entire application, including font, the page
   name, fluid container for managing features.
*/

import type { Metadata } from "next";
import { Open_Sans} from "next/font/google";
import "@/styles/globals.scss";

// Use Open Sans as substitute to the styling guide's Proxima Nova 
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

// Title for the tab
export const metadata: Metadata = {
  title: "WIT Contests",
  description: "Landing Page for WIT voting contest.",
};

// Wrap children in fluid container
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={openSans.variable}>
      <body>
        <div className="container-fluid">{children}</div> 
      </body>
    </html>
  );
}
