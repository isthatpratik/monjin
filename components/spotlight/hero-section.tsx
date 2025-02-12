import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function SpotlightHeroSection() {
  return (
    <main className="min-h-screen lg:bg-[url('/assets/spotlight/spotlight-hero-section.png')] bg-contain bg-no-repeat lg:aspect-auto w-full bg-right">
      <div className="container mx-auto lg:px-4 px-0 grid lg:grid-cols-2 gap-12 items-center justify-center lg:justify-start lg:py-12 py-2">
        <div className="space-y-6 flex flex-col items-center justify-center lg:justify-start  lg:items-start">
          <div className="inline-flex rounded-xl border-[#DC7F07] border lg:p-1 p-0 items-center justify-center lg:items-start lg:justify-normal">
            <button className="px-4 py-2 font-figree text-[#DC7F07] text-xs md:text-sm font-medium cursor-default text-center uppercase">
              <strong>Spotlight</strong> - Accelerate Efficient Screening
            </button>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center lg:text-start font-onest xl:text-7xl text-[#353535] tracking-tighter leading-tight">
            Effortless One-Way Interviews & Instant Scheduling.
          </h2>
          <p className="text-[#353535] font-light xl:text-lg font-figtree pb-10 hidden lg:block">
            Spotlight streamlines your hiring process with one-way video
            interviews that are quick, efficient, and simple to schedule. With
            flexible scheduling and user-friendly features, Spotlight empowers
            teams to efficiently assess candidates without the need for
            real-time interaction.
          </p>
          <div className="flex lg:hidden items-center justify-center">
            <Image
              src="/assets/spotlight/spotlight-hero-mobile.png"
              alt="YCOI illustration"
              width={1000}
              height={1000}
              className="object-contain  w-full md:w-[50vw] h-auto"
            />
          </div>
          <Link href="https://uni.monjin.com/public/organization/registration" passHref className="w-full lg:w-fit md:w-fit" target="_blank">
            <Button className="bg-black lg:flex flex-1 w-full md:w-fit lg:w-fit text-white hover:bg-gray-800 rounded-[8px] px-6 py-3 lg:h-12">
              15 Days Free
            </Button>
          </Link>
          <p className="font-figtree text-[#353535] italic font-light pt-4 hidden lg:block">
            Starting at $24* per month after 15 day free trial period.
          </p>
        </div>
      </div>
    </main>
  );
}
