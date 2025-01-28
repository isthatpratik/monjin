import Image from "next/image";
import React from "react";

const CareersHero = () => {
  return (
    <div className="h-full w-full flex flex-col gap-4 items-center justify-between mb-10">
      <div className="flex flex-col justify-center items-center space-y-4 mt-6">
        <h2 className="text-center font-onest font-semibold text-[78px] tracking-tighter text-white">
          Unlock Your Perfect Match with <br />
          Elite Talent on Monjin
        </h2>
        <h1 className="text-center text-white md:font-Onest font-figtree font-medium text-4xl max-w-full">
          Become A Monjineer!
        </h1>
        <p className="text-center font-light font-figtree text-lg text-white max-w-full">
          At Monjin, we believe in empowering professionals to take ownership of
          their work and time. You understand your peak <br />
          productivity hours best, so here, you control your schedule. No rigid
          timelines. No unnecessary alarm bells.
        </p>
      </div>
      <div className="-z-10">
        <Image
          src={"/assets/careers/careers-hero.png"}
          alt="Monjin Suite Illustration"
          width={1000}
          height={1000}
          className="object-contain object-center w-[80vw] h-auto mt-8"
        />
      </div>
    </div>
  );
};

export default CareersHero;
