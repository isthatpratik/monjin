"use client";

import AvatarCircles from "../ui/avatar-circles";
import { CompanySlider } from "../sliders/company-slider";
import { HorizontalSlider } from "../sliders/horizontal-slider";
import { useEffect, useState } from "react";

const avatars = [
  {
    imageUrl: "/assets/avatars/avatar-1.png",
    profileUrl: "/",
  },
  {
    imageUrl: "/assets/avatars/avatar-2.png",
    profileUrl: "/",
  },
  {
    imageUrl: "/assets/avatars/avatar-3.png",
    profileUrl: "/",
  },
];

const getDynamicNumber = () => {
  const currentHour = new Date().getHours();
  if (currentHour < 12) return 25; 
  if (currentHour < 16) return 30; 
  if (currentHour < 20) return 40; 
  return 50; 
};

export function Clients() {
  const [dynamicNumber, setDynamicNumber] = useState(25);

  useEffect(() => {
    const savedDataString = localStorage.getItem("dynamicNumber");
    const savedData = savedDataString ? JSON.parse(savedDataString) : null;
    const currentHour = new Date().getHours();

    // Check if stored data is valid and corresponds to the current hour
    if (savedData && savedData.hour === currentHour) {
      setDynamicNumber(savedData.number);
    } else {
      const number = getDynamicNumber();
      setDynamicNumber(number);
      localStorage.setItem(
        "dynamicNumber",
        JSON.stringify({ number, hour: currentHour })
      );
    }
  }, []);

  return (
    <div className="mt-20 bg-[#FFFFFF] rounded-3xl lg:p-12 self-center">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="w-full lg:w-2/5 xl:max-w-2xl mx-0 lg:mx-4 lg:px-2 md:px-4 px-2 pt-6 md:w-full">
          <div className="flex flex-row gap-2 mb-4 lg:mb-6 w-full items-center justify-center lg:justify-start">
            <div className="text-black text-sm flex flex-row items-center gap-2">
              <AvatarCircles avatarUrls={avatars} />
              <h3 className="font-figtree font-medium text-xs lg:text-sm xl:text-lg text-center">
                {dynamicNumber}+ professionals hired this week
              </h3>
            </div>
          </div>

          <h2 className="text-2xl lg:text-3xl xl:text-5xl text-center md:text-center lg:text-left font-onest font-medium text-[#262628] mb-6 tracking-tighter mt-4 lg:mt-0 max-w-xl md:max-w-full px-4 md:px-12 lg:px-0">
            Enabling Global Leaders to Build Exceptional Teams
          </h2>
          <p className="text-lg text-[#0D0E11] lg:mb-8 font-figtree text-center md:text-center lg:text-left font-light max-w-sm md:max-w-full flex-wrap mt-2 lg:mt-4 px-4 md:px-12 lg:px-0">
            Join the ranks of top companies worldwide who trust us for expert
            assessments and streamlined hiring.
          </p>
        </div>

        <div className="w-full lg:w-1/2 mt-2 md:mt-0 relative overflow-hidden">
          <div className="block lg:hidden overflow-hidden py-6">
            <HorizontalSlider />
          </div>
          <div className="hidden lg:block">
            <CompanySlider />
          </div>
        </div>
      </div>
    </div>
  );
}
