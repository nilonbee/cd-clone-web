import React from "react";

type InputFieldProps = {
  label?: string;
  placeholder: string;
  type: string;
  id: string;
  required?: boolean;
  noMargin?: boolean;
  customStyle?: string;
  error?: string | undefined;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
};

export const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      placeholder,
      type,
      id,
      customStyle,
      noMargin,
      error,
      value,
      label,
      required,
      onChange,
      ...rest
    },
    ref,
  ) => {
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
          ref={ref}
          type={type}
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          className={`block w-full focus:shadow-md rounded-md py-2 pl-4 text-gray ring-1 ring-inset ring-border placeholder:text-grayMedium focus:ring-2 focus:ring-inset focus:ring-primary focus:outline-none text-sm leading-6 ${customStyle} ${errorCSS}`}
          {...rest}
        />
        {error && <span className="text-errorMsg text-xs">{error}</span>}
      </div>
    );
  },
);

InputField.displayName = "InputField";
