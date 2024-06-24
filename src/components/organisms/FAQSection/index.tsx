"use client";
import { InnerContainer, SectionHeader } from "@/components/atoms";
import { MinusIcon, PlusIcon } from "@/components/atoms/Icons";
import React, { useState } from "react";

interface FAQ {
  question: string;
  answer: string[];
}

export const FAQSection: React.FC = () => {
  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);

  const toggleActiveIndex = (index: number) => {
    if (activeIndexes.includes(index)) {
      setActiveIndexes(activeIndexes.filter((item) => item !== index));
    } else {
      setActiveIndexes([...activeIndexes, index]);
    }
  };

  const faqsList: FAQ[] = [
    {
      question: "Why should we apply through Campus Direct?",
      answer: [
        "(01) <b>Extensive Network</b>: We have strong connections with internationally recognized universities and institutions, offering a wide range of tailored options.",
        "(02) <b>Expert Guidance:</b> Our experienced consultants provide personalized support throughout your application process.",
        "(03) <b>Successful Track Record:</b> We've placed numerous students in prestigious universities worldwide, helping them achieve their educational aspirations.",
        "(04) <b>Personal Attention:</b> We understand your unique needs and offer individualized advice to make informed decisions.",
        "(05) <b>Visa Assistance:</b> We simplify the complex visa process, ensuring a smooth transition to your chosen study destination.",
      ],
    },
    {
      question: "Are the services provided by Campus Direct free of charge?",
      answer: [
        "Our services are free of charge to students throughout the university application and visa process. However, we do charge a fee for any dependants that will be applying through us. Our team will provide you with transparent information about any applicable fees before proceeding with such services.",
      ],
    },
    {
      question:
        "Can Campus Direct assist with scholarship opportunities for international students?",
      answer: [
        "We offer guidance on available scholarships and financial aid opportunities offered by universities. We will assist you in exploring and applying for scholarships that match with your eligibility criteria.",
      ],
    },
    {
      question: "What are the eligibility requirements for studying abroad?",
      answer: [
        "Eligibility requirements for studying abroad vary depending on the country, university, and program you choose. Requirements may include academic qualifications, language proficiency, and financial documentation. Our knowledgeable counselors will guide you through the process and required documents.",
      ],
    },
    {
      question:
        "Does Campus Direct provide guidance for both undergraduate and postgraduate studies?",
      answer: [
        "Yes, Campus Direct guides both undergraduate and postgraduate studies. Our consultants support you at every academic level.",
      ],
    },
  ];

  return (
    <InnerContainer>
      <div className="mt-20 mb-20">
        <div className="flex flex-col justify-center items-center relative bg-transparent w-full">
          <SectionHeader
            title="Frequently Asked Questions"
            description="Navigate your path with clarity and confidence "
          />

          <div className="flex flex-col gap-3 justify-center items-center mt-10 w-full">
            {faqsList.map((faq, index) => (
              <div
                key={index}
                onClick={() => toggleActiveIndex(index)}
                className="rounded-[5px] p-[15px] self-stretch bg-white cursor-pointer border border-grayLight shadow"
              >
                <div className="flex justify-between items-center gap-2">
                  <p className="font-semibold leading-[26px] text-textColor text-sm">
                    {faq.question}
                  </p>
                  <div className="flex justify-center items-center">
                    {activeIndexes.includes(index) ? (
                      <MinusIcon />
                    ) : (
                      <PlusIcon />
                    )}
                  </div>
                </div>
                {activeIndexes.includes(index) &&
                  faq.answer.map((item, answerIndex) => (
                    <p
                      key={answerIndex}
                      className="text-sm text-textColor pt-5"
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </InnerContainer>
  );
};
