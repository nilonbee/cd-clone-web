import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { GoogleAnalytics } from "@next/third-parties/google";
import { ChatWidgetComponent } from "@/components/atoms";
import Script from "next/script";

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
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#055da8" />
        <link rel="icon" href="/images/fave.png" />
        <title>Campus Direct | Your Trusted Partner in Education</title>
        <meta name="description" content="Trusted Partner in Education" />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics gaId="G-4S389LVL9G" />
        <ChatWidgetComponent />
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
        <Script src="https://www-cdn.icef.com/scripts/iasbadgeid.js" />
      </body>
    </html>
  );
}
