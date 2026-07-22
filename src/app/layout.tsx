import type { Metadata } from "next";
import { Figtree, Inter } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-figtree",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter-var",
});

export const metadata: Metadata = {
  title: "Evernote Personal: Your second brain, without limits",
  description:
    "Unlock every device, offline access, AI-powered search, and 100 GB of monthly uploads with Evernote Personal for €7.99/month.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
