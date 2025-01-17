import PricingSection, { type PricingPlan } from '@/components/sections/pricing-section';

const monjinPricingPlans: PricingPlan[] = [
  {
    title: 'LITE',
    description: 'Ideal for Small Teams',
    monthlyPrice: 409,
    annualPrice: 4908,
    features: [
      'Spotlight Unlimited',
      'Basics Unlimited',
      'OCOI Unlimited',
    ],
    bgImage: '/assets/pricing/lite.png',
    buttonText: 'Buy Now',
  },
  {
    title: 'ESSENTIAL',
    description: 'Ideal for Growing Teams',
    monthlyPrice: 649,
    annualPrice: 7788,
    features: [
      'Spotlight Unlimited',
      'Basics Unlimited',
      'OCOI Unlimited',
      'Assessed OW- 100 Interviews',
      'YCOI- 100 Interviews',
    ],
    bgImage: '/assets/pricing/essential.png',
    buttonText: 'Buy Now',
    buttonVariant: 'outline',
    isHighlighted: true,
  },
  {
    title: 'PROFESSIONAL',
    description: 'Made for Enterprises',
    monthlyPrice: null,
    annualPrice: null,
    features: [
      'Spotlight Unlimited',
      'Basics Unlimited',
      'OCOI Unlimited',
      'Assessed OW- Unlimited',
      'YCOI Unlimited',
    ],
    bgImage: '/assets/pricing/professional.png',
    buttonText: 'Contact Sales',
  },
]

export default function MonjinSuitePricing() {
  return (
    <PricingSection
      title="Invest Smarter in Talent with Our Flexible Pricing"
      plans={monjinPricingPlans}
    />
  )
}

