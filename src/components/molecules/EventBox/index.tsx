import Link from "next/link";
import Image from "next/image";
import React from "react";
import { EventWrapper } from "@/components/atoms";

interface EventBoxProps {
  image: string;
  title: string;
  slug: string;
}

export const EventBox = ({ image, title, slug }: EventBoxProps) => {
  return (
    <Link href={`/lk/events/${slug}`}>
      <EventWrapper>
        <Image
          src={image}
          alt={`event-image-${title}`}
          width={300}
          height={300}
          objectFit="cover"
        />
        <p className="text-base font-semibold mt-3 text-center">
          {title}
        </p>
      </EventWrapper>
    </Link>
  );
};
