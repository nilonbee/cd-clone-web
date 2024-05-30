import React, { useState } from 'react'
import Blogs from "@/components/organisms/BlogsContent";
import {
  ContainerLayout,
  Hero,
  SectionHeader,
} from "@/components/atoms";
import { InterestedSection } from "@/components/organisms";
import { IBlogResponse } from "@/types/blogs";
import { getBlogs } from '@/utils/api-requests';

type FilterDataType = {
  page: number
  pageSize: number
}

const BlogsPage = async () => {
  // const [filterData, setFilterData] = useState<FilterDataType>({
  //   page: 1,
  //   pageSize: 10
  // })

  const blogs: IBlogResponse = await getBlogs({ page: 1, pageSize: 10 });
  return (
    <>
      <Hero />
      <ContainerLayout>
        <div className="pt-12 pb-12">
          <div className="flex flex-col justify-center items-center relative bg-transparent w-full">
            <SectionHeader
              title="Read Our Latest Blogs"
              description="Our blogs will help you with everything you want to know about studying abroad"
            />
          </div>
        </div>
        <Blogs blogsData={blogs} />
      </ContainerLayout>
      <InterestedSection />
    </>
  );
};

export default BlogsPage;
