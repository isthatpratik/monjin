'use client';

import Image from "next/image";
import { MobileMenuLight } from "./mobile-menu-light";
import Link from "next/link";
import { motion } from "framer-motion";

export function MobileNavbarLight() {
  return (
    <motion.header
      className="flex items-center justify-between p-8 h-auto lg:hidden"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
    >
      <div className="flex items-center">
        <Link href={"/"}>
          <Image
            src="/assets/monjin-logo.png"
            alt="Monjin Logo"
            width={100}
            height={100}
            className="h-8 w-8 object-contain"
          />
        </Link>
      </div>
      <MobileMenuLight />
    </motion.header>
  );
}
