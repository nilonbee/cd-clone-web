"use client";
import React, { useState, useEffect, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

type Option = {
  value: number;
  label: string;
};

type MultiSelectDropdownProps = {
  formFieldName: string;
  options: Option[];
  selectedOptions: number[];
  setSelectedOptions: (selectedOptions: number[]) => void;
  isFullWidth?: boolean;
  isBordered?: boolean;
};

export const MultiSelectDropdown = ({
  formFieldName,
  options,
  selectedOptions,
  setSelectedOptions,
  isFullWidth = false,
  isBordered = true,
}: MultiSelectDropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    const option = e.target.value;

    if (isChecked) {
      setSelectedOptions([...selectedOptions, +option]);
    } else {
      setSelectedOptions(selectedOptions.filter((item) => item !== +option));
    }

    // onChange(selectedOptions);
  };

  let borderStyle =
    "ring-1 ring-inset ring-border focus:shadow-md focus:outline-none focus:ring-2 focus:ring-primary ";

  if (!isBordered) {
    borderStyle = "focus:outline-none";
  }

  return (
    <div className={`relative ${isFullWidth && "w-full"}`} ref={dropdownRef}>
      <button
        type="button"
        className={`relative w-full py-2 pl-4 pr-20 text-left text-gray bg-white rounded-md cursor-pointer text-sm ${borderStyle}`}
        onClick={toggleDropdown}
      >
        <p
          className={`${isBordered ? "" : "md:text-base sm:text-sm xs:text-sm  text-textColor/45"}`}
        >
          {" "}
          {formFieldName}
        </p>
        {isOpen ? (
          <IoIosArrowUp className="absolute top-1/2 right-3 transform -translate-y-1/2" />
        ) : (
          <IoIosArrowDown className="absolute top-1/2 right-3 transform -translate-y-1/2" />
        )}
      </button>
      {isOpen && (
        <div
          className={`absolute z-10 mt-2 bg-white rounded-md shadow-lg max-h-[300px] overflow-y-auto ${isFullWidth && "w-full"}`}
        >
          <ul className="py-1 ">
            {options.map((option) => (
              <li key={option.value} className="px-4 py-2 hover:bg-grayLight">
                <label className="flex items-center space-x-2 cursor-pointer ">
                  <div>
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-blue-500 rounded cursor-pointer transition duration-150 ease-in-out checked:bg-blue-600 checked:border-transparent"
                      value={option.value}
                      checked={selectedOptions.includes(option.value)}
                      onChange={handleChange}
                    />
                  </div>
                  <span className="text-gray text-sm text-nowrap">
                    {option.label}
                  </span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
