import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Footer from "../components/Footer";
import JsonLd from "../components/JsonLd";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.intacsolution.com"),
  title: {
    default: "Workforce & Device Operations Services | INTAC Solution",
    template: "%s | INTAC Solution",
  },
  description:
    "INTAC Solution runs device refurbishment, quality assurance, packaging and workforce operations at scale — 10M+ devices processed a year across five U.S. facilities.",
  openGraph: {
    type: "website",
    siteName: "INTAC Solution",
    locale: "en_US",
    url: "https://www.intacsolution.com",
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${inter.className} antialiased`}>
        <JsonLd />
        {children}
        <Footer />
      </body>
    </html>
  );
}