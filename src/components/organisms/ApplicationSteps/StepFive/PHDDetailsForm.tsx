"use client";
import { InputDatePicker, InputField } from "@/components/molecules";
import { useApplicationStore } from "@/store";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

type FormValues = {
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
  course_name: string;
};

const PHDDetailsForm = () => {
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
  const [phdDetails, setPhdDetails] = useState({
    course_name: enquiryData.educationData.phdDetails.course_name,
    country_institution:
      enquiryData.educationData.phdDetails.country_institution,
    primary_language: enquiryData.educationData.phdDetails.primary_language,
    attended_from: enquiryData.educationData.phdDetails.attended_from,
    subject_marks: enquiryData.educationData.phdDetails.subject_marks,
    school_address: enquiryData.educationData.phdDetails.school_address,
    school_city: enquiryData.educationData.phdDetails.school_city,
    name_institute: enquiryData.educationData.phdDetails.name_institute,
    certificate_number: enquiryData.educationData.phdDetails.certificate_number,
    attended_to: enquiryData.educationData.phdDetails.attended_to,
    percentage: enquiryData.educationData.phdDetails.percentage,
    school_state: enquiryData.educationData.phdDetails.school_state,
    postal_code: enquiryData.educationData.phdDetails.postal_code,
  });

  useEffect(() => {
    setValue("course_name", phdDetails.course_name);
    setValue("country_institution", phdDetails.country_institution);
    setValue("primary_language", phdDetails.primary_language);
    setValue("subject_marks", phdDetails.subject_marks);
    setValue("school_address", phdDetails.school_address);
    setValue("school_city", phdDetails.school_city);
    setValue("name_institute", phdDetails.name_institute);
    setValue("certificate_number", phdDetails.certificate_number);
    setValue("percentage", phdDetails.percentage);
    setValue("school_state", phdDetails.school_state);
    setValue("postal_code", phdDetails.postal_code);
    onChangeFrom(phdDetails.attended_from);
    onChangeTo(phdDetails.attended_to);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (formValues.course_name) {
      phdDetails.course_name = formValues.course_name;
    }
    if (formValues.country_institution) {
      phdDetails.country_institution = formValues.country_institution;
    }
    if (formValues.primary_language) {
      phdDetails.primary_language = formValues.primary_language;
    }
    if (attendedFrom) {
      phdDetails.attended_from = attendedFrom;
    }
    if (formValues.subject_marks) {
      phdDetails.subject_marks = formValues.subject_marks;
    }
    if (formValues.school_address) {
      phdDetails.school_address = formValues.school_address;
    }
    if (formValues.school_city) {
      phdDetails.school_city = formValues.school_city;
    }
    if (formValues.name_institute) {
      phdDetails.name_institute = formValues.name_institute;
    }
    if (formValues.certificate_number) {
      phdDetails.certificate_number = formValues.certificate_number;
    }
    if (attendedTo) {
      phdDetails.attended_to = attendedTo;
    }
    if (formValues.percentage) {
      phdDetails.percentage = formValues.percentage;
    }
    if (formValues.school_state) {
      phdDetails.school_state = formValues.school_state;
    }
    if (formValues.postal_code) {
      phdDetails.postal_code = formValues.postal_code;
    }
    setPhdDetails(phdDetails);
    enquiryData.educationData.phdDetails = phdDetails;
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
        PHD/Doctorate Details
      </p>
      <div className="flex gap-5 xs:flex-col sm:flex-col md:flex-row">
        <div className="xs:w-full sm:w-full md:w-1/2">
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
        <div className="xs:w-full sm:w-full md:w-1/2">
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

export default PHDDetailsForm;
