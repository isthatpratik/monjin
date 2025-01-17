import Image from "next/image";
import React from "react";

const FeatureSection = () => {
  return (
    <div className="flex flex-col mt-20 z-50 items-center justify-center">
      {/* Image and Heading Section */}
      <div className="relative flex">
        <div className="absolute inset-0 bg-gradient-radial from-white to-transparent blur-[100px]"></div>
        <Image
          quality={100}
          width={1200}
          height={1200}
          alt="Feature Section illustration"
          src="/assets/feature-illustration-mobile.png"
          className="object-contain mobile-image"
        />
        <Image
          quality={100}
          width={1300}
          height={1300}
          alt="Feature Section illustration"
          src="/assets/feature-illustration.png"
          className="object-contain desktop-image"
        />
      </div>

      <div className="flex flex-col gap-8 items-center mt-10 py-6">
        <h2 className="font-Onest font-medium text-[#1D1E23] lg:text-5xl text-center tracking-tighter text-4xl lg:max-w-[60%] max-w-[95%] leading-normal">
          Simplify Your Hiring Process with AI-Powered Interview Scheduling.
        </h2>
        <p className="font-figtree font-normal text-[#1D1E23] tracking-tight text-center lg:max-w-[50%] max-w-[95%] text-xl lg:text-xl">
          Intuitive and efficient solution for hiring and talent assessment.
          Access to Video interviews, AI-powered scheduling, multi-panel
          collaboration, and real-time feedback.
        </p>
      </div>

      {/* Three Divs Section with Responsive Layout */}
      <div className="flex flex-col lg:flex-row justify-between gap-2 mt-6 w-full lg:w-[90%] md:flex-col">
        {/* Div 1 */}
        <div className="flex flex-col items-center w-full lg:w-1/3 h-auto lg:h-[500px] justify-center">
          <Image
            quality={100}
            width={500}
            height={500}
            alt="Feature 1"
            src="/assets/feature-1.png"
            className="object-contain"
          />
          <h3 className="font-Onest font-semibold text-[#1D1E23] text-[28px] mt-4 text-center">
            On-demand Interview
          </h3>
          <p className="font-figtree font-normal text-center text-[#828489] text-sm text-md mt-2 max-w-[75%]">
            Conduct interviews on-demand, whenever it suits you.
          </p>
        </div>

        {/* Separator Line Between Div 1 and 2 */}
        <div className="hidden self-center lg:block lg:w-[1px] lg:h-[200px] lg:bg-[#23252F]/20 lg:mx-8"></div>

        {/* Div 2 */}
        <div className="flex flex-col items-center w-full lg:w-1/3 h-auto lg:h-[500px] justify-center">
          <Image
            quality={100}
            width={500}
            height={500}
            alt="Feature 2"
            src="/assets/feature-2.png"
            className="object-contain"
          />
          <h3 className="font-Onest font-semibold text-[#1D1E23] text-[28px] mt-4 text-center">
            Vetted Experts
          </h3>
          <p className="font-figtree font-normal text-center text-[#828489] text-sm text-md mt-2 max-w-[75%]">
            Connect with carefully vetted experts for reliable insights and
            guidance.
          </p>
        </div>

        {/* Separator Line Between Div 2 and 3 */}
        <div className="hidden self-center lg:block lg:w-[1px] lg:h-[200px] lg:bg-[#23252F]/20 lg:mx-8"></div>

        {/* Div 3 */}
        <div className="flex flex-col items-center w-full lg:w-1/3 h-auto lg:h-[500px] justify-center">
          <Image
            quality={100}
            width={500}
            height={500}
            alt="Feature 3"
            src="/assets/feature-3.png"
            className="object-contain"
          />
          <h3 className="font-Onest font-semibold text-[#1D1E23] text-[24px] mt-4 text-center lg:text-2xl">
            Rich Talent Dataset
          </h3>
          <p className="font-figtree font-normal text-center text-[#828489] text-sm  mt-2 max-w-[75%] lg:text-base">
            Connect with carefully vetted experts for reliable insights and
            guidance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
