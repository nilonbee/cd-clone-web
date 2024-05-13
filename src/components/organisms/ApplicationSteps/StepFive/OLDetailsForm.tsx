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

const OLDetailsForm = () => {
  const { control, setValue, watch } = useForm<FormValues>();

  const formValues = watch();
  const { enquiryData } = useApplicationStore();

  const [attendedFrom, onChangeFrom] = useState<string>("");
  const [attendedTo, onChangeTo] = useState<string>("");

  const [olDetails, setOlDetails] = useState({
    country_institution:
      enquiryData.educationData.detailsOne.country_institution,
    primary_language: enquiryData.educationData.detailsOne.primary_language,
    attended_from: enquiryData.educationData.detailsOne.attended_from,
    subject_marks: enquiryData.educationData.detailsOne.subject_marks,
    school_address: enquiryData.educationData.detailsOne.school_address,
    school_city: enquiryData.educationData.detailsOne.school_city,
    name_institute: enquiryData.educationData.detailsOne.name_institute,
    certificate_number: enquiryData.educationData.detailsOne.certificate_number,
    attended_to: enquiryData.educationData.detailsOne.attended_to,
    percentage: enquiryData.educationData.detailsOne.percentage,
    school_state: enquiryData.educationData.detailsOne.school_state,
    postal_code: enquiryData.educationData.detailsOne.postal_code,
  });

  useEffect(() => {
    setValue("country_institution", olDetails.country_institution);
    setValue("primary_language", olDetails.primary_language);
    setValue("subject_marks", olDetails.subject_marks);
    setValue("school_address", olDetails.school_address);
    setValue("school_city", olDetails.school_city);
    setValue("name_institute", olDetails.name_institute);
    setValue("certificate_number", olDetails.certificate_number);
    setValue("percentage", olDetails.percentage);
    setValue("school_state", olDetails.school_state);
    setValue("postal_code", olDetails.postal_code);
    onChangeFrom(olDetails.attended_from);
    onChangeTo(olDetails.attended_to);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (formValues.country_institution) {
      olDetails.country_institution = formValues.country_institution;
    }
    if (formValues.primary_language) {
      olDetails.primary_language = formValues.primary_language;
    }
    if (attendedFrom) {
      olDetails.attended_from = attendedFrom;
    }
    if (formValues.subject_marks) {
      olDetails.subject_marks = formValues.subject_marks;
    }
    if (formValues.school_address) {
      olDetails.school_address = formValues.school_address;
    }
    if (formValues.school_city) {
      olDetails.school_city = formValues.school_city;
    }
    if (formValues.name_institute) {
      olDetails.name_institute = formValues.name_institute;
    }
    if (formValues.certificate_number) {
      olDetails.certificate_number = formValues.certificate_number;
    }
    if (attendedTo) {
      olDetails.attended_to = attendedTo;
    }
    if (formValues.percentage) {
      olDetails.percentage = formValues.percentage;
    }
    if (formValues.school_state) {
      olDetails.school_state = formValues.school_state;
    }
    if (formValues.postal_code) {
      olDetails.postal_code = formValues.postal_code;
    }
    setOlDetails(olDetails);
    enquiryData.educationData.detailsOne = olDetails;
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
      <p className="text-sm text-textColor font-semibold mb-4">OL Details</p>
      <div className="flex gap-5">
        <div className="w-1/2">
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

export default OLDetailsForm;
