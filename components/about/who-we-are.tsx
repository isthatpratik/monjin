import Image from "next/image";
import React from "react";

const WhoWeAre = () => {
  return (
    <section className="w-full h-auto px-4 lg:max-w-screen-2xl">
      <div className="hidden h-full mx-8 lg:flex flex-row gap-12 items-start justify-around xl:my-10 lg:my-8 my-4 bg-white p-12 rounded-[32px]">
        <div className="flex flex-col items-center justify-center space-y-4 pl-12">
          <div className="flex flex-row items-center justify-center">
            <Image
              src={"/assets/about/what-we-do.png"}
              alt="what we do"
              width={600}
              height={600}
              className="object-contain h-auto w-full"
            />
          </div>

          <div className="lex flex-col items-center space-y-4 py-12">
            <h2 className="font-onest font-medium text-center text-5xl">
              What We Do
            </h2>
            <p className="text-center font-figtree font-normal text-lg max-w-md">
              We are trailblazers in talent assessment, pioneering the
              world&apos;s first video-based hiring ecosystem driven by a global
              network of professional Interviewers.
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
              className="object-contain h-auto w-full"
            />
          </div>

          <div className="flex flex-col items-center space-y-4 py-12">
            <h2 className="font-onest font-medium text-center text-5xl">
              Who We Are
            </h2>
            <p className="text-center font-figtree font-normal text-lg max-w-md">
              We are dreamers, doers, and disruptors—a community of passionate
              experts from every corner of the world. We&apos;re not just
              building technology; we are shaping the future of hiring by
              creating a revolutionary new profession: “The Interviewer.”
            </p>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="lg:hidden flex flex-col items-center justify-center max-w-sm bg-white rounded-2xl mx-auto px-4">
        <div className="w-full h-full items-center justify-center py-4">
          <Image
            src={"/assets/about/what-we-do.png"}
            alt="what we do"
            width={600}
            height={600}
            className="object-contain h-full w-auto"
          />
        </div>
        <div className="flex flex-col items-center space-y-4 pb-6">
          <h2 className="font-onest font-medium text-center text-2xl">
            What We Do
          </h2>
          <p className="text-center font-figtree font-normal text-sm max-w-md">
            We are trailblazers in talent assessment, pioneering the
            world&apos;s first video-based hiring ecosystem driven by a global
            network of professional Interviewers.
          </p>
        </div>

        <div className="lg:hidden self-center block lg:w-[100px] lg:h-[1px] lg:bg-[#5B5B5B]/20 lg:mx-8"></div>

        <div className="w-full h-full items-center justify-center py-4">
          <div className="flex flex-row items-center justify-center ">
            <Image
              src={"/assets/about/who-we-are.png"}
              alt="what we do"
              width={600}
              height={600}
              className="object-contain h-full w-auto"
            />
          </div>

          <div className="flex flex-col items-center space-y-4 py-12">
            <h2 className="font-onest font-medium text-center text-2xl">
              Who We Are
            </h2>
            <p className="text-center font-figtree font-normal text-sm max-w-md">
              We are dreamers, doers, and disruptors—a community of passionate
              experts from every corner of the world. We&apos;re not just
              building technology; we are shaping the future of hiring by
              creating a revolutionary new profession: “The Interviewer.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
