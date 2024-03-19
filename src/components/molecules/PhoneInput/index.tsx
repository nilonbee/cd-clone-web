"use client";
import React from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

export const PhoneInputField: React.FC = () => {
  const [phone, setPhone] = React.useState("");

  return (
    <div>
      <label className="block text-gray text-sm font-medium -mt-2">
        Phone Number<span className="text-red">*</span>
      </label>
      <PhoneInput
        defaultCountry="lk"
        value={phone}
        inputStyle={{ height: "41px", border: "none", minWidth: "25px" }}
        countrySelectorStyleProps={{
          style: {
            boxShadow: "none",
            border: "none",
          },
        }}
        className="border border-border first-letter:rounded text-gray leading-tight focus:outline-none focus:shadow-outline rounded h-[46px]"
      />
      <style>
        {`
          .react-international-phone-country-selector-button {
            border: none;
            height: 41px;
            margin-top: 2px;
          }
        `}
      </style>
    </div>
  );
};
