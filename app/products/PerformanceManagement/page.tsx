"use client";

import { Footer } from "@/components/layout/footer";
import { NavbarBlack } from '@/components/layout/navbar-black';
import { ClientsSlider } from "@/components/sliders/clients-slider";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import WhyMonjin from "@/components/performance-management/why-monjin";
import AlwaysReady from "@/components/performance-management/always-ready";
import PerformanceHeroSection from "@/components/performance-management/hero-section";
import CustomizedInterview from "@/components/performance-management/customized-interview";
import { MobileNavbarDark } from "@/components/layout/mobile-navbar-dark";

const PerformanceManagement = () => {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <NavbarBlack />
      <MobileNavbarDark />

      <div
        className="absolute inset-0 -z-50 w-full h-full"
        
      >
        <div className="hidden md:block w-full h-full">
          <Image
            src="/assets/performance-management/performance-bg-web.jpg"
            alt="Background"
            fill
            quality={80}
            priority
            className="background-desktop object-cover object-center"
          />
        </div>
        <div className="block md:hidden w-full h-full">
          <Image
            src="/assets/performance-management/performance-bg-mobile.jpg"
            alt="Background"
            fill
            quality={80}
            priority
            className="background-mobile object-cover object-top"
          />
        </div>
      </div>

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
        className="md:max-w-[1600px] mx-auto px-4 lg:px-8 py-8 z-10"
      >
        <PerformanceHeroSection />
        <AlwaysReady />
        <WhyMonjin />
        <CustomizedInterview />
      </motion.div>

      <div className="flex flex-col gap-8">
        <ClientsSlider />
        <Footer />
      </div>
    </main>
  );
};

export default PerformanceManagement;
