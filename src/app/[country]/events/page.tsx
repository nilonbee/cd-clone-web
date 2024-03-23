import {
  ContainerLayout,
  InnerContainer,
  SectionHeader,
  Hero,
} from "@/components/atoms";
import React from "react";
import { PeopleIcon, TargetIcon, LightIcon } from "@/components/atoms/Icons";
import { events } from "@/mockData/events";
import { EventBox, GridWrapper } from "@/components/molecules/";

const articles = [
  {
    id: 1,
    image: "/images/about/about-1.png",
    description:
      "Welcome to Campus Direct, your leading career guidance, counseling, and student placement service center. With over 15 years of industryexperience and a proud legacy of providing world-class educationalconsultancy, we have been instrumental in guiding countless studentstowards successful placements in internationally recognized universitiesand institutions across the UK, USA, Canada, Australia, New Zealand,Germany, Singapore, and Malaysia. We have offices conveniently locatedin Sri Lanka Colombo and Kandy, United Arab Emirates Dubai, and theUnited Kingdom London, allowing us to provide personalized assistanceto students from diverse regions. At Campus Direct, we understand theimportance of university applications and the significance they hold inshaping students' futures. Our experienced educational consultants arededicated to assisting and guiding students at every step of theirjourney. We provide quality advice and personalized guidance, ensuringthat each student receives comprehensive support throughout theapplication process",
  },
  {
    id: 2,
    image: "/images/about/about-2.png",
    description:
      "Our team's expertise is reinforced by extensive training from esteemed institutions, including the UK agent and counselor certification program by the British Council, ICEF programs, partner universities, and foreign high commissions. This ensures our consultants are up-to-date on industry developments, university requirements, and visa processes, enabling them to offer reliable guidance to students. As a recognized center for overseas educational consultancy, we regularly host institutions for spot admissions and informative sessions, providing students with unique opportunities to interact with university representatives and gain valuable insights into their desired programs.",
  },
  {
    id: 3,
    image: "/images/about/about-3.png",
    description:
      "Our counseling services encompass undergraduate and postgraduate studies, covering a wide range of academic disciplines. We provide detailed overviews of available courses, tuition fees specific to the selected program, guidance on applying for scholarships, advice on English language requirements and prerequisite exams, as well as comprehensive visa guidance. As an ICEF Agency Status (IAS) accredited center and ISO 9001:2015 certified institution, we assure you of our unwavering commitment to excellence in educational consultancy. Our recognized status and certification signify our adherence to rigorous quality standards and ethical practices. With our proven expertise and dedication, we are here to support you in achieving your academic aspirations and paving the way for a successful future.",
  },
];

const segments = [
  {
    id: 1,
    icon: <TargetIcon />,
    title: "Our Mission",
    description:
      "Our Mission Our vision is to be the leading education consultancy of choice for students by ensuring our services cater to their individual needs and assist them in preparation for higher studies in overseas, which in turn will pave the path for rewarding careers and job prospects in the future.",
  },
  {
    id: 2,
    icon: <LightIcon />,
    title: "Our Vision",
    description:
      "Our Vision Our vision is to be the leading education consultancy of choice for students by ensuring our services cater to their individual needs and assist them in preparation for higher studies in overseas, which in turn will pave the path for rewarding careers and job prospects in the future.",
  },
  {
    id: 3,
    icon: <PeopleIcon />,
    title: "Join Our Community",
    description:
      "Campus Direct is passionate about empowering students to unlock their full potential and shape their futures. Join our community of successful students who have realized their dreams of studying abroad. Use our portal to apply to your preferred universities or contact us to schedule a consultation with one of our experienced educational consultants and embark on an extraordinary educational journey with Campus DirectFeel free to explore our website and discover how Campus Direct can help shape your educational journey.",
  },
];

const AboutPage = () => {
  return (
    <>
      <Hero />
      <ContainerLayout>
        <div className="my-12">
          <SectionHeader
            title="Events"
            description="Campus Direct is passionate about empowering students"
          />
        </div>
        <InnerContainer>
          <div className="mb-12">
            <GridWrapper gap="6">
              {events.map((event) => (
                <EventBox title={event.eventTitle} image={event.src} />
              ))}
            </GridWrapper>
          </div>
        </InnerContainer>
      </ContainerLayout>
    </>
  );
};

export default AboutPage;
