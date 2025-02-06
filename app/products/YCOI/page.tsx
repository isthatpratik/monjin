"use client";

import { Footer } from "@/components/layout/footer";
import { NavbarBlack } from '@/components/layout/navbar-black';
import YcoiFeatures from "@/components/ycoi/ycoi-features";
import { ClientsSlider } from "@/components/sliders/clients-slider";
import YcoiHeroSection from "@/components/ycoi/hero-section";
import Image from "next/image";
import React from "react";
import InterviewSolutions from "@/components/ycoi/interview-solutions";
import { motion } from "framer-motion";
import { MobileNavbarDark } from "@/components/layout/mobile-navbar-dark";

const YCOI = () => {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <NavbarBlack />
      <MobileNavbarDark />

      <div
        className="absolute inset-0 -z-50 w-full h-full"
        
      >
        <div className="hidden md:block w-full h-full">
          <Image
            src="/assets/ycoi/ycoi-bg-web.jpg"
            alt="Background"
            fill
            quality={80}
            priority
            className="background-desktop object-cover object-center"
          />
        </div>
        <div className="block md:hidden w-full h-full">
          <Image
            src="/assets/ycoi/ycoi-bg-mobile.jpg"
            alt="Background"
            fill
            quality={80}
            priority
            className="background-mobile object-cover object-top -translate-y-[250px]"
          />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
      >
        <div className="md:max-w-[1600px] mx-auto px-4 lg:px-8 py-8 z-10">
          <YcoiHeroSection />
          <YcoiFeatures />
          <InterviewSolutions />
        </div>
      </motion.div>

      <div className="flex flex-col gap-8">
        <ClientsSlider />
        <Footer />
      </div>
    </main>
  );
};

export default YCOI;