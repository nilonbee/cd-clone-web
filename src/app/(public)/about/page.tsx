import {
  ContainerLayout,
  InnerContainer,
  SectionHeader,
  Hero,
} from "@/components/atoms";
import { AboutParagraph, PurposeBox } from "@/components/molecules";
import React from "react";
import { PeopleIcon, TargetIcon, LightIcon } from "@components/atoms/Icons";
import { InterestedSection } from "@/components/organisms";
import { rootImagePath } from "@/utils/rootImagePath";

const articles = [
  {
    id: 1,
    image: rootImagePath("/about-us/about-us1.jpg"),
    description: [
      "Welcome to Campus Direct, your leading career guidance, counseling and student placement service center. With over 16 years of industry experience and a proud legacy of providing world-class educational consultancy, we have been instrumental in guiding countless students towards successful placements in internationally recognized universities and institutions across the UK, USA, Canada, Australia, New Zealand, Germany, Singapore and Malaysia. We have offices conveniently located in Sri Lanka (Colombo and Kandy), United Arab Emirates (Dubai) and the United Kingdom (London), allowing us to provide personalized assistance to students from diverse regions.",
      "At Campus Direct, we understand the importance of university applications and the significance they hold in shaping students' futures. Our experienced educational consultants are dedicated to assisting and guiding students at every step of their journey. We provide quality advice and personalized guidance ensuring that each student receives comprehensive support throughout the application process.",
    ],
  },
  {
    id: 2,
    image: rootImagePath("/about-us/about-us2.jpg"),
    description: [
      "Our team's expertise is backed by extensive knowledge gained through comprehensive training programs conducted by esteemed institutions. These include the UK Agent and Counselor Training Program conducted by the British Council as well as training programs provided by ICEF, partner universities and foreign high commissions. This training ensures that our consultants stay updated with the latest industry developments, university requirements and visa processes, equipping them with the necessary skills to provide reliable guidance to our students.",
      "As a recognized center for overseas educational consultancy, we are frequently visited by institutions for spot admissions and information sessions. This provides students with unique opportunities to interact with university representatives and gain valuable insights into their desired programs.",
    ],
  },
  {
    id: 3,
    image: rootImagePath("/about-us/about-us3.jpg"),
    description: [
      "Our counseling services encompass undergraduate and postgraduate studies, covering a wide range of academic disciplines. We provide detailed overviews of available courses, tuition fees specific to the selected program, guidance on applying for scholarships, advice on English language requirements and prerequisite exams, as well as comprehensive visa guidance.",
      "As an ICEF Agency Status (IAS) accredited center and ISO 9001:2015 certified institution, we assure you of our unwavering commitment to excellence in educational consultancy. Our recognized status and certification signify our adherence to rigorous quality standards and ethical practices. With our proven expertise and dedication we are here to support you in achieving your academic aspirations and paving the way for a successful future.",
    ],
  },
];

const segments = [
  {
    id: 1,
    icon: <TargetIcon />,
    title: "Our Mission",
    description: [
      "Our vision is to be the leading education consultancy of choice for students by ensuring our services cater to their individual needs and assist them in preparation for higher studies in overseas, which in turn will pave the path for rewarding careers and job prospects in the future.",
    ],
  },
  {
    id: 2,
    icon: <LightIcon />,
    title: "Our Vision",
    description: [
      "Our vision is to be the leading education consultancy of choice for students by ensuring our services cater to their individual needs and assist them in preparation for higher studies in overseas, which in turn will pave the path for rewarding careers and job prospects in the future.",
    ],
  },
  {
    id: 3,
    icon: <PeopleIcon />,
    title: "Join Our Community",
    description: [
      "Campus Direct is passionate about empowering students to unlock their full potential and shape their futures. Join our community of successful students who have realized their dreams of studying abroad. Use our portal to apply to your preferred universities or contact us to schedule a consultation with one of our experienced educational consultants and embark on an extraordinary educational journey with Campus Direct",
      "Feel free to explore our website and discover how Campus Direct can help shape your educational journey.",
    ],
  },
];

const AboutPage = () => {
  return (
    <>
      <Hero />
      <ContainerLayout>
        <div className="pt-12 pb-12">
          <div className="flex flex-col justify-center items-center relative bg-transparent w-full">
            <SectionHeader
              title="About Us"
              description="Welcome to Campus Direct."
            />
          </div>
        </div>
        <InnerContainer>
          {articles.map((article) => (
            <AboutParagraph
              key={article.id}
              image={article.image}
              description={article.description}
            />
          ))}

          <div className="block md:grid md:gap-6 grid-cols-2 m-auto  mt-12">
            {segments.slice(0, 2).map((segment, index) => (
              <PurposeBox
                key={index}
                icon={segment.icon}
                description={segment.description}
                title={segment.title}
              />
            ))}
          </div>

          <div className="block md:grid md:gap-6 grid-cols-1 m-auto">
            {segments.slice(2).map((segment, index) => (
              <PurposeBox
                key={index}
                icon={segment.icon}
                description={segment.description}
                title={segment.title}
              />
            ))}
          </div>
        </InnerContainer>
      </ContainerLayout>
      <InterestedSection />
    </>
  );
};

export default AboutPage;
