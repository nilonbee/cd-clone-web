import { Hero } from "@/components/atoms";
import { Header } from "@/components/molecules";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Hero />
      {children}
    </>
  );
}
