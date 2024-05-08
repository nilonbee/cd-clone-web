"use client";
import {
  ContainerLayout,
  DialogBoxContainer,
  Hero,
  InnerContainer,
  Loading,
} from "@/components/atoms";
import { HomeIcon } from "@/components/atoms/Icons";
import { ApplicationRow, HistoryTable } from "@/components/molecules";
import { IApplication } from "@/types/application";
import { getApplicants } from "@/utils/auth-api-requests";
import React, { useEffect, useState } from "react";

const ApplicationsPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [applicants, setApplicants] = useState([]);
  const [selectedId, setSelectedId] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    getApplicants().then((data) => {
      setIsLoading(false);
      setApplicants(data);
    });
  }, []);

  return (
    <React.Fragment>
      <Hero />
      <ContainerLayout>
        <InnerContainer>
          <div className="mt-8 mb-8 fadeIn flex gap-2 items-center justify-between">
            <div className="flex gap-2 items-center">
              <div className="w-12 h-12">
                <HomeIcon />
              </div>
              <div>
                <p className="text-base text-textColor font-bold">
                  My Applications
                </p>
                <p className="text-xs text-black/60">
                  Manage your applications here
                </p>
              </div>
            </div>
          </div>
          <div className="w-full mb-10 flex flex-col gap-4">
            {isLoading && <Loading />}
            {applicants.length === 0 && !isLoading && (
              <p className="text-center text-black/60">No applications found</p>
            )}
            {applicants.length > 0 && (
              <div className="flex flex-col gap-4">
                {applicants.map((applicant: IApplication) => (
                  <ApplicationRow
                    key={applicant.id}
                    country_name={applicant.country_name}
                    uni_name={applicant.uni_name}
                    uni_logo={applicant.uni_logo}
                    course_name={applicant.course_name}
                    created_at={applicant.created_at}
                    id={applicant.id}
                    status={applicant.status}
                    setSelectedId={setSelectedId}
                    setIsOpen={setIsOpen}
                    enquiry_id={applicant.enquiry_id}
                  />
                ))}
              </div>
            )}
          </div>
        </InnerContainer>
      </ContainerLayout>
      {isOpen && (
        <DialogBoxContainer
          isOpen={isOpen}
          closeModal={() => setIsOpen(false)}
          actionBtn={false}
          customStyle="w-[800px]"
          title="Application History"
        >
          <HistoryTable selectedId={selectedId} />
        </DialogBoxContainer>
      )}
    </React.Fragment>
  );
};

export default ApplicationsPage;
