import { Footer } from '@/components/layout/footer';
import { MobileNavbarDark } from '@/components/layout/mobile-navbar-dark';
import { NavbarBlack } from '@/components/layout/navbar-black';
import MonjinSuiteHero from '@/components/MonjinSuite/hero-section';
import MonjinSuitePricing from '@/components/MonjinSuite/monjin-suite-pricing';
import MonjinSuiteProducts from '@/components/MonjinSuite/monjin-suite-products';
import { ClientsSlider } from '@/components/sliders/clients-slider';
import Image from 'next/image';
import React from 'react';

const MonjinSuite = () => {
  return (
      <main className="relative min-h-screen overflow-hidden">
        <NavbarBlack />
        <MobileNavbarDark />
        
        <div className="absolute inset-0 -z-50 w-full h-full">
          <div className="hidden md:block w-full h-full">
            <Image
              src="/assets/MonjinSuite/background-web.jpg"
              alt="Background"
              fill
              quality={70}
              priority
              className="background-desktop object-cover object-center top-52"
            />
          </div>
          <div className="block md:hidden w-full h-full">
            <Image
              src="/assets/MonjinSuite/background-mobile.jpg"
              alt="Background"
              fill
              quality={70}
              priority
              className="background-mobile object-cover object-top"
            />
          </div>
        </div>

        <div className="md:max-w-[1600px] mx-auto md:px-8 px-4 py-8 z-10">
          <MonjinSuiteHero />
          <MonjinSuiteProducts />
          <MonjinSuitePricing />
        </div>
        <div className='flex flex-col gap-8'>

          <ClientsSlider />
          <Footer />
        </div>
      </main>
  );
};

export default MonjinSuite;