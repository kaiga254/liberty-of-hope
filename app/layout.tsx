import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Liberty of Hope — Restoring Dignity to Every Senior Life",
  description:
    "Liberty of Hope is a community-based organization in Thika, Kenya, dedicated to restoring dignity, health, and joy to senior citizens through healthcare, nutrition, and advocacy programs.",
  keywords: [
    "elderly care Kenya",
    "senior citizens",
    "Thika",
    "donate",
    "volunteer",
    "community organization",
    "Liberty of Hope",
  ],
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased font-sans flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className="grow pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
