import { ContainerLayout, InnerContainer } from "@/components/atoms";
import Image from "next/image";
import React from "react";

export const ScholarshipsBanner = () => {
  return (
    <div className="min-h-[400px] ">
      <ContainerLayout>
        <InnerContainer>
          <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-4 w-full">
            <div className="flex flex-col gap-4 justify-center lg:w-3/4 md:w-full sm:w-full py-10">
              <h1 className="text-3xl font-bold text-primary mb-2">
                Scholarships at Campus Direct
              </h1>
              <p className="text-textColor text-sm mb-2">
                Welcome to the Scholarships page at Campus Direct! We understand
                that financing your education is a significant aspect of your
                academic journey. That&apos;s why we are dedicated to helping
                you explore and secure various scholarship opportunities that
                can make your dreams of studying abroad a reality.
              </p>
              <p className="text-textColor text-sm mb-2">
                Scholarships provide valuable financial support, easing the
                burden of tuition fees and living expenses. They not only make
                education more affordable but also recognize and reward your
                academic achievements, talents, and potential. Scholarships can
                open doors to prestigious institutions, enrich your learning
                experience, and enhance your career prospects.
              </p>
              <p className="text-textColor text-sm mb-2">
                At Campus Direct, we offer a comprehensive approach to
                scholarships. Our curated selection includes scholarships from
                universities, ensuring that you have access to a wide range of
                opportunities. We continually update our scholarship database to
                provide you with the latest information, so you can explore and
                apply for scholarships that align with your goals and
                aspirations.
              </p>
            </div>
            <div className="flex justify-end lg:w-1/4 md:w-full sm:w-full lg:block md:hidden sm:hidden xs:hidden">
              <Image
                src="/images/19245722_6101668.jpg"
                className="h-[400px] w-auto object-cover"
                width={500}
                height={500}
                alt="Scholarships"
              />
            </div>
          </div>
        </InnerContainer>
      </ContainerLayout>
    </div>
  );
};
