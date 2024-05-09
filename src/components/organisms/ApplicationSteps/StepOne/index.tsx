"use client";
import { useApplicationStore } from "@/store";
import { ICountry } from "@/types/countries";
import { ICourseLevel } from "@/types/courseLevels";
import { IIntake, IIntakeYears } from "@/types/intakes";
import { useState } from "react";
import ApplicationList from "./ApplicationList";

interface StepOneProps {
  countries: ICountry[];
  courseLevels: ICourseLevel[];
  intakes: IIntake[];
  intakeYears: IIntakeYears[];
}

export const StepOne = ({
  countries,
  courseLevels,
  intakes,
  intakeYears,
}: StepOneProps) => {
  const { enquiryData } = useApplicationStore();
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full">
      <p className="text-sm text-textColor font-semibold">Apply For Course</p>
      <div className="mt-5">
        {enquiryData.applications.map((application, index) => (
          <ApplicationList
            key={index}
            countries={countries}
            courseLevels={courseLevels}
            intakes={intakes}
            setActiveTab={setActiveTab}
            activeTab={activeTab}
            index={0}
            application={application}
            intakeYears={intakeYears}
          />
        ))}
      </div>
    </div>
  );
};
