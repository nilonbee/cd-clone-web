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
        className="absolute top-5 right-5 text-2xl cursor-pointer w-[24px] h-[24px]"
      >
        <AiOutlineClose className="font-semibold" />
      </Link>
      {children}
    </section>
  );
}
