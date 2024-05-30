"use client";
import { MainButton } from "@/components/atoms";
import {
  InputField,
  InputSelectField,
  InputTextArea,
} from "@/components/molecules";
import { useApplicationStore } from "@/store";
import { ICountry } from "@/types/countries";
import { ICity, IState } from "@/types/types";
import { getCityByStateId, getStateByCountryId } from "@/utils/api-requests";
import validationSchema from "@/utils/validationSchema";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

type FormValues = {
  address: string;
  city_id: number | undefined;
  country_id: number;
  postal_code: string;
  state_id: number | undefined;
};

export const StepFour = ({ allCountries }: { allCountries: ICountry[] }) => {
  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    watch,
    formState: { errors },
  } = useForm<FormValues>();

  const { enquiryData, setCurrentStep, setEnquiryData } = useApplicationStore();
  const [states, setStates] = useState<IState[]>([]);
  const [cities, setCities] = useState<ICity[]>([]);

  const formValues = watch();

  useEffect(() => {
    setValue("country_id", enquiryData.addressData.country_id);
    getStateByCountryId(String(getValues("country_id"))).then((res) => {
      setStates(res);
    });
    setValue("state_id", enquiryData.addressData.state_id);
    getCityByStateId(enquiryData?.addressData?.state_id).then((res) => {
      setCities(res);
    });
    setValue("city_id", enquiryData.addressData.city_id);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (formValues.country_id) {
      getStateByCountryId(String(formValues.country_id)).then((res) => {
        setStates(res);
      });
    }
    if (formValues.state_id) {
      getCityByStateId(String(formValues.state_id)).then((res) => {
        setCities(res);
      });
    }
  }, [formValues.country_id, formValues.state_id, setValue]);

  const onSubmit = (data: FormValues) => {
    console.log(data);

    setEnquiryData({
      ...enquiryData,
      addressData: {
        address: data.address,
        city_id: data.city_id,
        country_id: data.country_id,
        postal_code: data.postal_code,
        state_id: data.state_id,
      },
    });
    setCurrentStep(5);
  };
  return (
    <div className="w-full">
      <p className="text-sm text-textColor font-semibold mb-5">
        Address Detail
      </p>
      <form className="w-full mt-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-5 xs:flex-col sm:flex-col md:flex-row">
          <div className="xs:w-full sm:w-full md:w-1/2">
            <Controller
              name="address"
              control={control}
              render={({ field }) => (
                <div>
                  <InputTextArea
                    label="Address"
                    placeholder="Enter Address"
                    id="address"
                    {...field}
                  />
                </div>
              )}
            />
          </div>
          <div className="xs:w-full sm:w-full md:w-1/2">
            <Controller
              name="country_id"
              control={control}
              rules={validationSchema.country_id}
              render={({ field }) => (
                <div>
                  <InputSelectField
                    label="Country"
                    id="country_id"
                    placeholder="Select Country"
                    options={allCountries?.map((country) => ({
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
              name="state_id"
              control={control}
              defaultValue={undefined}
              rules={validationSchema.state_id}
              render={({ field }) => (
                <div>
                  <InputSelectField
                    label="State"
                    id="state_id"
                    placeholder="Select State"
                    options={states?.map((state) => ({
                      value: state.id,
                      label: state.name,
                    }))}
                    error={errors.state_id?.message}
                    {...field}
                  />
                </div>
              )}
            />
            <Controller
              name="city_id"
              control={control}
              rules={validationSchema.city_id}
              render={({ field }) => (
                <div>
                  <InputSelectField
                    label="City"
                    id="city_id"
                    placeholder="Select City"
                    options={cities?.map((city) => ({
                      value: city.id,
                      label: city.name,
                    }))}
                    error={errors.city_id?.message}
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
                    label="Postal Code"
                    placeholder="Postal Code"
                    type="text"
                    id="postal_code"
                    error={errors.postal_code?.message}
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
            onClick={() => setCurrentStep(3)}
          />
          <MainButton label="Next" btnSize="Medium" btnStyle="Primary" submit />
        </div>
      </form>
    </div>
  );
};
