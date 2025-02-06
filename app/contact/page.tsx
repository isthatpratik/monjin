"use client";

import { Footer } from "@/components/layout/footer";
import Image from "next/image";
import { ClientsSlider } from "@/components/sliders/clients-slider";
import ContactHero from "@/components/contact/contact-hero";
import { NavbarWhite } from "@/components/layout/navbar-white";
import { EnquiryCards } from "@/components/contact/enquiry-cards";
import { OfficeLocations } from "@/components/contact/office-locations";
import { MobileNavbarLight } from "@/components/layout/mobile-navbar-light";
import { motion } from "framer-motion";

export default function Careers() {
  return (
    <main className="relative min-h-screen overflow-hidden justify-center">
      <motion.div
        className="absolute inset-0 -z-10"
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
          alt="gradient-bg"
          src={"/assets/contact/contact-bg.jpg"}
          quality={100}
          fill
          sizes="100vw"
          priority
          className="object-cover object-top xl:-translate-y-[200px] lg:-translate-y-[50px]"
        />
      </motion.div>
      <motion.div
        className="absolute inset-0 -z-10 lg:hidden block"
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
          alt="gradient-bg"
          src={"/assets/contact/contact-bg-mobile.jpg"}
          quality={100}
          fill
          sizes="100vw"
          priority
          className="object-cover object-top"
        />
      </motion.div>

      <motion.div
        className="z-999"
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
        <NavbarWhite />
        <MobileNavbarLight />
      </motion.div>

      <motion.div
        className="md:max-w-[1600px] mx-auto px-2 lg:px-8 py-10 -z-30"
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
        <ContactHero />
        <EnquiryCards />
        <OfficeLocations />
      </motion.div>

      <footer>
        <ClientsSlider />
        <Footer />
      </footer>
    </main>
  );
}
