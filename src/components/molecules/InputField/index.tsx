import React from "react";

type Props = {
  label?: string;
  placeholder: string;
  type: string;
  id: string;
  name: string;
  required?: boolean;
  noMargin?: boolean;
  customStyle?: string;
};

export const InputField = ({
  label,
  placeholder,
  type,
  id,
  name,
  required,
  noMargin,
  customStyle,
  ...rest
}: Props) => {
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
      <input
        className={`block w-full focus:shadow-md rounded  py-2 pl-4 pr-20 text-gray ring-1 ring-inset ring-border placeholder:text-grayMedium focus:ring-2 focus:ring-inset focus:ring-primary focus:outline-none  text-sm leading-6 ${customStyle}`}
        id={id}
        type={type}
        placeholder={placeholder}
        name={name}
        required={required}
        {...rest}
      />
    </div>
  );
};
