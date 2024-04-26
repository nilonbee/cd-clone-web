"use client";
import Link from "next/link";
import React from "react";
import { CardWrapper } from "../CardWrapper";
import { IKImage } from "imagekitio-react";
import { ImageKitEndpoint } from "@/utils/rootImagePath";

interface EventBoxProps {
  image: string;
  title: string;
  slug: string;
}

export const EventBox = ({ image, title, slug }: EventBoxProps) => {
  return (
    <Link href={`/events/${slug}`}>
      <CardWrapper bgColor="bg-lightBlue" cssCustom="bg-opacity-40">
        <IKImage
          urlEndpoint={ImageKitEndpoint}
          path={image}
          className="rounded-lg w-full object-cover border border-boxBorder"
          height={300}
          width={300}
          loading="lazy"
        />
        <p className="text-sm font-semibold mt-3 text-center line-clamp-2 h-10 text-textColor">
          {title}
        </p>
      </CardWrapper>
    </Link>
  );
};
