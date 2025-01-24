"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import type { PricingProps } from "@/types/pricing";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

export function PricingSectionMobile({
  title,
  lite,
  essential,
  professional,
}: PricingProps) {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">(
    "monthly"
  );

  const getPrice = (monthly: number, annual: number) => {
    return billingCycle === "monthly" ? monthly : annual;
  };

  return (
    <section className="py-12 lg:px-4 md:px-2 px-0 w-full lg:max-w-7xl lg:mx-auto">
      <h2 className="text-4xl font-medium text-center mb-12 font-onest lg:text-5xl tracking-tighter">
        {title}
      </h2>

      <Tabs
        defaultValue="monthly"
        value={billingCycle}
        onValueChange={(value) =>
          setBillingCycle(value as "monthly" | "annual")
        }
        className="w-full max-w-full flex justify-center mx-auto mb-12"
      >
        <TabsList className="ld:grid ld:grid-cols-2 lg:w-[40vw] md:w-[60vw] w-[100vw] md:grid md:grid-cols-2 grid grid-cols-1 lg:rounded-full rounded-[42px] lg:h-20 md:h-20 h-40">
          <TabsTrigger
            className="rounded-full px-8 font-figtree font-normal tracking-tighter py-4 h-full lg:text-2xl md:text-xl text-sm"
            value="monthly"
          >
            Monthly
          </TabsTrigger>
          <TabsTrigger
            className="rounded-full px-8 font-figtree font-normal tracking-tighter py-4 flex items-center gap-2 h-full lg:text-2xl md:text-xl text-sm"
            value="annual"
          >
            Annually
            {billingCycle === "annual" && (
              <span className="px-2 py-1 border-[#D0F16C] border rounded-full text-[#D0F16C] text-xs whitespace-nowrap tracking-wider">
                SAVE UPTO 30%
              </span>
            )}
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{
          clickable: true,
          el: ".swiper-pagination-custom",
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="my-12 md:w-[60vw] md:flex md:justify-center"
        loop
      >
        <SwiperSlide>
          <Card className="relative overflow-hidden rounded-[32px] border border-black/20 bg-transparent flex flex-col p-2 h-[500px]">
            <div className="absolute inset-0 -z-10">
              <Image
                src={"/assets/pricing/lite.jpg"}
                alt="pricing lite background"
                fill
                className="object-cover object-top"
              />
            </div>
            <CardHeader>
              <span className="font-figtree font-bold inline-block px-4 py-1 rounded-full md:text-2xl text-xl bg-transparent border-2 border-[#9F8AFF] mb-2 w-min">
                {lite.name}
              </span>
              <div className="text-black">
                <p className="text-xs mb-4 font-figtree">{lite.tagline}</p>
                <div className="flex items-baseline">
                  <span className="md:text-6xl text-4xl font-figtree font-bold">
                    <sup className="md:text-3xl text-2xl font-figtree font-bold">
                      $
                    </sup>
                    {getPrice(lite.monthlyPrice, lite.annualPrice)}
                  </span>
                  <span className="ml-2 text-sm text-gray-600">/ mo</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Per month per user, billed{" "}
                  {billingCycle === "monthly" ? "monthly" : "annually"}
                </p>
              </div>
            </CardHeader>
            {/* Ensure the content section grows and reserves space */}
            <CardContent className="text-black flex-grow min-h-[100px]">
              {lite.features.length > 0 ? (
                <ul className="space-y-1">
                  {lite.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-current" />
                      <span className="text-sm font-figtree">
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                // Optional placeholder for empty features
                <div className="h-full flex items-center justify-center text-gray-400">
                  No features available
                </div>
              )}
            </CardContent>
            {/* Footer stays at the bottom */}
            <CardFooter className="mt-auto pt-6">
              <Button
                onClick={lite.ctaAction}
                className="w-full bg-black text-white hover:shadow-monjin transition-all duration-300 rounded-full h-12 font-figtree"
              >
                {lite.ctaLabel}
              </Button>
            </CardFooter>
          </Card>
        </SwiperSlide>

        <SwiperSlide>
          {/* ESSENTIAL Plan */}
          <Card className="relative overflow-hidden rounded-[32px] border-black/20 bg-transparent flex flex-col p-2 h-[500px]">
            <div className="absolute inset-0 -z-10">
              <Image
                src={"/assets/pricing/essential.jpg"}
                alt="pricing lite background"
                fill
                className="object-cover object-top"
              />
            </div>
            <CardHeader>
              <span className="font-figtree font-bold inline-block px-4 py-1 rounded-full md:text-2xl text-xl bg-transparent border-2 border-[#D0F16C] mb-2 w-min text-[#D0F16C]">
                {essential.name}
              </span>
              <div className="text-white">
                <p className="text-xs mb-4 font-figtree">{essential.tagline}</p>
                <div className="flex items-baseline">
                  <span className="md:text-6xl text-4xl font-bold font-onest">
                    <sup className="md:text-3xl text-2xl font-figtree font-bold">
                      $
                    </sup>
                    {getPrice(essential.monthlyPrice, essential.annualPrice)}
                  </span>
                  <span className="ml-2 text-sm text-gray-300">/ mo</span>
                </div>
                <p className="text-sm text-gray-300 mt-2">
                  Per month per user, billed{" "}
                  {billingCycle === "monthly" ? "monthly" : "annually"}
                </p>
              </div>
            </CardHeader>
            <CardContent className="text-white mt-4">
              <ul className="space-y-1">
                {essential.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-current" />
                    <span className="text-sm font-figtree">{feature.name}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="mt-auto pt-6">
              <Button
                onClick={essential.ctaAction}
                className="w-full bg-white text-black hover:shadow-monjin hover:bg-white transition-all duration-300 rounded-full h-12 font-figtree"
              >
                {essential.ctaLabel}
              </Button>
            </CardFooter>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className="relative overflow-hidden rounded-[32px] border-black/20 bg-transparent flex flex-col p-2 h-[510px]">
            <div className="absolute inset-0 -z-10">
              <Image
                src={"/assets/pricing/professional.jpg"}
                alt="pricing lite background"
                fill
                className="object-cover object-top"
              />
            </div>
            <CardHeader>
              <span className="font-figtree font-bold inline-block px-4 py-1 rounded-full md:text-2xl text-xl bg-transparent border-2 border-[#9F8AFF] mb-2 w-min">
                {professional.name}
              </span>
              <div className="text-black">
                <p className="text-xs mb-4 font-figtree">
                  {professional.tagline}
                </p>
              </div>
            </CardHeader>
            {/* Ensure the content area takes space even if empty */}
            <CardContent className="text-black font-figtree text-base flex-grow min-h-[100px]">
              {professional.features.length > 0 ? (
                <ul className="space-y-1">
                  {professional.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-current" />
                      <span className="text-sm font-figtree">
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                // Optional placeholder for empty content
                <div className="h-full flex items-center justify-center text-gray-400">
                  No features available
                </div>
              )}
            </CardContent>
            <CardFooter className="mt-auto pt-6">
              <Button
                onClick={professional.ctaAction}
                className="w-full bg-black text-white hover:shadow-monjin transition-all duration-300 rounded-full h-12 font-Onest font-light"
              >
                {professional.ctaLabel}
              </Button>
            </CardFooter>
          </Card>
        </SwiperSlide>
      </Swiper>
      <div className="mt-8 text-center text-sm text-gray-500 space-y-2">
        <p>* Plus applicable taxes</p>
        <p>*Cancel your subscription anytime</p>
        <p>
          * Company registration details and email verification will be needed
          prior to subscription activation
        </p>
      </div>
    </section>
  );
}
