/* eslint-disable @next/next/no-img-element */
import React from "react";
import { CardWrapper } from "..";
import { MainButton } from "@/components/atoms";
import { DateIcon, EyeIcon, RightArrowIcon } from "@/components/atoms/Icons";
import Link from "next/link";

type Props = {
  title: string;
  description: string;
  date: string;
  image: string;
  author: string;
  viewCount: number;
};

export const BlogPost = ({
  title,
  description,
  date,
  image,
  author,
  viewCount,
}: Props) => {
  return (
    <CardWrapper>
      <img
        src={image}
        alt="blog"
        className="object-cover w-full h-[200px] rounded"
      />
      <div className="pt-4">
        <h4 className="text-sm font-semibold text-textColor line-clamp-2 h-11">
          {title}
        </h4>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img
              className="inline-block h-5 w-5 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <p className="text-xs text-gray line-clamp-1">{author}</p>
          </div>
          <div className="flex items-center gap-2">
            <DateIcon />
            <p className="text-xs text-gray line-clamp-1">{date}</p>
          </div>
          <div className="flex items-center gap-2">
            <EyeIcon />
            <p className="text-xs text-gray line-clamp-1">{viewCount}</p>
          </div>
        </div>
        <p className="text-xs text-gray mt-2 line-clamp-4">{description}</p>
        <div className="flex gap-2  justify-between items-center w-full mt-4">
          <Link href="/lk/blogs/slug" className="w-full">
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
