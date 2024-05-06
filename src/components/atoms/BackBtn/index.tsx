"use client";
import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { useRouter } from "next/navigation";

interface BackBtnProps {
  backUrl: string;
  backText: string;
}

export const BackBtn = ({ backUrl, backText }: BackBtnProps) => {
  const router = useRouter();

  return (
    <div
      className="flex gap-2 items-center text-black/60 cursor-pointer hover:text-primary"
      onClick={() => router.push(backUrl)}
    >
      <IoMdArrowBack />
      <p className="text-xs ">{backText}</p>
    </div>
  );
};
