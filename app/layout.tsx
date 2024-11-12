import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Sattar Portfolio",
  description: "Portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${montserrat.variable} antialiased`}>
        <Header />
        <div className="mt-16">{children}</div>
      </body>
    </html>
  );
}
