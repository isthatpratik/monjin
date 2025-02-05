"use client";

import { Footer } from "@/components/layout/footer";
import Image from "next/image";
import PricingForm from "@/components/pricing/pricing-form";
import { NavbarBlack } from "@/components/layout/navbar-black";
import { PricingSlider } from "@/components/sliders/pricing-slider";
import { MobileNavbarDark } from "@/components/layout/mobile-navbar-dark";
import { ClientsSlider } from "@/components/sliders/clients-slider";
import { motion } from "framer-motion";

export default function Pricing() {
  return (
    <main className="relative min-h-screen overflow-hidden justify-center">
      <div className="absolute inset-0 -z-10">
        <Image
          alt="bg-image"
          src={"/assets/pricing-bg.jpg"}
          quality={100}
          fill
          priority
          className="object-cover object-top lg:block"
        />
        <Image
          alt="bg-image"
          src={"/assets/pricing-bg-mobile.jpg"}
          quality={100}
          fill
          priority
          className="object-cover object-top lg:hidden"
        />
      </div>

      <div className="z-999">
        <motion.div
          className="bg-white"
          initial={{ opacity: 0, y: -50 }}
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
          <NavbarBlack />
          <MobileNavbarDark />
        </motion.div>
      </div>

      <motion.div
        className="md:max-w-[1600px] mx-auto px-2 lg:px-6 py-10 -z-30"
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
        <PricingForm />
      </motion.div>

      <motion.footer initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.8,
          type: "spring",
          stiffness: 100,
          damping: 20,
          ease: "easeOut",
        }}>
        <div className="hidden lg:block">
          <PricingSlider />
        </div>
        <div className="lg:hidden">
          <ClientsSlider />
        </div>
        <Footer />
      </motion.footer>
    </main>
  );
}
