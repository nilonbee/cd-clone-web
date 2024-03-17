"use client";
import { InnerContainer, SectionHeader } from "@/components/atoms";
import { MinusIcon, PlusIcon } from "@/components/atoms/Icons";
import { useState } from "react";

export const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const faqsList = [
    {
      question: "Why should we apply through Campus Direct?",
      answer:
        "Extensive Network: We have strong connections with internationally recognized universities and institutions, offering a wide range of tailored options.",
    },
    {
      question: "Are the services provided by Campus Direct free of charge?",
      answer:
        "Our services are free of charge to students throughout the university application and visa process. However, we do charge a fee for any dependants that will be applying through us. Our team will provide you with transparent information about any applicable fees before proceeding with such services.",
    },
    {
      question:
        "Can Campus Direct assist with scholarship opportunities for international students?",
      answer:
        "We offer guidance on available scholarships and financial aid opportunities offered by universities. We will assist you in exploring and applying for scholarships that match with your eligibility criteria.",
    },
    {
      question: "What are the eligibility requirements for studying abroad?",
      answer:
        "Eligibility requirements for studying abroad vary depending on the country, university, and program you choose. Requirements may include academic qualifications, language proficiency, and financial documentation. Our knowledgeable counselors will guide you through the process and required documents.",
    },
    {
      question:
        "Does Campus Direct provide guidance for both undergraduate and postgraduate studies?",
      answer:
        "Yes, Campus Direct guides both undergraduate and postgraduate studies. Our consultants support you at every academic level.",
    },
  ];
  return (
    <InnerContainer>
      <div className="pt-20 pb-20">
        <div className="flex flex-col justify-center items-center relative bg-transparent w-full">
          <SectionHeader
            title="Frequently Asked Questions"
            description="Lorem ipsum dolor sit amet consectetur. Sit hendrerit eget est."
          />

          <div className="flex flex-col gap-3 justify-center items-center mt-10 w-full">
            {faqsList.map((faq, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className="rounded-[5px] p-[15px] self-stretch bg-white cursor-pointer border border-grayLight shadow"
              >
                <div className="flex justify-between items-center gap-2">
                  <p className="font-semibold leading-[26px] text-base text-textColor">
                    {faq.question}
                  </p>
                  <div className="flex justify-center items-center">
                    {activeIndex === index ? <MinusIcon /> : <PlusIcon />}
                  </div>
                </div>
                <p
                  className="text-sm text-textColor pt-5"
                  style={{ display: activeIndex === index ? "block" : "none" }}
                >
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </InnerContainer>
  );
};
