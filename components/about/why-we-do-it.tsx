import Image from "next/image"

export default function WhyWeDoIt() {
  return (
    <section className="py-16 px-12 max-w-7xl bg-white rounded-[32px]">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-medium tracking-tighter font-Onest mb-6">Why We Do It</h2>
        <p className="text-lg font-figtree text-[#101010]">Because talent deserves more than a resume we are here to</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        <div className="flex flex-col items-center text-center">
        <div className="w-24 h-24 mb-6 relative">
            <Image
              src="/assets/about/icon-1.png"
              alt="Checkmark icon"
              width={100}
              height={100}
              className="p-3 drop-shadow-[0_22px_26px_rgba(208,241,108,0.8)]"
            />
          </div>
          <p className="text-lg font-figtree text-[#2E2C2C]">
            Create opportunities that
            <br />
            change lives.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="w-24 h-24 mb-6 relative">
            <Image
              src="/assets/about/icon-2.png"
              alt="Checkmark icon"
              width={100}
              height={100}
              className="p-3 drop-shadow-[0_22px_26px_rgba(244,109,112,0.8)]"
            />
          </div>
          <p className="text-lg font-figtree text-[#2E2C2C]">
            Solve hiring challenges that
            <br />
            have persisted for decades
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
        <div className="w-24 h-24 mb-6 relative">
            <Image
              src="/assets/about/icon-3.png"
              alt="Checkmark icon"
              width={100}
              height={100}
              className="p-3 drop-shadow-[0_22px_26px_rgba(159,138,255,0.8)]"
            />
          </div>
          <p className="text-lg font-figtree text-[#2E2C2C] max-w-[70%]">
            Deliver value that goes beyond expectations.
          </p>
        </div>
      </div>
    </section>
  )
}

