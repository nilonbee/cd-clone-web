import { InputField, InputSelectField } from "@/components/molecules";
import React from "react";

export const StepOne = () => {
  return (
    <div className="w-full">
      <p className="text-sm text-textColor font-semibold">Selected Course</p>

      <form className="w-full mt-5">
        <div>
          <InputField
            label="Country"
            placeholder="Select Country"
            type="email"
            id="email"
            name="email"
          />
          <InputSelectField
            label="Select an option"
            id="selectOption"
            required
            options={[
              { value: "option1", label: "Option 1" },
              { value: "option2", label: "Option 2" },
              { value: "option3", label: "Option 3" },
            ]}
          />
        </div>
      </form>
    </div>
  );
};
