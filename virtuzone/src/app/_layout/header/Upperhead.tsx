"use client";

import Image from "next/image";
import React, { useState } from "react";
import Sidebar from "./Sidebar";


const headers = [
  {
    name: "Business Setup",
    items: [
      {
        heading: "FREE ZONES",
        subItems: [
          "Overview",
          "Business Activities",
          "Free Zone License Locations and Pricing",
          "UAE Residence Visa",
          "Registration Process",
          "Our Solution",
        ],
      },
    ],
  },
  {
    name: "Resources",
    items: [
      {
        heading: "Guides & Tutorials",
        subItems: [
          "Business Setup Guide",
          "Visa Process Handbook",
          "Taxation in UAE",
          "Banking Procedures",
        ],
      },
    ],
  },
];

const Header = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (mobileMenuOpen) setActiveIndex(null);
  };

  const handleHeaderClick = (index: number) => {
    if (window.innerWidth < 768) {
      setActiveIndex(activeIndex === index ? null : index);
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        {/* Mobile Header */}
        <div className="flex justify-between items-center py-4 md:hidden">
          <div className="relative h-10 w-16">
            <Image
              src="/image/vlogo2.jpg"
              alt="Company Logo"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
          <button onClick={toggleMobileMenu} className="p-2 text-black">
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Desktop Header */}
        <div className="hidden md:flex justify-between items-center py-3">
          {/* Logo */}
          <div className="relative h-12 w-20 md:h-14 md:w-14 lg:h-16 lg:w-48 mb-4 md:mb-0">
            <Image
              src="/image/vlogo2.jpg"
              alt="Company Logo"
              fill
              className="object-cover rounded-2xl"
            />
          </div>

          {/* Navigation Items */}
          <div className="flex flex-col md:flex-row items-center gap-6 w-full md:w-auto">
            {headers.map((header, index) => (
              <div
                key={index}
                className="relative w-full md:w-auto"
                onMouseEnter={() => window.innerWidth >= 768 && setActiveIndex(index)}
                onMouseLeave={() => window.innerWidth >= 768 && setActiveIndex(null)}
              >
                <div 
                  className="flex items-center justify-between md:justify-center gap-2 text-black/80 cursor-pointer p-2 md:p-0"
                  onClick={() => handleHeaderClick(index)}
                >
                  <span className="text-base">{header.name}</span>
                  <div className="relative h-3 w-3">
                    <Image
                      src="/svg/dropdown.svg"
                      alt="dropdown"
                      fill
                      className={`transition-transform duration-200 ${
                        activeIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </div>

                {/* Dropdown Menu */}
                {activeIndex === index && (
                  <div className="absolute left-0  w-64 bg-white shadow-lg rounded-lg py-2 z-50 border border-gray-200">
                    {header.items.map((item, idx) => (
                      <div key={idx}>
                        {item.heading && (
                          <div className="px-4 py-2 font-semibold border-b">
                            {item.heading}
                          </div>
                        )}
                        <div>
                          {item.subItems.map((subItem, subIdx) => (
                            <div
                              key={subIdx}
                              className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm"
                            >
                              {subItem}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <button className="bg-black text-white font-semibold py-2 px-6 rounded-lg hover:bg-gray-800 transition-colors w-full md:w-auto mt-2 md:mt-0">
              Apply Now
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {mobileMenuOpen && (
        <Sidebar 
          headers={headers} 
          onClose={() => setMobileMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default Header;