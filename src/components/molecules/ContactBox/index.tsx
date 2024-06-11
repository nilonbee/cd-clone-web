import React from "react";

interface IListItemProps {
  label: string;
  value: string;
  isEmail?: boolean;
  icon: JSX.Element;
}
export const ContactBox = ({ label, value, icon, isEmail }: IListItemProps) => {
  return (
    <div className="bg-lightBlue bg-opacity-40  p-6 rounded shadow border border-boxBorder">
      <div className="flex mb-3 gap-2 text-center">
        {icon}
        <p className="text-sm">{label}</p>
      </div>
      {
        isEmail ? (
          <a href={`mailto:${value}`}>
            <p className="font-semibold text-sm cursor-pointer">{value}</p>
          </a>
        ) : <p className="font-semibold text-sm">{value}</p>
      }
    </div>
  );
};
