"use client";
import { InputDatePicker, InputField } from "@/components/molecules";
import { useApplicationStore } from "@/store";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

type FormValues = {
  course_name: string;
  country_institution: string;
  primary_language: string;
  subject_marks: string;
  school_address: string;
  school_city: string;
  name_institute: string;
  certificate_number: string;
  percentage: string;
  school_state: string;
  postal_code: string;
};

const PostGraduateDetailsForm = () => {
  const {
    control,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormValues>();
  const formValues = watch();
  const { enquiryData } = useApplicationStore();
  const [attendedFrom, onChangeFrom] = useState<string>("");
  const [attendedTo, onChangeTo] = useState<string>("");
  const [postGraduateDetails, setPostGraduateDetails] = useState({
    course_name: enquiryData.educationData.postGraduateDetails.course_name,
    country_institution:
      enquiryData.educationData.postGraduateDetails.country_institution,
    primary_language:
      enquiryData.educationData.postGraduateDetails.primary_language,
    attended_from: enquiryData.educationData.postGraduateDetails.attended_from,
    subject_marks: enquiryData.educationData.postGraduateDetails.subject_marks,
    school_address:
      enquiryData.educationData.postGraduateDetails.school_address,
    school_city: enquiryData.educationData.postGraduateDetails.school_city,
    name_institute:
      enquiryData.educationData.postGraduateDetails.name_institute,
    certificate_number:
      enquiryData.educationData.postGraduateDetails.certificate_number,
    attended_to: enquiryData.educationData.postGraduateDetails.attended_to,
    percentage: enquiryData.educationData.postGraduateDetails.percentage,
    school_state: enquiryData.educationData.postGraduateDetails.school_state,
    postal_code: enquiryData.educationData.postGraduateDetails.postal_code,
  });
  useEffect(() => {
    setValue("course_name", postGraduateDetails.course_name);
    setValue("country_institution", postGraduateDetails.country_institution);
    setValue("primary_language", postGraduateDetails.primary_language);
    setValue("subject_marks", postGraduateDetails.subject_marks);
    setValue("school_address", postGraduateDetails.school_address);
    setValue("school_city", postGraduateDetails.school_city);
    setValue("name_institute", postGraduateDetails.name_institute);
    setValue("certificate_number", postGraduateDetails.certificate_number);
    setValue("percentage", postGraduateDetails.percentage);
    setValue("school_state", postGraduateDetails.school_state);
    setValue("postal_code", postGraduateDetails.postal_code);
    onChangeFrom(postGraduateDetails.attended_from);
    onChangeTo(postGraduateDetails.attended_to);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (formValues.course_name) {
      postGraduateDetails.course_name = formValues.course_name;
    }
    if (formValues.country_institution) {
      postGraduateDetails.country_institution = formValues.country_institution;
    }
    if (formValues.primary_language) {
      postGraduateDetails.primary_language = formValues.primary_language;
    }
    if (attendedFrom) {
      postGraduateDetails.attended_from = attendedFrom;
    }
    if (formValues.subject_marks) {
      postGraduateDetails.subject_marks = formValues.subject_marks;
    }
    if (formValues.school_address) {
      postGraduateDetails.school_address = formValues.school_address;
    }
    if (formValues.school_city) {
      postGraduateDetails.school_city = formValues.school_city;
    }
    if (formValues.name_institute) {
      postGraduateDetails.name_institute = formValues.name_institute;
    }
    if (formValues.certificate_number) {
      postGraduateDetails.certificate_number = formValues.certificate_number;
    }
    if (attendedTo) {
      postGraduateDetails.attended_to = attendedTo;
    }
    if (formValues.percentage) {
      postGraduateDetails.percentage = formValues.percentage;
    }
    if (formValues.school_state) {
      postGraduateDetails.school_state = formValues.school_state;
    }
    if (formValues.postal_code) {
      postGraduateDetails.postal_code = formValues.postal_code;
    }
    setPostGraduateDetails(postGraduateDetails);
    enquiryData.educationData.postGraduateDetails = postGraduateDetails;
    // eslint-disable-next-line
  }, [
    formValues.course_name,
    formValues.country_institution,
    formValues.primary_language,
    attendedFrom,
    formValues.subject_marks,
    formValues.school_address,
    formValues.school_city,
    formValues.name_institute,
    formValues.certificate_number,
    attendedTo,
    formValues.percentage,
    formValues.school_state,
    formValues.postal_code,
  ]);

  return (
    <div>
      <p className="text-sm text-textColor font-semibold mb-4">
        Post Graduate Details
      </p>
      <div className="flex gap-5">
        <div className="w-1/2">
          <Controller
            name="course_name"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div>
                <InputField
                  label="Course Name"
                  placeholder="Course Name"
                  type="text"
                  id="course_name"
                  {...field}
                />
              </div>
            )}
          />
          <Controller
            name="country_institution"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div>
                <InputField
                  label="Country of Institution"
                  placeholder="Country of Institution"
                  type="text"
                  id="country_institution"
                  error={errors.country_institution?.message}
                  {...field}
                />
              </div>
            )}
          />

          <Controller
            name="primary_language"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div>
                <InputField
                  label="Primary Level of language"
                  placeholder="Primary Level of language"
                  type="text"
                  id="primary_language"
                  error={errors.primary_language?.message}
                  {...field}
                />
              </div>
            )}
          />
          <InputDatePicker
            value={attendedFrom}
            onChange={onChangeFrom}
            label="Attended From"
          />
          <Controller
            name="subject_marks"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div>
                <InputField
                  label="Core Subject Marks"
                  placeholder="Core Subject Marks"
                  type="text"
                  id="subject_marks"
                  {...field}
                />
              </div>
            )}
          />
          <Controller
            name="school_address"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div>
                <InputField
                  label="Institute Address"
                  placeholder="Institute Address"
                  type="text"
                  id="school_address"
                  {...field}
                />
              </div>
            )}
          />
          <Controller
            name="school_city"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div>
                <InputField
                  label="Institute City"
                  placeholder="Institute City"
                  type="text"
                  id="school_city"
                  {...field}
                />
              </div>
            )}
          />
        </div>
        <div className="w-1/2">
          <Controller
            name="name_institute"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div>
                <InputField
                  label="Name Of Institute"
                  placeholder="Name Of Institute"
                  type="text"
                  id="name_institute"
                  {...field}
                />
              </div>
            )}
          />
          <Controller
            name="certificate_number"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div>
                <InputField
                  label="Certificate Number"
                  placeholder="Certificate Number"
                  type="text"
                  id="certificate_number"
                  {...field}
                />
              </div>
            )}
          />
          <InputDatePicker
            value={attendedTo}
            onChange={onChangeTo}
            label="Attended To"
          />
          <Controller
            name="percentage"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div>
                <InputField
                  label="Percentage"
                  placeholder="Percentage"
                  type="text"
                  id="percentage"
                  {...field}
                />
              </div>
            )}
          />
          <Controller
            name="school_state"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div>
                <InputField
                  label="Institute State"
                  placeholder="Institute State"
                  type="text"
                  id="school_state"
                  {...field}
                />
              </div>
            )}
          />
          <Controller
            name="postal_code"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div>
                <InputField
                  label="Institute Postal Code"
                  placeholder="Institute Postal Code"
                  type="text"
                  id="postal_code"
                  {...field}
                />
              </div>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default PostGraduateDetailsForm;
