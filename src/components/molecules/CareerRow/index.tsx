import parse from "html-react-parser";
import Link from "next/link";

import { MainButton } from "@/components/atoms";
import { ICareer } from "@/types/careers";

export const CareerRow = ({
  title,
  end_date,
  created_at,
  description,
  slug,
}: ICareer) => {
  return (
    <div className="border border-boxBorder p-8 flex justify-between items-center self-stretch relative w-full bg-white rounded shadow">
      <div className="relative bg-transparent w-2/5">
        <p className="font-semibold leading-[26px] text-base text-textColor">
          {title}
        </p>
        <p className="leading-[26px] text-sm text-textColor line-clamp-4">
          {description ? parse(description) : ""}
        </p>
      </div>
      <div className="flex flex-col gap-2 items-start relative bg-transparent">
        <p className="leading-5 text-sm text-textColor">
          Posted Date: {`${created_at}`}
        </p>
        <p className="leading-5 text-sm text-textColor">
          End Date: {` ${end_date}`}
        </p>
      </div>
      <Link href={`/lk/careers/${slug}`}>
        <MainButton label="Apply Now" btnStyle="Secondary" btnSize="Large" />
      </Link>
    </div>
  );
};
