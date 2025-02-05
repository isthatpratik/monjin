import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function InterviewSolutions() {
  return (
    <section className="container mx-auto px-4 py-4 md:py-24">
      <div className="gap-6 hidden lg:flex">
        <div className="relative w-1/2">
          <Image
            src="/assets/ycoi/interview-solutions.png"
            alt="Interview management dashboard interface"
            width={400}
            height={400}
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="space-y-6 flex flex-col justify-between w-1/2">
          <div>
            <h1
              className={`font-onest text-5xl tracking-tighter leading-normal max-w-xl font-medium text-[#353535]`}
            >
              Discover Tailored Interview Solutions with Monjin YCOI
            </h1>

            <p
              className={`font-figtree font-light text-[18px] leading-loose text-[#353535] max-w-xl`}
            >
              Experience smarter hiring with Monjin YCOI! Access expert
              interviews, customize sessions to fit your needs, and book top
              industry professionals. Check out our pricing section for flexible
              solutions that drive better hiring outcomes.
            </p>
          </div>
          <div className=" text-center flex justify-center md:justify-start pt-4">
            <Button className="px-8 py-7 text-lg rounded-[8px] font-Onest bg-[#1B1B1B] font-normal text-white hover:shadow-monjin transition-all duration-300">
              Dive In Now
            </Button>
          </div>
        </div>
      </div>
      <div className="lg:hidden flex flex-col gap-4">
        <h1
          className={`font-onest text-2xl tracking-tighter leading-normal max-w-xl font-semibold text-center text-[#353535]`}
        >
          Discover Tailored Interview Solutions with Monjin YCOI
        </h1>
        <div className="w-full h-auto flex items-center justify-center">
          <Image
            src="/assets/ycoi/interview-solutions.png"
            alt="Interview management dashboard interface"
            width={400}
            height={400}
            className="w-full h-auto object-contain"
          />
        </div>
        <p
          className={`font-figtree text-sm text-center text-[#353535] max-w-xl`}
        >
          Experience smarter hiring with Monjin YCOI! Access expert interviews,
          customize sessions to fit your needs, and book top industry
          professionals. Check out our pricing section for flexible solutions
          that drive better hiring outcomes.
        </p>
        <div className=" text-center flex justify-center md:justify-start pt-4">
          <Link href={"/Pricing"}>
            <Button className="flex-1 px-8 py-7 text-lg rounded-[8px] font-Onest bg-[#1B1B1B] font-normal text-white hover:shadow-monjin transition-all duration-300">
              Dive In Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
