/* eslint-disable @next/next/no-img-element */
import { InnerContainer, MainButton, SectionHeader } from "@/components/atoms";
import { RightArrowIcon } from "@/components/atoms/Icons";
import { GridWrapper, GridWrapperTwo } from "@/components/molecules";

export const StudentsSaysSection = () => {
  const uniImages = [
    {
      imgUri: "/images/students/stu1.png",
    },
    {
      imgUri: "/images/students/stu2.png",
    },
    {
      imgUri: "/images/students/stu3.png",
    },
    {
      imgUri: "/images/students/stu4.png",
    },
  ];

  return (
    <InnerContainer>
      <div className="mt-20 mb-20">
        <div className="flex flex-col justify-center items-center relative bg-transparent w-full">
          <SectionHeader
            title="What Our Students Says"
            description="Lorem ipsum dolor sit amet consectetur. Sit hendrerit eget est."
          />

          <GridWrapperTwo>
            {uniImages.map((item, index) => (
              <div className="w-full h-auto" key={index}>
                <img src={item.imgUri} alt="uni" className="object-cover w-full" />
              </div>
            ))}
          </GridWrapperTwo>
          {/* See More Butn */}
          <div className="flex justify-center items-center mt-10">
            <MainButton
              label="See More"
              btnStyle="Secondary"
              btnSize="Medium"
              icon={<RightArrowIcon />}
              customStyle="w-[200px]"
            />
          </div>
        </div>
      </div>
    </InnerContainer>
  );
};
