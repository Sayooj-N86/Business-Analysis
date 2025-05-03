import Image from "next/image";
import Link from "next/link";
import React from "react";

const sect7 = [
  {
    image: "/image/sect71.webp",
    heading:
      "E-Trader Licence Dubai 2025: How to Apply, Costs, Permitted Activities & Success Stories",
    date: "Mar 5, 2025",
  },
  {
    image: "/image/sect72.webp",
    heading:
      "Corporate Governance in the UAE: What Business Owners and Entrepreneurs Need to Know",
  },
  {
    image: "/image/sect73.webp",
    heading: "Getting a Freelance Visa Dubai (2025)",
  },
  {
    image: "/image/sect71.webp",
    heading:
      "AI in the UAE: How Businesses Are Gaining a Competitive Edge Today",
  },
  {
    image: "/image/sect72.webp",
    heading: "Why Invest In Dubai, and Why 2025 Is The Year To Do So!",
  },
];

const Section7 = () => {
  return (
    <div>
      <div className="pt-10 pb-24 max-w-[1440px] m-auto">
        <div className="text-center font-semibold text-[1.5rem] sm:text-[2rem]">
          Business Setup in Dubai Insights
        </div>
        <div className="text-center text-[1rem] sm:text-[1.2rem] pt-2 pb-10">
          Keep up with the latest UAE company formation insights with articles
          from our team of experts.
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4 sm:px-10 lg:px-20 xl:px-40">
          {sect7.map((sec, index) => (
            <div
              key={index}
              className="shadow-2xl rounded-xl pb-8 flex flex-col h-full group overflow-hidden transition-all duration-300 ease-in hover:scale-105"
            >
              <div className="relative h-40 md:h-50 lg:h-40  w-full overflow-hidden">
                <Image
                  src={sec.image}
                  alt={`article-${index}`}
                  fill
                  className="object-cover rounded-t-xl transition-all duration-300 ease-in-out group-hover:scale-110"
                />
              </div>
              <div className="px-6 pt-5 ">
                <div className="font-semibold text-[1rem] lg:text-[1.2rem] mb-2">
                  {sec.heading}
                </div>
              </div>
              <div className="mt-auto px-6 pt-4">
                <Link href="/" className="inline-block text-[0.9rem] font-semibold">
                  <h1 className="bg-gradient-to-r from-purple-900 to-blue-800 bg-clip-text text-transparent transition-all duration-300 ease-in-out group-hover:scale-110">
                    Read More
                  </h1>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center pt-20">
          <button className="bg-gradient-to-r from-purple-800 to-blue-900 text-white font-semibold border-2 py-3 px-7 hover:border-blue-500 rounded-xl transition-all duration-300 ease-in-out hover:scale-110">
            Visit Blog
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section7;
