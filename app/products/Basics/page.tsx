'use client';

import BasicsFeatures from '@/components/basics/basics-features';
import BasicsPricing from '@/components/basics/basics-pricing';
import BasicsHeroSection from '@/components/basics/hero-section';
import { Footer } from '@/components/layout/footer';
import { NavbarBlack } from '@/components/layout/navbar-black';
import { ClientsSlider } from '@/components/sliders/clients-slider';
import Image from 'next/image';
import { motion } from 'framer-motion';
import React from 'react';
import { MobileNavbarDark } from '@/components/layout/mobile-navbar-dark';

const Basics = () => {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <NavbarBlack />
      <MobileNavbarDark />

      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 -z-50 w-full h-full"
        initial={{ opacity: 0, translateY: -100 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1, type: 'spring', stiffness: 80, damping: 20 }}
      >
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
      </motion.div>

      {/* Content Animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, type: 'spring', stiffness: 100, damping: 20 }}
        className="md:max-w-[1600px] mx-auto px-8 py-8 z-10"
      >
        <BasicsHeroSection />
        <BasicsFeatures />
        <BasicsPricing />
      </motion.div>

      {/* Footer and Other Sections Animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, type: 'spring', stiffness: 100, damping: 20 }}
        className="flex flex-col gap-8"
      >
        <ClientsSlider />
        <Footer />
      </motion.div>
    </main>
  );
};

export default Basics;
