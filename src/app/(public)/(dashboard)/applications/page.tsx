"use client";
import {
  ConfirmationDialog,
  ContainerLayout,
  DialogBoxContainer,
  Hero,
  InnerContainer,
  Loading,
} from "@/components/atoms";
import { HomeIcon } from "@/components/atoms/Icons";
import { ApplicationRow, HistoryTable } from "@/components/molecules";
import { IApplication } from "@/types/application";
import { deleteEnquiry, getApplicants } from "@/utils/auth-api-requests";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ApplicationsPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [applicants, setApplicants] = useState([]);
  const [selectedId, setSelectedId] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false);

  useEffect(() => {
    getApplicationsData();
  }, []);

  const getApplicationsData = () => {
    setIsLoading(true);
    getApplicants().then((data) => {
      setIsLoading(false);
      setApplicants(data);
    });
  };

  const deleteApplication = () => {
    deleteEnquiry(selectedId).then((data) => {
      console.log(data);
      toast.success("Application deleted successfully");
      setIsDeleteOpen(false);
      getApplicationsData();
    });
  };

  if (isLoading) {
    return (
      <div className="mt-20 mb-20">
        <Loading />
      </div>
    );
  }

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
                    setIsDeleteOpen={setIsDeleteOpen}
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
      {isDeleteOpen && (
        <ConfirmationDialog
          isOpen={isDeleteOpen}
          closeModal={() => setIsDeleteOpen(false)}
          onConfirm={deleteApplication}
          title="Are you sure?"
          description="Are you sure you want to delete this application?"
          submitText="Delete"
        />
      )}
    </React.Fragment>
  );
};

export default ApplicationsPage;
