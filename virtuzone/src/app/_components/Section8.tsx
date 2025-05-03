'use client';
import Image from "next/image";
// import React, { useEffect, useState } from "react";

const review = [
  {
    name: "Ilham Chehlaoui",
    date: "8 October 2024",
    comment: "Smooth, fast, efficient! Didn't have to think of anything...",
    image: '/image/vp1.jpg'
  },
  {
    name: "Natasha Romenoff",
    date: "3 October 2024",
    comment: "Professional, punctual, patient and always cheerful...",
    image: '/image/vp2.jpg'
  },
  {
    name: "Sarah Johnson",
    date: "20 June 2024",
    comment: "Doing business with virtuzone is like drinking crystal clear water",
    image: '/image/vp3.jpg'
  },
  {
    name: "Ibrahim Mohsen",
    date: "15 May 2024",
    comment: "Excellent service and quick response times!",
    image: '/image/vp4.jpg'
  },
  {
    name: "Aicha Laroussi",
    date: "12 March 2024",
    comment: "Have had many interactions with Virtuzone and in particular Amit...",
    image: '/image/vp2.jpg'
  },
  {
    name: "Paolo Rossi",
    date: "13 September 2023",
    comment: "Good morning, since 2019 - chosen after a careful remote check...",
    image: '/image/vp3.jpg'
  },
];

const Section8 = () => {
  return (
    <div className="bg-[#F2F3EE] max-w-[1440px] m-auto rounded-2xl">
      <div className="pt-10 pb-24">
        <div className="text-center font-semibold text-[1.5rem] sm:text-[2rem]">
          Join 80,000+ happy customers
        </div>
        <div className="text-center text-[1rem] sm:text-[1.2rem] pt-2 pb-24 px-4">
          Make sure you hire the best in the business for your business setup in Dubai.
          With Virtuzone, you will fast-track your path to business success.
        </div>

        <div className="px-4 sm:px-10 lg:px-20 xl:px-40 mb-10">
          <div className="bg-white py-5 px-6 flex flex-wrap items-center gap-4 rounded-lg justify-center sm:justify-start">
            <div className="font-semibold text-[1.1rem] sm:text-[1.2rem]">Top Rated Service 2025</div>
            <div className="relative h-7 w-20">
              <Image src="/svg/vgoogle.svg" alt="google" fill />
            </div>
            <div className="flex items-center gap-1">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="relative h-5 w-5">
                  <Image src="/svg/vstar.svg" alt="star" fill />
                </div>
              ))}
              <div className="relative h-5 w-5">
                <Image src="/svg/vstar1.svg" alt="half-star" fill />
              </div>
            </div>
            <div className="font-semibold text-[1.2rem]">4.6</div>
            <div className="flex items-center gap-1 text-black/80">
              <span>verified by Trustindex</span>
              <div className="relative h-3 w-3">
                <Image src="/image/vinfo.png" alt="info" fill />
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 sm:px-10 lg:px-20 xl:px-40 overflow-hidden">
          <div className="relative py-4  ">
            {/* Infinite scrolling reviews */}
            <div className="flex animate-scroll gap-6 ">
              {[...review, ...review].map((testimonial, index) => (
                <div 
                  key={index} 
                  className="bg-white px-4 pt-4 md:pb-4 rounded-lg shadow flex-shrink-0 w-[300px] md:w-[350px] lg:w-[400px]"
                >
                  <div className="flex justify-between pr-3 pb-3">
                    <div>
                      <h3 className="font-bold">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500">{testimonial.date}</p>
                    </div>
                    <div className="relative h-9 w-9">
                      <Image src='/image/vg.png' alt='google logo' fill />
                    </div>
                  </div>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="relative h-5 w-5">
                        <Image src="/svg/vstar.svg" alt="star" fill />
                      </div>
                    ))}
                    <div className="relative h-5 w-5">
                      <Image src="/svg/vstar1.svg" alt="half-star" fill />
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <p className="mt-2">{testimonial.comment}</p>
                    <div className="relative h-20 w-20 min-w-[80px]">
                      <Image 
                        src={testimonial.image} 
                        alt='person' 
                        fill 
                        className="object-cover rounded-xl" 
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50% - 1.5rem));
          }
        }
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Section8;


// "use client";
// import Image from "next/image";

// const logos: string[] = [
//   "/images/bain.svg",
//   "/images/eightsleep.svg",
//   "/images/general-catalyst.svg",
//   "/images/google.svg",
//   "/images/matterport.svg",
//   "/images/meta.svg",
//   "/images/microsoft.svg",
//   "/images/reddit.svg",
//   "/images/salesforce.svg",
//   "/images/wework.svg",
// ];

// export default function InfiniteScroll() {
//   return (
//     <div className="relative w-full max-w-[1300px] mx-auto overflow-hidden py-10">
//       <hr className="border-t border-gray-300 my-10" />

//       <div className="relative w-full flex items-center">
//         <div className="w-[30%] z-20 bg-white pr-6">
//           <h2 className="text-2xl font-bold text-gray-600">
//             Connect with mentors from the world’s top companies
//           </h2>
//         </div>

//         <div className="absolute left-0 w-[30%] h-full bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

//         <div className="relative w-full overflow-hidden h-20 flex items-center">
//           <div className="flex animate-scroll whitespace-nowrap gap-4">
//             {[...logos, ...logos, ...logos].map((logo, index) => (
//               <div
//                 key={index}
//                 className="w-32 h-20 flex items-center justify-center"
//               >
//                 <Image
//                   src={logo}
//                   alt={Logo ${index}}
//                   width={100}
//                   height={40}
//                   className="object-contain"
//                   unoptimized
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <hr className="border-t border-gray-300 my-10" />

//       <style jsx>{`
//         @keyframes scroll {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-34%);
//           }
//         }
//         .animate-scroll {
//           display: flex;
//           width: max-content;
//           animation: scroll 10s linear infinite;
//         }
//       `}</style>
//     </div>
//   );
// }