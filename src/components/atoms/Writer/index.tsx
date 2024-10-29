"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

export const Writer = ({ text }: { text: string }) => {
  return (
    <>
      <span className="text-4xl font-bold font-sans text-white">
        {/* Style will be inherited from the parent element */}
        <Typewriter
          words={[text]}
          loop={555555}
          cursor
          cursorStyle=""
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </span>
    </>
  );
};
