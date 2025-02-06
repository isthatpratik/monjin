"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

export default function HowItWorks() {
  return (
    <section className="container mx-auto px-4 py-4 max-w-7xl">
      <h2
        className={cn("text-2xl lg:text-5xl lg:font-medium font-semibold font-onest text-center mb-10 lg:mb-20")}
      >
        How It Works
      </h2>

      <div className="grid gap-8">
        {/* First Section */}
        <div className={cn("grid lg:grid-cols-2 grid-cols-1 items-center")}>
          <div className="relative aspect-[4/3] lg:aspect-[4/3]">
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
            <p className="text-[#2E2C2C] font-figtree font-normal text-sm lg:text-lg max-w-md lg:text-start text-center">
              Imagine a hiring system without borders. Our platform connects
              companies with a global network of elite interviewers, armed with
              expertise and insights that span industries.
            </p>
          </div>
        </div>

        {/* Second Section */}
        <div
          className={cn(
            "grid lg:grid-cols-2 grid-cols-1 items-center gap-4 md:gap-4"
          )}
        >
          <div className="flex justify-center items-center order-2 lg:order-1">
            <p className="text-[#2E2C2C] font-figtree font-normal text-sm lg:text-lg max-w-md lg:text-start text-center">
              Using advanced algorithms, we schedule interviews between these
              experts and candidates worldwide, customized by skills, roles,
              and experience.
            </p>
          </div>
          <div className="relative aspect-[4/3] lg:aspect-[4/3] order-1 lg:order-2">
            <Image
              src="/assets/about/how-2.png"
              alt="Interview scheduling interface"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Third Section */}
        <div className={cn("grid lg:grid-cols-2 grid-cols-1 items-center gap-4")}>
          <div className="relative aspect-[4/3] lg:aspect-[4/3]">
            <Image
              src="/assets/about/how-3.png"
              alt="Interview recording and assessment interface"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex justify-center items-center">
            <p className="text-[#2E2C2C] font-figtree font-normal text-sm lg:text-lg max-w-md lg:text-start text-center">
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
