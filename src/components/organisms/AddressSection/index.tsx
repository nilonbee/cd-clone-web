import { LocationIcon } from "@/components/atoms/Icons";
import React from "react";
import { AddressBox, GridWrapper } from "../../molecules";

export const AddressSection = () => {
  const addressList = [
    {
      branch: "Kandy Branch - Sri Lanka",
      address: "749/B/1, William Gopallawa Mawatha Kandy",
      phone: "+94 77 234 0055",
      email: "info@cduk.lk",
    },
    {
      branch: "Dubai Branch – UAE",
      address:
        "Bur-Dubai, Business Tower - 1312 Victor Business Center BurJuman - Al Mankhool - Dubai - United Arab Emirates",
      phone: "+971 58 546 9555",
      email: "info@cduk.lk",
    },
    {
      branch: "London Branch – UK",
      address:
        "B71-75 Shelton Street Convent Garden London WC2H9JQ, United Kingdom",
      phone: "+971 58 546 9555",
      email: "london@cduk.lk",
    },
  ];
  return (
    <div className="w-full p-5 bg-[#eef7ff] rounded shadow border border-boxBorder">
      <div className="flex gap-3 text-center flex-row">
        <div className="w-10 h-10">
          <LocationIcon />
        </div>
        <p className="text-[20px] text-primary font-semibold leading-10">
          Visit Us
        </p>
      </div>
      <div className="mt-8">
        <div
          className={`grid gap-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 w-full`}
        >
          {addressList.map((item, index) => (
            <AddressBox
              key={index}
              address={item.address}
              branch={item.branch}
              phone={item.phone}
              email={item.email}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
