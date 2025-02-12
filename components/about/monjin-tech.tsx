import Image from "next/image";
import React from "react";

const MonjinTech = () => {
  return (
    <section className="h-full max-w-7xl lg:mx-8 flex flex-row gap-12 items-center justify-around xl:my-10 lg:my-8 my-4 lg:p-12 p-4 rounded-[32px]">
      <div className="py-8 flex flex-col items-center justify-center gap-8">
        <Image 
            src={'/assets/about/monjin-tech.png'}
            alt="Monjin Tech"
            width={900}
            height={800}
            className="object-contain xl:w-[60vw] lg:w-[70vw] h-auto lg:h-fit w-full"
        />
        <h3 className="text-center font-figtree lg:font-light lg:text-[32px] text-sm leading-tight text-balance">
        <strong className="font-semibold font-figtree">From the ground up, we&apos;ve built a state-of-the-art AI-powered platform and a dynamic library of real-world video interviews—</strong>changing the way organizations discover and connect with exceptional talent.
        </h3>

        <div className="hidden self-center lg:block mt-10 mb-5 h-[0.5px] w-full bg-[#464646]"></div>  
      </div>
    </section>
  );
};

export default MonjinTech;
