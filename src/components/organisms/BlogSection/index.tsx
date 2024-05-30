import React from 'react';
import { InnerContainer, MainButton, SectionHeader } from "@/components/atoms";
import { RightArrowIcon } from "@/components/atoms/Icons";
import { BlogPost, GridWrapper } from "@/components/molecules";
import { IBlog, IBlogResponse } from "@/types/blogs";
import { getBlogs } from "@/utils/api-requests";
import Link from 'next/link';

interface BlogSectionProps {
  seeMoreBtn?: boolean;
}

export const BlogSection = async ({ seeMoreBtn = true }: BlogSectionProps) => {
  const blogs: IBlogResponse = await getBlogs({ page: 1, pageSize: 10 });
  return (
    <InnerContainer>
      <div className="pt-20 pb-20">
        <div className="flex flex-col justify-center items-center relative bg-transparent w-full">
          <SectionHeader
            title="Read Our Latest Blogs"
            description="Our blogs will help you with everything you want to know about studying abroad"
          />
          <div className="mt-10">
            <GridWrapper>
              {blogs?.data.slice(0, 4).map((item: IBlog, index: number) => (
                <BlogPost
                  key={index}
                  title={item.title}
                  blog_description={item.seo_title}
                  createdAt={item.createdAt}
                  image_path={item.image_path}
                  author={item.author}
                  status={item.status}
                  slug={item.slug}
                />
              ))}
            </GridWrapper>
          </div>
          {seeMoreBtn && (
            <div className="flex justify-center items-center mt-10">
              <Link href={'/blogs'}>
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
