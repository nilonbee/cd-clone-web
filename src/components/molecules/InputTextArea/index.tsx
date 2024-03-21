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
        {label} {required && (<span className="text-red">*</span>)}
      </label>
      <textarea
        className="appearance-none border border-border first-letter:rounded w-full py-3 px-3 text-gray leading-tight focus:outline-none focus:shadow-outline rounded"
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
