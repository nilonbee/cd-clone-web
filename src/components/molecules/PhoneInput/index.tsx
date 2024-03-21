"use client";
import React from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import "./Phone.module.css";

type Props = {
  label?: string;
  placeholder: string;
  id: string;
  name: string;
  required?: boolean;
  noMargin?: boolean;
  customStyle?: string;
};

export const PhoneInputField = ({ noMargin, label, id, required }: Props) => {
  const [phone, setPhone] = React.useState("");

  return (
    <div className={`mb-${noMargin ? "0" : "4"}`}>
      {label && (
        <label
          className="block text-gray text-sm mb-2 font-medium"
          htmlFor={id}
        >
          {label} {required && <span className="text-red">*</span>}
        </label>
      )}
      <PhoneInput
        defaultCountry="lk"
        value={phone}
        inputStyle={{ height: "41px", border: "none" }}
        className="border border-border first-letter:rounded text-gray leading-tight focus:outline-none focus:shadow-outline rounded h-[46px] mt-2"
      />
    </div>
  );
};
