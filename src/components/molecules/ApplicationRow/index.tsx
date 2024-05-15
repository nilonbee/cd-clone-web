import { IconButton } from "@/components/atoms";
import {
  HatIcon,
  PinIcon,
  TimeIcon,
  UniversityIcon,
} from "@/components/atoms/Icons";
import { IApplication } from "@/types/application";
import { rootImagePath } from "@/utils/rootImagePath";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaHistory, FaPencilAlt, FaRegEye } from "react-icons/fa";
import { ImBin } from "react-icons/im";

export const ApplicationRow = ({
  enquiry_id,
  country_name,
  uni_name,
  uni_logo,
  created_at,
  course_name,
  id,
  status,
  setSelectedId,
  setIsOpen,
  setIsDeleteOpen,
}: IApplication) => {
  const router = useRouter();

  return (
    <div className="p-4 flex gap-5 items-center self-stretch relative w-full bg-[#eef7ff] rounded-md  border border-boxBorder justify-between fadeIn">
      <div className="flex gap-5">
        <Image
          src={rootImagePath(uni_logo as string)}
          alt="university-logo"
          className="h-[100px] w-[100px]  ring-1 ring-primary shadow-md object-contain rounded-md bg-white"
          width={200}
          height={200}
        />
        <div className="flex flex-col gap-1 justify-center items-start relative bg-transparent">
          <div className="flex gap-2">
            <div className="min-w-4 w-[20px] h-[20px] mt-1">
              <HatIcon />
            </div>
            <h5 className="font-semibold text-sm text-primary">
              {course_name}
            </h5>
          </div>
          <div className="flex gap-1 relative bg-transparent flex-col  justify-between">
            <div className="flex gap-2 items-center relative bg-transparent">
              <div className="w-[14px] h-[14px]">
                <UniversityIcon />
              </div>
              <p className="text-xs text-black/60">{uni_name}</p>
            </div>
            <div className="flex gap-2 items-center relative bg-transparent">
              <div className="w-[14px] h-[14px]">
                <PinIcon />
              </div>
              <p className="text-xs text-black/60">{country_name}</p>
            </div>
            <div className="flex gap-2 items-center relative bg-transparent">
              <div className="w-[14px] h-[14px]">
                <TimeIcon />
              </div>
              <p className="text-xs text-black/60">Apply Date: {created_at}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 items-center">
        <div
          className={
            "bg-teal-500 text-white py-1 px-4 rounded-full text-xs shadow uppercase"
          }
        >
          {status}
        </div>
        <div className="flex gap-2">
          <IconButton
            icon={<FaRegEye />}
            onClickHandler={() =>
              router.push(`/applications/view-application/${id}`)
            }
          />
          {status !== "Deleted" && (
            <IconButton
              icon={<FaPencilAlt />}
              onClickHandler={() =>
                router.push(`/applications/edit-application/${enquiry_id}`)
              }
            />
          )}
          {status !== "Deleted" && (
            <IconButton
              icon={<ImBin />}
              onClickHandler={() => {
                setSelectedId(id);
                setIsDeleteOpen(true);
              }}
            />
          )}
          <IconButton
            icon={<FaHistory />}
            onClickHandler={() => {
              setSelectedId(id);
              setIsOpen(true);
            }}
          />
        </div>
      </div>
    </div>
  );
};
