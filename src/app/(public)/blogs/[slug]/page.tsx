/* eslint-disable @next/next/no-img-element */
import React from "react";
import parse from "html-react-parser";

import {
  ContainerLayout,
  Hero,
  InnerContainer,
  SectionHeader,
} from "@/components/atoms";
import { BlogSection } from "@/components/organisms";
import { getBlogBySlug } from "@/utils/api-requests";
import { rootImagePath } from "@/utils/rootImagePath";


const BlogSinglePage = async ({ params }: any) => {
  const blogData = await getBlogBySlug(params.slug);

  return (
    <>
      <Hero />
      <ContainerLayout>
        <div className="pt-12 pb-12">
          <div className="flex flex-col justify-center items-center relative bg-transparent w-full">
            <SectionHeader
              title={blogData.seo_title}
              description={blogData.seo_description}
            />
          </div>
        </div>
        <InnerContainer>
          <div className="justify-center flex">
            <img
              src={rootImagePath(blogData.image_path)}
              alt=""
              className="object-contain rounded-sm flex w-[577px] h-[377px] mb-8"
            />
          </div>
          {/* <span className="font-semibold text-sm text-primary">{blogData.seo_keywords}</span> */}
          <p className="text-justify text-gray-600 text-sm leading-6">
            {parse(blogData.blog_description)}
          </p>
        </InnerContainer>
        <BlogSection seeMoreBtn={false} />
      </ContainerLayout>


    </>
  );
};

export default BlogSinglePage;
