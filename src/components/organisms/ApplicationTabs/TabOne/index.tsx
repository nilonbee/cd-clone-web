import { TextRow } from "@/components/atoms";
import React from "react";

export const TabOne = ({ application }: any) => {
  return (
    <div className="w-full">
      <p className="text-sm text-textColor font-semibold mb-4">
        Personal Details
      </p>
      <div className="flex gap-2 flex-col">
        <TextRow
          label="Name"
          value={
            application?.first_name +
            " " +
            (application?.middle_name ? application.middle_name : "") +
            " " +
            (application?.last_name ? application.last_name : "")
          }
        />
        <TextRow label="Email" value={application?.email} />
        <TextRow label="Phone" value={application?.phone ?? "-"} />
        <TextRow
          label="First Language"
          value={application?.first_language ?? "-"}
        />
        <TextRow label="Date Of Birth" value={application?.dob ?? "-"} />
        <TextRow
          label="Country Citizenship"
          value={application?.country_citizen ?? "-"}
        />
        <TextRow
          label="Passport Number"
          value={application?.passport_number ?? "-"}
        />
        <TextRow label="Gender" value={application?.gender ?? "-"} />
        <TextRow
          label="Marital Status"
          value={application?.marital_status ?? "-"}
        />
      </div>
    </div>
  );
};
