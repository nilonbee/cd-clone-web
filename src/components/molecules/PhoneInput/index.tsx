"use client";
import React from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import "./Phone.module.css";

type Props = {
  label?: string;
  placeholder?: string;
  id: string;
  name: string;
  required?: boolean;
  noMargin?: boolean;
  customStyle?: string;
  onChange: (value: string) => void;
  error?: string | undefined;
  backgroundColor?: string;
};

export const PhoneInputField = ({
  noMargin,
  label,
  id,
  required,
  onChange,
  error,
  placeholder,
  backgroundColor,
}: Props) => {
  const errorCSS = error
    ? "ring-errorMsg text-errorMsg focus:ring-errorMsg"
    : "";

  return (
    <div className={`mb-${noMargin ? "0" : "4"}`}>
      {label && (
        <label
          className={`block text-sm mb-2 font-medium  ${error ? "text-errorMsg" : "text-gray"} `}
          htmlFor={id}
        >
          {label} {required && <span className="text-red">*</span>}
        </label>
      )}
      <PhoneInput
        placeholder={placeholder ? placeholder : ""}
        defaultCountry="lk"
        forceDialCode
        onChange={(value: string) => onChange(value)}
        style={
          {
            "--react-international-phone-background-color": backgroundColor,
          } as React.CSSProperties
        }
        inputStyle={{ height: "41px", border: "none", width: "100%" }}
        className={`block w-full focus:shadow-md py-1 pr-20  text-gray ring-1 ring-inset ring-border leading-tight focus:outline-none focus:shadow-outline rounded h-[46px] mt-2 ${errorCSS} bg-[${backgroundColor}]`}
      />

      {error && <span className="text-errorMsg text-xs">{error}</span>}
    </div>
  );
};
