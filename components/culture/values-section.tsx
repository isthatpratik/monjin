import Image from "next/image";
import React from "react";

const ValeusSection = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-4 lg:gap-12 lg:px-24 px-12 py-6 items-center lg:items-start lg:justify-center">
      <div className="flex-col justify-between items-center">
        <h2 className="font-onest font-medium text-black text-2xl lg:text-3xl">Our Values</h2>
        <div className="lg:flex items-center justify-center translate-y-40 hidden">
            <div className="flex">
                <Image 
                    src={'/assets/culture/icon-1.png'}
                    alt="Bulb icon"
                    width={120}
                    height={120}
                    className="object-contain"
                />
            </div>
            <div className="flex translate-y-12">
                <Image 
                    src={'/assets/culture/icon-2.png'}
                    alt="Bulb icon"
                    width={120}
                    height={120}
                    className="object-contain"
                />
            </div>
        </div>
        <div>{""}</div>
      </div>
      <div className="lg:flex flex-col gap-6 w-full max-w-xs md:max-w-screen-md lg:max-w-screen-2xl hidden">
        <div className="flex flex-row gap-6">
          <div className="basis-1/5 bg-white rounded-full px-3 py-3 lg:px-9 lg:py-5 border-2 border-[#F46D70]">
            <h3 className="text-xs md:text-[22px] leading-tight font-onest tracking-tight">
              Valuing Skills
            </h3>
          </div>
          <div className="basis-4/5 bg-white rounded-full px-3 py-3 lg:px-9 lg:py-5 border-2 border-[#9F8AFF]">
            <h3 className="text-xs md:text-[22px] leading-tight text-[22px] font-onest tracking-tight text-right">
              Democratizing Interviewing
            </h3>
          </div>
        </div>

        <div className="flex flex-row gap-6">
          <div className="basis-4/5 bg-white rounded-full px-3 py-3 lg:px-9 lg:py-5 border-2 border-[#A1C28C]">
            <h3 className="text-xs md:text-[22px] leading-tight font-onest tracking-tight">
              Building Interviewing communities
            </h3>
          </div>
          <div className="basis-1/5 bg-white rounded-full px-3 py-3 lg:px-9 lg:py-5 border-2 border-[#12A4B8]">
            <h3 className="text-xs md:text-[22px] leading-tight font-onest tracking-tight text-right">
              Simplify
            </h3>
          </div>
        </div>

        <div className="flex flex-row gap-6">
          <div className="basis-3/6 bg-white rounded-full px-3 py-3 lg:px-9 lg:py-5 border-2 border-[#9F8AFF]">
            <h3 className="text-xs md:text-[22px] leading-tight font-onest tracking-tight">
              Executional excellence
            </h3>
          </div>
          <div className="basis-3/6 bg-white rounded-full px-3 py-3 lg:px-9 lg:py-5 border-2 border-[#F46D70]">
            <h3 className="text-xs md:text-[22px] leading-tight font-onest tracking-tight text-right">
              Client interests first
            </h3>
          </div>
        </div>

        <div className="flex flex-row gap-6">
          <div className="basis-4/6 bg-white rounded-full px-3 py-3 lg:px-9 lg:py-5 border-2 border-[#F46D70]">
            <h3 className="text-xs md:text-[22px] leading-tight font-onest tracking-tight">
              Create a culture of Belongingness
            </h3>
          </div>
          <div className="basis-2/6 bg-white rounded-full px-3 py-3 lg:px-9 lg:py-5 border-2 border-[#A1C28C]">
            <h3 className="text-xs md:text-[22px] leading-tight font-onest tracking-tight text-right">
              Transparency
            </h3>
          </div>
        </div>

        <div className="flex flex-row gap-6">
          <div className="basis-3/6 bg-white rounded-full px-11 py-6 border-2 border-[#12A4B8]">
            <h3 className="text-xs md:text-[22px] leading-tight font-onest tracking-tight">
              Passion and Innovation
            </h3>
          </div>
          <div className="basis-3/6 bg-white rounded-full px-11 py-6 border-2 border-[#9F8AFF]">
            <h3 className="text-xs md:text-[22px] leading-tight font-onest tracking-tight text-right">
              High ethical standards
            </h3>
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <Image 
          src={'/assets/culture/values-mobile.png'}
          alt="Values"
          width={300}
          height={200}
          className="object-contain w-full h-fit"
        />
      </div>
    </section>
  );
};

export default ValeusSection;
