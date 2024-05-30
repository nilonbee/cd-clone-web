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
};

const ALDetailsForm = () => {
  const {
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormValues>();
  const formValues = watch();
  const { enquiryData } = useApplicationStore();
  const [attendedFrom, onChangeFrom] = useState<string>("");
  const [attendedTo, onChangeTo] = useState<string>("");
  const [alDetails, setAlDetails] = useState({
    country_institution:
      enquiryData.educationData.detailsTwo.country_institution,
    primary_language: enquiryData.educationData.detailsTwo.primary_language,
    attended_from: enquiryData.educationData.detailsTwo.attended_from,
    subject_marks: enquiryData.educationData.detailsTwo.subject_marks,
    school_address: enquiryData.educationData.detailsTwo.school_address,
    school_city: enquiryData.educationData.detailsTwo.school_city,
    name_institute: enquiryData.educationData.detailsTwo.name_institute,
    certificate_number: enquiryData.educationData.detailsTwo.certificate_number,
    attended_to: enquiryData.educationData.detailsTwo.attended_to,
    percentage: enquiryData.educationData.detailsTwo.percentage,
    school_state: enquiryData.educationData.detailsTwo.school_state,
    postal_code: enquiryData.educationData.detailsTwo.postal_code,
  });

  useEffect(() => {
    setValue("country_institution", alDetails.country_institution);
    setValue("primary_language", alDetails.primary_language);
    setValue("subject_marks", alDetails.subject_marks);
    setValue("school_address", alDetails.school_address);
    setValue("school_city", alDetails.school_city);
    setValue("name_institute", alDetails.name_institute);
    setValue("certificate_number", alDetails.certificate_number);
    setValue("percentage", alDetails.percentage);
    setValue("school_state", alDetails.school_state);
    setValue("postal_code", alDetails.postal_code);
    onChangeFrom(alDetails.attended_from);
    onChangeTo(alDetails.attended_to);

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (formValues.country_institution) {
      alDetails.country_institution = formValues.country_institution;
    }
    if (formValues.primary_language) {
      alDetails.primary_language = formValues.primary_language;
    }
    if (attendedFrom) {
      alDetails.attended_from = attendedFrom;
    }
    if (formValues.subject_marks) {
      alDetails.subject_marks = formValues.subject_marks;
    }
    if (formValues.school_address) {
      alDetails.school_address = formValues.school_address;
    }
    if (formValues.school_city) {
      alDetails.school_city = formValues.school_city;
    }
    if (formValues.name_institute) {
      alDetails.name_institute = formValues.name_institute;
    }
    if (formValues.certificate_number) {
      alDetails.certificate_number = formValues.certificate_number;
    }
    if (attendedTo) {
      alDetails.attended_to = attendedTo;
    }
    if (formValues.percentage) {
      alDetails.percentage = formValues.percentage;
    }
    if (formValues.school_state) {
      alDetails.school_state = formValues.school_state;
    }
    if (formValues.postal_code) {
      alDetails.postal_code = formValues.postal_code;
    }
    setAlDetails(alDetails);
    enquiryData.educationData.detailsTwo = alDetails;
    // eslint-disable-next-line
  }, [
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
      <p className="text-sm text-textColor font-semibold mb-4">AL Details</p>
      <div className="flex gap-5 xs:flex-col sm:flex-col md:flex-row">
        <div className="xs:w-full sm:w-full md:w-1/2">
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
                  label="School Address"
                  placeholder="School Address"
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
                  label="School City"
                  placeholder="School City"
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
                  label="School State"
                  placeholder="School State"
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
                  label="School Postal Code"
                  placeholder="School Postal Code"
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

export default ALDetailsForm;
