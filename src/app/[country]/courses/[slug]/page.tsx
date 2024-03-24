import {
  ContainerLayout,
  CourseSubHeader,
  Hero,
  InnerContainer,
} from "@/components/atoms";
import { CoursePriceBox, UniRow } from "@/components/molecules";
import { ApplicationForm, InterestedSection } from "@/components/organisms";

const CourseSinglePage = () => {
  return (
    <>
      <Hero />
      <ContainerLayout>
        <InnerContainer>
          <div className="my-12 flex flex-row w-full gap-4 relative">
            <div className="w-[70%]">
              <UniRow />
              <div className="mt-10">
                <CourseSubHeader title="What will I learn?" />
                <p className="font-semibold text-textColor text-sm my-4">
                  Overview of the course
                </p>
                <p className="text-textColor text-sm my-4 leading-6">
                  With a bigger world-focus on health than ever, start a career
                  in allied health with UniSQ’s Associate Degree of Allied
                  Health.An associate degree is a great way to start your first
                  degree at university or if you want a career change. It is a
                  qualification in its own right, but it is also a pathway to a
                  bachelor degree. This means that up to 12 courses that you
                  study can count towards a bachelor degree.This degree prepares
                  you for a career as an allied health assistant or for further
                  study in occupational therapy, physiotherapy, social work or
                  speech pathology.With a strong focus on rural and regional
                  health, you’ll gain foundational knowledge in evidence-based
                  practice, human communication, anatomy, physiology, culture,
                  health, illness, and working with diverse populations.Study
                  core allied health courses and have the opportunity to choose
                  a study stream in Occupational Therapy, Physiotherapy (from
                  2024), Social Work, or Speech Pathology.You&apos;ll graduate
                  with a uni qualification as well as a Certificate IV in Allied
                  Health Assistance (assessed and awarded externally by Rural
                  Medical Health Australia).Benefit from UniSQ’s flexible
                  delivery and have the option to study full-time or part-time
                  to suit your career goals and life commitments.
                </p>
                <p className="font-semibold text-textColor text-sm my-5">
                  Further study
                </p>
                <p className="text-textColor text-sm my-5 leading-6">
                  Successful completion of the Associate Degree will provide a
                  further study pathway into the Bachelor of Occupational
                  Therapy (Honours), Bachelor of Physiotherapy (Honours) (from
                  2024), Bachelor of Social Work, and Bachelor of Speech
                  Pathology (Honours). Based on your selected study stream, you
                  can apply for the relevant Bachelor Honours degree at QTAC and
                  receive credit for your studies in the Associate Degree of
                  Allied Health. Career outcomes You&apos;ll graduate with a uni
                  qualification as well as a Certificate IV in Allied Health
                  Assistance (assessed and awarded externally by Rural Medical
                  Health Australia).Graduates can find work as an advanced
                  allied health assistant in various health and wellbeing
                  settings, including disability and aged care, rehabilitation,
                  palliative care, community health and early learning settings.
                </p>
                <CourseSubHeader title="Which department am I in?" />
                <p className="text-textColor text-sm my-4 leading-6">
                  School of Nursing and Midwifery
                </p>
                <CourseSubHeader title="CRICOS" />
                <p className="text-textColor text-sm my-4 leading-6">111902E</p>
                <CourseSubHeader title="Study Options" />
                <div className="my-4">
                  <CoursePriceBox />
                </div>
                <CourseSubHeader title="Entry requirements" />
                <p className="font-semibold text-textColor text-sm my-4">
                  For students from Sri Lanka
                </p>
                <p className="text-textColor text-sm my-4 leading-6">
                  Students must have completed Sri Lankan GCE A levels by
                  passing in 3 Academic subjects with 3 &lsquo;S&rsquo; passes.
                  Applications are based on comparisons with Australian Year 12
                  level examinations. English Language Requirements: IELTS
                  (Academic only) score of 6.0 (or better) (no component lower
                  than 5.5); TOEFL (paper based) score of 550 (or better) (with
                  a minimum Test of Written English Score of TWE 4.5); TOEFL
                  (electronic or computer based) score of 213 (or better) (with
                  essay rating of at least 4.5); TOEFL (internet based) score of
                  80 (or better) (with 19 minimum in all bands); Pearson (PTE
                  Academic) score of 50 (or better) (with no communicative score
                  less than 50); Cambridge English: First (FCE)/ B2 First with a
                  score of 169 or above. No less than 162 in each skill.
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
