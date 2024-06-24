import React from "react";

interface Props {
  branch: string;
  address: string;
  phone: string;
  email: string;
}

export const AddressBox = ({ branch, address, phone, email }: Props) => {
  return (
    <div className="w-full">
      <p className="font-semibold text-wrap text-base text-textColor leading-6">
        {branch}
      </p>
      <p className="text-sm text-textColor text-wrap leading-6 mt-1">
        {address}
      </p>
      <a href={`tel:${phone}`}>
        <p className="text-sm text-textColor text-wrap leading-6 mt-2 hover:underline">
          {phone}
        </p>
      </a>
      <a href={`mailto:${email}`}>
        <p className="text-sm text-textColor text-wrap leading-6 mt-2 hover:underline">
          {email}
        </p>
      </a>
    </div>
  );
};
