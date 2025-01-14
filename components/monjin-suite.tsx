import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";

export const MonjinSuite = () => {
  return (
    <div className="relative mx-auto rounded-2xl flex flex-col gap-6 max-w-[90%] lg:max-w-[1600px] justify-between bg-[url('/assets/mobilebg.png')] bg-cover bg-center h-auto sm:h-full md:flex-row">
      {/* Left Section */}
      <div className="space-y-4 flex p-6 flex-col justify-center text-center sm:text-left">
        <h1 className="text-3xl sm:text-4xl font-figtree text-center font-bold tracking-tight leading-tight text-white">
          Monjin Suite
        </h1>
        <p className="text-sm sm:text-base font-figtree font-light text-gray-300">
          Seamlessly book interviews through Monjin’s platform, bypassing direct candidate contact.
        </p>
        <div className="flex gap-2 flex-col sm:flex-row">
          <Button className="bg-[#D0F16C] text-black rounded-full px-4 py-2">
            Start Trial
          </Button>
          <Button className="bg-transparent border border-[#D0F16C] text-[#D0F16C] rounded-full px-4 py-2">
            Learn More
          </Button>
        </div>
      </div>

      {/* Right Section: Image */}
      <div className="relative flex justify-center items-center">
      
        <Image
          src="/assets/4.png"
          alt="Monjin Suite Illustration"
          width={507}
          height={282}
          className="object-cover object-center mt-4"
        />
      </div>
    </div>
  );
};