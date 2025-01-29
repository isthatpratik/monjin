'use client'

import Image from "next/image";
import { MobileMenuDark } from "./mobile-menu-dark";
import Link from "next/link";
import { motion } from 'framer-motion'

export function MobileNavbarDark() {
  return (
    <motion.header className="flex items-center justify-between p-8 h-auto lg:hidden"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}>
      <div className="flex items-center">
        <Link href={"/"}>
          <Image
            src="/assets/monjin-navbar.png"
            alt="Monjin Logo"
            width={100}
            height={40}
            className="h-8 w-auto"
          />
        </Link>
      </div>
      <MobileMenuDark />
    </motion.header>
  );
}
