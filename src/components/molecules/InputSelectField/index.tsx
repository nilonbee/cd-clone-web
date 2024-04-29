"use client";
import React, { useState } from "react";
import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { IoIosArrowDown } from "react-icons/io";
type Props = {
  label?: string;
  id: string;
  required?: boolean;
  noMargin?: boolean;
  customStyle?: string;
  error?: string | undefined; // Add error prop
  options: { value: string; label: string }[]; // Define options prop
};

export const InputSelectField = ({
  label,
  id,
  required,
  customStyle,
  error,
  options,
}: Props) => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <Listbox value={selected} onChange={setSelected}>
      {label && (
        <label
          className={`block text-sm mb-2 font-medium ${error ? "text-errorMsg" : "text-gray"}`}
          htmlFor={id}
        >
          {label} {required && <span className="text-errorMsg">*</span>}
        </label>
      )}
      <div className="relative mt-1">
        <Listbox.Button
          className={`relative w-full cursor-default rounded-md bg-white py-2 pl-4 text-gray text-left ring-1 ring-inset ring-border focus:ring-2 focus:ring-inset focus:ring-primary focus:outline-none text-sm leading-6 ${customStyle}`}
        >
          <span className="block truncate">{selected.label}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <IoIosArrowDown
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
            {options.map((item, index) => (
              <Listbox.Option
                key={index}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? "bg-grayLight text-gray" : "text-gray"
                  }`
                }
                value={item}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? "font-semibold" : "font-normal"
                      }`}
                    >
                      {item.label}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-primary">
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};
