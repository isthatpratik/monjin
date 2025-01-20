import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function YcoiHeroSection() {
  return (
    <main className="min-h-screen mb-20">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center py-12">
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="text-6xl font-medium ">YCOI</h1>
          </div>
          <div className="inline-flex rounded-xl border-[#83AB09] border p-1">
            <button className="px-4 py-2 font-figree text-[#83AB09] font-medium">
              YOUR CANDIDATES OUR INTERVIEWERS
            </button>
          </div>
          <h2 className="text-5xl font-bold font-onest lg:text-7xl text-[#353535] leading-tight tracking-tighter">
          Streamline Your Hiring Process
          </h2>
          <p className="text-[#353535] font-light text-lg font-figtree pb-10">
          Leverage Monjin&apos;s global network of experienced interviewers for precise candidate evaluations. Benefit from industry expertise tailored to your hiring needs and accelerate recruitment with an efficient interviewing solution.
          </p>
          <Button className="bg-[#1B1B1B] text-white hover:bg-gray-800 rounded-full px-6 py-6 text-base font-Onest font-normal">
            Sign Up
          </Button>
        </div>

        <div className="absolute xl:right-[300px] top-[160px] lg:right-[100px]">
          <Image
            src="/assets/ycoi/ycoi-hero-section.png"
            alt="Landing page illustration"
            width={1000}
            height={1000}
            className="object-contain w-full h-full"
          />
        </div>
      </div>
    </main>
  );
}