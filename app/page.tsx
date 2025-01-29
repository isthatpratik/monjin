"use client";

import { motion } from "framer-motion";
import { Clients } from "@/components/sections/clients-landing";
import { HeroSection } from "@/components/sections/hero-section";
import FeatureSection from "@/components/sections/feature-section";
import ProdcutsSection from "@/components/sections/products-section";
import CaseStudies from "@/components/sections/case-studies";
import { Footer } from "@/components/layout/footer";
import Testimonials from "@/components/sections/testimonials";
import Image from "next/image";
import { NavbarWhite } from "@/components/layout/navbar-white";
import { MobileNavbarLight } from "@/components/layout/mobile-navbar-light";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background animation */}
      <motion.div
        className="absolute inset-0 -z-10 lg:hidden"
        initial={{ opacity: 0, translateY: -100 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{
          duration: 0.8,
          type: "spring",
          stiffness: 100,
          damping: 20,
          ease: "easeOut",
        }}
      >
        <Image
          alt="gradient-mobile-bg"
          src={"/assets/gradient-mobile.jpg"}
          quality={100}
          fill
          sizes="100vw"
          priority
          className="object-cover -translate-y-[400px]"
        />
      </motion.div>
      <motion.div
        className="absolute inset-0 -z-10 lg:block hidden md:block"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          type: "spring",
          stiffness: 100,
          damping: 20,
          ease: "easeOut",
        }}
      >
        <Image
          alt="gradient-mobile-bg"
          src={"/assets/gradient-web.jpg"}
          quality={100}
          fill
          sizes="100vw"
          className="object-cover object-top"
          priority
        />
      </motion.div>

      <div>
        <NavbarWhite />
        <MobileNavbarLight />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.8,
          type: "spring",
          stiffness: 100,
          damping: 20,
          ease: "easeOut",
        }}
      >
        <div className="md:max-w-[1600px] mx-auto px-6 py-10">
          <HeroSection />
          <Clients />
          <FeatureSection />
          <ProdcutsSection />
          <CaseStudies />
          <Testimonials />
        </div>
        <footer>
          <Footer />
        </footer>
      </motion.div>
    </main>
  );
}
