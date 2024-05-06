import { TextRow } from "@/components/atoms";
import React from "react";

export const PHDDetails = ({ data }: any) => {
  return (
    <div>
      <p className="text-sm text-textColor font-semibold mb-4">
        PHD/Doctorate Details
      </p>
      <div className="flex gap-2 flex-col">
        <TextRow label="Course Name" value={data?.course_name ?? "-"} />
        <TextRow
          label="Country of Institution"
          value={data?.country_institution ?? "-"}
        />
        <TextRow
          label="Name Of Institute"
          value={data?.name_institute ?? "-"}
        />
        <TextRow
          label="Primary Level of Language"
          value={data?.primary_language ?? "-"}
        />
        <TextRow
          label="Attended Date"
          value={`${data?.attended_from ?? ""} - to - ${data?.attended_to ?? ""}`}
        />
        <TextRow
          label="Certificate Number"
          value={data?.certificate_number ?? "-"}
        />
        <TextRow
          label="Core Subject Marks"
          value={data?.subject_marks ?? "-"}
        />
        <TextRow label="Percentage" value={data?.percentage ?? "-"} />
        <TextRow
          label="Institute Address"
          value={data?.school_address ?? "-"}
        />
        <TextRow label="Institute State" value={data?.school_state ?? "-"} />
        <TextRow label="Institute City" value={data?.school_city ?? "-"} />
        <TextRow
          label="Institute Postal Code"
          value={data?.postal_code ?? "-"}
        />
      </div>
    </div>
  );
};
