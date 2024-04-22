"use client";
import React, { useState, useEffect, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

type MultiSelectDropdownProps = {
  formFieldName: string;
  options: string[];
  onChange: (selectedOptions: string[]) => void;
};

export const MultiSelectDropdown = ({
  formFieldName,
  options,
  onChange,
}: MultiSelectDropdownProps) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
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
      setSelectedOptions([...selectedOptions, option]);
    } else {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    }

    onChange(selectedOptions);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        className="relative w-full py-2 pl-4 pr-20 text-left text-gray bg-white ring-1 ring-inset ring-border rounded-md focus:shadow-md focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer text-sm"
        onClick={toggleDropdown}
      >
        {formFieldName}
        {isOpen ? (
          <IoIosArrowUp className="absolute top-1/2 right-3 transform -translate-y-1/2" />
        ) : (
          <IoIosArrowDown className="absolute top-1/2 right-3 transform -translate-y-1/2" />
        )}
      </button>
      {isOpen && (
        <div className="absolute z-10 w-[300px] mt-2 bg-white rounded-md shadow-lg max-h-[300px] overflow-y-auto">
          <ul className="py-1 ">
            {options.map((option) => (
              <li key={option} className="px-4 py-2 hover:bg-grayLight">
                <label className="flex items-center space-x-2 cursor-pointer ">
                  <div>
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-blue-500 rounded cursor-pointer transition duration-150 ease-in-out checked:bg-blue-600 checked:border-transparent"
                      value={option}
                      checked={selectedOptions.includes(option)}
                      onChange={handleChange}
                    />
                  </div>
                  <span className="text-gray text-sm">{option}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
