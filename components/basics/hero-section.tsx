import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function BasicsHeroSection() {
  return (
    <main className="min-h-screen lg:bg-[url('/assets/basics/basics-hero-section.png')] bg-contain bg-no-repeat lg:aspect-auto w-full bg-right">
      <div className="container mx-auto lg:px-4 px-0 grid lg:grid-cols-2 gap-12 items-center justify-center lg:justify-start lg:py-8 xl:py-12 py-2">
        <div className="space-y-6 flex flex-col items-center justify-center lg:justify-start  lg:items-start">
          <div className="inline-flex rounded-xl border-[#F46D70] border lg:p-1 p-0 items-center justify-center lg:items-start lg:justify-normal">
            <button className="px-4 py-2 font-figree text-[#F46D70] text-xs uppercase md:text-sm lg:text-lg font-medium cursor-default text-center">
              <strong>Basics</strong> - Streamline Effortless Hiring
            </button>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center lg:text-start font-onest xl:text-7xl text-[#353535] tracking-tighter leading-tight">
            Code-based interviews on the fly!
          </h2>
          <p className="text-[#353535] font-light xl:text-lg font-figtree hidden lg:block">
            Unlock seamless hiring with Monjin Basics! Conduct video interviews
            on the fly without registration, host multi-panel sessions, and
            leverage code-based interviews for technical assessments. Enjoy
            screen sharing for enhanced collaboration — the smart solution for
            modern recruitment.
          </p>
          <div className="flex lg:hidden items-center justify-center">
            <Image
              src="/assets/basics/basics-hero-mobile.png"
              alt="Landing page illustration"
              width={1000}
              height={1000}
              className="object-contain w-full md:w-[50vw] h-full"
            />
          </div>
          <Link href="https://uni.monjin.com/public/organization/registration" passHref target="_blank">
            <Button className="bg-black lg:flex flex-1 w-full md:w-fit lg:w-fit text-white hover:bg-gray-800 rounded-[8px] px-6 py-3">
              15 Days FREE!
            </Button>
          </Link>
          <p className="font-figtree text-[#353535] italic font-light pt-4 hidden lg:block">
            Starting at $35* per month after 15 day free trial period.
          </p>
        </div>
      </div>
    </main>
  );
}
