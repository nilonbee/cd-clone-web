import { TextRow } from "@/components/atoms";
import React from "react";

export const TabFive = ({ application }: any) => {
  return (
    <div className="w-full">
      <p className="text-sm text-textColor font-semibold mb-4">
        IELTS / PTE Details
      </p>
      <div className="flex gap-2 flex-col">
        <TextRow label="Type of Exam" value={application?.exam_type ?? "-"} />
        <TextRow label="Date Of Exam" value={application?.exam_date ?? "-"} />
        <TextRow
          label="Overall Score"
          value={application?.overall_score ?? "-"}
        />
        <TextRow
          label="Listening Score"
          value={application?.listening_score ?? "-"}
        />
        <TextRow
          label="Reading Score"
          value={application?.reading_score ?? "-"}
        />
        <TextRow
          label="Writing Score"
          value={application?.writing_score ?? "-"}
        />
        <TextRow
          label="Speaking Score"
          value={application?.speaking_score ?? "-"}
        />
      </div>
    </div>
  );
};
