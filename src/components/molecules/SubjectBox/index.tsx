import { rootImagePath } from "@/utils/rootImagePath";
import React from "react";
interface Props {
  title: string;
  img: string;
}

export const SubjectBox = ({ img, title }: Props) => {
  return (
    <div
      className="relative h-[200px] overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-md"
      style={{
        backgroundImage: img
          ? `url(${rootImagePath(img)})`
          : "/images/24738.jpg",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50">
        <div className="flex gap-2 w-full p-3 h-[200px] items-end">
          <p className="font-semibold text-base text-white">{title}</p>
        </div>
      </div>
    </div>
    // <CardWrapper>
    //   <div className="flex flex-col">
    //     <div className="flex gap-2.5 items-center relative bg-transparent mb-2">
    //       <div className="w-[24px] h-[24px] mt-1">
    //         <HatIcon />
    //       </div>
    //       <h5 className="font-semibold text-base text-primary">{title}</h5>
    //     </div>
    //     {/* {subjects?.map((subject, index) => (
    //       <Link href="/lk" key={index}>
    //         <div
    //           key={index}
    //           className="w-full overflow-hidden border-b border-grayLight pb-2 pt-2 hover:bg-grayLight hover:bg-opacity-10 cursor-pointer"
    //         >
    //           <p className="text-sm text-black/60">{subject}</p>
    //         </div>
    //       </Link>
    //     ))} */}

    //     {/* <div className="flex flex-col gap-2 items-start relative bg-transparent mt-4">
    //       <div className="flex gap-2  justify-between items-center w-full">
    //         <MainButton
    //           label="View More"
    //           btnStyle="Secondary"
    //           btnSize="Medium"
    //           fullWith={true}
    //           icon={<RightArrowIcon />}
    //         />
    //       </div>
    //     </div> */}
    //   </div>
    // </CardWrapper>
  );
};
