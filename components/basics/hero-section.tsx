import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function BasicsHeroSection() {
  return (
    <main className="min-h-screen mb-10">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center py-12">
        <div className="space-y-6">
          <div className="inline-flex rounded-xl border-[#F46D70] border p-1">
            <button className="px-4 py-2 font-figree text-[#F46D70] text-lg font-medium uppercase cursor-default">
              <strong>Basics</strong> - Streamline Effortless Hiring
            </button>
          </div>
          <h2 className="text-5xl font-bold font-onest lg:text-7xl text-[#353535] leading-tight tracking-tighter">
          Code-based interviews on the fly!
          </h2>
          <p className="text-[#353535] font-light text-lg font-figtree pb-10">
          Unlock seamless hiring with Monjin Basics! Conduct video interviews on the fly without registration, host multi-panel sessions, and leverage code-based interviews for technical assessments. Enjoy screen sharing for enhanced collaboration — the smart solution for modern recruitment.
          </p>
          <Button className="bg-[#1B1B1B] text-white hover:bg-gray-800 rounded-[8px] px-6 py-6 text-base font-Onest font-normal">
            15 Days FREE!
          </Button>
          <p className="font-figtree text-[#353535] italic font-light pt-4">
          Starting at $35* per month after 15 day free trial period.
          </p>
        </div>

        <div className="absolute xl:right-[300px] top-[200px] lg:right-[100px] -z-10">
          <Image
            src="/assets/basics/basics-hero-section.png"
            alt="Spotlight illustration"
            width={1000}
            height={1000}
            className="object-contain w-[1200px] h-full"
          />
        </div>
      </div>
    </main>
  );
}