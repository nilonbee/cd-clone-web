/* eslint-disable @next/next/no-img-element */
import { InnerContainer, SectionHeader } from "@/components/atoms";
import { GridWrapperTwo } from "@/components/molecules";

export const UniversitySection = () => {
  const uniImages = [
    {
      imgUri: "/images/university/uni1.png",
    },
    {
      imgUri: "/images/university/uni2.png",
    },
    {
      imgUri: "/images/university/uni3.png",
    },
    {
      imgUri: "/images/university/uni4.png",
    },
    {
      imgUri: "/images/university/uni5.png",
    },
    {
      imgUri: "/images/university/uni6.png",
    },
    {
      imgUri: "/images/university/uni7.png",
    },
    {
      imgUri: "/images/university/uni8.png",
    },
  ];

  return (
    <InnerContainer>
      <div className="pt-20 pb-20">
        <div className="flex flex-col justify-center items-center relative bg-transparent w-full">
          <SectionHeader
            title="Our University Partners"
            description="Choose your preferred university from over 250 partner universities"
          />

          <GridWrapperTwo>
            {uniImages.map((item, index) => (
              <div
                className="w-full h-[150px] sm:h-[100px] xs:h-[80px]"
                key={index}
              >
                <img src={item.imgUri} alt="uni" className="object-cover" />
              </div>
            ))}
          </GridWrapperTwo>
        </div>
      </div>
    </InnerContainer>
  );
};
