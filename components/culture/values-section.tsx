import Image from "next/image";
import React from "react";

const ValeusSection = () => {
  return (
    <section className="flex flex-row gap-12 px-24 items-start justify-center">
      <div className="flex-col justify-between items-center">
        <h2 className="font-onest font-medium text-[30px]">Our Values</h2>
        <div className="flex items-center justify-center translate-y-40">
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
      <div className="flex flex-col gap-6 w-full max-w-5xl">
        <div className="flex flex-row gap-6">
          <div className="basis-1/5 bg-white rounded-full px-9 py-5 border border-[#F46D70]/35">
            <h3 className="text-[22px] font-onest tracking-tight">
              Valuing Skills
            </h3>
          </div>
          <div className="basis-4/5 bg-white rounded-full px-11 py-6 border border-[#9F8AFF]/25">
            <h3 className="text-[22px] font-onest tracking-tight text-right">
              Democratizing Interviewing
            </h3>
          </div>
        </div>

        <div className="flex flex-row gap-6">
          <div className="basis-4/5 bg-white rounded-full px-11 py-6 border border-[#D7F0C6]">
            <h3 className="text-[22px] font-onest tracking-tight">
              Building Interviewing communities
            </h3>
          </div>
          <div className="basis-1/5 bg-white rounded-full px-11 py-6 border border-[#12A4B8]/25">
            <h3 className="text-[22px] font-onest tracking-tight text-right">
              Simplify
            </h3>
          </div>
        </div>

        <div className="flex flex-row gap-6">
          <div className="basis-3/6 bg-white rounded-full px-11 py-6 border border-[#9F8AFF]/25">
            <h3 className="text-[22px] font-onest tracking-tight">
              Executional excellence
            </h3>
          </div>
          <div className="basis-3/6 bg-white rounded-full px-11 py-6 border border-[#F46D70]/35">
            <h3 className="text-[22px] font-onest tracking-tight text-right">
              Client interests first
            </h3>
          </div>
        </div>

        <div className="flex flex-row gap-6">
          <div className="basis-4/6 bg-white rounded-full px-11 py-6 border border-[#F46D70]/35">
            <h3 className="text-[22px] font-onest tracking-tight">
              Create a culture of Belongingness
            </h3>
          </div>
          <div className="basis-2/6 bg-white rounded-full px-11 py-6 border border-[#D7F0C6]">
            <h3 className="text-[22px] font-onest tracking-tight text-right">
              Transparency
            </h3>
          </div>
        </div>

        <div className="flex flex-row gap-6">
          <div className="basis-3/6 bg-white rounded-full px-11 py-6 border border-[#12A4B8]/25">
            <h3 className="text-[22px] font-onest tracking-tight">
              Passion and Innovation
            </h3>
          </div>
          <div className="basis-3/6 bg-white rounded-full px-11 py-6 border border-[#9F8AFF]/25">
            <h3 className="text-[22px] font-onest tracking-tight text-right">
              High ethical standards
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValeusSection;
