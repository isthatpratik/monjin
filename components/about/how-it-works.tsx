"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

export default function HowItWorks() {
  return (
    <section className="container mx-auto px-4 py-4 max-w-7xl">
      <h2
        className={cn("text-5xl font-medium font-onest text-center mb-20")}
      >
        How It Works
      </h2>

      <div className="grid gap-16 md:gap-24">
        {/* First Section */}
        <div className={cn("grid md:grid-cols-2 items-center gap-4")}>
          <div className="relative aspect-square md:aspect-auto md:h-[436px]">
            <Image
              src="/assets/about/how-1.png"
              alt="Platform interface showing code and user profiles"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex justify-center items-center">
            {/* Flexbox ensures center alignment */}
            <p className="text-[#2E2C2C] font-figtree font-normal text-lg max-w-md">
              Imagine a hiring system without borders. Our platform connects
              companies with a global network of elite interviewers, armed with
              expertise and insights that span industries.
            </p>
          </div>
        </div>

        {/* Second Section */}
        <div
          className={cn(
            "grid md:grid-cols-2 items-center gap-4 md:gap-4"
          )}
        >
          <div className="flex justify-center items-center order-2 md:order-1">
            <p className="text-[#2E2C2C] font-figtree font-normal text-lg max-w-md">
              Using advanced algorithms, we schedule interviews between these
              experts and candidates worldwide, customized by skills, roles,
              and experience.
            </p>
          </div>
          <div className="relative aspect-square md:aspect-auto md:h-[436px] order-1 md:order-2">
            <Image
              src="/assets/about/how-2.png"
              alt="Interview scheduling interface"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Third Section */}
        <div className={cn("grid md:grid-cols-2 items-center gap-4")}>
          <div className="relative aspect-square md:aspect-auto md:h-[436px]">
            <Image
              src="/assets/about/how-3.png"
              alt="Interview recording and assessment interface"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex justify-center items-center">
            <p className="text-[#2E2C2C] font-figtree font-normal text-lg max-w-md">
              Every Monjin interview is recorded, creating an invaluable
              resource that can be viewed, assessed, and revisited—anytime,
              anywhere.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
