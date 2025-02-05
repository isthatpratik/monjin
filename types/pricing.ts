export interface PricingFeature {
    name: string;
  }
  
  export interface PricingTier {
    name: string;
    tagline: string;
    monthlyPrice: any;
    annualPrice: any;
    features: PricingFeature[];
  }
  
  export interface PricingProps {
    title: string;
    lite: PricingTier;
    essential: PricingTier;
    professional: PricingTier;
  }
  
  