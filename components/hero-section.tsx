import React from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

export const HeroSection = () => {
  return (
    <div className="mx-auto flex flex-col md:flex-row gap-10 max-w-[90%] lg:max-w-[1600px] justify-between">
      {/* Left Section */}
      <div className="space-y-6 flex flex-col justify-center text-center sm:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[78px] max-w-full md:max-w-xl text-white font-Onest font-bold tracking-tighter leading-tight">
          Unleash the Power of Talent Seamlessly
        </h1>
        <p className="text-base sm:text-lg font-figtree font-light text-gray-300 max-w-full md:max-w-md">
          Connect with exceptional candidates, vetted by trusted experts,
          delivering insightful assessments for smarter, more confident hiring
          decisions.
        </p>
        {/* Button for web view (below p tag) */}
        <div className="hidden md:block">
          <Button className="bg-[#D0F16C] w-full sm:w-auto text-black hover:bg-[#D0F16C] rounded-full px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base font-Onest font-light transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-[#D0F16C]/50 hover:cursor-pointer">
            Experience Monjin
          </Button>
        </div>
      </div>

      {/* Right Section: Bento Grid */}
      <div className="grid grid-cols-3 gap-2 sm:gap-6 mt-6 sm:mt-10">
        {/* Employer Card */}
        <div className="space-y-6 group flex flex-col min-h-full">
          <div className="relative overflow-hidden rounded-[10px] rounded-br-[100px] bg-[#FADADA]">
            <Image
              src="/assets/hero_images/employer.png"
              alt="Professional in business attire"
              width={500}
              height={600}
              className="w-full h-[150px] sm:h-[200px] md:h-[360px] object-cover object-center"
            />
          </div>
          <div className="relative overflow-hidden rounded-bl-[100px] rounded-[10px] bg-[#FF7F82] h-[150px] sm:h-[200px] md:h-[220px] card-noise with-vector1 hover:cursor-pointer flex-grow">
            <div className="p-4 sm:p-6 h-full flex flex-col justify-center items-center relative z-10">
              <div className="border border-[#262628] rounded-full px-4 py-2 mt-2">
                <h2 className="text-sm sm:text-lg font-Onest font-bold text-[#262628]">
                  Employer
                </h2>
              </div>
              <div className="absolute -top-2 -right-2 bg-[#27292F] p-3 rounded-full group-hover:translate-x-1 group-hover:-translate-y-1 transform transition-all duration-200 ease-out">
                <ArrowUpRight className="w-4 sm:w-6 h-4 sm:h-6 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Interviewer Card */}
        <div className="space-y-6 group flex flex-col min-h-full">
          <div className="relative overflow-hidden rounded-bl-[60px] rounded-[10px] bg-[#CAFA63] h-[150px] sm:h-[220px] md:h-[220px] card-noise with-vector2 hover:cursor-pointer flex-grow">
            <div className="p-4 sm:p-6 h-full flex flex-col justify-center items-center relative z-10">
              <div className="border border-[#262628] rounded-full px-4 py-2 mt-2">
                <h2 className="text-sm sm:text-lg font-Onest font-bold text-[#262628]">
                  Interviewer
                </h2>
              </div>
              <div className="absolute -top-2 -right-2 bg-[#17181E] p-3 rounded-full group-hover:translate-x-1 group-hover:-translate-y-1 transform transition-all duration-300 ease-in-out">
                <ArrowUpRight className="w-4 sm:w-6 h-4 sm:h-6 text-white" />
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-tl-[60px] rounded-[10px] bg-[#EDFEC6]">
            <Image
              src="/assets/hero_images/interviewer.png"
              alt="Professional with glasses"
              width={500}
              height={600}
              className="w-full h-[150px] sm:h-[220px] md:h-[360px] object-cover object-center"
            />
          </div>
        </div>

        {/* Candidate Card */}
        <div className="space-y-6 group flex flex-col min-h-full">
          <div className="relative overflow-hidden rounded-tr-[100px] rounded-[10px] bg-[#E3DCFF]">
            <Image
              src="/assets/hero_images/candidate.png"
              alt="Professional with laptop"
              width={500}
              height={600}
              className="w-full h-[150px] sm:h-[200px] md:h-[360px] object-cover object-center"
            />
          </div>
          <div className="relative overflow-hidden rounded-bl-[100px] rounded-[10px] bg-[#AC9AFF] h-[150px] sm:h-[200px] md:h-[220px] card-noise with-vector3 hover:cursor-pointer flex-grow">
            <div className="p-4 sm:p-6 h-full flex flex-col justify-center items-center relative z-10">
              <div className="border border-[#262628] rounded-full px-4 py-2 mt-2">
                <h2 className="text-sm sm:text-lg font-Onest font-bold text-[#262628]">
                  Candidate
                </h2>
              </div>
              <div className="absolute -top-2 -right-2 bg-[#2E2C45] p-3 rounded-full group-hover:translate-x-1 group-hover:-translate-y-1 transform transition-all duration-300 ease-in-out">
                <ArrowUpRight className="w-4 sm:w-6 h-4 sm:h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Button for mobile view (below bento grid) */}
      <div className="block md:hidden">
        <Button className="bg-[#D0F16C] w-full sm:w-auto text-black hover:bg-[#D0F16C] rounded-full px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base font-Onest font-light transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-[#D0F16C]/50 hover:cursor-pointer">
          Experience Monjin
        </Button>
      </div>
    </div>
  );
};
