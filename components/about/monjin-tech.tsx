import Image from "next/image";
import React from "react";

const MonjinTech = () => {
  return (
    <section className="h-full max-w-7xl mx-8 flex flex-row gap-12 items-center justify-around xl:my-10 lg:my-8 my-4 p-12 rounded-[32px]">
      <div className="py-16 flex flex-col items-center justify-center gap-8">
        <Image 
            src={'/assets/about/monjin-tech.png'}
            alt="Monjin Tech"
            width={900}
            height={800}
            className="object-contain xl:w-[60vw] lg:w-[70vw] h-fit"
        />
        <h3 className="text-center font-figtree font-light text-[32px] max-w-">
        <strong>From the ground up, we&apos;ve built a state-of-the-art AI-powered platform and a dynamic library of real-world video interviews—</strong>changing the way organizations discover and connect with exceptional talent.
        </h3>

        <div className="hidden self-center lg:block my-16 h-[0.5px] w-full bg-[#464646]"></div>  
      </div>
    </section>
  );
};

export default MonjinTech;
