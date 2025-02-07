"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/pricing-tabs";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import type { PricingProps } from "@/types/pricing";
import Link from "next/link";

export function PricingSectionMobile({
  title,
  lite,
  essential,
  professional,
}: PricingProps) {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">(
    "monthly"
  );

  const getPrice = (monthly: string, annual: string) => {
    return billingCycle === "monthly" ? monthly : annual;
  };

  const showPriceDetails = (price: string) => price !== "";

  return (
    <section className="py-4 lg:px-4 md:px-2 px-2 w-full lg:max-w-7xl lg:mx-auto">
      <h2 className="text-2xl font-medium text-center mb-4 font-onest lg:text-5xl tracking-tighter">
        {title}
      </h2>

      <Tabs
        defaultValue="monthly"
        value={billingCycle}
        onValueChange={(value) =>
          setBillingCycle(value as "monthly" | "annual")
        }
        className="w-full max-w-full flex justify-center mx-auto mb-6"
      >
        <TabsList className="w-full h-16">
          <TabsTrigger
            className="px-4 w-full font-figtree font-normal tracking-tighter py-2 h-full text-xs"
            value="monthly"
          >
            Monthly
          </TabsTrigger>
          <TabsTrigger
            className="px-4 w-full font-figtree font-normal tracking-tighter py-2 flex items-center gap-4 h-full text-xs"
            value="annual"
          >
            Annually
            
              <span className="px-2 py-1 bg-[#D0F16C] border-black rounded-full text-black text-[8px] font-figtree leading-tight">
                SAVE <br />
                UP TO 30%
              </span>
            
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="flex flex-col space-y-4">
        <Card className="relative overflow-hidden rounded-[8px] border-black/20 bg-transparent flex flex-col p-2 h-auto shadow-none">
          <div className="absolute inset-0 -z-10">
            <Image
              src={"/assets/pricing/lite-mobile.jpg"}
              alt="pricing lite background"
              fill
              className="object-cover bg-center"
            />
          </div>
          <CardHeader className="p-2">
            <div className="flex gap-2 items-center">
              <span className="font-figtree font-semibold inline-block px-3 py-1 rounded-full md:text-2xl text-sm bg-transparent border-2 border-[#9F8AFF]  w-min">
                {lite.name}
              </span>
              <p className="text-[10px] font-figtree">{lite.tagline}</p>
            </div>
          </CardHeader>
          {/* Ensure the content section grows and reserves space */}
          <CardContent className="text-black flex flex-row justify-between min-h-[100px] p-2">
            {lite.features.length > 0 ? (
              <ul className="space-y-1">
                {lite.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-current" />
                    <span className="text-xs font-figtree">{feature.name}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="h-full flex items-center justify-center text-gray-400">
                No features available
              </div>
            )}
            <div className="text-black flex flex-col items-cend justify-end">
            {showPriceDetails(getPrice(lite.monthlyPrice, lite.annualPrice)) && (
              <div className="flex items-center justify-center">
                <span className="text-3xl font-figtree font-bold">
                  <sup className="text-sm font-figtree font-bold">$</sup>
                  {getPrice(lite.monthlyPrice, lite.annualPrice)}
                </span>
                <span className="ml-2 text-[10px] text-gray-800">/ mo</span>
              </div>
            )}
              <p className="text-[10px] text-center text-black mt-2">
                Per month per user, <br />
                billed {billingCycle === "monthly" ? "monthly" : "annually"}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* ESSENTIAL Plan */}
        <Card className="relative overflow-hidden rounded-[8px] border-black/20 bg-transparent flex flex-col p-2 h-auto shadow-none">
          <div className="absolute inset-0 -z-10">
            <Image
              src={"/assets/pricing/essential-mobile.jpg"}
              alt="pricing lite background"
              fill
              className="object-cover bg-center"
            />
          </div>
          <CardHeader className="p-2">
            <div className="flex gap-2 items-center">
              <span className="font-figtree text-[#D0F16C] font-semibold inline-block px-3 py-1 rounded-full md:text-2xl text-sm bg-transparent border-2 border-[#D0F16C] w-min">
                {essential.name}
              </span>
              <p className="text-[10px] font-figtree text-white">
                {essential.tagline}
              </p>
            </div>
          </CardHeader>
          <CardContent className="text-white flex flex-row justify-between min-h-[100px] p-2">
            <ul className="space-y-1">
              {essential.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-current" />
                  <span className="text-xs font-figtree">{feature.name}</span>
                </li>
              ))}
            </ul>
            <div className="text-white flex flex-col items-cend justify-end">
            {showPriceDetails(getPrice(lite.monthlyPrice, lite.annualPrice)) && (
              <div className="flex items-center justify-center">
                <span className="text-3xl font-figtree font-bold">
                  <sup className="text-sm font-figtree font-bold">$</sup>
                  {getPrice(essential.monthlyPrice, essential.annualPrice)}
                </span>
                <span className="ml-2 text-[10px] text-white">/ mo</span>
              </div>
            )}
              <p className="text-[10px] text-center flex items-end text-white mt-2">
                Per month per user, <br />
                billed {billingCycle === "monthly" ? "monthly" : "annually"}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* PROFESSIONAL Plan */}
        <Card className="relative overflow-hidden rounded-[8px] border-black/20 bg-transparent flex flex-col p-2 h-auto shadow-none">
          <div className="absolute inset-0 -z-10">
            <Image
              src={"/assets/pricing/professional-mobile.jpg"}
              alt="pricing lite background"
              fill
              className="object-cover bg-center"
            />
          </div>
          <CardHeader className="p-2">
            <div className="flex items-center gap-2">
              <span className="font-figtree font-semibold inline-block px-3 py-1 rounded-full md:text-2xl text-sm bg-transparent border-2 border-[#9F8AFF] w-min">
                {professional.name}
              </span>
              <p className="text-[10px] font-figtree">{professional.tagline}</p>
            </div>
          </CardHeader>
          {/* Ensure the content area takes space even if empty */}
          <CardContent className="text-black font-figtree text-base flex-grow min-h-[100px] p-2">
            {professional.features.length > 0 ? (
              <ul className="space-y-1">
                {professional.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-current" />
                    <span className="text-xs font-figtree">{feature.name}</span>
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
        </Card>
      </div>
      <div className="text-center mt-8">
        {/* Contact Sales Button */}
        <Link href={"/Pricing"}>
          <Button className="bg-black text-white hover:bg-gray-800 transition-all duration-300 rounded-[8px] h-12 w-full md:w-[40vw] lg:w-[20vw] font-figtree">
            Contact Sales
          </Button>
        </Link>
      </div>
      <div className="mt-8 text-center text-sm font-figtree font-light space-y-2">
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
