"use client";
import validationSchema from "@/utils/validationSchema";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { InputField } from "../InputField";
import { InputDatePicker } from "../InputDatePicker";
import { InputRadio } from "../InputRadio";
import { MainButton } from "@/components/atoms";
import { useUserStore } from "@/store";
import moment from "moment";
import { getUserByID, updateUser } from "@/utils/auth-api-requests";
import { InputTextArea } from "../InputTextArea";
import { InputSelectField } from "../InputSelectField";
import { ICountry } from "@/types/countries";
import { ICity, IState } from "@/types/types";
import { getCityByStateId, getStateByCountryId } from "@/utils/api-requests";
import toast from "react-hot-toast";

type FormValues = {
  first_name: string;
  middle_name: string;
  last_name: string;
  email: string;
  phone: string;
  first_language: string;
  dob: string;
  country_citizen: string;
  passport_number: string;
  gender: string;
  marital_status: string;
  address: string;
  country_id: string;
  state_id: string;
  city_id: string;
  img_url: string;
};

export const ProfileDetails = ({
  allCountries,
}: {
  allCountries: ICountry[];
}) => {
  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormValues>();
  const formValues = watch();

  const { user, setUser } = useUserStore();

  const [gender, setGender] = useState<string>("");
  const [maritalStatus, setMaritalStatus] = useState<string>("");
  const [dob, onChange] = useState<string>("");
  const [states, setStates] = useState<IState[]>([]);
  const [cities, setCities] = useState<ICity[]>([]);

  useEffect(() => {
    getUserByID(user?.id).then((res) => {
      setValue("first_name", res.first_name);
      setValue("middle_name", res.middle_name);
      setValue("last_name", res.last_name);
      setValue("email", res.email);
      setValue("phone", res.phone);
      setValue("first_language", res.first_language);
      setValue("country_citizen", res.country_citizen);
      setValue("passport_number", res.passport_number);
      setValue("gender", res.gender);
      setValue("marital_status", res.marital_status);
      setValue("address", res.address);
      setGender(res.gender);
      setMaritalStatus(res.marital_status);
      onChange(res?.dob && moment(res?.dob).format("YYYY-MM-DD"));
      setValue("country_id", res.country_id);
      getStateByCountryId(res.country_id).then((res) => {
        setStates(res);
      });
      setValue("state_id", res.state_id);
      getCityByStateId(res?.state_id).then((res) => {
        setCities(res);
      });
      setValue("city_id", res.city_id);
    });

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
    const postData = {
      ...data,
      id: user?.id,
      img_url: user?.img_url,
      dob: dob,
      gender: gender,
      marital_status: maritalStatus,
      br_doc: "",
    };
    updateUser(postData).then((res) => {
      toast.success(res.message);
      setUser({
        ...user,
        first_name: res.data.first_name,
        middle_name: res.data.middle_name,
        last_name: res.data.last_name,
        full_name: res.data.full_name,
      });
    });
  };

  return (
    <div className="xs:w-full sm:w-full md:w-3/4 bg-white p-5 rounded-md shadow-md">
      <p className="text-sm text-textColor font-semibold">Profile Details</p>
      <form className="w-full mt-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="w-full">
            <Controller
              name="first_name"
              control={control}
              defaultValue=""
              rules={validationSchema.first_name}
              render={({ field }) => (
                <div>
                  <InputField
                    label="First Name"
                    placeholder="Enter Your First Name"
                    type="text"
                    id="first_name"
                    error={errors.first_name?.message}
                    {...field}
                  />
                </div>
              )}
            />
            <Controller
              name="middle_name"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <div>
                  <InputField
                    label="Middle Name"
                    placeholder="Enter Your Middle Name"
                    type="text"
                    id="middle_name"
                    {...field}
                  />
                </div>
              )}
            />
            <Controller
              name="last_name"
              control={control}
              defaultValue=""
              rules={validationSchema.last_name}
              render={({ field }) => (
                <div>
                  <InputField
                    label="Last Name"
                    placeholder="Enter Your Last Name"
                    type="text"
                    id="last_name"
                    error={errors.last_name?.message}
                    {...field}
                  />
                </div>
              )}
            />
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={validationSchema.email}
              render={({ field }) => (
                <div>
                  <InputField
                    label="Email Address"
                    placeholder="Enter Your Email Address"
                    type="text"
                    id="email"
                    disabled
                    error={errors.email?.message}
                    {...field}
                  />
                </div>
              )}
            />
            <Controller
              name="phone"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <div>
                  <InputField
                    label="Contact Number"
                    placeholder="Enter Your Contact Number"
                    type="text"
                    id="email"
                    error={errors.phone?.message}
                    {...field}
                  />
                </div>
              )}
            />
            <Controller
              name="first_language"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <div>
                  <InputField
                    label="First Language"
                    placeholder="Enter Your First Language"
                    type="text"
                    id="first_language"
                    {...field}
                  />
                </div>
              )}
            />
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
          <div className="w-full">
            <InputDatePicker
              value={dob}
              onChange={onChange}
              label="Date Of Exam"
            />

            <Controller
              name="country_citizen"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <div>
                  <InputField
                    label="Country Citizenship"
                    placeholder="Country Citizenship"
                    type="text"
                    id="country_citizen"
                    {...field}
                  />
                </div>
              )}
            />
            <Controller
              name="passport_number"
              control={control}
              defaultValue=""
              rules={validationSchema.passport_number}
              render={({ field }) => (
                <div>
                  <InputField
                    label="Passport Number"
                    placeholder="Passport Number"
                    type="text"
                    id="passport_number"
                    error={errors.passport_number?.message}
                    {...field}
                  />
                </div>
              )}
            />
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
            <div className="border border-borderGray p-2 rounded-md">
              <p className="text-gray font-medium text-sm mb-2 "> Gender </p>
              <div className="flex gap-5">
                <InputRadio
                  id="Male"
                  name="gender"
                  label="Male"
                  value="Male"
                  onChange={(e) => setGender(e.target.value)}
                  selectedValue={gender}
                />
                <InputRadio
                  id="Female"
                  name="gender"
                  label="Female"
                  value="Female"
                  onChange={(e) => setGender(e.target.value)}
                  selectedValue={gender}
                />
              </div>
            </div>
            <div className="border border-borderGray p-2 rounded-md mt-4">
              <p className="text-gray font-medium text-sm mb-2 ">
                Marital Status
              </p>
              <div className="flex gap-5">
                <InputRadio
                  id="Married"
                  name="marital_status"
                  label="Married"
                  value="Married"
                  onChange={(e) => setMaritalStatus(e.target.value)}
                  selectedValue={maritalStatus}
                />
                <InputRadio
                  id="Unmarried"
                  name="marital_status"
                  label="Unmarried"
                  value="Unmarried"
                  onChange={(e) => setMaritalStatus(e.target.value)}
                  selectedValue={maritalStatus}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-5 gap-2">
          <MainButton
            label="Update"
            btnSize="Medium"
            btnStyle="Primary"
            submit
          />
        </div>
      </form>
    </div>
  );
};
