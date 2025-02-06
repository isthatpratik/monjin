'use client';

import React from "react";
import { ArrowUp, ArrowDown } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

export const HeroSection = () => {
  const handleScrollToProducts = () => {
    const productsSection = document.getElementById('products-section');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="mx-auto flex flex-col lg:flex-row gap-6 lg:gap-10 justify-between px-0 md:px-2 lg:px-2 h-full">
      {/* Left Section */}
      <div className="space-y-4 lg:space-y-6 flex flex-col justify-center text-center lg:text-left lg:w-2/5">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[78px] max-w-full lg:max-w-xl text-white font-onest font-semibold tracking-tighter leading-tight">
        AI-Powered Talent Intelligence with Human Precision
        </h1>
        <p className="text-lg text-center lg:text-left font-figtree font-light text-gray-300 text-balance lg:max-w-md">
        LinkedIn tells you who they are, Monjin tells you how they are.
        </p>
        <div className="hidden lg:block">
          <Button onClick={handleScrollToProducts} className="bg-[#D0F16C] w-full sm:w-auto text-black hover:bg-[#D0F16C] rounded-[8px] px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-6 text-xs sm:text-sm lg:text-base font-Onest font-light transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-[#D0F16C]/50 hover:cursor-pointer">
            Experience Monjin
          </Button>
        </div>
      </div>

      {/* Right Section: Bento Grid */}
      <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-6 mt-4 lg:mt-6 lg:w-3/5">
        {/* Employer Card */}
        <div className="space-y-2 sm:space-y-4 md:space-y-10 group flex flex-col">
          <div className="-z-10 relative overflow-hidden rounded-[4px] rounded-br-[24px] md:rounded-br-[72px] lg:rounded-br-[100px] bg-[#FADADA] h-[140px] sm:h-[240px] md:h-[280px] lg:h-[280px] xl:h-[380px] block">
            <Image
              src="/assets/hero_images/employer.png"
              alt="Professional in business attire"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-center"
              quality={80}
              priority
            />
          </div>
          <div className="group relative overflow-hidden rounded-bl-[24px] md:rounded-bl-[64px] lg:rounded-bl-[72px] xl:rounded-bl-[100px] rounded-[4px] md:rounded-[6px] lg:rounded-[10px] bg-transparent with-vector1 hover:cursor-pointer flex-grow h-[100px] md:h-[200px] lg:h-[200px] xl:h-[260px]">
            <div className="p-2 md:p-4 lg:p-6 h-full flex flex-col justify-center items-center relative z-5">
              <Button className="text-[10px] md:text-base lg:text-lg xl:text-xl p-2 md:p-4 font-Onest font-bold text-[#262628] border bg-transparent group-hover:bg-transparent border-[#262628] rounded-full lg:p-6 group-hover:scale-110 transition-all duration-500 group-hover:shadow-[0px_6px_0px_rgba(0,0,0,0.3)] ease-in-out">
                Employer
              </Button>
              <div className="hidden md:block absolute -top-4 -left-2 bg-[#27292F] p-4 md:p-4 lg:p-6 rounded-full z-900 transform rotate-[-90deg] group-hover:rotate-[30deg] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out">
                <ArrowUp className="w-3 md:w-4 lg:w-6 h-3 md:h-4 lg:h-6 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Interviewer Card */}
        <div className="space-y-2 sm:space-y-4 md:space-y-10 group flex flex-col -z-5">
          <div className="group relative overflow-hidden rounded-bl-[24px] md:rounded-bl-[60px] lg:rounded-bl-[60px] rounded-[4px] md:rounded-[6px] lg:rounded-[10px] bg-transparent with-vector2 hover:cursor-pointer flex-grow group card-hover h-[100px] md:h-[200px] lg:h-[200px] xl:h-[260px] ">
            <div className="p-2 sm:p-4 lg:p-6 h-full flex flex-col justify-center items-center relative">
              <Button className="text-[10px] md:text-base lg:text-lg xl:text-xl p-2 md:p-4 font-Onest font-bold text-[#262628] border bg-transparent group-hover:bg-transparent border-[#262628] rounded-full lg:p-6 group-hover:scale-110 transition-all duration-500 group-hover:shadow-[0px_6px_0px_rgba(0,0,0,0.3)] ease-in-out">
                Interviewer
              </Button>
              <div className="hidden md:block absolute -bottom-4 -right-2 bg-[#27292F] p-4 md:p-4 lg:p-6 rounded-full z-900 transform rotate-[-90deg] group-hover:rotate-[30deg] translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out">
                <ArrowDown className="w-3 md:w-4 lg:w-6 h-3 md:h-4 lg:h-6 text-white" />
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-tl-[24px] md:rounded-tl-[60px] rounded-[4px] bg-[#EDFEC6] h-[140px] sm:h-[240px] md:h-[280px] lg:h-[280px] xl:h-[380px] block">
            <Image
              src="/assets/hero_images/interviewer.png"
              alt="Professional with glasses"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              fill
              className="object-cover object-center"
              priority
              quality={80}
            />
          </div>
        </div>

        {/* Candidate Card */}
        <div className="space-y-2 sm:space-y-4 md:space-y-10 group flex flex-col">
          <div className="-z-10 relative overflow-hidden rounded-tr-[24px] md:rounded-tr-[72px] xl:rounded-tr-[100px] rounded-[4px] bg-[#E3DCFF] h-[140px] sm:h-[240px] md:h-[280px] lg:h-[280px] xl:h-[380px] block">
            <Image
              src="/assets/hero_images/candidate.png"
              alt="Professional with laptop"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              fill
              className="object-cover object-center"
              priority
              quality={80}
            />
          </div>
          <div className="group relative overflow-hidden rounded-bl-[24px] md:rounded-bl-[64px] lg:rounded-bl-[72px] xl:rounded-bl-[100px] rounded-[4px] md:rounded-[6px] lg:rounded-[10px] bg-transparent with-vector3 hover:cursor-pointer flex-grow group card-hover h-[100px] lg:h-[200px] xl:h-[260px]">
            <div className="p-2 sm:p-4 lg:p-6 h-full flex flex-col justify-center items-center relative z-5">
              <Button className="text-[10px] md:text-base lg:text-lg xl:text-xl p-2 md:p-4 font-Onest font-bold text-[#262628] border bg-transparent group-hover:bg-transparent border-[#262628] rounded-full lg:p-6 group-hover:scale-110 transition-all duration-500 group-hover:shadow-[0px_6px_0px_rgba(0,0,0,0.3)] ease-in-out">
                Candidate
              </Button>
              <div className="hidden md:block absolute -top-4 -right-2 bg-[#27292F] p-4 md:p-4 lg:p-6 rounded-full z-900 transform rotate-[90deg] group-hover:rotate-[-30deg] translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out">
                <ArrowUp className="w-3 md:w-4 lg:w-6 h-3 md:h-4 lg:h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Button for mobile view (below bento grid) */}
      <div className="block lg:hidden mt-6">
        <Button onClick={handleScrollToProducts} className="bg-[#D0F16C] w-full text-black hover:bg-[#D0F16C] rounded-[8px] px-4 sm:px-6 py-6 sm:py-6 text-base font-Onest font-light transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-[#D0F16C]/50 hover:cursor-pointer">
          Experience Monjin
        </Button>
      </div>
    </div>
  );
};
