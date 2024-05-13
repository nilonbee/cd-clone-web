import React from "react";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import moment from "moment";

type Props = {
  value: string;
  onChange: (value: string) => void;
  label: string;
  required?: boolean;
};

export const InputDatePicker = ({
  value,
  onChange,
  label,
  required,
}: Props) => {
  return (
    <div className="mb-4">
      <label className={`block text-sm mb-2 font-medium text-gray `}>
        {label} {required && <span className="text-errorMsg">*</span>}
      </label>
      <DatePicker
        onChange={(value: any) =>
          onChange(value && moment(value).format("YYYY-MM-DD"))
        }
        value={value}
        className="w-full rounded-md"
        format="y-MM-dd"
        dayPlaceholder="dd"
        monthPlaceholder="mm"
        yearPlaceholder="yyyy"
      />
    </div>
  );
};
