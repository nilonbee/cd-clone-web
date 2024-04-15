import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

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
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            style: {
              fontSize: "14px",
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          }}
        />
        {children}
      </body>
    </html>
  );
}
