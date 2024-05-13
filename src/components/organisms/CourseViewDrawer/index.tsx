"use client";
import React, { useEffect, useState } from "react";
import { clsx } from "clsx";
import { useCourseStore } from "@/store";
import { ICourse } from "@/types/courses";
import { getCourseById } from "@/utils/api-requests";
import { CoursePriceBox, UniRow } from "@/components/molecules";
import { CourseSubHeader, Loading } from "@/components/atoms";
import { ApplicationForm } from "../ApplicationForm";
import { IIntake } from "@/types/intakes";

interface CourseViewDrawerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  side?: "right" | "left" | "top" | "bottom";
  intakes: IIntake[];
}

const openClassNames = {
  right: "translate-x-0",
  left: "translate-x-0",
  top: "translate-y-0",
  bottom: "translate-y-0",
};

const closeClassNames = {
  right: "translate-x-full",
  left: "-translate-x-full",
  top: "-translate-y-full",
  bottom: "translate-y-full",
};

const classNames = {
  right: "inset-y-0 right-0",
  left: "inset-y-0 left-0",
  top: "inset-x-0 top-0",
  bottom: "inset-x-0 bottom-0",
};

export const CourseViewDrawer = ({
  open,
  setOpen,
  side = "bottom",
  intakes,
}: CourseViewDrawerProps) => {
  const { selectedCourseId, isCourse } = useCourseStore();
  const [data, setData] = useState<ICourse>({} as ICourse);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    if (selectedCourseId === "") {
      setLoading(false);
    }
    if (isCourse && selectedCourseId) {
      getCourseById(selectedCourseId).then((response) => {
        setData(response as ICourse);
        setLoading(false);
      });
    }
  }, [selectedCourseId, isCourse]);

  return (
    <div
      id={`dialog-${side}`}
      className="relative z-10"
      aria-labelledby="slide-over"
      role="dialog"
      aria-modal="true"
      onClick={() => setOpen(!open)}
    >
      <div
        className={clsx(
          "fixed inset-0 bg-black/70 transition-all",
          {
            "opacity-100 duration-500 ease-in-out visible": open,
          },
          { "opacity-0 duration-500 ease-in-out invisible": !open },
        )}
      ></div>
      <div className={clsx({ "fixed inset-0": open })}>
        <div className="absolute inset-0">
          <div
            className={clsx(
              "pointer-events-none fixed h-5/6",
              classNames[side],
            )}
          >
            <div
              className={clsx(
                "pointer-events-auto relative w-full h-full transform transition ease-in-out duration-500",
                { [closeClassNames[side]]: !open },
                { [openClassNames[side]]: open },
              )}
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
              }}
            >
              <div
                className={clsx(
                  "flex flex-col h-full overflow-y-scroll p-4 shadow-xl bg-white rounded-t-lg",
                )}
              >
                {!loading ? (
                  <>
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
                      <p className="text-textColor text-sm my-4 leading-6">
                        111902E
                      </p>
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
                        IELTS (Academic only) - 7.0 (or better) (no component
                        lower than 7.0); TOEFL (paper based) - 600 (or better)
                        (with a minimum Test of Written English Score of TWE 5);
                        TOEFL (electronic or computer based) - 250 (or better)
                        (with essay rating of at least 5); TOEFL (internet
                        based) - 95 (or better) (with 22 minimum in all bands);
                        Pearson (PTE Academic) - 65 (or better) (with no
                        communicative score less than 65); Cambridge English
                        Scale Scores for FCE, CAE and CPE - Cambridge English
                        Advanced (CAE) and Cambridge English Proficiency (CPE)/
                        185 or above. No less than 185 in each skill.
                      </p>
                    </div>
                    <ApplicationForm intakes={intakes} />
                  </>
                ) : (
                  <Loading />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
