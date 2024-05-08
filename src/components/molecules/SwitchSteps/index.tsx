"use client";
import {
  StepFive,
  StepFour,
  StepOne,
  StepSix,
  StepThree,
  StepTwo,
} from "@/components/organisms";
import { useApplicationStore } from "@/store";
import { ICountry } from "@/types/countries";
import { ICourseLevel } from "@/types/courseLevels";
import { IIntake, IIntakeYears } from "@/types/intakes";
import { getEnquiriesById } from "@/utils/auth-api-requests";
import React, { useEffect } from "react";

interface SwitchStepsProps {
  countries: ICountry[];
  courseLevels: ICourseLevel[];
  intakes: IIntake[];
  intakeYears: IIntakeYears[];
  id: string;
}

export const SwitchSteps = ({
  countries,
  courseLevels,
  intakes,
  intakeYears,
  id,
}: SwitchStepsProps) => {
  const { currentStep, enquiryData, setEnquiryData, resetData } =
    useApplicationStore();

  useEffect(() => {
    const getApplicant = async () => {
      await getEnquiriesById(id).then((enquiryById) => {
        setEnquiryData({
          ...enquiryData,
          applications: enquiryById.applications,
          uploadDocuments: JSON.parse(enquiryById.enquiry.upload_docs_list),
          refusedDoc: enquiryById.enquiry.refused_doc,
          personalData: enquiryById.user,
          addressData: enquiryById.user,
          educationData: {
            detailsOne: JSON.parse(enquiryById.education.details_one),
            detailsTwo: JSON.parse(enquiryById.education.details_two),
            diplomaDetails: JSON.parse(enquiryById.education.diploma_details),
            graduateDetails: JSON.parse(enquiryById.education.graduate_details),
            postGraduateDetails: JSON.parse(
              enquiryById.education.post_graduate_details,
            ),
            phdDetails: JSON.parse(enquiryById.education.phd_details),
          },
          ieltsData: JSON.parse(enquiryById.enquiry.ielts_data),
        });
      });
    };
    getApplicant();
    return () => {
      resetData();
    };
    // eslint-disable-next-line
  }, [id]);

  return (
    <div className="w-full bg-white flex p-5 rounded-md shadow-md">
      {currentStep === 1 && (
        <StepOne
          countries={countries}
          courseLevels={courseLevels}
          intakes={intakes}
          intakeYears={intakeYears}
        />
      )}
      {currentStep === 2 && <StepTwo />}
      {currentStep === 3 && <StepThree />}
      {currentStep === 4 && <StepFour />}
      {currentStep === 5 && <StepFive />}
      {currentStep === 6 && <StepSix />}
    </div>
  );
};
