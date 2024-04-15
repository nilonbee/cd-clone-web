import Image from "next/image";
import React from "react";

interface PurposeBox {
  title: string;
  description: string[];
  icon: React.ReactElement;
}

export const PurposeBox: React.FC<PurposeBox> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className="block p-4 rounded-md mb-12 bg-[#F8F8F8] bg-opacity-30 shadow">
      <div className="w-20 h-20">{icon}</div>
      <p className="font-semibold text-base my-3">{title}</p>
      <div>
        {description.map((section, index) => (
          <p
            className="text-sm leading-6 text-textColor mb-4 text-justify"
            key={index}
          >
            {section}
          </p>
        ))}
      </div>
    </div>
  );
};
