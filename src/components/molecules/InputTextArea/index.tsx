import React from "react";

type Props = {
  label: string;
  placeholder: string;
  id: string;
  name: string;
  required?: boolean;
};

export const InputTextArea = ({
  label,
  placeholder,
  id,
  name,
  required,
  ...rest
}: Props) => {
  return (
    <div className="mb-4">
      <label className="block text-gray text-sm mb-2 font-medium" htmlFor={id}>
        {label} {required && <span className="text-red">*</span>}
      </label>
      <textarea
        className="block w-full focus:shadow-md rounded  py-2 pl-4 pr-20 text-gray ring-1 ring-inset ring-border placeholder:text-grayMedium focus:ring-2 focus:ring-inset focus:ring-primary focus:outline-none  text-sm leading-6"
        id={id}
        placeholder={placeholder}
        name={name}
        required={required}
        rows={4}
        {...rest}
      />
    </div>
  );
};
