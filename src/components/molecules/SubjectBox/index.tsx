import { MainButton } from "@/components/atoms";
import { HatIcon, RightArrowIcon } from "@/components/atoms/Icons";
import Link from "next/link";
import { CardWrapper } from "..";

interface Props {
  title: string;
  subjects: string[];
}

export const SubjectBox = ({ title, subjects }: Props) => {
  return (
    <CardWrapper>
      <div className="flex flex-col">
        <div className="flex gap-2.5 items-center relative bg-transparent mb-2">
          <div className="w-[24px] h-[24px] mt-1">
            <HatIcon />
          </div>
          <h5 className="font-semibold text-base text-primary">{title}</h5>
        </div>
        {subjects?.map((subject, index) => (
          <Link href="/lk" key={index}>
            <div
              key={index}
              className="w-full overflow-hidden border-b border-grayLight pb-2 pt-2 hover:bg-grayLight hover:bg-opacity-10 cursor-pointer"
            >
              <p className="text-sm text-black/60">{subject}</p>
            </div>
          </Link>
        ))}

        <div className="flex flex-col gap-2 items-start relative bg-transparent mt-4">
          <div className="flex gap-2  justify-between items-center w-full">
            <MainButton
              label="View More"
              btnStyle="Secondary"
              btnSize="Medium"
              fullWith={true}
              icon={<RightArrowIcon />}
            />
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};
