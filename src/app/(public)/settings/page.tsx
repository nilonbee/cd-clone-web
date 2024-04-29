"use client";
import { ContainerLayout, Hero, InnerContainer } from "@/components/atoms";
import { SettingsIcon } from "@/components/atoms/Icons";
import React from "react";

const SettingsPage = () => {
  return (
    <React.Fragment>
      <Hero />
      <ContainerLayout>
        <InnerContainer>
          <div className="mt-8 mb-8 fadeIn flex gap-2 items-center justify-between">
            <div className="flex gap-2 items-center">
              <div className="w-12 h-12">
                <SettingsIcon />
              </div>
              <div>
                <p className="text-base text-textColor font-bold">Settings</p>
                <p className="text-xs text-black/60">
                  Manage your account settings
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

export default SettingsPage;
