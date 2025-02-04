import React from "react";
import Image from "next/image";

const AboutHeroMobile = () => {
  return (
    <div className="mx-auto items-center justify-center lg:hidden">
      <div className="flex justify-center items-center space-y-4 mt-6">
        <h1 className="text-center font-onest font-bold text-4xl text-white max-w-sm md:max-w-md px-12 tracking-tighter leading-tight">
          Where top talent & memorable
          interview experiences converge
        </h1>
      </div>
      <div className="-z-10 flex items-center justify-center">
        <Image
          src={"/assets/about/about-hero-mobile.png"}
          alt="Monjin Suite Illustration"
          width={1000}
          height={800}
          quality={100}
          className="object-contain object-center w-full h-min mt-8"
        />
      </div>
    </div>
  );
};

export default AboutHeroMobile;