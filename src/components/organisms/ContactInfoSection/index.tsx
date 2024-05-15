"use client";
import { useIpStore } from "@/store/useIpStore";
import { ContactBox } from "@/components/molecules";
import {
  CarbonLocationIcon,
  CarbonEmailIcon,
  CarbonPhoneIcon,
} from "@/components/atoms/Icons";

export const ContactInfoSection = () => {
  const { countryData } = useIpStore();

  return (
    <div className="w-full mt-10 lg:px-20 md:px-0">
      <div className="grid grid-cols-3 gap-4">
        <ContactBox
          label={"Location"}
          value={countryData?.address || ""}
          icon={<CarbonLocationIcon />}
        />
        <ContactBox
          label={"Email Address"}
          value={countryData?.email || ""}
          icon={<CarbonEmailIcon />}
        />
        <ContactBox
          label={"Phone Number"}
          value={countryData?.phoneNumber || ""}
          icon={<CarbonPhoneIcon />}
        />
      </div>
    </div>
  );
};
