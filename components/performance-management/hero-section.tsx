import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function PerformanceHeroSection() {
  return (
    <main className="min-h-screen mb-10">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center py-12">
        <div className="space-y-6">
          <div className="inline-flex rounded-xl border-[#BA57D3] border p-1">
            <button className="px-4 py-2 font-figree text-[#BA57D3] text-lg font-medium uppercase cursor-default">
              <strong>Performance Management</strong> - Pre Assessed Candidatures
            </button>
          </div>
          <h2 className="text-5xl font-bold font-onest lg:text-7xl text-[#353535] leading-tight tracking-tighter">
          Unlock Exceptional Talent with
AI-Powered Solutions
          </h2>
          <p className="text-[#353535] font-light text-lg font-figtree pb-10">
          With AI-powered assessments, you can swiftly and efficiently identify top-tier talent. Eliminate guesswork, reduce hiring time, and secure high-quality candidates faster than ever before.
          </p>
          <Button className="bg-[#1B1B1B] text-white hover:bg-gray-800 rounded-[8px] px-6 py-6 text-base font-onest font-normal">
            Hire Smarter
          </Button>
        </div>

        <div className="absolute xl:right-[300px] top-[200px] lg:right-[200px] -z-10">
          <Image
            src="/assets/performance-management/performance-hero-section.png"
            alt="Performance Management illustration"
            width={1000}
            height={1000}
            className="object-contain w-full h-full"
          />
        </div>
      </div>
    </main>
  );
}