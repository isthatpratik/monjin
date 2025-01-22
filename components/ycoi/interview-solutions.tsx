import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function InterviewSolutions() {
  return (
      <section className="container mx-auto px-4 py-8 md:py-24">
        <div className="flex flex-row gap-6">
          <div className="relative w-1/2">
            <Image
              src="/assets/ycoi/interview-solutions.png"
              alt="Interview management dashboard interface"
              fill
              className="object-contain"
            />
          </div>

          {/* Right side - Content */}
          <div className="space-y-6 flex flex-col justify-between w-1/2">
            <div>
              <h1
                className={`font-Onest text-5xl tracking-tighter leading-normal max-w-xl font-medium text-[#353535]`}
              >
                Discover Tailored Interview Solutions with Monjin YCOI
              </h1>

              <p
                className={`font-figtree font-light text-[18px] leading-loose text-[#353535] max-w-xl`}
              >
                Experience smarter hiring with Monjin YCOI! Access expert
                interviews, customize sessions to fit your needs, and book top
                industry professionals. Check out our pricing section for
                flexible solutions that drive better hiring outcomes.
              </p>
            </div>
            <div className=" text-center flex justify-center md:justify-start pt-4">
              <Button className="px-8 py-7 text-lg rounded-[8px] font-Onest bg-[#1B1B1B] font-normal text-white hover:shadow-monjin transition-all duration-300">
                Dive In Now
              </Button>
            </div>
          </div>
        </div>
      </section>
  );
}