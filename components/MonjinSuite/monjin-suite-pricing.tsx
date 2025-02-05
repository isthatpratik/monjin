"use client";

import { PricingSection } from "../sections/pricing-section";
import { PricingSectionMobile } from "../sections/pricing-section-mobile";

export default function MonjinSuitePricing() {
  const pricingData = {
    title: "Invest Smarter in Talent with Our Flexible Pricing",
    lite: {
      name: "LITE",
      tagline: "Ideal for Small Teams",
      monthlyPrice: 409,
      annualPrice: 349,
      features: [
        { name: "Spotlight Unlimited" },
        { name: "Basics Unlimited" },
        { name: "OCOI Unlimited" },
      ],
    },
    essential: {
      name: "ESSENTIAL",
      tagline: "Ideal for Growing Teams",
      monthlyPrice: 649,
      annualPrice: 549,
      features: [
        { name: "Spotlight Unlimited" },
        { name: "Basics Unlimited" },
        { name: "OCOI Unlimited" },
        { name: "Assessed OW- 100 Interviews" },
        { name: "YCOI- 100 Interviews" },
      ],
    },
    professional: {
      name: "PROFESSIONAL",
      tagline: "Made for Enterprises",
      monthlyPrice: null,
      annualPrice: null,
      features: [
        { name: "Spotlight Unlimited" },
        { name: "Basics Unlimited" },
        { name: "OCOI Unlimited" },
        { name: "Assessed OW- Unlimited" },
        { name: "YCOI Unlimited" },
      ],
    },
  };

  return (
    <main>
      <div className="hidden lg:block">
        <PricingSection {...pricingData} />
      </div>
      <div className="block lg:hidden">
        <PricingSectionMobile {...pricingData} />
      </div>
    </main>
  );
}
