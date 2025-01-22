import { Footer } from "@/components/layout/footer";
import { NavbarProducts } from "@/components/layout/navbar-products";
import YcoiFeatures from "@/components/ycoi/ycoi-features";
import { ClientsSlider } from "@/components/sliders/clients-slider";
import YcoiHeroSection from "@/components/ycoi/hero-section";
import Image from "next/image";
import React from "react";
import InterviewSolutions from "@/components/ycoi/interview-solutions";

const MonjinSuite = () => {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <NavbarProducts />

      <div className="absolute inset-0 -z-50 w-full h-full">
        <div className="hidden md:block w-full h-full">
          <Image
            src="/assets/MonjinSuite/background-web.jpg"
            alt="Background"
            fill
            quality={80}
            priority
            className="background-desktop object-cover object-center"
          />
        </div>
        <div className="block md:hidden w-full h-full">
          <Image
            src="/assets/MonjinSuite/background-mobile.jpg"
            alt="Background"
            fill
            quality={80}
            priority
            className="background-mobile object-cover object-top"
          />
        </div>
      </div>

      <div className="md:max-w-[1600px] mx-auto px-8 py-8 z-10">
        <YcoiHeroSection />
        <YcoiFeatures />
        <InterviewSolutions />
      </div>
      <div className="flex flex-col gap-8">
        <ClientsSlider />
        <Footer />
      </div>
    </main>
  );
};

export default MonjinSuite;