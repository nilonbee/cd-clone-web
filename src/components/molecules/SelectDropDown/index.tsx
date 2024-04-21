import React, { useState, useEffect, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

type SelectDropdownProps = {
    formFieldName: string;
    options: string[];
    onChange: (selectedOption: string) => void;
};

export const SelectDropdown = ({
    formFieldName,
    options,
    onChange,
}: SelectDropdownProps) => {
    const [selectedOption, setSelectedOption] = useState<string>("");
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

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        onChange(option);
        setIsOpen(false);
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                type="button"
                className="relative w-full py-2 pl-4 pr-20 text-left text-gray bg-white ring-1 ring-inset ring-border rounded-md focus:shadow-md focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer text-sm"
                onClick={toggleDropdown}
            >
                {selectedOption || formFieldName}
                {isOpen ? (
                    <IoIosArrowUp className="absolute top-1/2 right-3 transform -translate-y-1/2" />
                ) : (
                    <IoIosArrowDown className="absolute top-1/2 right-3 transform -translate-y-1/2" />
                )}
            </button>
            {isOpen && (
                <div className="absolute z-10 w-full mt-2 bg-white rounded-md shadow-lg max-h-60 overflow-y-auto">
                    <ul className="py-1">
                        {options.map((option) => (
                            <li
                                key={option}
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                onClick={() => handleOptionClick(option)}
                            >
                                <span className="text-gray text-sm">{option}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};
