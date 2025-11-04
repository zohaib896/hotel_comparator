import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Thailand Hotel Comparator",
  description: "Compare hotel prices across affiliate partners for Bangkok and beyond."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-slate-100 text-slate-900">
        {children}
      </body>
    </html>
  );
}
