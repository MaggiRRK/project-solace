import type { Metadata } from "next";
import "./globals.css";

import {
  Inter,
  Playfair_Display,
  Caveat,
  Poppins,
  Dancing_Script,
} from "next/font/google";

import { MusicProvider } from "@/components/music/MusicProvider";

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
  description: "A little room filled with memories, comfort and kindness.",

  manifest: "/manifest.webmanifest",

  themeColor: "#FFF9F4",

  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Project Solace",
  },

  icons: {
    icon: [
      {
        url: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: "/icons/icon-192.png",
  },
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
        <MusicProvider>
          {children}
        </MusicProvider>
      </body>
    </html>
  );
}