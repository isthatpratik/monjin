import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function OcoiHeroSection() {
  return (
    <main className="min-h-screen lg:bg-[url('/assets/ocoi/ocoi-hero-section.png')] bg-contain bg-no-repeat lg:aspect-auto w-full bg-right">
      <div className="container mx-auto lg:px-4 px-0 grid lg:grid-cols-2 gap-12 items-center justify-center lg:justify-start lg:py-8 xl:py-12 py-2">
        <div className="space-y-6 flex flex-col items-center justify-center lg:justify-start lg:items-start">
          <div className="inline-flex rounded-xl border-[#9F8AFF] border lg:p-1 p-0 items-center justify-center lg:items-start lg:justify-normal">
            <button className="lg:px-4 px-2 py-2 font-figree text-[#9F8AFF] text-xs md:text-sm lg:text-lg font-medium cursor-default text-center">
              <strong>OCOI</strong> - OUR CANDIDATES OUR INTERVIEWERS
            </button>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center lg:text-start font-onest xl:text-7xl text-[#353535] tracking-tighter leading-tight">
            Hire top talent, swiftly and strategically
          </h2>
          <p className="text-[#353535] font-light xl:text-lg font-figtree hidden lg:block">
            Turn opportunities into success with Monjin&apos;s OCOI — a smart
            solution designed to transform your hiring process. Discover how
            Monjin OCOI empowers your team to hire better, faster, and smarter.
          </p>
          <div className="flex lg:hidden items-center justify-center">
            <Image
              src="/assets/ocoi/ocoi-hero-mobile.png"
              alt="Landing page illustration"
              width={1000}
              height={1000}
              className="object-contain  w-full md:w-[50vw] h-full"
            />
          </div>
          <Link href="https://uni.monjin.com/public/organization/registration" passHref className="w-full lg:w-fit md:w-fit" target="_blank">
            <Button className="bg-black lg:flex flex-1 w-full md:w-fit lg:w-fit text-white hover:bg-gray-800 rounded-[8px] px-6 py-3 lg:h-12">
              15 Days FREE!
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
