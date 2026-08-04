import type { Metadata } from "next";
import "./globals.css";

import {
  Inter,
  Playfair_Display,
  Caveat,
  Poppins,
  Dancing_Script,
} from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-handwriting",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
});

export const metadata: Metadata = {
  title: "Project Solace",
  description: "A little world built with code.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${inter.variable}
          ${playfair.variable}
          ${caveat.variable}
          ${poppins.variable}
          ${dancing.variable}
          antialiased
          bg-[#FDFBF8]
          text-[#4F3A2F]
        `}
      >
        {children}
      </body>
    </html>
  );
}