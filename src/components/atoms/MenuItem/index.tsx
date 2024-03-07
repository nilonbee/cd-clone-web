"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type MenuItemProps = {
  menuName: string;
  uri: string;
};

export const MenuItem = ({ menuName, uri }: MenuItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === uri;
  const activeClassName = isActive
    ? "text-primary font-semibold"
    : "text-textColor";
  return (
    <Link href={uri} className={`text-sm ${activeClassName} hover:text-primary`}>
      {menuName}
    </Link>
  );
};
