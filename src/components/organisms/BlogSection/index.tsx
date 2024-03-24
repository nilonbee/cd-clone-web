import { InnerContainer, MainButton, SectionHeader } from "@/components/atoms";
import { RightArrowIcon } from "@/components/atoms/Icons";
import { BlogPost, GridWrapper } from "@/components/molecules";

interface BlogSectionProps {
  seeMoreBtn?: boolean;
}

export const BlogSection = ({ seeMoreBtn = true }: BlogSectionProps) => {
  const blogPost = [
    {
      title: "The Evolution of Higher Education: Trends in Modern Universities",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit hendrerit eget est.",
      date: "12th May 2021",
      image: "/images/blogs/blog1.png",
      author: "John Doe",
      viewCount: 100,
    },
    {
      title: "The Best University in the UK",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit hendrerit eget est.",
      date: "12th May 2021",
      image: "/images/blogs/blog2.png",
      author: "John Doe",
      viewCount: 100,
    },
    {
      title: "The Best University in the UK",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit hendrerit eget est.",
      date: "12th May 2021",
      image: "/images/blogs/blog3.png",
      author: "John Doe",
      viewCount: 100,
    },
    {
      title: "The Best University in the UK",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit hendrerit eget est.",
      date: "12th May 2021",
      image: "/images/blogs/blog4.png",
      author: "John Doe",
      viewCount: 100,
    },
  ];
  return (
    <InnerContainer>
      <div className="pt-20 pb-20">
        <div className="flex flex-col justify-center items-center relative bg-transparent w-full">
          <SectionHeader
            title="Read Our Latest Blogs"
            description="Lorem ipsum dolor sit amet consectetur. Sit hendrerit eget est."
          />
          <div className="mt-10">
            <GridWrapper>
              {blogPost.map((item, index) => (
                <BlogPost
                  key={index}
                  title={item.title}
                  description={item.description}
                  date={item.date}
                  image={item.image}
                  author={item.author}
                  viewCount={item.viewCount}
                />
              ))}
            </GridWrapper>
          </div>
          {seeMoreBtn && (
            <div className="flex justify-center items-center mt-10">
              <MainButton
                label="See More"
                btnStyle="Secondary"
                btnSize="Medium"
                icon={<RightArrowIcon />}
                customStyle="w-[200px]"
              />
            </div>
          )}
        </div>
      </div>
    </InnerContainer>
  );
};
