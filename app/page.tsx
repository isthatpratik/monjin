import { Clients } from "@/components/sections/clients-landing";
import { HeroSection } from "@/components/sections/hero-section";
import FeatureSection from "@/components/sections/feature-section";
import ProdcutsSection from "@/components/sections/products-section";
import CaseStudies from "@/components/sections/case-studies";
import { Footer } from "@/components/layout/footer";

import Testimonials from "@/components/sections/testimonials";
import Image from "next/image";
import { Navbar } from "@/components/layout/navbar";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10 lg:hidden">
        <Image
          alt="gradient-mobile-bg"
          src={"/assets/gradient-mobile.jpg"}
          quality={100}
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 -z-10 lg:block hidden md:block">
        <Image
          alt="gradient-mobile-bg"
          src={"/assets/gradient-web.jpg"}
          quality={100}
          fill
          sizes="100vw"
          className="object-cover object-top"
          priority

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

      <Navbar/>


      <div className="md:max-w-[1600px] mx-auto px-6 py-10">
        <HeroSection />

        <Clients />
        <FeatureSection />
        <ProdcutsSection />
        <CaseStudies /> */}
      </div>

      <footer>
        <Footer />
      </footer>
    </main>
  );
}
