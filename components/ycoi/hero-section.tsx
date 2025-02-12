import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function YcoiHeroSection() {
  return (
    <main className="min-h-screen lg:bg-[url('/assets/ycoi/ycoi-hero-section.png')] bg-contain bg-no-repeat lg:aspect-auto w-full bg-right">
      <div className="container mx-auto lg:px-4 px-0 grid lg:grid-cols-2 gap-12 items-center justify-center lg:justify-start lg:py-12 py-2">
        <div className="space-y-6 flex flex-col items-center justify-center lg:justify-start  lg:items-start">
          <div className="inline-flex rounded-xl border-[#83AB09] border lg:p-1 p-0 items-center justify-center lg:items-start lg:justify-normal">
            <button className="px-4 py-2 font-figree text-[#83AB09] text-xs md:text-sm font-medium cursor-default text-center uppercase">
              <strong>YCOI</strong> - YOUR CANDIDATES OUR INTERVIEWERS
            </button>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center lg:text-start font-onest xl:text-7xl text-[#353535] tracking-tighter leading-tight">
            Streamline Your Hiring Process
          </h2>
          <p className="text-[#353535] font-light xl:text-lg font-figtree pb-10 hidden lg:block">
            Leverage Monjin&apos;s global network of experienced interviewers
            for precise candidate evaluations. Benefit from industry expertise
            tailored to your hiring needs and accelerate recruitment with an
            efficient interviewing solution.
          </p>
          <div className="flex lg:hidden items-center justify-center">
            <Image
              src="/assets/ycoi/ycoi-hero-mobile.png"
              alt="YCOI illustration"
              width={1000}
              height={1000}
              className="object-contain  w-full md:w-[50vw] h-full"
            />
          </div>
          <Link href="https://uni.monjin.com/public/organization/registration" className="w-full lg:w-fit md:w-fit" passHref target="_blank">
            <Button className="bg-black lg:flex flex-1 w-full md:w-fit lg:w-fit text-white hover:bg-gray-800 rounded-[8px] px-6 py-3 lg:h-12">
              Start Your Journey
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
