import React from "react";

import { ContainerLayout, Hero, InnerContainer } from "@/components/atoms";
import { SettingsIcon } from "@/components/atoms/Icons";
import { ChangePasswordForm } from "@/components/organisms/ChangePasswordForm";

const SettingsPage = () => {
  return (
    <React.Fragment>
      <Hero />
      <div className="bg-whiteSmoke">
        <ContainerLayout>
          <InnerContainer>
            <div className="mb-8 fadeIn flex gap-2 items-center justify-between">
              <div className="flex gap-2 items-center mt-8">
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
            <ChangePasswordForm />
          </InnerContainer >
        </ContainerLayout >
      </div>
    </React.Fragment >
  );
};

export default SettingsPage;
