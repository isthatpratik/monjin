import { NavBar } from "@/components/layout/navbar";
import { Clients } from "@/components/sections/clients-landing";
import { HeroSection } from "@/components/sections/hero-section";
import FeatureSection from "@/components/sections/feature-section";
import ProdcutsSection from "@/components/sections/products-section";
import CaseStudies from "@/components/sections/case-studies";
import { Footer } from "@/components/layout/footer";
import { Testimonials } from "@/components/sections/testimonials";
import OcoiFeatures from "@/components/ocoi/ocoi-features";
import Image from "next/image";
import Testimonials2 from "@/components/sections/testimonials2";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gray-700">
      {/* Background Image for Mobile */}
      {/* <div className="absolute inset-0 -z-10 lg:hidden">
        <Image
          alt="gradient-mobile-bg"
          src={"/assets/gradient-mobile.png"}
          quality={50}
          fill
          sizes="100vw"
          priority
          className="object-top object-cover"
        />
      </div>
      <div className="absolute inset-0 -z-10 lg:block md:block hidden">
        <Image
          alt="gradient-mobile-bg"
          src={"/assets/gradient-web.png"}
          quality={50}
          fill
          sizes="100vw"
          priority
          className="object-cover object-top"
        />
      </div> */}

      <NavBar />

      <div className="md:max-w-[1600px] mx-auto px-6 py-10 z-10">
        {/* <HeroSection />
        <Clients />
        <FeatureSection />
        <ProdcutsSection />
        <CaseStudies /> */}
        {/* <Testimonials /> */}

        {/* <Testimonials2 /> */}

        <OcoiFeatures />
      </div>

      <footer>
        <Footer />
      </footer>
    </main>
  );
}
