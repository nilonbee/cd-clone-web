import Image from "next/image";
import Link from "next/link";
import React from "react";

import { SectionHeader } from "@/components/atoms";

type AuthHeaderProps = {
  title: string;
};
export const AuthHeader = ({ title }: AuthHeaderProps) => {
  return (
    <>
      <SectionHeader title={title} description="" />
      <Link href="/">
        <Image
          height={200}
          width={200}
          className="h-16 w-auto m-auto object-contain mt-2"
          src="/images/Logo-Clr.png"
          alt="Logo of Campus Direct"
        />
      </Link>
    </>
  );
};
