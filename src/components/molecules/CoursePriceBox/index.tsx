import {
  CalenderIcon,
  FeeIcon,
  CarbonLocationIcon,
} from "@/components/atoms/Icons";
import { ICourse } from "@/types/courses";

export const CoursePriceBox = ({
  created_at,
  currency,
  course_fee,
  uni_address,
  course_fee_additional,
  id,
}: ICourse) => {
  const startDate = created_at?.toString().split(" ")[0];

  return (
    <div className="p-4 items-start self-stretch relative w-full bg-[#eef7ff] rounded">
      <p className="tracking-[0.064em]  font-semibold leading-5 text-sm text-textColor">
        Full Time (2 Years)
      </p>
      <div className="flex flex-col gap-4 mt-4">
        <div className="flex gap-4 items-start w-full">
          <div className="flex gap-2.5 items-center relative bg-transparent w-1/4">
            <FeeIcon />
            <p className="tracking-[0.064em] font-medium leading-8 text-sm text-[#065da8]">
              Tuition fees
            </p>
          </div>
          <div className="w-3/4">
            <p className="tracking-[0.064em] text-sm text-textColor">
              {/* A$32,000.00 (US$ 20,849) per year */}
              {`${currency ? currency : "USD"} ${course_fee} ${course_fee_additional ? course_fee_additional : "Per Year"}`}
            </p>
            <span className="text-xs text-grayMedium">
              *Price shown is for indicative purposes, please check with
              institution
            </span>
          </div>
        </div>

        <div className="flex gap-4 items-start w-full">
          <div className="flex gap-2.5 items-center relative bg-transparent w-1/4">
            <CalenderIcon />
            <p className="tracking-[0.064em] font-medium leading-8 text-sm text-[#065da8]">
              Start Date
            </p>
          </div>
          <div className="w-3/4">
            <p className="tracking-[0.064em] text-sm text-textColor">
              {startDate}
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-start w-full">
          <div className="flex gap-2.5 items-center relative bg-transparent w-1/4">
            <CarbonLocationIcon />
            <p className="tracking-[0.064em] font-medium leading-8 text-sm text-[#065da8]">
              Venue
            </p>
          </div>
          <div className="w-3/4">
            <p className="tracking-[0.064em] leading-8 text-sm text-textColor">
              {uni_address}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
