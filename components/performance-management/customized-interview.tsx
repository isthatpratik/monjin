import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function CustomizedInterview() {
  return (
      <section className="container rounded-3xl mx-auto px-4 py-8 md:py-12 bg-[url('/assets/performance-management/bg.png')] bg-cover bg-no-repeat object-contain]">
        <div className="flex flex-row gap-6">
          <div className="relative w-1/2">
            <Image
              src="/assets/performance-management/customized-interview.png"
              alt="Interview management dashboard interface"
              fill
              className="object-contain"
            />
          </div>

          {/* Right side - Content */}
          <div className="space-y-6 flex flex-col justify-between w-1/2">
            <div className="flex flex-col gap-4">
              <h1
                className={`font-Onest text-5xl tracking-tighter leading-snug max-w-xl font-medium text-[#353535]`}
              >
                Unlock Customized Interview Solutions with Monjin’s Performance Management
              </h1>

              <p
                className={`font-figtree font-light text-[18px] leading-normal text-[#353535] max-w-xl`}
              >
                Elevate your hiring with Monjin Performance Management! Get access to expert interviews, tailor sessions to your specific needs, and book top industry professionals. Explore our flexible pricing options designed to drive superior hiring outcomes.
              </p>
            </div>
            <div className=" text-center flex justify-center md:justify-start pt-4">
              <Button className="px-8 py-7 text-lg rounded-[8px] font-Onest bg-[#1B1B1B] font-normal text-white hover:shadow-monjin transition-all duration-300">
                Get Started Now
              </Button>
            </div>
          </div>
        </div>
      </section>
  );
}