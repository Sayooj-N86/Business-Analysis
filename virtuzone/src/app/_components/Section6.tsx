'use client'; // Required for CountUp to work
import React from "react";
import CountUp from 'react-countup';

const Section6 = () => {
  return (
    <div className="bg-black max-w-[1440px] m-auto rounded-2xl">
      <div className="flex flex-col sm:flex-row justify-evenly items-center py-10 sm:py-20 gap-10 sm:gap-0">
        <div className="flex flex-col items-center text-white">
          <div className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem]">
            <CountUp end={15} duration={2} suffix="+" />
          </div>
          <div className="text-[1.1rem] sm:text-[1.3rem] font-semibold text-center">
            Years in Business
          </div>
        </div>
        <div className="flex flex-col items-center text-white">
          <div className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem]">
            <CountUp end={200} duration={2} suffix="+" />
          </div>
          <div className="text-[1.1rem] sm:text-[1.3rem] font-semibold text-center">
            Team Members
          </div>
        </div>
        <div className="flex flex-col items-center text-white">
          <div className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem]">
            <CountUp end={80000} duration={3} suffix="+" separator="," />
          </div>
          <div className="text-[1.1rem] sm:text-[1.3rem] font-semibold text-center">
            Happy Customers
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
