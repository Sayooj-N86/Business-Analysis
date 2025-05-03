import Image from "next/image";
import React from "react";

const footer = [
  {
    title: "MAIN OFFICE",
    content: ['Business Setup','Dubai', 'Souk Al Bahar Burj Khalifa'],
  },
  {
    title: "MAINLAND",
    content: ['Overview',' Sponsorship'],
  },
  {
    title: "Support",
    content: ['Support Services','FAQs','Setup Guides', 'Our Partners'],
  },
  {
    title: "Resources",
    content: ['Business Setup Blog', 'How to Start a Business'],
  },
];

const social = [
    { svg: '/image/vfb.png'}, 
    { svg: '/image/vtwiter.png'}, 
    { svg: '/image/vin.png'}, 
    { svg: '/image/vinsta.png'}, 
    { svg: '/image/vtube.png'}, 
    { svg: '/image/vtiktok.png'}, 
]

const Footer = () => {
  return (
    <div className="bg-[#F2F3EE] pt-5 pb-10 max-w-[1440px] m-auto rounded-t-2xl">
      <div className="text-center pt-5 sm:pt-8 md:pt-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-bold">
          #Be a Leader
        </h1>
      </div>
      
      {/* Footer Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-28 py-6 sm:py-8">
        {footer.map((foot, index) => (
          <div key={index} className="flex flex-col items-center lg:items-start">
            <h3 className="text-base sm:text-lg font-semibold text-amber-950 mb-2 sm:mb-3 md:mb-4 transition-all duration-300 ease-in-out hover:scale-105">
              {foot.title}
            </h3>
            <div className="flex flex-col items-center lg:items-start gap-2 sm:gap-3">
              {foot.content.map((item, itemIndex) => (
                <div 
                  key={itemIndex} 
                  className="transition-all duration-300 ease-in-out hover:scale-105 text-xs sm:text-sm md:text-[0.9rem]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      {/* Bottom Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4  px-4 sm:px-8 md:px-12 lg:px-16 xl:px-60">
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-5 text-xs sm:text-[0.9rem] font-semibold">
          <div className="transition-all duration-300 ease-in-out hover:scale-105">ABOUT</div>
          <div className="transition-all duration-300 ease-in-out hover:scale-105">MAP</div>
          <div className="transition-all duration-300 ease-in-out hover:scale-105">PRIVACY POLICY</div>
          <div className="transition-all duration-300 ease-in-out hover:scale-105">CONTACT US</div>
        </div>
        
        <div className="flex justify-center gap-4 sm:gap-6 md:gap-8">
          {social.map((social,index) => (
            <div key={index} className="relative h-4 w-4 sm:h-5 sm:w-5">
              <Image 
                src={social.svg} 
                alt='' 
                fill 
                className="object-contain transition-all duration-300 ease-in-out hover:scale-120"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;