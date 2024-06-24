import React from "react";
import parse from "html-react-parser";
import {
  ContainerLayout,
  Hero,
  InnerContainer,
  SectionHeader,
} from "@/components/atoms";
import { BlogSection } from "@/components/organisms";
import { getBlogBySlug, getBlogs } from "@/utils/api-requests";
import { rootImagePath } from "@/utils/rootImagePath";
import { IBlogResponse } from "@/types/blogs";
import Image from "next/image";
import Head from "next/head";

const BlogSinglePage = async ({ params }: any) => {
  const blogData = await getBlogBySlug(params.slug);
  const blogs = (await getBlogs({ page: 1, pageSize: 4 })) as IBlogResponse;

  return (
    <>
      <Head>
        <title>{blogData.title}</title>
        <meta name="description" content={blogData.seo_description} />
        <meta property="og:title" content={blogData.title} />
        <meta property="og:description" content={blogData.seo_description} />
        <meta
          property="og:image"
          content={rootImagePath(blogData.image_path)}
        />
        <meta
          property="og:url"
          content={`https://campusdirect.io/blog/${params.slug}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blogData.title} />
        <meta name="twitter:description" content={blogData.seo_description} />
        <meta
          name="twitter:image"
          content={rootImagePath(blogData.image_path)}
        />
      </Head>
      <Hero />
      <ContainerLayout>
        <div className="pt-12 pb-12">
          <div className="flex flex-col justify-center items-center relative bg-transparent w-full">
            <SectionHeader
              title={blogData.title}
              description={blogData.seo_description}
            />
          </div>
        </div>
        <InnerContainer>
          <div className="justify-center flex">
            <Image
              src={rootImagePath(blogData.image_path)}
              width={577}
              height={377}
              alt=""
              className="object-contain rounded-md flex w-full h-[400px] mb-8"
            />
          </div>
          <div className="text-black/80">
            {parse(blogData.blog_description)}
          </div>
        </InnerContainer>
        <BlogSection initBlogs={blogs} seeMoreBtn={false} />
      </ContainerLayout>
    </>
  );
};

export default BlogSinglePage;
