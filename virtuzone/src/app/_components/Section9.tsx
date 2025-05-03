'use client';
import Image from "next/image";
import React, { useState } from "react";

const faqItems = [
  {
    heading: "Why choose Dubai for starting a business?",
    description: [
      "Tax-free business environment",
      "Strategic global location",
      "Easy company setup process",
      "World-class infrastructure",
      "Skilled international workforce",
      "No trade barriers or restrictions",
      "Access to 1.5B regional consumers"
    ]
  },
  {
    heading: "Why choose Dubai for starting a business?",
    description: [
      "Tax-free business environment",
      "Strategic global location",
      "Easy company setup process",
      "World-class infrastructure",
      "Skilled international workforce",
      "No trade barriers or restrictions",
      "Access to 1.5B regional consumers"
    ]
  },
  {
    heading: "How does Dubai's economy support businesses?",
    description: [
      "Government incentives for startups",
      "World-class infrastructure",
      "Strategic global trade hub location",
      "Business-friendly regulations"
    ]
  }
];

const Section9 = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-[1440px] m-auto">
      <div className="pt-10 pb-12 sm:pt-14 sm:pb-16 md:pt-16 md:pb-20 lg:pt-20 lg:pb-24">
        <div className="text-center font-semibold text-2xl sm:text-3xl md:text-[2rem]">
          FAQs
        </div>
        <div className="text-center text-base sm:text-lg md:text-xl pt-2 pb-8 sm:pb-12 md:pb-16 lg:pb-24 px-4 sm:px-8 md:px-16 lg:px-16 xl:px-44">
         Team experts fields common questions from people all over the
          globe about company formation in the UAE.
            formation in the UAE.
        </div>
        <div className="px-4 sm:px-6 md:px-12 lg:px-24 xl:px-40 space-y-3 sm:space-y-4">
          {faqItems.map((item, index) => (
            <div 
              key={index}
              className="bg-[#F3F2EE] px-4 py-3 sm:px-5 sm:py-4 md:px-6 md:py-5 lg:px-7 lg:py-5"
            >
              <div 
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleItem(index)}
              >
                <div className="text-lg sm:text-xl md:text-[1.2rem] font-semibold">
                  {item.heading}
                </div>
                <div className="relative h-4 w-4 sm:h-5 sm:w-5">
                  <Image 
                    src="/image/vplus.png" 
                    alt="toggle" 
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className={`overflow-hidden transition-all duration-300 ${
                activeIndex === index ? 'opacity-100 mt-2 sm:mt-3' : 'max-h-0 opacity-0'
              }`}>
                <ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-2">
                  {item.description.map((point, i) => (
                    <li key={i} className="text-sm sm:text-base md:text-lg">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section9;