import Image from "next/image";
import Link from "next/link";
import React from "react";

const services = [
  {
    image: "/svg/sec1.svg",
    heading: "Corporate Tax & VAT",
    description: "Expert advice ensures compliance with Corporate Tax and VAT obligations with the Federal Tax Authority (FTA).",
  },
  {
    image: "/svg/sec1.svg",
    heading: "Corporate Tax & VAT",
    description: "Expert advice ensures compliance with Corporate Tax and VAT obligations with the Federal Tax Authority (FTA).",
  },
  {
    image: "/svg/sec1.svg",
    heading: "Corporate Tax & VAT",
    description: "Expert advice ensures compliance with Corporate Tax and VAT obligations with the Federal Tax Authority (FTA).",
  },
  {
    image: "/svg/sec1.svg",
    heading: "Corporate Tax & VAT",
    description: "Expert advice ensures compliance with Corporate Tax and VAT obligations with the Federal Tax Authority (FTA).",
  },
  {
    image: "/svg/sec1.svg",
    heading: "Corporate Tax & VAT",
    description: "Expert advice ensures compliance with Corporate Tax and VAT obligations with the Federal Tax Authority (FTA).",
  },
  {
    image: "/svg/sec1.svg",
    heading: "Corporate Tax & VAT",
    description: "Expert advice ensures compliance with Corporate Tax and VAT obligations with the Federal Tax Authority (FTA).",
  },
  // Add your 7 other service items here
  // (I've shown one for brevity, duplicate with your actual content)
];

const Section1 = () => {
  return (
    <div className="pb-10 md:pb-20 pt-8 md:pt-12 px-4 sm:px-6 lg:px-8 max-w-[1440px] m-auto">
      <div className="text-center">
        <h2 className="text-[1.2rem] md:text-[2rem] font-bold">
          Already own a business?
        </h2>
        <p className="text-[0.9rem] md:text-[1.2rem] pt-2 pb-8 md:pb-12 max-w-3xl mx-auto">
          Simplify your operations with our end-to-end suite of corporate services
        </p>
      </div>

      <div className="grid  grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-8  md:px-10 lg:px-8 xl:px-24">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="bg-[#F2F3EE]   transition-all duration-300 ease-in-out hover:scale-105 rounded-xl p-2 md:p-5 flex flex-col items-center md:items-start "
          >
            <div className="relative h-10 w-10 mb-3 ">
              <Image 
                src={service.image} 
                alt={service.heading} 
                fill
                className="object-contain "
              />
            </div>
            <h3 className="font-semibold text-[0.8rem] md:text-[1rem] mb-2">
              {service.heading}
            </h3>
            <p className="text-[0.6rem] md:text-[0.9rem] pb-2 md:pb-4 flex-grow">
              {service.description}
            </p>
            <Link 
              href="/" 
              className="bg-gradient-to-r from-purple-900 to-blue-800 bg-clip-text text-transparent text-[0.7rem] md:text-[0.9rem] font-semibold hover:underline self-start"
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section1;