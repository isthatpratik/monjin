import Image from "next/image";
import React from "react";

const CareersHero = () => {
  return (
    <div className="h-full w-full flex flex-col gap-4 items-center justify-between mb-10 lg:py-24 py-6">
      <div className="flex flex-col justify-center items-center space-y-4">
        <h2 className="text-center font-onest text-4xl font-bold lg:font-semibold lg:text-[78px] tracking-tight text-white leading-tight px-2 lg:px-0">
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
      <div className="hidden lg:block">
        <Image
          src={"/assets/careers/careers-hero.png"}
          alt="Monjin Suite Illustration"
          width={1000}
          height={1000}
          className="object-contain object-center lg:w-[80vw] lg:h-auto mt-8"
        />
      </div>
      <div className="block lg:hidden w-full h-full">
        <Image
          src={"/assets/careers/careers-hero-mobile.png"}
          alt="Monjin Suite Illustration"
          width={1200}
          height={1200}
          className="object-center mt-8 w-full h-full"
        />
      </div>
    </div>
  );
};

export default CareersHero;
