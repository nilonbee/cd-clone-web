"use client";
import React, { useEffect, useState } from "react";
import { useCourseFilterStore } from "@/store";
import { ICourse } from "@/types/courses";
import { getCourseById } from "@/utils/api-requests";
import { CoursePriceBox, UniRow } from "@/components/molecules";
import { CourseSubHeader, LoadingSpinner } from "@/components/atoms";
import { ApplicationForm } from "../ApplicationForm";
import { IIntake } from "@/types/intakes";
import { AiOutlineClose } from "react-icons/ai";
import { CustomDrawer } from "@/components/molecules/Drawer";

interface CourseViewDrawerProps {
  intakes: IIntake[];
}

export const CourseViewDrawer = ({ intakes }: CourseViewDrawerProps) => {
  const { selectedCourseId, isEmpty, openDrawer, setOpenDrawer } =
    useCourseFilterStore();
  const [data, setData] = useState<ICourse>({} as ICourse);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    if (selectedCourseId === "") {
      setLoading(false);
    }
    if (!isEmpty && selectedCourseId) {
      getCourseById(selectedCourseId).then((response) => {
        setData(response as ICourse);
        setLoading(false);
      });
    }
  }, [selectedCourseId, isEmpty]);

  return (
    <CustomDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer}>
      {!loading ? (
        <>
          <AiOutlineClose
            className="absolute top-5 right-5 text-lg cursor-pointer z-20 text-black/50"
            onClick={() => setOpenDrawer(false)}
          />
          <div className="md:px-0 lg:px-20 mb-10">
            <UniRow
              uni_logo={data.uni_logo}
              course_name={data?.course_name}
              university={data?.university}
              uni_address={data?.uni_address}
              country={data?.country}
              id={data.id ?? 0}
            />
            <div className="mt-5">
              <CourseSubHeader title="What will I learn?" />
              <p className="font-semibold text-textColor text-sm my-4">
                Overview of the course
              </p>
              <p className="text-textColor text-sm my-4 leading-6">
                {data.course_description}
              </p>
              <p className="font-semibold text-textColor text-sm my-5">
                Further study
              </p>
              <p className="text-textColor text-sm my-5 leading-6"></p>
              <CourseSubHeader title="Which department am I in?" />
              <p className="text-textColor text-sm my-4 leading-6">
                School of Nursing and Midwifery
              </p>
              <CourseSubHeader title="CRICOS" />
              <p className="text-textColor text-sm my-4 leading-6">111902E</p>
              <CourseSubHeader title="Study Options" />
              <div className="my-4">
                <CoursePriceBox
                  course_name={data.course_name}
                  course_fee_additional={data.course_fee_additional}
                  course_fee={data.course_fee}
                  currency={data.currency}
                  uni_address={data.uni_address}
                  created_at={data.created_at}
                  id={data.id ?? 0}
                />
              </div>
              <CourseSubHeader title="Entry requirements" />
              <p className="font-semibold text-textColor text-sm my-4">
                For students from Sri Lanka
              </p>
              <p className="text-textColor text-sm my-4 leading-6">
                {data.entry_requirements}
              </p>
              <p className="font-semibold text-textColor text-sm my-4">
                For international students
              </p>
              <p className="text-textColor text-sm my-4 leading-6">
                IELTS (Academic only) - 7.0 (or better) (no component lower than
                7.0); TOEFL (paper based) - 600 (or better) (with a minimum Test
                of Written English Score of TWE 5); TOEFL (electronic or
                computer based) - 250 (or better) (with essay rating of at least
                5); TOEFL (internet based) - 95 (or better) (with 22 minimum in
                all bands); Pearson (PTE Academic) - 65 (or better) (with no
                communicative score less than 65); Cambridge English Scale
                Scores for FCE, CAE and CPE - Cambridge English Advanced (CAE)
                and Cambridge English Proficiency (CPE)/ 185 or above. No less
                than 185 in each skill.
              </p>
            </div>
            <ApplicationForm intakes={intakes} />
          </div>
        </>
      ) : (
        <div className="mt-12">
          <LoadingSpinner />
        </div>
      )}
    </CustomDrawer>
  );
};
