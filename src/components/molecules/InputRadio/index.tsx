import React from "react";

type Props = {
  label?: string;
  name: string;
  value: string;
  id: string;
  noMargin?: boolean;
  error?: string | undefined; // Add error prop
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectedValue?: string;
};

export const InputRadio = ({
  label,
  name,
  value,
  id,
  noMargin,
  error,
  onChange,
  selectedValue,
}: Props) => {
  return (
    <div className={`mb-${noMargin ? "0" : "4"} flex items-center mb-4`}>
      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        className="h-4 w-4 border-gray/40 focus:ring-2 focus:ring-blue-300 "
        onChange={(e) => onChange && onChange(e)}
        checked={selectedValue === value}
      />
      <label
        htmlFor={id}
        className="text-sm text-gray ml-2 block cursor-pointer"
      >
        {label}
      </label>
      {error && <span className="text-errorMsg text-xs">{error}</span>}
    </div>
  );
};
