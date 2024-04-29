import React from "react";

type IconButtonProps = {
  icon: React.ReactElement;
  onClickHandler?: () => void;
};
export const IconButton = ({ icon, onClickHandler }: IconButtonProps) => {
  return (
    <div
      className="bg-primary w-10 h-10 rounded-full flex justify-center items-center cursor-pointer text-white hover:bg-secondary hover:text-black transition-all duration-300 ease-in-out shadow "
      onClick={onClickHandler}
    >
      {icon}
    </div>
  );
};
