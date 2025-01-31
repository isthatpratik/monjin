"use client";

import { PricingSection } from "../sections/pricing-section";
import { PricingSectionMobile } from "../sections/pricing-section-mobile";

export default function OcoiPricing() {
  const pricingData = {
    title: "Invest Smarter in Talent with Our Flexible Pricing",
    lite: {
      name: "LITE",
      tagline: "Ideal for Small Teams",
      monthlyPrice: 66,
      annualPrice: 99,
      features: [
        { name: "View Monjin Expert assessed interviews" },
        { name: "Rating and Feedback" },
        { name: "Internal Share" },
        { name: "JD Based OCOI (Optional add-on)" },
        { name: "Publish your Jobs to Multiple Portals (Limited)" },
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
        { name: "Spotlight Unlimited" },
        { name: "Basics Unlimited" },
        { name: "OCOI Unlimited" },
        { name: "Assessed OW- 100 Interviews" },
        { name: "YCOI- 100 Interviews" },
      ],
      ctaLabel: "Buy Now",
      ctaAction: () => console.log("Essential plan selected"),
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
