import { ContainerLayout, Hero, InnerContainer } from "@/components/atoms";
import { PinIcon, UniversityIcon } from "@/components/atoms/Icons";
import { CourseBoxModel, GridWrapper } from "@/components/molecules";
import { ICourse } from "@/types/courses";
import { getScholarshipBySlug } from "@/utils/api-requests";
import { rootImagePath } from "@/utils/rootImagePath";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import { FiUsers } from "react-icons/fi";

const ScholarshipsPage = async ({ params }: any) => {
  const scholarshipData = await getScholarshipBySlug(params.slug);

  return (
    <div>
      <Head>
        <title>{scholarshipData?.title}</title>
        <meta name="description" content={scholarshipData.meta_description} />
        <meta property="keywords" content={scholarshipData.meta_keywords} />
        <meta property="og:title" content={scholarshipData.meta_title} />
        <meta
          property="og:description"
          content={scholarshipData.meta_description}
        />
        <meta
          property="og:image"
          content={rootImagePath(scholarshipData.cover_url)}
        />
        <meta
          property="og:url"
          content={`https://campusdirect.io/blog/${scholarshipData.slug}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={scholarshipData.meta_title} />
        <meta
          name="twitter:description"
          content={scholarshipData.meta_description}
        />
        <meta
          name="twitter:image"
          content={rootImagePath(scholarshipData.cover_url)}
        />
      </Head>
      <Hero />
      <Image
        src={rootImagePath(scholarshipData.banner_url)}
        width={577}
        height={377}
        alt=""
        className="object-cover flex w-full h-[300px] "
      />
      <ContainerLayout>
        <div className="-mt-20 mb-5 bg-white z-10 relative rounded-t-[50px]">
          <InnerContainer>
            <div className="flex items-center gap-4 pt-5">
              <Image
                src={rootImagePath(scholarshipData.cover_url)}
                width={577}
                height={377}
                alt=""
                className="object-cover rounded-full flex w-[100px] h-[100px]"
              />
              <div className="">
                <p className="text-base font-semibold mt-3 text-textColor">
                  {scholarshipData.title}
                </p>
                <div className="flex gap-2 items-center relative">
                  <div className="w-[18px] h-[18px]">
                    <UniversityIcon />
                  </div>
                  <p className="text-sm text-black/60 line-clamp-1">
                    {scholarshipData.university.name}
                  </p>
                </div>
                <div className="flex gap-2 items-center relative">
                  <div className="w-[18px] h-[18px]">
                    <PinIcon />
                  </div>
                  <p className="text-sm text-black/60 line-clamp-1">
                    {scholarshipData.country.name}
                  </p>
                </div>
                <div className="flex gap-2 items-center relative">
                  <div className="w-[18px] h-[18px] text-black/60">
                    <FiUsers />
                  </div>
                  <p className="text-sm text-black/60 line-clamp-1">
                    <b>{scholarshipData.quantity}</b> Scholarships
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 w-full mb-10">
              <GridWrapper>
                {scholarshipData?.course?.map(
                  (item: ICourse, index: number) => (
                    <CourseBoxModel
                      key={index}
                      id={item.id}
                      course_name={item.course_name}
                      course_fee={item.course_fee}
                      country={scholarshipData.country.name}
                      level_name={item.level_name}
                      uni_logo={scholarshipData.university.uni_logo}
                      university={scholarshipData.university.name}
                      currency={item.currency}
                      btnView={true}
                      isScholarship={true}
                      countryId={scholarshipData.country_id}
                      course_level_id={item.course_level_id}
                    />
                  ),
                )}
              </GridWrapper>
            </div>
          </InnerContainer>
        </div>
      </ContainerLayout>
    </div>
  );
};

export default ScholarshipsPage;
