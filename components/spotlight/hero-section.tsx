import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function SpotlightHeroSection() {
  return (
    <main className="min-h-screen mb-10">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center py-12">
        <div className="space-y-6">
          <div className="inline-flex rounded-xl border-[#DC7F07] border p-1">
            <button className="px-4 py-2 font-figree text-[#DC7F07] text-lg font-medium uppercase cursor-default">
              <strong>Spotlight</strong> - Accelerate Efficient Screening
            </button>
          </div>
          <h2 className="text-5xl font-bold font-onest lg:text-7xl text-[#353535] leading-tight tracking-tighter">
          Effortless One-Way Interviews & Instant Scheduling.
          </h2>
          <p className="text-[#353535] font-light text-lg font-figtree pb-10">
          Spotlight streamlines your hiring process with one-way video interviews that are quick, efficient, and simple to schedule. With flexible scheduling and user-friendly features, Spotlight empowers teams to efficiently assess candidates without the need for real-time interaction.
          </p>
          <Button className="bg-[#1B1B1B] text-white hover:bg-gray-800 rounded-[8px] px-6 py-6 text-base font-Onest font-normal">
            15 Days Free
          </Button>
          <p className="font-figtree text-[#353535] italic font-light pt-4">
          Starting at $24* per month after 15 day free trial period.
          </p>
        </div>

        <div className="absolute xl:right-[300px] top-[160px] lg:right-[100px]">
          <Image
            src="/assets/spotlight/spotlight-hero-section.png"
            alt="Spotlight illustration"
            width={1000}
            height={1000}
            className="object-contain w-full h-full"
          />
        </div>
      </div>
    </main>
  );
}