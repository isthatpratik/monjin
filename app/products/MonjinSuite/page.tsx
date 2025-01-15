import { NavBarProducts } from '@/components/layout/navbar-products';
import MonjinSuiteHero from '@/components/MonjinSuite/hero-section';
import Image from 'next/image';
import React from 'react';

const MonjinSuite = () => {
  return (
      <main className="relative min-h-screen overflow-hidden">
        <NavBarProducts />
        
        <div className="absolute inset-0 -z-50 w-full h-full">
          <div className="hidden md:block w-full h-full">
            <Image
              src="/assets/MonjinSuite/background-web.png"
              alt="Background"
              layout="fill"
              quality={100}
              className="background-desktop object-cover object-top"
            />
          </div>
          <div className="block md:hidden w-full h-full">
            <Image
              src="/assets/MonjinSuite/background-mobile.png"
              alt="Background"
              layout="fill"
              quality={100}
              className="background-mobile object-cover object-top"
            />
          </div>
        </div>

        <div className="md:max-w-[80vw] mx-auto px-6 py-6 z-10">
          <MonjinSuiteHero />
        </div>
      </main>
  );
};

export default MonjinSuite;