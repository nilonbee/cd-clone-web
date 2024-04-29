"use client";
import { ContainerLayout, Hero, InnerContainer } from "@/components/atoms";
import { ProfileIcon } from "@/components/atoms/Icons";
import React from "react";

const ProfilePage = () => {
  return (
    <React.Fragment>
      <Hero />
      <ContainerLayout>
        <InnerContainer>
          <div className="mt-8 mb-8 fadeIn flex gap-2 items-center justify-between">
            <div className="flex gap-2 items-center">
              <div className="w-12 h-12">
                <ProfileIcon />
              </div>
              <div>
                <p className="text-base text-textColor font-bold">My Profile</p>
                <p className="text-xs text-black/60">
                  Manage your profile here
                </p>
              </div>
            </div>
          </div>
          <div className="w-full mb-10 flex flex-col gap-4"></div>
        </InnerContainer>
      </ContainerLayout>
    </React.Fragment>
  );
};

export default ProfilePage;
