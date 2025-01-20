import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function OcoiHeroSection() {
  return (
    <main className="min-h-screen mb-20">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center py-12">
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="text-6xl font-medium ">OCOI</h1>
          </div>
          <div className="inline-flex rounded-xl border-purple-600 border p-1">
            <button className="px-4 py-2 font-figree text-purple-600 font-medium">
              OUR CANDIDATES OUR INTERVIEWERS
            </button>
          </div>
          <h2 className="text-5xl font-bold font-onest lg:text-7xl text-[#353535] tracking-tighter leading-tight">
          Hire top talent, swiftly and strategically
          </h2>
          <p className="text-[#353535] font-light text-lg font-figtree">
          Turn opportunities into success with Monjin&apos;s OCOI — a smart solution designed to transform your hiring process. Discover how Monjin OCOI empowers your team to hire better, faster, and smarter.
          </p>
          <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-6 py-3">
            Watch Free For 15 Days
          </Button>
        </div>

        <div className="absolute xl:right-[300px] top-[160px] lg:right-[100px]">
          <Image
            src="/assets/ocoi/ocoi-hero-section.png"
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