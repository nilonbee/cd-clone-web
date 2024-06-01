"use client";
import { useCourseFilterStore } from "@/store";
import { rootImagePath } from "@/utils/rootImagePath";
import { useRouter } from "next/navigation";
import React from "react";
interface Props {
  title: string;
  img: string;
  id: number;
}

export const SubjectBox = ({ img, title, id }: Props) => {
  const router = useRouter();
  const { setRefetch, setFilter } = useCourseFilterStore();
  return (
    <div
      className="relative h-[200px] overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-md"
      style={{
        backgroundImage: img
          ? `url(${rootImagePath(img)})`
          : "/images/24738.jpg",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onClick={() => {
        router.push(`/courses`);
        setFilter({ subject_ids: [id] });
        setRefetch(true);
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50">
        <div className="flex gap-2 w-full p-3 h-[200px] items-end">
          <p className="font-semibold text-base text-white">{title}</p>
        </div>
      </div>
    </div>
  );
};
