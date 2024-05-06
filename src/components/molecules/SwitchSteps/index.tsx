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
import { IIntake } from "@/types/intakes";
import { getApplicantsById } from "@/utils/auth-api-requests";
// import { getApplicantsById } from "@/utils/auth-api-requests";
import React from "react";

interface SwitchStepsProps {
  countries: ICountry[];
  courseLevels: ICourseLevel[];
  intakes: IIntake[];
  id: string;
}

export const SwitchSteps = ({
  countries,
  courseLevels,
  intakes,
  id,
}: SwitchStepsProps) => {
  const { currentStep } = useApplicationStore();
  const [applicant, setApplicant] = React.useState<any>(null);

  React.useEffect(() => {
    const getApplicant = async () => {
      await getApplicantsById(id).then((res) => {
        console.log("res", res);
        setApplicant(res);
      });
    };
    getApplicant();
  }, [id]);

  return (
    <div className="w-full bg-white flex p-5 rounded-md shadow-md">
      {currentStep === 1 && (
        <StepOne
          countries={countries}
          courseLevels={courseLevels}
          intakes={intakes}
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
