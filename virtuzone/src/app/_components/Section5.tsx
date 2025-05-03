import React from "react";

const sect5 = [
  {
    head: "1. Prepare Documentation",
    description:
      "If you’re an overseas entrepreneur starting up in a new country for the first time, the documentation process can be daunting. We help you to make the right decisions for your Dubai company and handle all of the complex paperwork.",
  },
  {
    head: "2. Business Licence",
    description:
      "Choosing the right licence and applying for it are essential to getting your business setup in Dubai right. Having an in-depth understanding of the dos and don’ts around setting up your business licence will help you to avoid the common traps we see people fall into. For instance, some business categories require prior approvals from certain authorities. A company formation expert will guide you through the necessary requirements to start your business.",
  },
  {
    head: "3. Visa Process",
    description:
      "Private companies can obtain new employment entry permits for their employees provided they apply for residence visa status within 30 days of the employee’s entry into the UAE.",
  },
  {
    head: "4. Bank Account",
    description:
      "Setting up a corporate bank account in the UAE can be a little arduous for international entrepreneurs. It requires careful consideration and there are several boxes to tick to ensure you have everything in place before approaching your bank of choice.",
  },
];

const Section5 = () => {
  return (
    <div className="max-w-[1440px] m-auto">
      <div className="pt-10 pb-24 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-56">
        <div className="text-center font-semibold text-[1.5rem] sm:text-[2rem]">
          The process of business setup in Dubai
        </div>

        <div className="text-center text-[1rem] sm:text-[1.2rem] pt-2 pb-10 leading-relaxed">
          With Virtuzone as your company formation partner, registering a
          company in the UAE is not only easy, but it’s the most cost-effective
          way to do it! In fact, the entire process can take as little as 24
          hours! That’s right! All you have to do is supply us with the relevant
          information about your company and we do the rest. Here’s our
          time-tested process:
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 xl:gap-10">
          {sect5.map((item, index) => (
            <div
              key={index}
              className="bg-[#F2F3EE] rounded-xl p-6 sm:p-8 md:p-10 lg:p-12 transition-all duration-300 ease-in-out hover:scale-105"
            >
              <div className="text-[1.25rem] sm:text-[1.5rem] font-semibold pb-3">
                {item.head}
              </div>
              <div className="text-[0.95rem] sm:text-base">{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section5;
