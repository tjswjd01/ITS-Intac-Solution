import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Footer from "../components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ITS Intac Solution",
  description: "Operational workforce solutions built to scale.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${inter.className} antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}