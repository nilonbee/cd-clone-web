import React from "react";

interface MainButtonProps {
  label: string;
  btnStyle: "Primary" | "Secondary";
  btnSize: "Large" | "Small" | "Medium";
}

export const MainButton = ({ label, btnStyle, btnSize }: MainButtonProps) => {
  // Define primary and secondary styles
  const primaryStyles = "bg-primary text-white hover:bg-primaryDark";
  const secondaryStyles = "bg-white text-primary border border-primary hover:font-semibold";

  // Determine which styles to apply based on btnStyle prop
  const buttonStyles = btnStyle === "Primary" ? primaryStyles : secondaryStyles;

  // Define size classes based on btnSize prop
  let sizeClasses = "";
  if (btnSize === "Large") {
    sizeClasses = "h-12 px-6 text-lg";
  } else if (btnSize === "Medium") {
    sizeClasses = "h-10 px-4 text-base";
  } else {
    sizeClasses = "h-8 px-3 text-sm";
  }

  return (
    <div
      className={`flex justify-center items-center relative w-full text-center ${buttonStyles} ${sizeClasses} transition-all duration-300 ease-in-out`}
    >
      <p>{label}</p>
    </div>
  );
};
