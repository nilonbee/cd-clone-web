import {
  ContainerLayout,
  CourseSubHeader,
  Hero,
  InnerContainer,
} from "@/components/atoms";
import { CoursePriceBox, UniRow } from "@/components/molecules";
import { ApplicationForm, InterestedSection } from "@/components/organisms";
import { getCourseById } from "@/utils/api-requests";
import { ICourse } from "@/types/courses";

const CourseSinglePage = async ({ params }: any) => {
  const response = await getCourseById(params.slug);
  const data = response as ICourse;

  return (
    <>
      <Hero />
      <ContainerLayout>
        <InnerContainer>
          <div className="my-12 flex flex-row w-full gap-4 relative">
            <div className="w-[70%]">
              <UniRow
                uni_logo={data?.uni_logo}
                course_name={data.course_name}
                university={data.university}
                uni_address={data.uni_address}
                country={data.country}
                id={data.id}
              />
              <div className="mt-10">
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
                    course_fee_additional={data.course_fee_additional}
                    course_fee={data.course_fee}
                    currency={data.currency}
                    uni_address={data.uni_address}
                    created_at={data.created_at}
                    id={data.id}
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
                  IELTS (Academic only) - 7.0 (or better) (no component lower
                  than 7.0); TOEFL (paper based) - 600 (or better) (with a
                  minimum Test of Written English Score of TWE 5); TOEFL
                  (electronic or computer based) - 250 (or better) (with essay
                  rating of at least 5); TOEFL (internet based) - 95 (or better)
                  (with 22 minimum in all bands); Pearson (PTE Academic) - 65
                  (or better) (with no communicative score less than 65);
                  Cambridge English Scale Scores for FCE, CAE and CPE -
                  Cambridge English Advanced (CAE) and Cambridge English
                  Proficiency (CPE)/ 185 or above. No less than 185 in each
                  skill.
                </p>
              </div>
            </div>
            <div className="w-[30%] relative">
              <ApplicationForm />
            </div>
          </div>
        </InnerContainer>
      </ContainerLayout>
      <InterestedSection />
    </>
  );
};

export default CourseSinglePage;
