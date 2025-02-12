import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function PerformanceHeroSection() {
  return (
    <main className="min-h-screen lg:bg-[url('/assets/performance-management/performance-hero-section.png')] bg-contain bg-no-repeat lg:aspect-auto w-full bg-right">
      <div className="container mx-auto lg:px-4 px-0 grid lg:grid-cols-2 gap-12 items-center justify-center lg:justify-start lg:py-12 py-2">
        <div className="space-y-6 flex flex-col items-center justify-center lg:justify-start lg:items-start">
          <div className="inline-flex rounded-xl border-[#BA57D3] border lg:p-1 p-0 items-center justify-center lg:items-start lg:justify-normal">
            <button className="px-4 py-2 font-figree text-[#BA57D3] text-xs md:text-sm lg:text-lg font-medium cursor-default text-center uppercase">
              <strong>Performance Management</strong> - Pre Assessed
              Candidatures
            </button>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center lg:text-start font-onest xl:text-7xl text-[#353535] tracking-tighter leading-tight text-balance">
            Unlock Exceptional Talent with AI-Powered Solutions
          </h2>
          <p className="text-[#353535] font-light xl:text-lg font-figtree hidden lg:block text-balance">
            With AI-powered assessments, you can swiftly and efficiently
            identify top-tier talent. Eliminate guesswork, reduce hiring time,
            and secure high-quality candidates faster than ever before.
          </p>
          <div className="flex lg:hidden items-center justify-center">
            <Image
              src="/assets/performance-management/performance-hero-mobile.png"
              alt="Landing page illustration"
              width={1000}
              height={1000}
              className="object-contain w-full md:w-[50vw] h-full"
            />
          </div>
          <Link href="/Pricing" passHref className="w-full lg:w-fit md:w-fit">
            <Button className="bg-black lg:flex flex-1 w-full md:w-fit lg:w-fit text-white hover:bg-gray-800 rounded-[8px] px-6 py-3 lg:h-12">
              Hire Smarter
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
