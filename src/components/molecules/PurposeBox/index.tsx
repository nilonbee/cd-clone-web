import Image from "next/image";
import React from "react";

interface PurposeBox {
  title: string;
  description: string;
  icon: React.ReactElement;
}

export const PurposeBox: React.FC<PurposeBox> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className="block p-4 rounded-md mb-12 bg-whiteGray bg-opacity-30">
      {icon}
      <p className="font-semibold text-lg my-3">{title}</p>
      <p>{description}</p>
    </div>
  );
};
