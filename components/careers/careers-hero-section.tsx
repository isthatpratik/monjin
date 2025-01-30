import Image from "next/image";
import React from "react";

const CareersHero = () => {
  return (
    <div className="h-full w-full flex flex-col gap-4 items-center justify-between mb-10">
      <div className="flex flex-col justify-center items-center space-y-4 mt-6">
        <h2 className="text-center font-onest text-4xl font-bold lg:text-[78px] tracking-tighter text-white leading-tight">
          Unlock Your Perfect Match with <br />
          Elite Talent on Monjin
        </h2>
        <h1 className="text-center text-white font-onest font-medium text-3xl lg:text-4xl max-w-full pt-4 lg:pt-0">
          Become A Monjineer!
        </h1>
        <p className="text-center font-light font-figtree text-lg text-white max-w-full hidden lg:block">
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
          className="object-contain object-center lg:w-[80vw] w-full h-auto mt-8"
        />
      </div>
    </div>
  );
};

export default CareersHero;
