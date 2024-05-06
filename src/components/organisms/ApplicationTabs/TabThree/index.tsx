import { TextRow } from "@/components/atoms";
import React from "react";

export const TabThree = ({ application }: any) => {
  return (
    <div className="w-full">
      <p className="text-sm text-textColor font-semibold mb-4">
        Address Details
      </p>
      <div className="flex gap-2 flex-col">
        <TextRow label="Address" value={application?.address ?? "-"} />
        <TextRow label="Country" value={application?.country_name ?? "-"} />
        <TextRow label="State" value={application?.state_name ?? "-"} />
        <TextRow label="City" value={application?.city_name ?? "-"} />
        <TextRow label="Postal Code" value={application?.postal_code ?? "-"} />
        <TextRow
          label="Refused Visa from USA, UK, NZ or Australia"
          value={application?.refused_doc ? "Yes" : "No"}
        />
      </div>
    </div>
  );
};
