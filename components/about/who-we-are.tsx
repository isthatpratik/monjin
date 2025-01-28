import Image from "next/image";
import React from "react";

const WhoWeAre = () => {
  return (
    <section className="h-full max-w-8xl mx-8 flex flex-row gap-12 items-center justify-around xl:my-10 lg:my-8 my-4 bg-white p-12 rounded-[32px]">
      <div className="flex flex-col items-center justify-center space-y-4 pl-12">
        <div className="flex flex-row items-center justify-center">
          <Image
            src={"/assets/about/what-we-do.png"}
            alt="what we do"
            width={600}
            height={600}
            className="object-contain h-[520px] w-auto"
          />
        </div>

        <div className="lex flex-col items-center space-y-4 py-12">
          <h2 className="font-onest font-medium text-center text-5xl">What We Do</h2>
          <p className="text-center font-figtree font-normal text-lg max-w-md">
            We are trailblazers in talent assessment, pioneering 
            the world&apos;s first video-based hiring ecosystem driven 
            by a global network of professional Interviewers.
          </p>
        </div>
      </div>

      <div className="hidden self-center lg:block lg:w-[1px] lg:h-[435px] lg:bg-[#5B5B5B]/20 lg:mx-8"></div>

      <div className="flex flex-col items-center justify-center space-y-4 pr-12">
        <div className="flex flex-row items-center justify-center ">
          <Image
            src={"/assets/about/who-we-are.png"}
            alt="what we do"
            width={600}
            height={600}
            className="object-contain h-[520px] w-auto"
          />
        </div>

        <div className="flex flex-col items-center space-y-4 py-12">
          <h2 className="font-onest font-medium text-center text-5xl">Who We Are</h2>
          <p className="text-center font-figtree font-normal text-lg max-w-md">
            We are dreamers, doers, and disruptors—a community 
            of passionate experts from every corner of the world. 
            We&apos;re not just building technology; we are shaping the 
            future of hiring by creating a revolutionary new 
            profession: “The Interviewer.”
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
