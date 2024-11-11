import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

// components
import { ThemeProvider } from "@/components/theme-provider";
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
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <div className="mt-16">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
