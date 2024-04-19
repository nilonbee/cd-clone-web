import { ContainerLayout, InnerContainer } from "@/components/atoms";
import Image from "next/image";
import React from "react";

export const CareersBanner = () => {
  return (
    <div className="min-h-[400px] ">
      <ContainerLayout>
        <InnerContainer>
          <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-4 w-full">
            <div className="flex flex-col gap-4 justify-center lg:w-3/4 md:w-full sm:w-full py-10">
              <h1 className="text-3xl font-bold text-primary mb-2">
                Careers at Campus Direct{" "}
              </h1>
              <p className="text-textColor text-sm mb-2">
                Join Campus Direct and embark on a fulfilling career in the
                field of education. At Campus Direct, we are passionate about
                guiding students towards their educational aspirations and
                making a positive impact on their lives.
              </p>
              <p className="text-textColor text-sm mb-2">
                As part of our team, you will have the opportunity to contribute
                to the success stories of students, work in a collaborative
                environment, continuously learn and grow, and be part of a
                vibrant and student-centric culture. Take the next step in your
                career journey and explore the exciting career opportunities
                available at Campus Direct. Current Job Opportunities:
              </p>
            </div>
            <div className="flex justify-end lg:w-1/4 md:w-full sm:w-full lg:block md:hidden sm:hidden xs:hidden">
              <Image
                src="/images/9462057.jpg"
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
