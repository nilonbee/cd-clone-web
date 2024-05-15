import {
  BackBtn,
  ContainerLayout,
  Hero,
  InnerContainer,
} from "@/components/atoms";
import { BriefcaseIcon } from "@/components/atoms/Icons";
import { Stepper, SwitchSteps } from "@/components/molecules";
import { ICountry } from "@/types/countries";
import { ICourseLevel } from "@/types/courseLevels";
import { IIntake, IIntakeYears } from "@/types/intakes";
import {
  getCountries,
  getCourseLevels,
  getIntakeYears,
  getIntakes,
} from "@/utils/api-requests";
import React from "react";

const ApplicationEditPage = async ({ params }: any) => {
  const countries = (await getCountries({ status: 1 })) as ICountry[];
  const courseLevels = (await getCourseLevels({ status: 1 })) as ICourseLevel[];
  const intakes = (await getIntakes({ status: 1 })) as IIntake[];
  const intakeYears = (await getIntakeYears({ status: 1 })) as IIntakeYears[];
  const allCountries = (await getCountries({ status: "all" })) as ICountry[];

  return (
    <React.Fragment>
      <Hero />
      <div className="bg-whiteSmoke">
        <ContainerLayout>
          <InnerContainer>
            <div className="py-10">
              <div className="fadeIn flex gap-2 items-center justify-between">
                <div className="flex gap-2 items-center">
                  <div className="w-12 h-12">
                    <BriefcaseIcon />
                  </div>
                  <div>
                    <p className="text-base text-textColor font-bold">
                      Edit Application
                    </p>
                    <p className="text-xs text-black/60">
                      Edit your application here
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <BackBtn
                    backUrl="/applications"
                    backText="Back to Applications"
                  />
                </div>
              </div>
              <div className="w-full flex gap-4 mt-5">
                <div className="py-4 rounded-md w-1/5">
                  <Stepper />
                </div>
                <div className="w-4/5">
                  <SwitchSteps
                    countries={countries}
                    courseLevels={courseLevels}
                    intakes={intakes}
                    intakeYears={intakeYears}
                    id={params.id}
                    allCountries={allCountries}
                  />
                </div>
              </div>
            </div>
          </InnerContainer>
        </ContainerLayout>
      </div>
    </React.Fragment>
  );
};

export default ApplicationEditPage;
