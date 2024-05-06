import React from "react";

interface MainButtonProps {
  id?: string;
  label: string;
  btnStyle?: "Primary" | "Secondary";
  btnSize: "Large" | "Small" | "Medium";
  fullWith?: boolean;
  icon?: React.ReactNode;
  customStyle?: string;
  iconPosition?: "Left" | "Right";
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
  submit?: boolean; // Make sure weather this is a button or submit type otherwise all the buttons in the form works as submit type and do the rest
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
  loading,
  disabled,
}: MainButtonProps) => {
  // Define primary and secondary styles
  const primaryStyles = "bg-primary text-white hover:bg-primaryDark";
  const secondaryStyles =
    "bg-transparent text-primary border border-primary hover:bg-primary hover:text-white";

  // Determine which styles to apply based on btnStyle prop
  const disabledStyles =
    "bg-grayLight text-primary border border-primary cursor-not-allowed";

  const buttonStyles =
    btnStyle === "Primary"
      ? disabled
        ? disabledStyles
        : primaryStyles
      : disabled
        ? disabledStyles
        : secondaryStyles;

  // Define size classes based on btnSize prop
  let sizeClasses = "";
  if (btnSize === "Large") {
    sizeClasses = "h-12 px-8 text-base";
  } else if (btnSize === "Medium") {
    sizeClasses = "h-10 px-7 text-sm";
  } else {
    sizeClasses = "h-8 px-5 text-xs";
  }

  // If fullWith prop is true, add full width class
  if (fullWith) {
    sizeClasses += " w-full";
  }

  return (
    <button
      className={`font-semibold flex justify-center items-center relative  text-center ${buttonStyles} ${sizeClasses} transition-all duration-300 ease-in-out cursor-pointer ${customStyle} leading-5 rounded-md hover:shadow-md`}
      onClick={onClick}
      type={submit ? "submit" : "button"}
    >
      {loading && (
        <div className="mr-2">
          <div className="w-6 h-6 border-t-2 border-b-2 border-primary rounded-full animate-spin"></div>
        </div>
      )}
      {icon && iconPosition === "Left" && <div className="mr-2">{icon}</div>}
      <p>{label}</p>
      {icon && iconPosition === "Right" && <div className="ml-2">{icon}</div>}
    </button>
  );
};
