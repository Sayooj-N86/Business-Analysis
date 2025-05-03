import React from "react";

const sect4 = [
  {
    heading: "Free Zones",
    points: [
      "Retain 100% ownership of your Dubai company",
      "0% corporate and income tax rate",
      "No custom duties",
      "Option to repatriate 100% of your capital and profits",
    ],
    btn: "Find your Free Zone",
  },
  {
    heading: "Mainland",
    points: [
      "Business activities not limited",
      "Operate anywhere inside and outside the country",
      "No limit on number of visas",
    ],
    btn: "Mainland Business Setup",
  },
];

const Section4 = () => {
  return (
    <div className="bg-[#F2F3EE] max-w-[1440px] m-auto  rounded-b-2xl">
      <div className="pt-10 pb-16 px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="text-[1.5rem] sm:text-[1.8rem] font-semibold text-center">
          What setup option is best for your business?
        </div>
        <div className="text-center text-[1rem] sm:text-[1.2rem] pt-2 pb-10">
          Business setup in Dubai (or anywhere in the UAE) can be complicated.
          <br />
          Decisions need to be made which can affect your journey and shape your
          success.
          <br />
          Jurisdiction? Free zone or mainland?
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sect4.map((sect, index) => (
            <div
              key={index}
              className="bg-white hover:bg-[#cfcfcf] flex flex-col justify-center px-6 md:px-8 lg:px-12 py-10 rounded-xl transition-all duration-300 ease-in-out hover:scale-105"
            >
              <div className="text-[1.5rem] sm:text-[1.8rem] font-semibold">
                {sect.heading}
              </div>
              {sect.points.map((item, itemIndex) => (
                <div key={itemIndex} className="pt-4 text-[0.95rem]  pl-2">
                  - {item}
                </div>
              ))}
              <div className="pt-10 flex justify-center">
                <button className="text-amber-950 border border-amber-600 hover:border-transparent hover:bg-[#F2F3EE] px-4 md:px-3 py-2 text-[1rem] flex justify-center items-center gap-2 group overflow-hidden rounded-lg transition-all duration-300 ease-in-out hover:scale-105">
                  {sect.btn}
                  <div className="transform -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 rotate-90 transition-all duration-300 ease-out">
                    ^
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section4;
