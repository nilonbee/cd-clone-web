"use client";
import {
  DialogBoxContainer,
  InnerContainer,
  SectionHeader,
} from "@/components/atoms";
import { GridWrapperTwo } from "@/components/molecules";
import { rootImagePath } from "@/utils/rootImagePath";
import Image from "next/image";
import { useState } from "react";
import ReactPlayer from "react-player/youtube";

export const StudentsSaysSection = () => {
  const [selectedUrl, setSelectedUrl] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const uniImages = [
    {
      imgUri: rootImagePath("/feedback/feedback1.jpg"),
      videoUri: "https://www.youtube.com/watch?v=uTLy9N24stk",
    },
    {
      imgUri: rootImagePath("/feedback/feedback2.jpg"),
      videoUri: "https://www.youtube.com/shorts/xGdjXl-RZaU",
    },
    {
      imgUri: rootImagePath("/feedback/feedback3.jpg"),
      videoUri: "https://www.youtube.com/shorts/COxRrlROlDE",
    },
    {
      imgUri: rootImagePath("/feedback/feedback4.jpg"),
      videoUri: "https://www.youtube.com/watch?v=mHn1sKgOjlY&t=24s",
    },
  ];
  return (
    <InnerContainer>
      <div className="mt-20 mb-20">
        <div className="flex flex-col justify-center items-center relative w-full">
          <SectionHeader
            title="What Our Students Say"
            description="Inspiring Stories, Empowering Journeys!"
          />
          <GridWrapperTwo>
            {uniImages.map((item, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-md shadow-lg cursor-pointer"
                onClick={() => {
                  setSelectedUrl(item.videoUri);
                  setIsOpen(true);
                }}
              >
                <Image
                  src={item.imgUri}
                  alt="student"
                  className="object-cover w-full h-[400px] rounded-md transition-transform duration-1000 transform hover:scale-110"
                  width={400}
                  height={400}
                />
              </div>
            ))}
          </GridWrapperTwo>
        </div>
      </div>
      {isOpen && (
        <DialogBoxContainer
          isOpen={isOpen}
          closeModal={() => setIsOpen(false)}
          actionBtn={false}
          customStyle="w-[800px]"
          padding="p-0"
        >
          <ReactPlayer url={selectedUrl} width="100%" height="500px" controls />
        </DialogBoxContainer>
      )}
    </InnerContainer>
  );
};
