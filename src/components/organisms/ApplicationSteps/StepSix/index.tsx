"use client";
import { MainButton } from "@/components/atoms";
import {
  InputDatePicker,
  InputField,
  InputSelectField,
} from "@/components/molecules";
import { useApplicationStore } from "@/store";
import { updateEnquiry } from "@/utils/auth-api-requests";
import moment from "moment";
import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";

type FormValues = {
  exam_type: string;
  listening_score: string;
  overall_score: string;
  reading_score: string;
  speaking_score: string;
  writing_score: string;
  examDate: string;
};

export const StepSix = ({ id }: { id: string }) => {
  const { control, handleSubmit, setValue } = useForm<FormValues>();

  const [examDate, onChange] = React.useState<string>("");
  const { setCurrentStep, enquiryData, setEnquiryData } = useApplicationStore();
  const [loading, setLoading] = React.useState<boolean>(false);

  useEffect(() => {
    setValue("exam_type", enquiryData.ieltsData.exam_type);
    setValue("overall_score", enquiryData.ieltsData.overall_score);
    setValue("reading_score", enquiryData.ieltsData.reading_score);
    setValue("speaking_score", enquiryData.ieltsData.speaking_score);
    setValue("listening_score", enquiryData.ieltsData.listening_score);
    setValue("writing_score", enquiryData.ieltsData.writing_score);
    setValue(
      "examDate",
      enquiryData?.ieltsData?.exam_date &&
        moment(enquiryData?.ieltsData?.exam_date).format("YYYY-MM-DD"),
    );
    onChange(enquiryData?.ieltsData?.exam_date);
    // eslint-disable-next-line
  }, []);

  const onSubmit = (data: FormValues) => {
    setLoading(true);
    const ieltsData = {
      exam_type: data.exam_type,
      overall_score: data.overall_score,
      reading_score: data.reading_score,
      speaking_score: data.speaking_score,
      listening_score: data.listening_score,
      writing_score: data.writing_score,
      exam_date: examDate,
    };

    setEnquiryData({
      ...enquiryData,
      ieltsData,
    });

    updateEnquiry({ ...enquiryData, ieltsData, id })
      .then((data) => {
        console.info(data);
        setLoading(false);
        toast.success("successfully");
      })
      .catch((error) => {
        setLoading(false);
        toast.error(`Failed: ${error}`);
      });
  };

  return (
    <div className="w-full">
      <p className="text-sm text-textColor font-semibold mb-5">
        IELTS / PTE Details
      </p>
      <form className="w-full mt-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-5">
          <div className="w-1/2">
            <Controller
              name="exam_type"
              defaultValue=""
              control={control}
              render={({ field }) => (
                <div>
                  <InputSelectField
                    label="Type of exam"
                    id="exam_type"
                    placeholder="Type of exam"
                    options={[
                      { value: "IELTS", label: "IELTS" },
                      { value: "PTE", label: "PTE" },
                    ]}
                    {...field}
                  />
                </div>
              )}
            />
            <Controller
              name="overall_score"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <div>
                  <InputField
                    label="Overall Score"
                    placeholder="Overall Score"
                    type="text"
                    id="overall_score"
                    {...field}
                  />
                </div>
              )}
            />
            <Controller
              name="reading_score"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <div>
                  <InputField
                    label="Reading Score"
                    placeholder="Reading Score"
                    type="text"
                    id="reading_score"
                    {...field}
                  />
                </div>
              )}
            />
            <Controller
              name="speaking_score"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <div>
                  <InputField
                    label="Speaking Score"
                    placeholder="Speaking Score"
                    type="text"
                    id="speaking_score"
                    {...field}
                  />
                </div>
              )}
            />
          </div>
          <div className="w-1/2">
            <InputDatePicker
              value={examDate}
              onChange={onChange}
              label="Date Of Exam"
            />
            <Controller
              name="listening_score"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <div>
                  <InputField
                    label="Listening Score"
                    placeholder="Listening Score"
                    type="text"
                    id="listening_score"
                    {...field}
                  />
                </div>
              )}
            />
            <Controller
              name="writing_score"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <div>
                  <InputField
                    label="Writing Score"
                    placeholder="Writing Score"
                    type="text"
                    id="writing_score"
                    {...field}
                  />
                </div>
              )}
            />
          </div>
        </div>
        <div className="flex justify-end mt-5 gap-2">
          <MainButton
            label="Back"
            btnSize="Medium"
            btnStyle="Secondary"
            onClick={() => setCurrentStep(5)}
          />
          <MainButton
            label="Next"
            btnSize="Medium"
            btnStyle="Primary"
            submit
            loading={loading}
            disabled={loading}
          />
        </div>
      </form>
    </div>
  );
};
