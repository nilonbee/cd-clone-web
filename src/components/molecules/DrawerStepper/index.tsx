"use client";
import React from "react";
import { Stepper } from "../Stepper";
import { IoMdClose } from "react-icons/io";
import { BsFilterSquare } from "react-icons/bs";

export const DrawerStepper = () => {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  return (
    <div className="flex">
      <div className="flex items-center gap-2">
        <button
          onClick={() => setOpenDrawer(true)}
          className="bg-primary text-white p-2 rounded-md"
        >
          <BsFilterSquare size={25} />
        </button>
        <div>
          <p className="text-base text-textColor">Application Steps</p>
          <p className="text-xs text-black/40">Click to view steps</p>
        </div>
      </div>
      <div
        className={`${
          openDrawer ? "block" : "hidden"
        } absolute top-0 left-0 w-[300px] h-screen bg-white shadow-lg z-10 p-5 mt-[80px]`}
      >
        <div className="mb-10">
          <div className="flex justify-between items-center">
            <h4 className="text-base font-semibold text-textColor">
              Application Steps
            </h4>
            <button onClick={() => setOpenDrawer(false)}>
              <IoMdClose size={20} />
            </button>
          </div>
        </div>
        <Stepper />
      </div>
    </div>
  );
};
