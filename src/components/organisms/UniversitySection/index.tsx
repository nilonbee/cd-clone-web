/* eslint-disable @next/next/no-img-element */
import { InnerContainer, SectionHeader } from "@/components/atoms";

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
            title="Universities We Offer"
            description="Lorem ipsum dolor sit amet consectetur. Sit hendrerit eget est."
          />

          <div className="grid gap-3 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mt-10 w-full">
            {uniImages.map((item, index) => (
              <div className="w-full h-[150px]" key={index}>
                <img
                  src={item.imgUri}
                  alt="uni"
                  className="object-content"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </InnerContainer>
  );
};
