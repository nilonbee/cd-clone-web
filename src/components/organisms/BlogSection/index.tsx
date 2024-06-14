import React from "react";
import { InnerContainer, MainButton, SectionHeader } from "@/components/atoms";
import { RightArrowIcon } from "@/components/atoms/Icons";
import { BlogPost, GridWrapper } from "@/components/molecules";
import { IBlog, IBlogResponse } from "@/types/blogs";
import Link from "next/link";

interface BlogSectionProps {
  seeMoreBtn?: boolean;
  initBlogs: IBlogResponse;
}

export const BlogSection = async ({
  seeMoreBtn = true,
  initBlogs,
}: BlogSectionProps) => {
  const removeHtmlTagsAndShorten = (text: string) => {
    return text.replace(/<[^>]*>?/gm, "").substring(0, 100);
  };

  return (
    <InnerContainer>
      <div className="mt-20 mb-20">
        <div className="flex flex-col justify-center items-center relative bg-transparent w-full">
          <SectionHeader
            title="Read Our Latest Blogs"
            description="Our blogs will help you with everything you want to know about studying abroad"
          />
          <div className="mt-10">
            <GridWrapper>
              {initBlogs?.data.map((item: IBlog, index: number) => (
                <BlogPost
                  key={index}
                  title={item.title}
                  blog_description={removeHtmlTagsAndShorten(
                    item.blog_description,
                  )}
                  createdAt={item.createdAt}
                  image_path={item.image_path}
                  author={item.author}
                  slug={item.slug}
                />
              ))}
            </GridWrapper>
          </div>
          {seeMoreBtn && (
            <div className="flex justify-center items-center mt-10">
              <Link href={"/blogs"}>
                <MainButton
                  label="See More"
                  btnStyle="Secondary"
                  btnSize="Medium"
                  icon={<RightArrowIcon />}
                  customStyle="w-[200px]"
                />
              </Link>
            </div>
          )}
        </div>
      </div>
    </InnerContainer>
  );
};
