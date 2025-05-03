import Image from "next/image";
import React from "react";

const challenges = [
  {
    no: 1,
    heading: "There is a multitude of options.",
    description:
      "With over 60 jurisdictions, how do you know which is the right one for your Dubai company? How do you make sure you're choosing the right licence and business activity? Don't let your business setup in Dubai be a trial-and-error process.",
  },
  {
    no: 2,
    heading: "It is not easy.",
    description:
      "Liaising with the relevant authorities and government departments alone takes time and travel miles. Lots of both.",
  },
  {
    no: 3,
    heading: "There is a mountain of paperwork.",
    description:
      "Starting a Dubai company involves tonnes of paperwork. Think forms, applications, banking and legal requirements - and that is just the start.",
  },
  {
    no: 4,
    heading: "You might save money - but at what cost?",
    description:
      "What is your time worth? Are you outstanding with detail? Can you afford to hit pause on your business plans to fill out forms or attend more meetings?",
  },
];

const Section2 = () => {
  return (
    <div className="bg-[#F2F3EE] py-10 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-[1440px] m-auto rounded-t-2xl">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h2 className="text-[1rem] md:text-[1.3rem]  lg:text-[2rem] font-bold leading-tight px-4 md:px-auto">
            Should you undertake business setup in Dubai yourself?
          </h2>
          <p className="text-[0.9rem] md:text-[1.1rem] lg:text-[1.2rem] mt-2 mb-8 sm:mb-10 lg:mb-12 max-w-3xl mx-auto px-4 md:auto">
            Wondering if you can start a Dubai company yourself? You can. But there
            are some things you need to know.
          </p>
        </div>

        <div className="flex flex-col gap-6 lg:gap-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-8 lg:gap-4 md:px-10 lg:px-4  ">
            {challenges.map((item) => (
              <div key={item.no} className="bg-white p-3  md:p-6 lg:p-4 rounded-xl shadow-md hover:shadow-md transition-shadow">
                <div className="flex justify-center">
                  <span className="bg-[#fff7f7] rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-amber-900 font-medium text-lg">
                    {item.no}
                  </span>
                </div>
                <h3 className="font-semibold text-[0.7rem] md:text-[1rem] lg:text-[1.2rem] pt-2 sm:mt-5">
                  {item.heading}
                </h3>
                <p className="text-[0.6rem] md:text-[0.9rem] mt-2 sm:mt-3 text-gray-700">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl  shadow-sm">
            <div className="flex flex-col lg:flex-row ">
              <div className="p-6 sm:p-8 lg:p-10  flex flex-col lg:flex-row ">
                <div className="">
                  <h3 className="font-semibold text-xl sm:text-2xl lg:text-[1.3rem]">
                    But it does not have to be this way.
                  </h3>
                  <p className="pt-3 sm:pt-4  sm:text-[1rem] text-gray-700">
                    Before you do anything, talk to one of our experts at company
                    formation in Dubai. We will show you how easy the Virtuzone
                    process is and why we were the partner of choice for more
                    entrepreneurs choosing to start a Dubai company.
                  </p>
                <div className="flex flex-col md:flex-row gap-3 sm:gap-4 mt-6 md:mt-8 pb-4">
                  <button className="bg-emerald-600 hover:bg-white text-white hover:text-emerald-700 border border-transparent hover:border-emerald-600 py-2 px-4 sm:py-3 sm:px-6 rounded-lg transition-all duration-200 hover:scale-105 shadow-sm hover:shadow-md">
                    Evaluate Now
                  </button>
                  <button className="bg-emerald-600 hover:bg-white text-white hover:text-emerald-700 border border-transparent hover:border-emerald-600 py-2 px-4 sm:py-3 sm:px-6 rounded-lg transition-all duration-200 hover:scale-105 shadow-sm hover:shadow-md">
                    Speak to an expert
                  </button>
                </div>
                </div>
              <div className="relative   h-40 md:h-70 lg:h-50 w-full">
                <Image
                  src="/image/sect2.webp"
                  alt="Business setup consultation"
                 fill
                  className="rounded-xl object-cover transition-all duration-300 ease-in-out hover:scale-105"
                
                />
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;