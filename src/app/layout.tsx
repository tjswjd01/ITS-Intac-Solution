import type { Metadata } from "next";
import localFont from "next/font/local";

import Footer from "../components/Footer";
import JsonLd from "../components/JsonLd";
import "./globals.css";

// Pretendard (SIL Open Font License). The Latin subset is preloaded for the
// English site; the full file carries Korean glyphs and is only downloaded
// when a page actually contains Korean text.
const pretendard = localFont({
  src: "./fonts/PretendardVariable-Latin.woff2",
  weight: "45 920",
  style: "normal",
  display: "swap",
  variable: "--font-pretendard",
});

const pretendardKr = localFont({
  src: "./fonts/PretendardVariable.woff2",
  weight: "45 920",
  style: "normal",
  display: "swap",
  preload: false,
  variable: "--font-pretendard-kr",
  declarations: [
    {
      prop: "unicode-range",
      value:
        "U+1100-11FF, U+3000-303F, U+3130-318F, U+A960-A97F, U+AC00-D7FF, U+FF00-FFEF",
    },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.intacsolution.com"),
  title: {
    default: "Workforce, Operations & Automation Solutions | INTAC Solution",
    template: "%s | INTAC Solution",
  },
  description:
    "ITS provides direct hire, staffing and workforce management, engineering-led managed operations, refurbishment-process automation and U.S. market entry support in the United States.",
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
      <body className={`${pretendard.variable} ${pretendardKr.variable} antialiased`}>
        <JsonLd />
        {children}
        <Footer />
      </body>
    </html>
  );
}