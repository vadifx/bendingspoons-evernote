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
  title: "La migliore app per prendere appunti - Organizza le tue note con Evernote",
  description:
    "Ricorda tutto e affronta qualsiasi progetto con appunti, attività e calendario, tutto in un unico posto.",
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
