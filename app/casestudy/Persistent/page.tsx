import CaseThree from "@/components/case-study/persistent";
import { Footer } from "@/components/layout/footer";
import { MobileNavbarLight } from "@/components/layout/mobile-navbar-light";
import { NavbarWhite } from "@/components/layout/navbar-white";
import { ClientsSlider } from "@/components/sliders/clients-slider";
import Image from "next/image";
import React from "react";

const Persistent = () => {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <NavbarWhite />
      <MobileNavbarLight />

      <div className="absolute inset-0 -z-50 w-full h-full">
        <div className="hidden md:block w-full h-full">
          <Image
            src="/assets/case-study/case-study-bg.jpg"
            alt="Background"
            fill
            quality={80}
            priority
            className="background-desktop object-cover object-top"
          />
        </div>
        <div className="block md:hidden w-full h-full">
          <Image
            src="/assets/case-study/case-study-bg-mobile.jpg"
            alt="Background"
            fill
            quality={80}
            priority
            className="background-mobile object-cover object-top"
          />
        </div>
      </div>

      <div className="md:max-w-[1600px] mx-auto lg:px-8 py-8 z-10">
        <CaseThree />
      </div>
      <div className="flex flex-col gap-8">
        <ClientsSlider />
        <Footer />
      </div>
    </main>
  );
};

export default Persistent;
