"use client";
import React, { useState } from "react";
import { MediaUpload } from "../MediaUpload";
import { useUserStore } from "@/store";

export const ProfileImage = () => {
  const { user, setUser } = useUserStore();
  const [profileImage, setProfileImage] = useState(user?.img_url || "");
  return (
    <div className="xs:w-full sm:w-full md:w-1/4 bg-white p-5 flex items-center justify-center rounded-md shadow-md">
      <div className="flex items-center justify-center flex-col gap-1">
        <MediaUpload
          title={""}
          upFile={profileImage}
          setUpFile={(file) => {
            setProfileImage(file);
            setUser({ ...user, img_url: file });
          }}
          accept="image/*"
          prefix={"profile_image"}
          type="image"
          titleHeight="h-8"
          location="profile"
        />
        <p className="text-md text-textColor font-semibold mt-5">
          {user?.full_name}
        </p>
        <span className="text-sm text-black/60 mb-2">{user?.email}</span>
        <div
          className={
            "bg-teal-500 text-white py-1 px-4 rounded-full text-xs shadow uppercase"
          }
        >
          {user?.status === 1 ? "Active" : "Inactive"}
        </div>
      </div>
    </div>
  );
};
