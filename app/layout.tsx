import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";

import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { site } from "@/lib/site";

import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "PathWeave",
    template: "%s · PathWeave",
  },
  description: site.description,
  icons: { icon: "/app_logo.png" },
  openGraph: {
    title: "PathWeave",
    description: site.description,
    url: site.url,
    siteName: "PathWeave",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${spaceGrotesk.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
