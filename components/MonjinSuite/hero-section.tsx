import Image from "next/image";
import React from "react";

const MonjinSuiteHero = () => {
  return (
    <div className="h-full w-full flex flex-col gap-4 items-center justify-between mb-10">
      <div className="flex flex-col justify-center items-center space-y-4">
        <h2 className="text-center md:font-onest text-base md:text-4xl lg:text-5xl tracking-normal md:tracking-tighter">
          Monjin Suite
        </h2>
        <h1 className="text-center md:font-Onest font-Onest font-bold text-4xl md:text-6xl lg:text-7xl tracking-tighter max-w-full md:max-w-[80vw]">
          Streamline Talent Attraction & Retention for a Seamless
          Experience.
        </h1>
      </div>
      <div className="-z-10">
        <Image
          src={"/assets/MonjinSuite/monjin-suite-hero.png"}
          alt="Monjin Suite Illustration"
          width={900}
          height={900}
          className="object-contain object-center"
        />
      </div>
      <p className="text-center font-figtree text-sm md:max-w-[80%] pb-4">
        Unlock the full potential of your recruitment and business strategies
        with our all-in-one platform designed to streamline your processes and
        deliver exceptional results.
      </p>
    </div>
  );
};

export default MonjinSuiteHero;
