import React from "react";
import Image from "next/image";

interface ImageWrapperProps {
  src: string;
  margin?: string;
  width: number;
  height: number;
}

export const ImageWrapper = ({
  src,
  margin,
  width,
  height,
}: ImageWrapperProps) => {
  return (
    <div className={`bg-whiteGray bg-opacity-30`}>
      <Image
        src={src}
        width={width}
        height={height}
        alt="image-rectangle"
        className={`flex justify-center m-${margin}`}
      />
    </div>
  );
};
