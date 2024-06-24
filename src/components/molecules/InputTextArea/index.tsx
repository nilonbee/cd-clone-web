import React from "react";

type Props = {
  label: string;
  placeholder: string;
  id: string;
  required?: boolean;
  error?: string | undefined;
};

export const InputTextArea = React.forwardRef<HTMLTextAreaElement, Props>(
  ({
    label,
    placeholder,
    id,
    required,
    error,
    ...rest
  }, ref) => {
    const errorCSS = error
      ? "ring-errorMsg text-errorMsg focus:ring-errorMsg"
      : "";
    return (
      <div className="mb-4">
        <label
          className={`block text-sm mb-2 font-medium ${error ? "text-errorMsg" : "text-gray"}`}
          htmlFor={id}
        >
          {label} {required && <span className="text-red">*</span>}
        </label>
        <textarea
          ref={ref}
          className={`block w-full focus:shadow-md rounded-md  py-2 pl-4 pr-2 ring-1 ring-inset ring-border placeholder:text-grayMedium focus:ring-2 focus:ring-inset focus:ring-primary focus:outline-none  text-sm leading-6 ${errorCSS}`}
          id={id}
          placeholder={placeholder}
          // required={required}
          rows={4}
          {...rest}
        />

        {/* Display error message when error is present */}
        {error && <span className="text-errorMsg text-xs">{error}</span>}
      </div>
    );
  });

InputTextArea.displayName = 'InputTextArea';
