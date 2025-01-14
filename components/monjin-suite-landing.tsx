import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";

export const MonjinSuiteLanding = () => {
  return (
    <div className="relative mx-auto rounded-[48px] flex flex-col gap-6 md:max-w-[60vw] justify-between bg-[url('/assets/monjin-suite-landing-bg.png')] bg-cover bg-center h-auto sm:h-full md:flex-row">
      {/* Left Section */}
      <div className="space-y-4 flex p-8 flex-col justify-center text-center sm:text-left">
        <div className="flex flex-row gap-4">
          <Image
            alt="Monjin Suite Logo"
            width={50}
            height={50}
            src={"/assets/monjin-suite-logo.png"}
            className="object-contain"
          />
          <h1 className="text-2xl md:text-4xl font-figtree text-center font-medium tracking-tight leading-tight text-white mt-6 ">
            Monjin Suite
          </h1>
        </div>
        <p className="text-sm sm:text-base font-figtree font-light text-gray-300 w-1/2">
          Seamlessly book interviews through Monjin’s platform, bypassing direct
          candidate contact.
        </p>
        <div className="gap-4 flex-col md:flex-row">
          <Button className="bg-[#FFFFFF] text-black rounded-full px-4 py-2">
            Start Trial
          </Button>
          <Button className="bg-transparent border border-[#FFFFFF]/20 text-[#D0F16C] rounded-full px-4 py-2">
            Learn More
          </Button>
        </div>
      </div>

      {/* Right Section: Image */}
      <div className="relative flex justify-center items-center py-10">
        <Image
          src="/assets/monjin-suite-landing-illustration.png"
          alt="Monjin Suite Illustration"
          width={520}
          height={365}
          className="object-cover object-center mt-4"
        />
      </div>
    </div>
  );
};
