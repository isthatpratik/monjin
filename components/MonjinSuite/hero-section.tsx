"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const MonjinSuiteHero = () => {
  return (
    <div className="h-full w-full flex flex-col gap-4 items-center justify-between mb-10">
      <div className="flex flex-col justify-center items-center space-y-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 100,
            damping: 20,
            ease: "easeOut",
          }}
          className="text-center md:font-onest text-base md:text-4xl lg:text-5xl tracking-normal md:tracking-tighter"
        >
          Monjin Suite
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            type: "spring",
            stiffness: 100,
            damping: 20,
            ease: "easeOut",
          }}
          className="text-center md:font-Onest font-Onest font-bold text-4xl md:text-6xl lg:text-7xl tracking-tighter max-w-full md:max-w-[80vw]"
        >
          Streamline Talent Attraction & Retention for a Seamless Experience.
        </motion.h1>
      </div>
      <motion.div
        className="-z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.4,
          type: "spring",
          stiffness: 100,
          damping: 20,
          ease: "easeOut",
        }}
      >
        <Image
          src={"/assets/MonjinSuite/monjin-suite-hero.png"}
          alt="Monjin Suite Illustration"
          width={900}
          height={900}
          className="object-contain object-center"
        />
      </motion.div>
      <motion.p
        className="text-center font-figtree text-sm md:max-w-[80%] pb-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.6,
          type: "spring",
          stiffness: 100,
          damping: 20,
          ease: "easeOut",
        }}
      >
        Unlock the full potential of your recruitment and business strategies
        with our all-in-one platform designed to streamline your processes and
        deliver exceptional results.
      </motion.p>
    </div>
  );
};

export default MonjinSuiteHero;
