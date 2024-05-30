import { ContainerLayout, Hero, InnerContainer } from "@/components/atoms";
import { ProfileIcon } from "@/components/atoms/Icons";
import { ProfileDetails, ProfileImage } from "@/components/molecules";
import { ICountry } from "@/types/countries";
import { getCountries } from "@/utils/api-requests";
import React from "react";

const ProfilePage = async () => {
  const allCountries = (await getCountries({ status: "all" })) as ICountry[];

  return (
    <React.Fragment>
      <Hero />
      <div className="bg-whiteSmoke pb-8">
        <ContainerLayout>
          <InnerContainer>
            <div className="mb-8 fadeIn flex gap-2 items-center justify-between">
              <div className="flex gap-2 items-center mt-8">
                <div className="w-12 h-12">
                  <ProfileIcon />
                </div>
                <div>
                  <p className="text-base text-textColor font-bold">
                    My Profile
                  </p>
                  <p className="text-xs text-black/60">
                    Manage your profile here
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-4 w-full  xs:flex-col sm:flex-col md:flex-row">
              <ProfileImage />
              <ProfileDetails allCountries={allCountries} />
            </div>
          </InnerContainer>
        </ContainerLayout>
      </div>
    </React.Fragment>
  );
};

export default ProfilePage;
