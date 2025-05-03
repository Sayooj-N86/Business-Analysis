import Image from "next/image";
import React from "react";

const Carousel = () => {
  return (
    <div className="pt-[5rem] sm:pt-[6rem] md:pt-[7rem] max-w-[1440px] mx-auto px-4 sm:px-6">
      <div className="relative  h-[13rem] md:h-[25rem] lg:h-[28rem] xl:[25rem] rounded-xl overflow-hidden">
        <Image
          src="/image/vcarousel1.jpg"
          alt="Business setup cost calculator"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/30 flex items-center">
          <div className="  px-1 md:px-12 lg:px-16 xl:px-12">
            <h1 className="text-white font-bold text-[0.8rem] md:text-[1.4rem] lg:text-[1.7rem] xl:text-[2rem] leading-tight">
              How Much Does Business Setup Cost?
            </h1>
            <p className="text-white font-medium  text-[0.6rem] md:text-[1.1rem] lg:text-[1.3rem] xl:text-[1.4rem] mt-2 sm:mt-3 md:mt-4">
              Costs vary based on your business activity (free zone/mainland),<br/>
              visa needs, and ownership structure. Having assisted 90,000+<br/>
              entrepreneurs with Dubai business setup, our Cost Calculator<br/>
              delivers your personalized estimate in moments.
            </p>
            <div className="  pt-2 lg:pt-4">
              <button className="bg-white hover:bg-gray-100 text-black font-semibold  py-1 px-2 md:py-3 md:px-5 rounded-sm md:rounded-lg transition-all duration-200 hover:scale-105 active:scale-95">
                <div className="bg-gradient-to-r from-purple-900 to-blue-800 bg-clip-text text-transparent  text-[0.5rem] md:text-[0.8rem] lg:text-[1rem] xl:text-[1.2rem]">
                  Get Started
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
