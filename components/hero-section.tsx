import React from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

export const HeroSection = () => {
  return (
    <div className="mx-auto flex flex-col lg:flex-row gap-6 lg:gap-10 max-w-[95%] lg:max-w-[1600px] justify-between px-4 lg:px-8">
      {/* Left Section */}
      <div className="space-y-4 lg:space-y-6 flex flex-col justify-center text-center lg:text-left lg:w-1/2">
        <h1 className="text-5xl md:text-5xl lg:text-6xl xl:text-[78px] max-w-full lg:max-w-xl text-white font-Onest font-bold tracking-tighter leading-tight">
          Unleash the Power of Talent Seamlessly
        </h1>
        <p className="md:text-sm text-base lg:text-lg font-figtree font-light text-gray-300 max-w-full lg:max-w-md">
          Connect with exceptional candidates, vetted by trusted experts,
          delivering insightful assessments for smarter, more confident hiring
          decisions.
        </p>
        {/* Button for web view (below p tag) */}
        <div className="hidden lg:block">
          <Button className="bg-[#D0F16C] w-full sm:w-auto text-black hover:bg-[#D0F16C] rounded-full px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-6 text-xs sm:text-sm lg:text-base font-Onest font-light transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-[#D0F16C]/50 hover:cursor-pointer">
            Experience Monjin
          </Button>
        </div>
      </div>

      {/* Right Section: Bento Grid */}
      <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-6 mt-4 lg:mt-0 lg:w-1/2">
        {/* Employer Card */}
        <div className="space-y-2 sm:space-y-4 lg:space-y-6 group flex flex-col min-h-full">
          <div className="relative overflow-hidden rounded-[10px] rounded-br-[50px] sm:rounded-br-[75px] lg:rounded-br-[100px] bg-[#FADADA]">
            <div className="relative w-full h-[120px] sm:h-[140px] md:h-[180px] lg:h-[220px] xl:h-[280px]">
              <Image
                src="/assets/hero_images/employer.png"
                alt="Professional in business attire"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
          <div className="relative overflow-hidden rounded-bl-[50px] sm:rounded-bl-[75px] lg:rounded-bl-[100px] rounded-[10px] bg-[#FF7F82] h-[120px] sm:h-[140px] md:h-[160px] lg:h-[180px] xl:h-[220px] card-noise with-vector1 hover:cursor-pointer flex-grow">
            <div className="p-2 sm:p-4 lg:p-6 h-full flex flex-col justify-center items-center relative z-10">
              <div className="border border-[#262628] rounded-full px-2 sm:px-3 lg:px-4 py-1 sm:py-2">
                <h2 className="text-xs sm:text-sm lg:text-lg font-Onest font-bold text-[#262628]">
                  Employer
                </h2>
              </div>
              <div className="absolute -top-2 -right-2 bg-[#27292F] p-2 sm:p-3 rounded-full group-hover:translate-x-1 group-hover:-translate-y-1 transform transition-all duration-200 ease-out hidden md:block">
                <ArrowUpRight className="w-3 sm:w-4 lg:w-6 h-3 sm:h-4 lg:h-6 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Repeat the same pattern for Interviewer and Candidate Cards */}
        {/* Interviewer Card */}
        <div className="space-y-2 sm:space-y-4 lg:space-y-6 group flex flex-col min-h-full">
          <div className="relative overflow-hidden rounded-bl-[30px] sm:rounded-bl-[45px] lg:rounded-bl-[60px] rounded-[10px] bg-[#CAFA63] h-[120px] sm:h-[140px] md:h-[160px] lg:h-[180px] xl:h-[220px] card-noise with-vector2 hover:cursor-pointer flex-grow">
            <div className="p-2 sm:p-4 lg:p-6 h-full flex flex-col justify-center items-center relative z-10">
              <div className="border border-[#262628] rounded-full px-2 sm:px-3 lg:px-4 py-1 sm:py-2">
                <h2 className="text-xs sm:text-sm lg:text-lg font-Onest font-bold text-[#262628]">
                  Interviewer
                </h2>
              </div>
              <div className="absolute -top-2 -right-2 bg-[#17181E] p-2 sm:p-3 rounded-full group-hover:translate-x-1 group-hover:-translate-y-1 transform transition-all duration-300 ease-in-out hidden md:block">
                <ArrowUpRight className="w-3 sm:w-4 lg:w-6 h-3 sm:h-4 lg:h-6 text-white" />
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-tl-[30px] sm:rounded-tl-[45px] lg:rounded-tl-[60px] rounded-[10px] bg-[#EDFEC6]">
            <div className="relative w-full h-[120px] sm:h-[140px] md:h-[180px] lg:h-[220px] xl:h-[280px]">
              <Image
                src="/assets/hero_images/interviewer.png"
                alt="Professional with glasses"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* Candidate Card */}
        <div className="space-y-2 sm:space-y-4 lg:space-y-6 group flex flex-col min-h-full">
          <div className="relative overflow-hidden rounded-tr-[50px] sm:rounded-tr-[75px] lg:rounded-tr-[100px] rounded-[10px] bg-[#E3DCFF]">
            <div className="relative w-full h-[120px] sm:h-[140px] md:h-[180px] lg:h-[220px] xl:h-[280px]">
              <Image
                src="/assets/hero_images/candidate.png"
                alt="Professional with laptop"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
          <div className="relative overflow-hidden rounded-bl-[50px] sm:rounded-bl-[75px] lg:rounded-bl-[100px] rounded-[10px] bg-[#AC9AFF] h-[120px] sm:h-[140px] md:h-[160px] lg:h-[180px] xl:h-[220px] card-noise with-vector3 hover:cursor-pointer flex-grow">
            <div className="p-2 sm:p-4 lg:p-6 h-full flex flex-col justify-center items-center relative z-10">
              <div className="border border-[#262628] rounded-full px-2 sm:px-3 lg:px-4 py-1 sm:py-2">
                <h2 className="text-xs sm:text-sm lg:text-lg font-Onest font-bold text-[#262628]">
                  Candidate
                </h2>
              </div>
              <div className="absolute -top-2 -right-2 bg-[#2E2C45] p-2 sm:p-3 rounded-full group-hover:translate-x-1 group-hover:-translate-y-1 transform transition-all duration-300 ease-in-out hidden md:block">
                <ArrowUpRight className="w-3 sm:w-4 lg:w-6 h-3 sm:h-4 lg:h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Button for mobile view (below bento grid) */}
      <div className="block lg:hidden mt-6">
        <Button className="bg-[#D0F16C] w-full text-black hover:bg-[#D0F16C] rounded-full px-4 sm:px-6 py-6 sm:py-6 text-base font-Onest font-light transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-[#D0F16C]/50 hover:cursor-pointer">
          Experience Monjin
        </Button>
      </div>
    </div>
  );
};