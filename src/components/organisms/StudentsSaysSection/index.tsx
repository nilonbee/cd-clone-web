import { InnerContainer, SectionHeader } from "@/components/atoms";
import { GridWrapperTwo } from "@/components/molecules";
import Image from "next/image";

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
        <div className="flex flex-col justify-center items-center relative w-full">
          <SectionHeader
            title="What Our Students Says"
            description="Lorem ipsum dolor sit amet consectetur. Sit hendrerit eget est."
          />
          <GridWrapperTwo>
            {uniImages.map((item, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-md shadow-lg cursor-pointer"
              >
                <Image
                  src={item.imgUri}
                  alt="student"
                  className="object-cover w-full h-[400px] rounded-md transition-transform duration-1000 transform hover:scale-110"
                  layout="responsive"
                  width={400}
                  height={400}
                />
              </div>
            ))}
          </GridWrapperTwo>
          {/* See More Butn */}
          {/* <div className="flex justify-center items-center mt-10">
            <MainButton
              label="See More"
              btnStyle="Secondary"
              btnSize="Medium"
              icon={<RightArrowIcon />}
              customStyle="w-[200px]"
            />
          </div> */}
        </div>
      </div>
    </InnerContainer>
  );
};
