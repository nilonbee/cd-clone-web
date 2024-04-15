import { Footer, Header } from "@/components/molecules";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <Header />
      {children}
      <Footer />
    </section>
  );
}
