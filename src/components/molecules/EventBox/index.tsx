import Link from "next/link";
import Image from "next/image";
import React from "react";
import { EventWrapper } from "@/components/atoms";

interface EventBoxProps {
  image: string;
  title: string;
}

export const EventBox = ({ image, title }: EventBoxProps) => {
  return (
    <Link href={`/lk/events/${title}`}>
      <EventWrapper>
        <Image
          src={image}
          alt={`event-image-${title}`}
          width={300}
          height={300}
          objectFit="cover"
        />
        <p className="text-base font-semibold mt-3 text-center line-clamp-2">
          {title}
        </p>
      </EventWrapper>
    </Link>
  );
};
