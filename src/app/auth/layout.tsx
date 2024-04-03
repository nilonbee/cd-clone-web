import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Campus Direct",
    description: "Trusted Partner in Education",
    icons: {
        icon: "/images/fave.png",
    },
};

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {/* Any additional layout elements can go here */}
            {children}
        </>
    );
}