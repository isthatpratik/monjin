import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Onest, Figtree } from "next/font/google";

const onest = Onest({
  subsets: ["latin"],
  weight: ["500"],
});

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300"],
});

export default function InterviewSolution() {
  return (
    <main className="min-h-screen bg-white">
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-row gap-8">
          {/* Left side - Image */}
          <div className="relative w-1/2">
            <Image
              src="/assets/ycoi/interview-solution.png"
              alt="Interview management dashboard interface"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Right side - Content */}
          <div className="space-y-6 flex flex-col justify-between w-1/2">
            <div>
              <h1
                className={`${onest.className} text-5xl tracking-tighter leading-normal max-w-xl font-medium text-[#353535]`}
              >
                Discover Tailored Interview Solutions with Monjin YCOI
              </h1>

              <p
                className={`${figtree.className} font-light text-lg text-[18px] leading-loose text-[#353535]`}
              >
                Experience smarter hiring with Monjin YCOI! Access expert
                interviews, customize sessions to fit your needs, and book top
                industry professionals. Check out our pricing section for
                flexible solutions that drive better hiring outcomes.
              </p>
            </div>
            <div className=" text-center flex justify-center md:justify-start pt-4">
              <Button className="px-8 py-7 text-lg rounded-full bg-black text-white hover:bg-gray-800 transition-colors">
                Get Started Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
