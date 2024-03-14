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
        className={`appearance-none border border-border first-letter:rounded w-full py-3 px-3 text-gray leading-tight focus:outline-none focus:shadow-outline rounded ${customStyle}`}
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
