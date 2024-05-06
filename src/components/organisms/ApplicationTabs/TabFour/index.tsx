import { TextRow } from "@/components/atoms";
import { rootImagePath } from "@/utils/rootImagePath";
import React from "react";

export const TabFour = ({ application }: any) => {
  console.log("application", application);

  return (
    <div className="w-full">
      <p className="text-sm text-textColor font-semibold mb-4">
        {`Application Details - (${application.app_unique_id}) --[${application.status_name}]`}
      </p>
      <div className="flex gap-2 flex-col">
        <TextRow label="Course Name" value={application?.course_name ?? "-"} />
        <TextRow
          label="Applying Country"
          value={application?.country_name ?? "-"}
        />
        <TextRow
          label="Applying University"
          value={application?.university_name ?? "-"}
        />
        <TextRow
          label="Applying Intake"
          value={`${application?.intake_month_name} - ${application?.intake_year_name}`}
        />
        <TextRow
          label="Applying Course Level"
          value={application?.course_level_name ?? "-"}
        />
        <TextRow
          label="SOP Document"
          value={
            application?.sop_doc !== "" ? (
              <a
                href={rootImagePath(application?.sop_doc)}
                target="_blank"
                rel="noreferrer"
                className="text-primary text-sm font-semibold"
              >
                View Document
              </a>
            ) : (
              "No Document Uploaded"
            )
          }
        />
        <TextRow
          label="PaperBase Document"
          value={
            application?.paperbase_doc !== "" ? (
              <a
                href={rootImagePath(application?.paperbase_doc)}
                target="_blank"
                rel="noreferrer"
                className="text-primary text-sm font-semibold"
              >
                View Document
              </a>
            ) : (
              "No Document Uploaded"
            )
          }
        />
        <TextRow
          label="Assigned Employee"
          value={application?.assigned_name ?? "No Staff Assigned"}
        />
        <TextRow
          label="Application Status"
          value={application?.status_name ?? "-"}
        />
      </div>
    </div>
  );
};
