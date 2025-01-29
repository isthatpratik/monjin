import { Footer } from "@/components/layout/footer";
import { MobileNavbarLight } from "@/components/layout/mobile-navbar-light";
import { NavbarWhite } from "@/components/layout/navbar-white";
import { ClientsSlider } from "@/components/sliders/clients-slider";
import ContactSection from "@/components/support/contact-section";
import SupportHero from "@/components/support/support-hero-section";
import SupportSection from "@/components/support/support-section";
import Image from "next/image";
import React from "react";

const SupportPage = () => {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <NavbarWhite />
      <MobileNavbarLight />

      <div className="absolute inset-0 -z-50 w-full h-full">
        <div className="hidden md:block w-full h-full">
          <Image
            src="/assets/support/support-web.jpg"
            alt="Background"
            fill
            quality={80}
            priority
            className="background-desktop object-cover object-top"
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
        <SupportHero />
        <SupportSection />
        <ContactSection />
      </div>
      <div className="flex flex-col gap-8">
        <ClientsSlider />
        <Footer />
      </div>
    </main>
  );
};

export default SupportPage;
