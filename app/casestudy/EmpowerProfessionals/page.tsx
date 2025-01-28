import CaseOne from "@/components/case-study/empower-professionals";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { ClientsSlider } from "@/components/sliders/clients-slider";
import Image from "next/image";
import React from "react";

const EmpowerProfessionals = () => {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Navbar />

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
        <CaseOne />
      </div>    
      <div className="flex flex-col gap-8">
        <ClientsSlider />
        <Footer />
      </div>
    </main>
  );
};

export default EmpowerProfessionals;