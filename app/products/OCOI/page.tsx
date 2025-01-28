"use client";

import { Footer } from "@/components/layout/footer";
import { NavbarProducts } from "@/components/layout/navbar-products";
import OcoiHeroSection from "@/components/ocoi/hero-section";
import OcoiFeatures from "@/components/ocoi/ocoi-features";
import OcoiPricing from "@/components/ocoi/ocoi-pricing";
import { ClientsSlider } from "@/components/sliders/clients-slider";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const OCOI = () => {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <NavbarProducts />

      <motion.div
        className="absolute inset-0 -z-50 w-full h-full"
        initial={{ opacity: 0, translateY: -100 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1, type: "spring", stiffness: 80, damping: 20 }}
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
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.4,
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
        className="md:max-w-[1600px] mx-auto px-8 py-8 z-10"
      >
        <OcoiHeroSection />
        <OcoiFeatures />
      </motion.div>

      <div className="flex flex-col gap-8">
        <OcoiPricing />
        <ClientsSlider />
        <Footer />
      </div>
    </main>
  );
};

export default OCOI;
