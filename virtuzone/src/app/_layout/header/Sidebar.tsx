"use client";
import Image from "next/image";
import React, { useState } from "react";

interface HeaderItem {
  name: string;
  items: {
    heading: string;
    subItems: string[];
  }[];
}

interface SidebarProps {
  headers: HeaderItem[];
  onClose: () => void;
}

const Sidebar = ({ headers, onClose }: SidebarProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/50" 
        onClick={onClose}
      ></div>
      
      {/* Sidebar Content */}
      <div className="absolute right-0 top-0 h-[500px] w-full bg-white/90 shadow-lg overflow-y-auto">
        <div className="p-4">
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-black"
          >
            ✕
          </button>

          {/* Menu Items */}
          <div className="mt-12">
            {headers.map((header, index) => (
              <div key={index} className="mb-4">
                <div 
                  className="flex justify-between items-center p-3 cursor-pointer"
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                >
                  <span className="font-medium">{header.name}</span>
                  <div className="relative h-4 w-4">
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

                {activeIndex === index && (
                  <div className="pl-4">
                    {header.items.map((item, idx) => (
                      <div key={idx}>
                        {item.heading && (
                          <div className="px-2 py-2 font-semibold">
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

            <button className="w-full bg-black text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors mt-4">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;