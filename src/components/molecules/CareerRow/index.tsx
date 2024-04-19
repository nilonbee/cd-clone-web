import Link from "next/link";
import moment from "moment";
import { MainButton } from "@/components/atoms";
import { ICareer } from "@/types/careers";

export const CareerRow = ({ title, end_date, created_at, slug }: ICareer) => {
  return (
    <div className="border border-boxBorder p-5 flex justify-between items-center self-stretch relative w-full bg-white rounded-md hover:bg-[#eef7ff] hover:border-primary transition-all duration-300">
      <div className="relative bg-transparent">
        <p className="font-semibold leading-[26px] text-base text-textColor mb-1">
          {title}
        </p>
        <p className="leading-5 text-sm text-black/50 mb-1">
          Posted Date: {`${moment(created_at).format("DD MMM YYYY")}`}
        </p>
        <p className="leading-5 text-sm text-black/50">
          End Date: {` ${moment(end_date).format("DD MMM YYYY")}`}
        </p>
      </div>
      <Link href={`/careers/${slug}`}>
        <MainButton label="Apply Now" btnStyle="Primary" btnSize="Medium" />
      </Link>
    </div>
  );
};
