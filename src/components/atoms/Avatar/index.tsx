/* eslint-disable @next/next/no-img-element */
"use client";
import { useUserStore } from "@/store";
import React, { useMemo } from "react";
import { ProfileIcon } from "../Icons";
import { rootImagePath } from "@/utils/rootImagePath";

export const Avatar = () => {
  const { user } = useUserStore();

  const imgUrl = useMemo(() => user?.img_url, [user]);

  if (!imgUrl) {
    console.log(imgUrl, "user");

    return <ProfileIcon />;
  }

  return (
    <div>
      <img
        className="w-12 h-12 rounded-full border-none outline-primary object-contain"
        src={rootImagePath(imgUrl)}
        alt="avatar"
      />
    </div>
  );
};
