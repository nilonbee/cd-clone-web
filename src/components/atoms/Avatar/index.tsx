"use client";
import { useUserStore } from "@/store";
import React, { useMemo } from "react";
import { rootImagePath } from "@/utils/rootImagePath";
import Image from "next/image";

export const Avatar = () => {
  const { user } = useUserStore();

  const imgUrl = useMemo(() => user?.img_url, [user]);

  if (!imgUrl) {
    return (
      <Image
        className="h-9 w-9 rounded-full shadow-md object-cover"
        src="/images/avater.jpg"
        alt="Avatar"
        width={36}
        height={36}
      />
    );
  }

  return (
    <div>
      <Image
        className="h-9 w-9 rounded-full border-none outline-primary object-cover"
        src={rootImagePath(imgUrl)}
        alt="avatar"
        width={36}
        height={36}
      />
    </div>
  );
};
