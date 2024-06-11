import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <Link
        href="/"
        className="absolute right-[48px] top-[48px] w-[24px] h-[24px]"
      >
        <AiOutlineClose className="text-xl font-semibold" />
      </Link>
      {children}
    </section>
  );
}
