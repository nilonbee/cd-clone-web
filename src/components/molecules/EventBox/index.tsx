import Link from "next/link";
import Image from "next/image";
import React from "react";
import { CardWrapper } from "../CardWrapper";

interface EventBoxProps {
  image: string;
  title: string;
  slug: string;
}

export const EventBox = ({ image, title, slug }: EventBoxProps) => {
  return (
    <Link href={`/events/${slug}`}>
      <CardWrapper bgColor="bg-lightBlue" cssCustom="bg-opacity-40">
        <Image
          src={image}
          alt={`event-image-${title}`}
          className="rounded-lg h-[300px] w-full object-cover border border-boxBorder"
          width={300}
          height={300}
        />
        <p className="text-sm font-semibold mt-3 text-center line-clamp-2 h-10 text-textColor">
          {title}
        </p>
      </CardWrapper>
    </Link>
  );
};
