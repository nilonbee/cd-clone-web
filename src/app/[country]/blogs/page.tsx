import {
  ContainerLayout,
  Hero,
  InnerContainer,
  SectionHeader,
} from "@/components/atoms";
import { BlogPost, GridWrapper, Pagination } from "@/components/molecules";
import { InterestedSection } from "@/components/organisms";

const BlogsPage = () => {
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
    {
      title: "The Best University in the UK",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit hendrerit eget est.",
      date: "12th May 2021",
      image: "/images/blogs/blog5.png",
      author: "John Doe",
      viewCount: 100,
    },
    {
      title: "The Best University in the UK",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit hendrerit eget est.",
      date: "12th May 2021",
      image: "/images/blogs/blog6.png",
      author: "John Doe",
      viewCount: 100,
    },
    {
      title: "The Best University in the UK",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit hendrerit eget est.",
      date: "12th May 2021",
      image: "/images/blogs/blog7.png",
      author: "John Doe",
      viewCount: 100,
    },
    {
      title: "The Best University in the UK",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit hendrerit eget est.",
      date: "12th May 2021",
      image: "/images/blogs/blog8.png",
      author: "John Doe",
      viewCount: 100,
    },
    {
      title: "The Best University in the UK",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit hendrerit eget est.",
      date: "12th May 2021",
      image: "/images/blogs/blog9.png",
      author: "John Doe",
      viewCount: 100,
    },
    {
      title: "The Best University in the UK",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit hendrerit eget est.",
      date: "12th May 2021",
      image: "/images/blogs/blog10.png",
      author: "John Doe",
      viewCount: 100,
    },
    {
      title: "The Best University in the UK",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit hendrerit eget est.",
      date: "12th May 2021",
      image: "/images/blogs/blog11.png",
      author: "John Doe",
      viewCount: 100,
    },
    {
      title: "The Best University in the UK",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit hendrerit eget est.",
      date: "12th May 2021",
      image: "/images/blogs/blog12.png",
      author: "John Doe",
      viewCount: 100,
    },
    {
      title: "The Best University in the UK",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit hendrerit eget est.",
      date: "12th May 2021",
      image: "/images/blogs/blog13.png",
      author: "John Doe",
      viewCount: 100,
    },
    {
      title: "The Best University in the UK",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit hendrerit eget est.",
      date: "12th May 2021",
      image: "/images/blogs/blog14.png",
      author: "John Doe",
      viewCount: 100,
    },
    {
      title: "The Best University in the UK",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit hendrerit eget est.",
      date: "12th May 2021",
      image: "/images/blogs/blog15.png",
      author: "John Doe",
      viewCount: 100,
    },
    {
      title: "The Best University in the UK",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit hendrerit eget est.",
      date: "12th May 2021",
      image: "/images/blogs/blog16.png",
      author: "John Doe",
      viewCount: 100,
    },
  ];
  return (
    <>
      <Hero />
      <ContainerLayout>
        <div className="pt-12 pb-12">
          <div className="flex flex-col justify-center items-center relative bg-transparent w-full">
            <SectionHeader
              title="Read Our Latest Blogs"
              description="Welcsome to Campus Direct."
            />
          </div>
        </div>
        <InnerContainer>
          <div className="mb-12">
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
            <Pagination />
          </div>
        </InnerContainer>
      </ContainerLayout>
      <InterestedSection />
    </>
  );
};

export default BlogsPage;
