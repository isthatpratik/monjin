import Image from "next/image"

export default function WhyWeDoIt() {
  return (
    <section className="lg:py-16 py-4 px-12 max-w-7xl bg-white rounded-[32px]">
      <div className="text-center mb-6 lg:mb-16">
        <h2 className="text-2xl lg:text-5xl font-semibold lg:font-medium tracking-tighter font-onest my-4">Why We Do It</h2>
        <p className="text-sm lg:text-lg font-figtree text-[#101010]">Because talent deserves more than a resume we are here to</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 lg:gap-12 items-center justify-center">
        <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 lg:w-24 lg:h-24 mb-6 relative">
            <Image
              src="/assets/about/icon-1.png"
              alt="Checkmark icon"
              width={100}
              height={100}
              className="p-3 drop-shadow-[0_20px_24px_rgba(208,241,108,0.8)]"
            />
          </div>
          <p className="text-sm lg:text-lg font-figtree text-[#2E2C2C]">
            Create opportunities that
            <br />
            change lives.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 lg:w-24 lg:h-24 mb-6 relative">
            <Image
              src="/assets/about/icon-2.png"
              alt="Checkmark icon"
              width={100}
              height={100}
              className="p-3 drop-shadow-[0_20px_24px_rgba(244,109,112,0.8)]"
            />
          </div>
          <p className="text-sm lg:text-lg font-figtree text-[#2E2C2C]">
            Solve hiring challenges that
            <br />
            have persisted for decades
          </p>
        </div>

        <div className="flex flex-col items-center text-center pb-4 lg:pb-0">
        <div className="w-16 h-16 lg:w-24 lg:h-24 mb-6 relative">
            <Image
              src="/assets/about/icon-3.png"
              alt="Checkmark icon"
              width={100}
              height={100}
              className="p-3 drop-shadow-[0_20px_24px_rgba(159,138,255,0.8)]"
            />
          </div>
          <p className="text-sm lg:text-lg font-figtree text-[#2E2C2C] max-w-[70%]">
            Deliver value that goes beyond expectations.
          </p>
        </div>
      </div>
    </section>
  )
}
