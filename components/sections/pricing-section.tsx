"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/pricing-tabs";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import type { PricingProps } from "@/types/pricing";
import Link from "next/link";

export function PricingSection({
  title,
  lite,
  essential,
  professional,
}: PricingProps) {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">(
    "monthly"
  );

  const getPrice = (monthly: string, annual: string) => {
    const price = billingCycle === "monthly" ? monthly : annual;
    return price || ""; 
  };

  const showPriceDetails = (price: string) => price !== "";

  return (
    <section className="py-16 lg:px-4 md:px-2 px-0 w-full lg:max-w-7xl lg:mx-auto">
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
        <TabsList className="ld:grid ld:grid-cols-2 lg:w-[40vw] md:w-[50vw] w-[100vw] md:grid md:grid-cols-2 grid grid-cols-1 lg:h-20 md:h-20 h-40 border-none">
          <TabsTrigger
            className="px-8 font-figtree font-normal tracking-tighter py-4 h-full lg:text-2xl md:text-xl text-sm"
            value="monthly"
          >
            Monthly
          </TabsTrigger>
          <TabsTrigger
            className="px-8 font-figtree font-normal tracking-tighter py-4 flex items-center gap-4 h-full lg:text-2xl md:text-xl text-sm"
            value="annual"
          >
            Annually
            {billingCycle === "annual" && (
              <span className="px-2 py-1 bg-[#D0F16C] border-black rounded-full text-black text-xs whitespace-nowrap tracking-wider">
                SAVE UPTO 30%
              </span>
            )}
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid md:grid-cols-3 gap-8">
        {/* LITE Plan */}
        <Card className="relative overflow-hidden rounded-[32px] border border-black/20 bg-transparent flex flex-col lg:p-4 p-2">
          <div className="absolute inset-0 -z-10">
            <Image
              src={"/assets/pricing/lite.jpg"}
              alt="pricing lite background"
              fill
              className="object-cover object-top"
            />
          </div>
          <CardHeader>
            <span className="font-figtree font-bold inline-block px-4 py-1 rounded-full lg:text-2xl md:text-2xl text-xl bg-transparent border-2 border-[#9F8AFF] mb-2 w-min">
              {lite.name}
            </span>
            <div className="text-black">
              <p className="text-xs mb-4 font-figtree">{lite.tagline}</p>
              {showPriceDetails(getPrice(lite.monthlyPrice, lite.annualPrice)) && (
                <div className="flex items-baseline">
                  <span className="lg:text-6xl md:text-5xl text-4xl font-figtree font-bold">
                    <sup className="lg:text-4xl md:text-3xl text-2xl font-figtree font-bold">$</sup>
                    {getPrice(lite.monthlyPrice, lite.annualPrice)}
                  </span>
                  <span className="ml-2 text-sm text-gray-600">/ mo</span>
                </div>
              )}
              <p className="text-sm text-gray-600 mt-2">
                Per month per user, billed{" "}
                {billingCycle === "monthly" ? "monthly" : "annually"}
              </p>
            </div>
          </CardHeader>
          <CardContent className="text-black">
            <ul className="space-y-1">
              {lite.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-current" />
                  <span className="text-sm font-figtree">{feature.name}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* ESSENTIAL Plan */}
        <Card className="relative overflow-hidden rounded-[32px] bg-transparent transform lg:scale-105 flex flex-col p-4">
          <div className="absolute inset-0 -z-10">
            <Image
              src={"/assets/pricing/essential.jpg"}
              alt="pricing lite background"
              fill
              className="object-cover object-top"
            />
          </div>
          <CardHeader>
            <span className="font-figtree font-bold inline-block px-4 py-1 rounded-full lg:text-2xl md:text-2xl text-xl bg-transparent border-2 border-[#D0F16C] mb-2 w-min text-[#D0F16C]">
              {essential.name}
            </span>
            <div className="text-white">
              <p className="text-xs mb-4 font-figtree">{essential.tagline}</p>
              {showPriceDetails(getPrice(essential.monthlyPrice, essential.annualPrice)) && (
                <div className="flex items-baseline">
                  <span className="lg:text-6xl md:text-5xl text-4xl font-figtree font-bold">
                    <sup className="lg:text-4xl md:text-3xl text-2xl font-figtree font-bold">$</sup>
                    {getPrice(essential.monthlyPrice, essential.annualPrice)}
                  </span>
                  <span className="ml-2 text-sm text-white">/ mo</span>
                </div>
              )}
              <p className="text-sm text-white mt-2">
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
        </Card>

        {/* PROFESSIONAL Plan */}
        <Card className="relative overflow-hidden rounded-[32px] bg-transparent flex flex-col p-4">
          <div className="absolute inset-0 -z-10">
            <Image
              src={"/assets/pricing/professional.jpg"}
              alt="pricing lite background"
              fill
              className="object-cover object-top"
            />
          </div>
          <CardHeader>
            <span className="font-figtree font-bold inline-block px-4 py-1 rounded-full lg:text-2xl md:text-2xl text-xl bg-transparent border-2 border-[#9F8AFF] mb-2 w-min">
              {professional.name}
            </span>
            <div className="text-black">
              <p className="text-xs mb-4 font-figtree">{professional.tagline}</p>
              {showPriceDetails(getPrice(professional.monthlyPrice, professional.annualPrice)) && (
                <div className="flex items-baseline">
                  <span className="lg:text-6xl md:text-5xl text-4xl font-figtree font-bold">
                    <sup className="lg:text-4xl md:text-3xl text-2xl font-figtree font-bold">$</sup>
                    {getPrice(professional.monthlyPrice, professional.annualPrice)}
                  </span>
                  <span className="ml-2 text-sm text-gray-600">/ mo</span>
                </div>
              )}
              <p className="text-sm text-gray-600 mt-2">
                Per month per user, billed{" "}
                {billingCycle === "monthly" ? "monthly" : "annually"}
              </p>
            </div>
          </CardHeader>
          <CardContent className="text-black font-figtree text-base">
            <ul className="space-y-1">
              {professional.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-current" />
                  <span className="text-sm font-figtree">{feature.name}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 pt-6 text-center">
        <Link href={'/Pricing'}>
        <Button className="bg-[#1B1B1B] text-white font-onest hover:bg-[#1B1B1B]/80 transition-all duration-300 rounded-[8px] py-8 px-20">
          Contact Sales
        </Button>
        </Link>
      </div>

      <div className="mt-8 text-center lg:text-[18px] font-figtree font-light text-base space-y-2">
        <p>* Plus applicable taxes</p>
        <p>* Cancel your subscription anytime</p>
        <p>
          * Company registration details and email verification will be needed
          prior to subscription activation
        </p>
      </div>

    </section>
  );
}
