"use client";

import { PricingSection } from "../sections/pricing-section";
import { PricingSectionMobile } from "../sections/pricing-section-mobile";

export default function BasicsPricing() {
  const pricingData = {
    title: "Invest Smarter in Talent with Our Flexible Pricing",
    lite: {
      name: "LITE",
      tagline: "Ideal for Small Teams",
      monthlyPrice: 49,
      annualPrice: 35,
      features: [
        { name: "Two way video interview" },
        { name: "Scheduling" },
        { name: "Rating and Feedback" },
        { name: "Limited External Share" },
        { name: "Internal Share" },
        { name: "Job Postings" },
      ],
      ctaLabel: "Buy Now",
      ctaAction: () => console.log("Lite plan selected"),
    },
    essential: {
      name: "ESSENTIAL",
      tagline: "Ideal for Growing Teams",
      monthlyPrice: 99,
      annualPrice: 69,
      features: [
        { name: "Two way video interview" },
        { name: "Scheduling" },
        { name: "Rating and Feedback" },
        { name: "Limited External Share" },
        { name: "Internal Share" },
        { name: "Job Postings" },
        { name: "Code and Chat" },
        { name: "Screen Sharing" },
      ],
      ctaLabel: "Buy Now",
      ctaAction: () => console.log("Essential plan selected"),
    },
    professional: {
      name: "PROFESSIONAL",
      tagline: "Made for Enterprises",
      monthlyPrice: '166',
      annualPrice: '166',
      features: [
        { name: "Essential+" },
        { name: "Unlimited External Share" },
        { name: "Unlimited Job Postings" },
        { name: "Publish your Jobs to Multiple Portals (Unlimited)" },
      ],
      ctaLabel: "Contact Sales",
      ctaAction: () => console.log("Professional plan selected"),
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
