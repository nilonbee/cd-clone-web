import React from "react";

interface MainButtonProps {
  id?: string;
  label: string;
  btnStyle?: "Primary" | "Secondary";
  btnSize: "Large" | "Small" | "Medium" | "Block";
  fullWith?: boolean;
  icon?: React.ReactNode;
  customStyle?: string;
  iconPosition?: "Left" | "Right";
  onClick?: () => void;
  // we have to make sure weather this is a button or submit type otherwise all the buttons in the form works as submit type and do the rest
  submit?: boolean;
}

export const MainButton = ({
  label,
  btnStyle,
  btnSize,
  fullWith,
  icon,
  customStyle,
  iconPosition = "Right",
  onClick,
  submit,
}: MainButtonProps) => {
  // Define primary and secondary styles
  const primaryStyles = "bg-primary text-white hover:bg-primaryDark";
  const secondaryStyles =
    "bg-transparent text-primary border border-primary hover:bg-primary hover:text-white";

  // Determine which styles to apply based on btnStyle prop
  const buttonStyles = btnStyle === "Primary" ? primaryStyles : secondaryStyles;

  // Define size classes based on btnSize prop
  let sizeClasses = "";
  if (btnSize === "Large") {
    sizeClasses = "h-12 px-6 text-lg";
  } else if (btnSize === "Medium") {
    sizeClasses = "h-10 px-4 text-base";
  } else if (btnSize === "Block") {
    sizeClasses = "h-10 block w-full";
  } else {
    sizeClasses = "h-8 px-3 text-sm";
  }

  // If fullWith prop is true, add full width class
  if (fullWith) {
    sizeClasses += " w-full";
  }

  return (
    <button
      className={`flex justify-center items-center relative  text-center ${buttonStyles} ${sizeClasses} transition-all duration-300 ease-in-out rounded-sm cursor-pointer ${customStyle}`}
      onClick={onClick}
      type={submit ? "submit" : "button"}
    >
      {icon && iconPosition === "Left" && <div className="mr-2">{icon}</div>}
      <p>{label}</p>
      {icon && iconPosition === "Right" && <div className="ml-2">{icon}</div>}
    </button>
  );
};
