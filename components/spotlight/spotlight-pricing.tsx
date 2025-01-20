"use client";

import { PricingSection } from "../sections/pricing-section";
import { PricingSectionMobile } from "../sections/pricing-section-mobile";

export default function SpotlightPricing() {
  const pricingData = {
    title: "Invest Smarter in Talent with Our Flexible Pricing",
    lite: {
      name: "LITE",
      tagline: "Ideal for Small Teams",
      monthlyPrice: 34,
      annualPrice: 24,
      features: [
        { name: "Asynchronous Video Interview" },
        { name: "Invite Candidate" },
        { name: "Limited External Share" },
        { name: "Internal share" },
        { name: "Rating & Feedback" },
        { name: "Job Postings" },
        { name: "Publish your Jobs to Multiple Portals (Limited)" },
      ],
      ctaLabel: "Buy Now",
      ctaAction: () => console.log("Lite plan selected"),
    },
    essential: {
      name: "ESSENTIAL",
      tagline: "Ideal for Growing Teams",
      monthlyPrice: 49,
      annualPrice: 35,
      features: [
        { name: "Asynchronous Video Interview" },
        { name: "Invite Candidate" },
        { name: "Limited External Share" },
        { name: "Internal share" },
        { name: "Rating & Feedback" },
        { name: "Job Postings" },
        { name: "Publish your Jobs to Multiple Portals (Limited)" },
        { name: "Multiple choice questions" },
        { name: "Access to Monjin Question Bank" },
      ],
      ctaLabel: "Buy Now",
      ctaAction: () => console.log("Essential plan selected"),
    },
    professional: {
      name: "PROFESSIONAL",
      tagline: "Made for Enterprises",
      monthlyPrice: '99',
      annualPrice: '69',
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
