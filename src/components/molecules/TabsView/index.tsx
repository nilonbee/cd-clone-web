"use client";
import {
  TabFive,
  TabFour,
  TabOne,
  TabSix,
  TabThree,
  TabTwo,
} from "@/components/organisms";
import { getApplicantsById } from "@/utils/auth-api-requests";
import React, { useState } from "react";

export const TabsView = ({ id }: { id: string }) => {
  const [openTab, setOpenTab] = useState(1);

  const [application, setApplication] = React.useState<any>(null);

  React.useEffect(() => {
    const getApplicant = async () => {
      await getApplicantsById(id).then((res) => {
        setApplication(res);
      });
    };
    getApplicant();
  }, [id]);

  const SwitchTabs = () => {
    switch (openTab) {
      case 1:
        return <TabOne application={application?.user} />;
      case 2:
        return <TabTwo application={application?.education} />;
      case 3:
        return <TabThree application={application?.user} />;
      case 4:
        return <TabFour application={application?.applications} />;
      case 5:
        return (
          <TabFive application={JSON.parse(application?.enquiry?.ielts_data)} />
        );
      case 6:
        return (
          <TabSix
            application={JSON.parse(application?.enquiry?.upload_docs_list)}
            refused_doc={application.enquiry.refused_doc}
          />
        );
      default:
        return <TabOne />;
    }
  };

  return (
    <React.Fragment>
      <div className="flex items-center">
        <div className="mb-4 flex space-x-1 p-2 bg-white rounded-full shadow-inner border border-boxBorder flex-wrap">
          <button
            onClick={() => setOpenTab(1)}
            className={`py-1 px-4 text-sm font-semibold rounded-full focus:outline-none focus:shadow-outline-blue focus:shadow-md transition-all duration-300 ${openTab === 1 ? "bg-primary text-white" : ""}`}
          >
            Personal Information
          </button>
          <button
            onClick={() => setOpenTab(2)}
            className={`py-1 px-4 text-sm font-semibold rounded-full focus:outline-none focus:shadow-outline-blue focus:shadow-md transition-all duration-300 ${openTab === 2 ? "bg-primary text-white" : ""}`}
          >
            Education Details
          </button>
          <button
            onClick={() => setOpenTab(3)}
            className={`py-1 px-4 text-sm font-semibold rounded-full focus:outline-none focus:shadow-outline-blue focus:shadow-md transition-all duration-300 ${openTab === 3 ? "bg-primary text-white" : ""}`}
          >
            Address Detail
          </button>
          <button
            onClick={() => setOpenTab(4)}
            className={`py-1 px-4 text-sm font-semibold rounded-full focus:outline-none focus:shadow-outline-blue focus:shadow-md transition-all duration-300 ${openTab === 4 ? "bg-primary text-white" : ""}`}
          >
            Application
          </button>
          <button
            onClick={() => setOpenTab(5)}
            className={`py-1 px-4 text-sm font-semibold rounded-full focus:outline-none focus:shadow-outline-blue focus:shadow-md transition-all duration-300 ${openTab === 5 ? "bg-primary text-white" : ""}`}
          >
            IELTS / PTE Details
          </button>
          <button
            onClick={() => setOpenTab(6)}
            className={`py-1 px-4 text-sm font-semibold rounded-full focus:outline-none focus:shadow-outline-blue focus:shadow-md transition-all duration-300 ${openTab === 6 ? "bg-primary text-white" : ""}`}
          >
            Enquiry Documents
          </button>
        </div>
      </div>
      <div className="w-full bg-white flex p-5 rounded-md shadow-md">
        <SwitchTabs />
      </div>
    </React.Fragment>
  );
};
