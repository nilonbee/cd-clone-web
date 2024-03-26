import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/molecules";
import { IconButton } from "@/components/atoms";
import { ScrollUpIcon, WhatsappIcon } from "@/components/atoms/Icons";

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
        <IconButton
          icon={<ScrollUpIcon />}
          customStyle="fixed bottom-20 end-5 z-1000"
        />
        <IconButton
          icon={<WhatsappIcon />}
          customStyle="fixed bottom-5 end-5 z-1000"
        />
      </body>
    </html>
  );
}
