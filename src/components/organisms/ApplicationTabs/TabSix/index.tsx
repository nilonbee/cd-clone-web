import { TextRow } from "@/components/atoms";
import { rootImagePath } from "@/utils/rootImagePath";
import React from "react";

export const TabSix = ({ application, refused_doc }: any) => {
  return (
    <div className="w-full">
      <p className="text-sm text-textColor font-semibold mb-4">
        Enquiry Documents
      </p>
      <div className="flex gap-2 flex-col">
        {application?.map((enquiry: any, index: number) => (
          <TextRow
            key={index}
            label={enquiry?.name}
            value={
              enquiry?.doc_url ? (
                <a
                  href={rootImagePath(enquiry?.doc_url)}
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
        ))}
        <TextRow
          label={"Rejected Documents"}
          value={
            refused_doc ? (
              <a
                href={rootImagePath(refused_doc)}
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
      </div>
    </div>
  );
};
