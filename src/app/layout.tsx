import type { Metadata } from "next";
import {
  Inter,
  JetBrains_Mono,
  Manrope,
} from "next/font/google";

import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const jetBrainsMono =
  JetBrains_Mono({
    subsets: ["latin"],
    variable:
      "--font-jetbrains-mono",
    display: "swap",
  });

export const metadata: Metadata = {
  metadataBase: new URL("https://bborisov.dev"),

  title: {
    default: "Bozhidar Borisov — Senior Full Stack Developer",
    template: "%s | Bozhidar Borisov",
  },

  description:
    "Senior Full Stack Developer with 15+ years of experience, focused on React, Next.js, TypeScript and Node.js.",

  keywords: [
    "Bozhidar Borisov",
    "Senior React Developer",
    "Senior Full Stack Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "React Developer",
    "Node.js Developer",
  ],

  authors: [
    {
      name: "Bozhidar Borisov",
      url: "https://bborisov.dev",
    },
  ],

  creator: "Bozhidar Borisov",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bborisov.dev",
    siteName: "Bozhidar Borisov",
    title: "Bozhidar Borisov — Senior Full Stack Developer",
    description:
      "Senior Full Stack Developer focused on React, Next.js, TypeScript and Node.js.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={cn(
        inter.variable,
        manrope.variable,
        jetBrainsMono.variable,
      )}
    >
      <body>
        {children}
      </body>
    </html>
  );
}