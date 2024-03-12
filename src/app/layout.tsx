import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/molecules";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Campus Direct",
  description: "Trusted Partner in Education",
  icons: {
    icon: "/images/fave.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
