"use client";
import React, { useState } from "react";

export const TabsView = () => {
  const [openTab, setOpenTab] = useState(1);
  return (
    <div className="font-sans flex items-center justify-center">
      <div className="mx-auto">
        <div className="mb-4 flex space-x-1 p-2 bg-white rounded-full shadow-inner border border-boxBorder">
          <button
            onClick={() => setOpenTab(1)}
            className={`py-1 px-4 text-sm font-semibold rounded-full focus:outline-none focus:shadow-outline-blue focus:shadow-md transition-all duration-300 ${openTab === 1 ? "bg-primary text-white" : ""}`}
          >
            Personal Information
          </button>
          <button
            onClick={() => setOpenTab(2)}
            className={`py-1 px-4 text-sm font-semibold rounded-full focus:outline-none focus:shadow-outline-blue focus:shadow-md transition-all duration-300 ${openTab === 2 ? "bg-primary text-white" : ""}`}
          >
            Education Details
          </button>
          <button
            onClick={() => setOpenTab(3)}
            className={`py-1 px-4 text-sm font-semibold rounded-full focus:outline-none focus:shadow-outline-blue focus:shadow-md transition-all duration-300 ${openTab === 3 ? "bg-primary text-white" : ""}`}
          >
            Address Detail
          </button>
          <button
            onClick={() => setOpenTab(4)}
            className={`py-1 px-4 text-sm font-semibold rounded-full focus:outline-none focus:shadow-outline-blue focus:shadow-md transition-all duration-300 ${openTab === 4 ? "bg-primary text-white" : ""}`}
          >
            Application
          </button>
          <button
            onClick={() => setOpenTab(5)}
            className={`py-1 px-4 text-sm font-semibold rounded-full focus:outline-none focus:shadow-outline-blue focus:shadow-md transition-all duration-300 ${openTab === 5 ? "bg-primary text-white" : ""}`}
          >
            IELTS / PTE Details
          </button>
          <button
            onClick={() => setOpenTab(6)}
            className={`py-1 px-4 text-sm font-semibold rounded-full focus:outline-none focus:shadow-outline-blue focus:shadow-md transition-all duration-300 ${openTab === 6 ? "bg-primary text-white" : ""}`}
          >
            Enquiry Documents
          </button>
        </div>
      </div>
    </div>
  );
};
