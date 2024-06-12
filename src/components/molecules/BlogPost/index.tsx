/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import parse from "html-react-parser";
import Link from "next/link";
import { CardWrapper } from "..";
import { MainButton } from "@/components/atoms";
import { DateIcon, RightArrowIcon } from "@/components/atoms/Icons";
import { rootImagePath } from "@/utils/rootImagePath";

type Props = {
  title: string;
  blog_description: string;
  createdAt: string;
  image_path: string;
  author: string;
  status?: number;
  slug: string;
};

export const BlogPost = ({
  title,
  blog_description,
  createdAt,
  image_path,
  author,
  slug,
}: Props) => {
  return (
    <CardWrapper>
      <img
        src={rootImagePath(`${image_path}`)}
        alt="blog_feature_image"
        className="object-cover w-full h-[200px] rounded-md"
      />
      <div className="pt-4">
        <h4 className="text-sm font-semibold text-textColor line-clamp-2 h-11">
          {title}
        </h4>
        <div className="flex justify-between items-center">
          <div className="flex items-center mr-2">
            <img
              className="inline-block h-5 w-5 rounded-full ring-1 ring-black/45"
              src={"images/avater.jpg"}
              alt="avatar_image"
            />
            <p className="text-xs text-gray line-clamp-1 ml-1">{author}</p>
          </div>
          <div className="flex items-center gap-2">
            <DateIcon />
            <p className="text-xs text-gray line-clamp-1">
              {createdAt.slice(0, 10)}
            </p>
          </div>
          {/* <div className="flex items-center gap-2">
            <EyeIcon />
            <p className="text-xs text-gray line-clamp-1">{status}</p>
          </div> */}
        </div>
        <p className="text-xs text-gray mt-2 line-clamp-2">
          {parse(blog_description)}
        </p>
        <div className="flex gap-2 justify-between items-center w-full mt-4">
          <Link href={`/blogs/${slug}`} className="w-full">
            <MainButton
              label="Read More"
              btnStyle="Secondary"
              btnSize="Medium"
              fullWith={true}
              icon={<RightArrowIcon />}
            />
          </Link>
        </div>
      </div>
    </CardWrapper>
  );
};
