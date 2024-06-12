"use client";
import React, { useEffect, useState } from "react";
import { InnerContainer, MainButton } from "@/components/atoms";
import { BlogPost, GridWrapper } from "@/components/molecules";
import { IBlog, IBlogResponse } from "@/types/blogs";
import { getBlogs } from "@/utils/api-requests";
import toast from "react-hot-toast";

type FilterDataType = {
  page: number;
  pageSize: number;
};

type BlogsPropTypes = {
  blogsData: IBlogResponse;
};

const Blogs: React.FC<BlogsPropTypes> = ({ blogsData }) => {
  const [loadMore, setLoadMore] = useState<boolean>(false);
  const [tempBlogsData, setTempBlogsData] = useState<IBlog[]>(blogsData.data);
  const [filterData, setFilterData] = useState<FilterDataType>({
    page: 1,
    pageSize: 20,
  });

  useEffect(() => {
    const fetchBlogs = async () => {
      const newBlogs = await getBlogs(filterData);
      if (newBlogs.data.length > 0) {
        setTempBlogsData((prevBlogs) => [...prevBlogs, ...newBlogs.data]);
      } else {
        toast.error("No more blogs to load");
      }
      setLoadMore(false);
    };

    if (filterData.page > 1) {
      fetchBlogs();
    }
  }, [filterData]);

  return (
    <InnerContainer>
      <div className="mb-12">
        <GridWrapper>
          {tempBlogsData.map((item: IBlog, index: number) => (
            <BlogPost
              key={index}
              title={item.title}
              blog_description={item.blog_description}
              createdAt={item.createdAt}
              image_path={item.image_path}
              author={item.author}
              status={item.status}
              slug={item.slug}
            />
          ))}
        </GridWrapper>
        <div className="flex justify-center my-4">
          <MainButton
            label="Load More"
            btnSize="Small"
            onClick={() => {
              setFilterData({ page: filterData.page + 1, pageSize: 20 });
              setLoadMore(true);
            }}
            loading={loadMore}
            disabled={loadMore}
          />
        </div>
      </div>
    </InnerContainer>
  );
};

export default Blogs;
