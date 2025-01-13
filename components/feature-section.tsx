import Image from 'next/image';
import React from 'react';

const FeatureSection = () => {
  return (
    <div className="flex flex-col mt-20 z-50 items-center justify-center">
      {/* Image and Heading Section */}
      <div className="flex">
        <Image
          quality={100}
          width={1000}
          height={1000}
          objectFit="contain"
          alt="Feature Section illustration"
          src="/assets/feature-illustration.png"
        />
      </div>

      <div className="flex flex-col gap-4 md:max-w-[50vw] max-w-[70vw] items-center mt-10">
        <h2 className="font-Onest font-medium text-[#1D1E23] lg:text-5xl text-center tracking-tighter text-4xl">
          Powering Achievements with Transformative Tools
        </h2>
        <p className="font-figtree font-normal text-[#1D1E23] tracking-tight text-center lg:max-w-[36vw] max-w-[80vw] sm:text-sm md:text-base">
          Unleash the true power of your processes with solutions built for rapid execution, flawless precision, and transformative results
        </p>
      </div>

      {/* Three Divs Section with Responsive Layout */}
      <div className="flex flex-col sm:flex-row justify-between gap-8 mt-16 w-full sm:w-[85%]">
        {/* Div 1 */}
        <div className="flex flex-col items-center w-full sm:w-1/3 h-auto sm:h-[500px] justify-center">
          <Image
            quality={100}
            width={500}
            height={500}
            objectFit="contain"
            alt="Feature 1"
            src="/assets/feature-1.png"
          />
          <h3 className="font-Onest font-semibold text-[#1D1E23] text-[28px] mt-4 text-center">
            On-demand Interview
          </h3>
          <p className="font-figtree font-normal text-center text-[#828489] text-sm text-md mt-2 max-w-[80%]">
            Conduct interviews on-demand, whenever it suits you
          </p>
        </div>

        {/* Separator Line Between Div 1 and 2 */}
        <div className="hidden self-center sm:block sm:w-[1px] sm:h-[200px] sm:bg-[#23252F]/20 sm:mx-8"></div>

        {/* Div 2 */}
        <div className="flex flex-col items-center w-full sm:w-1/3 h-auto sm:h-[500px] justify-center">
          <Image
            quality={100}
            width={500}
            height={500}
            objectFit="contain"
            alt="Feature 2"
            src="/assets/feature-2.png"
          />
          <h3 className="font-Onest font-semibold text-[#1D1E23] text-[28px] mt-4 text-center">
            Vetted Experts
          </h3>
          <p className="font-figtree font-normal text-center text-[#828489] text-sm text-md mt-2 max-w-[80%]">
            Connect with carefully vetted experts for reliable insights and guidance
          </p>
        </div>

        {/* Separator Line Between Div 2 and 3 */}
        <div className="hidden self-center sm:block sm:w-[1px] sm:h-[200px] sm:bg-[#23252F]/20 sm:mx-8"></div>

        {/* Div 3 */}
        <div className="flex flex-col items-center w-full sm:w-1/3 h-auto sm:h-[500px] justify-center">
          <Image
            quality={100}
            width={500}
            height={500}
            objectFit="contain"
            alt="Feature 3"
            src="/assets/feature-3.png"
          />
          <h3 className="font-Onest font-semibold text-[#1D1E23] text-[28px] mt-4 text-center">
            Rich Talent Dataset
          </h3>
          <p className="font-figtree font-normal text-center text-[#828489] text-sm text-md mt-2 max-w-[80%]">
            Connect with carefully vetted experts for reliable insights and guidance
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
