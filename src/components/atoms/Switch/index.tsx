"use client";
import React from "react";

interface SwitchProps {
  isChecked: boolean;
  setIsChecked: (isChecked: boolean) => void;
}

export const Switch = ({ isChecked, setIsChecked }: SwitchProps) => {
  const handleSwitchChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className="relative inline-flex cursor-pointer items-center">
      <input
        id="switch"
        type="checkbox"
        className="peer sr-only"
        checked={isChecked}
        onChange={handleSwitchChange}
      />
      <label htmlFor="switch" className="flex items-center cursor-pointer" />
      <div
        className={`peer h-6 w-11 rounded-full border border-whiteSmoke bg-gray/10 ${isChecked ? "peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-grayMedium" : ""} after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-grayLight after:bg-white after:transition-all after:content-[''] peer-checked:bg-slate-800 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-primary/50`}
      ></div>
    </label>
  );
};
