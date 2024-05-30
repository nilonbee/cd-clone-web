"use client";
import { MainButton } from "@/components/atoms";
import { InputSelectField, MediaUpload } from "@/components/molecules";
import { useApplicationStore } from "@/store";
import { ICountry } from "@/types/countries";
import { ICourseLevel } from "@/types/courseLevels";
import { ICourse, ICourseRequest } from "@/types/courses";
import { IIntake, IIntakeYears } from "@/types/intakes";
import { IUniversity } from "@/types/university";
import {
  getCoursesAdmin,
  getUniversityById,
  universitiesByCountryId,
} from "@/utils/api-requests";
import { rootImagePath } from "@/utils/rootImagePath";
import React, { useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

type FormValues = {
  country_id: string;
  uni_id: string;
  intake_month: string;
  intake_year: string;
  course_level_id: string;
  course_id: string;
};

interface StepOneProps {
  countries: ICountry[];
  courseLevels: ICourseLevel[];
  intakes: IIntake[];
  setActiveTab: (index: number) => void;
  activeTab: number;
  index: number;
  application: any;
  intakeYears: IIntakeYears[];
}

const ApplicationList = ({
  countries,
  courseLevels,
  intakes,
  index,
  setActiveTab,
  activeTab,
  application,
  intakeYears,
}: StepOneProps) => {
  const [sop_doc, setSop_doc] = useState<string>("");
  const [paperbase_doc, setPaperbase_doc] = useState<string>("");
  const [universities, setUniversities] = useState<any[]>([]);
  const [uniData, setUniData] = useState<IUniversity>();
  const [courses, setCourses] = useState<ICourse[]>([]);
  const { setCurrentStep, enquiryData, setEnquiryData } = useApplicationStore();

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const currentApplication = enquiryData.applications.find(
      (app) => app.app_unique_id === application.app_unique_id,
    );
    currentApplication.country_id = data.country_id;
    currentApplication.uni_id = data.uni_id;
    currentApplication.intake_month = data.intake_month;
    currentApplication.intake_year = data.intake_year;
    currentApplication.course_level_id = data.course_level_id;
    currentApplication.course_id = data.course_id;
    currentApplication.sop_doc = sop_doc;
    currentApplication.paperbase_doc = paperbase_doc;

    setEnquiryData({
      ...enquiryData,
      applications: enquiryData.applications.map((app) =>
        app.app_unique_id === application.app_unique_id
          ? currentApplication
          : app,
      ),
    });
    console.log("step1-", enquiryData);
    setCurrentStep(2);
  };

  const [courseFilter, setCourseFilter] = useState<ICourseRequest>({
    page: 1,
    status: 1,
    country_id: 0,
    dataTable: false,
    name: "",
    uni_id: "",
    course_level_id: 0,
    intake_month_id: 0,
    intake_year_id: 0,
  });

  useEffect(() => {
    setValue("country_id", application?.country_id);
    universitiesByCountryId(application?.country_id).then((data) =>
      setUniversities(data),
    );
    setValue("uni_id", application?.uni_id);
    setValue("intake_month", application?.intake_month);
    setValue("intake_year", application?.intake_year);
    setValue("course_level_id", application?.course_level_id);
    getUniversityById(application?.uni_id).then((data) => setUniData(data));
    setSop_doc(application.sop_doc);
    setPaperbase_doc(application?.paperbase_doc);

    setCourseFilter({
      ...courseFilter,
      country_id: application?.country_id,
      uni_id: application?.uni_id,
      course_level_id: application?.course_level_id,
      intake_month_id: application?.intake_month,
      intake_year_id: application?.intake_year,
    });
    getCoursesAdmin(courseFilter).then((data: any) => setCourses(data));
    setValue("course_id", application?.course_id);

    // eslint-disable-next-line
  }, [application, setValue]);

  const UniversityDescription = () => {
    if (uniData) {
      return (
        <div className="mb-5">
          <p className="text-sm text-textColor font-semibold">
            University Description
          </p>
          <p className="text-sm text-textColor mt-2 mb-4">
            {uniData?.uni_desc}
          </p>
          {uniData?.paperbase_form === 1 && (
            <a
              href={rootImagePath(uniData?.paperbase_form_file || "")}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-primary font-bold"
            >
              Download Paperbase Form
            </a>
          )}
        </div>
      );
    }
  };

  return (
    <>
      <div
        key={index}
        onClick={() => setActiveTab(index)}
        className="rounded-[5px] p-[15px] self-stretch bg-white cursor-pointer border border-grayLight shadow"
      >
        <div className="flex justify-between items-center gap-2">
          <p className="font-semibold leading-[26px] text-base text-textColor">
            {"Application ID - " + application?.app_unique_id}
          </p>
          <div className="flex justify-center items-center">
            {activeTab === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
        </div>
        <p
          className="text-sm text-textColor pt-5"
          style={{ display: activeTab === index ? "block" : "none" }}
        >
          <form className="w-full mt-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex gap-5 xs:flex-col sm:flex-col md:flex-row">
              <div className="xs:w-full sm:w-full md:w-1/2">
                <Controller
                  name="country_id"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <div>
                      <InputSelectField
                        label="Country"
                        id="country_id"
                        placeholder="Select Country"
                        options={countries?.map((country) => ({
                          value: country.id,
                          label: country.name,
                        }))}
                        error={errors.country_id?.message}
                        {...field}
                      />
                    </div>
                  )}
                />
                <Controller
                  name="uni_id"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <div>
                      <InputSelectField
                        label="University"
                        id="selectOption"
                        placeholder="Select University"
                        options={universities?.map((uni) => ({
                          value: uni.id,
                          label: uni.name,
                        }))}
                        error={errors.uni_id?.message}
                        {...field}
                      />
                    </div>
                  )}
                />
                <Controller
                  name="intake_month"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <div>
                      <InputSelectField
                        label="Intake Month"
                        id="intake_month"
                        placeholder="Select Intake Month"
                        options={intakes?.map((intake) => ({
                          value: intake.id,
                          label: intake.months,
                        }))}
                        error={errors.intake_month?.message}
                        {...field}
                      />
                    </div>
                  )}
                />
                <Controller
                  name="intake_year"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <div>
                      <InputSelectField
                        label="Intake Year"
                        id="intake_year"
                        placeholder="Select Intake Year"
                        options={intakeYears?.map((intake) => ({
                          value: intake.id,
                          label: String(intake.year),
                        }))}
                        error={errors.intake_year?.message}
                        {...field}
                      />
                    </div>
                  )}
                />
                <Controller
                  name="course_level_id"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <div>
                      <InputSelectField
                        label="Course Level"
                        id="course_level_id"
                        placeholder="Select Course Level"
                        options={courseLevels?.map((courseLevel) => ({
                          value: courseLevel.id,
                          label: courseLevel.level,
                        }))}
                        error={errors.course_level_id?.message}
                        {...field}
                      />
                    </div>
                  )}
                />
                <Controller
                  name="course_id"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <div>
                      <InputSelectField
                        label="Applying Course Name"
                        id="course_id"
                        placeholder="Select Applying Course"
                        options={courses?.map((course) => ({
                          value: course.id,
                          label: course.course_name,
                        }))}
                        error={errors.course_id?.message}
                        {...field}
                      />
                    </div>
                  )}
                />
              </div>
              <div className="xs:w-full sm:w-full md:w-1/2">
                <UniversityDescription />
                <MediaUpload
                  type="file"
                  title="Upload SOP"
                  upFile={sop_doc}
                  setUpFile={setSop_doc}
                  accept="application/pdf"
                  prefix="sop"
                />
                {uniData?.paperbase_form === 1 && (
                  <div className="mt-5">
                    <MediaUpload
                      type="file"
                      title="Upload Paperbase Form"
                      upFile={paperbase_doc}
                      setUpFile={setPaperbase_doc}
                      accept="application/pdf"
                      prefix="paperbase"
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="flex justify-end mt-1 gap-2">
              <MainButton
                label="Next"
                btnSize="Medium"
                btnStyle="Primary"
                submit
              />
            </div>
          </form>
        </p>
      </div>
    </>
  );
};

export default ApplicationList;
