import React from "react";

type Props = {
  label?: string;
  placeholder: string;
  type: string;
  id: string;
  name: string;
  required?: boolean;
  noMargin?: boolean;
  aligned?: boolean;
  customStyle?: string;
  error?: string | undefined; // Add error prop
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
  error,
  aligned,
  ...rest
}: Props) => {
  const errorCSS = error
    ? "ring-errorMsg text-errorMsg focus:ring-errorMsg"
    : "";
  return (
    <div className={`mb-${noMargin ? "0" : "4"}`}>
      {label && (
        <label
          className={`block text-sm mb-2 font-medium ${error ? "text-errorMsg" : "text-gray"}`}
          htmlFor={id}
        >
          {label} {required && <span className="text-errorMsg">*</span>}
        </label>
      )}

      <input
        className={`block w-full focus:shadow-md rounded-md py-2 pl-4 text-gray ring-1 ring-inset ring-border placeholder:text-grayMedium focus:ring-2 focus:ring-inset focus:ring-primary focus:outline-none text-sm leading-6 ${customStyle} ${errorCSS}`}
        id={id}
        type={type}
        placeholder={placeholder}
        required={required}
        {...rest}
      />

      {/* Display error message when error is present */}
      {aligned && <div className={`h-5 ${error ? 'hidden' : 'block'}`} />}
      {error && <span className="text-errorMsg text-xs">{error}</span>}
    </div>
  );
};
