import Image from "next/image";

export default function AlwaysReady() {
  return (
    <div className="flex flex-col items-center justify-center w-full mx-auto py-16 px-4 bg-white rounded-[32px]">
      <div className="text-center mb-4">
        <h1 className="font-[Onest] text-[48px] leading-[62.4px] tracking-[-0.06em] font-medium mb-4">
          Talent That&apos;s Always Ready
        </h1>
        <p className="font-[Figtree] text-base leading-[22px] max-w-[584px] mx-auto">
          Streamline your hiring with Monjin&apos;s pre-vetted, industry-ready
          professionals, ready to deliver results from day one
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-2 mt-6 w-full lg:w-[90%] md:flex-col">
        {/* Div 1 */}
        <div className="flex flex-col items-center w-full lg:w-1/3 h-auto justify-center">
          <Image
            quality={100}
            width={355}
            height={230}
            alt="Feature 1"
            src="/assets/performance-management/feature-1.png"
            className="object-contain aspect-[4/3]"
          />
          <h3 className="font-Onest font-semibold text-[#1D1E23] lg:text-3xl text-2xl mt-4 text-center">
            Hire Elite Talent Today
          </h3>
          <p className="font-figtree font-normal text-center text-[#828489] text-sm md:text-base mt-2 max-w-[75%]">
            Access a curated pool of top-tier talent, all rigorously assessed
            and ready to contribute from day one.
          </p>
        </div>

        {/* Separator Line Between Div 1 and 2 */}
        <div className="hidden self-center lg:block lg:w-[1px] lg:h-[200px] lg:bg-[#23252F]/20 lg:mx-8"></div>

        {/* Div 2 */}
        <div className="flex flex-col items-center w-full lg:w-1/3 h-auto justify-center">
          <Image
            quality={100}
            width={355}
            height={230}
            alt="Feature 2"
            src="/assets/performance-management/feature-2.png"
            className="object-contain aspect-[4/3]"
          />
          <h3 className="font-Onest font-semibold text-[#1D1E23] lg:text-3xl text-2xl mt-4 text-center">
            Efficient Hiring Process
          </h3>
          <p className="font-figtree font-normal text-center text-[#828489] text-sm md:text-base mt-2 max-w-[75%]">
            Skip the time-consuming screening process and get immediate access
            to qualified candidates.
          </p>
        </div>

        {/* Separator Line Between Div 2 and 3 */}
        <div className="hidden self-center lg:block lg:w-[1px] lg:h-[200px] lg:bg-[#23252F]/20 lg:mx-8"></div>

        {/* Div 3 */}
        <div className="flex flex-col items-center w-full lg:w-1/3 h-auto justify-center">
          <Image
            quality={100}
            width={355}
            height={230}
            alt="Feature 3"
            src="/assets/performance-management/feature-3.png"
            className="object-contain aspect-[4/3]"
          />
          <h3 className="font-Onest font-semibold text-[#1D1E23] text-2xl lg:text-3xl mt-4 text-center">
            Need Based Availability
          </h3>
          <p className="font-figtree font-normal text-center text-[#828489] text-sm md:text-base mt-2 max-w-[75%]">
            Whether you need immediate joiners, quick starters in 30 days, or
            candidates for future planning, Monjin offers flexible availability
            to suit your timeline.
          </p>
        </div>
      </div>
    </div>
  );
}
