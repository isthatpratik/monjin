"use client";

import React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const ProductCard = ({
  icon,
  title,
  subtitle,
  description,
  circleColor,
  subtitleBorderColor,
  subtitleColor,
}: {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  circleColor: string;
  subtitleBorderColor: string;
  subtitleColor: string;
}) => {
  return (
    <Card className="relative bg-white lg:p-4 p-2 rounded-2xl shadow-sm flex flex-col items-center overflow-hidden h-auto ">
      <div
        className={`absolute lg:-bottom-10 lg:-right-10 -bottom-10 -right-10 lg:w-[135px] w-[105px] h-[70px] -rotate-45 lg:h-[90px] ${circleColor} rounded-full blur-[80px] z-10`}
      ></div>

      <div className="flex flex-col items-center mt-2 relative z-20 flex-grow">
        <Image
          src={icon || "/placeholder.svg"}
          alt={`${title} Icon`}
          width={50}
          height={50}
          quality={80}
          className="mt-4 w-8 md:w-10 lg:w-12 h-auto"
        />

        <h3 className="font-Onest font-semibold text-lg text-[#1D1E23] mt-4 text-center">
          {title}
        </h3>

        <div
          className={`border ${subtitleBorderColor} p-1 mt-2 lg:rounded-[4px] rounded-[7px]`}
        >
          <p className={`font-figtree ${subtitleColor} text-xs text-center`}>
            {subtitle}
          </p>
        </div>

        <div className="flex flex-col justify-center items-center mt-2 mb-2 flex-grow">
          <p className="font-figtree text-center text-[#636671] text-sm mt-2 lg:max-w-[90%] hidden sm:hidden md:hidden ">
            {description}
          </p>
        </div>
      </div>
    </Card>
  );
};

const MonjinSuiteProducts = () => {
  const productCards = [
    {
      icon: "/assets/product-icons/ocoi.png",
      title: "OCOI",
      subtitle: "OUR CANDIDATE OUR INTERVIEWERS",
      description:
        "Discover Monjin’s Integrated OCOI for streamlined hiring with pre-assessed video interviews. Connect with top talent faster, more personally, and efficiently.",
      circleColor: "bg-[#9F8AFF]",
      subtitleBorderColor: "border-[#8B72FF]",
      subtitleColor: "text-[#8B72FF]",
    },
    {
      icon: "/assets/product-icons/ycoi.png",
      title: "YCOI",
      subtitle: "YOUR CANDIDATE OUR INTERVIEWERS",
      description:
        "Empower leaders to make smarter decisions with Monjin’s YCOI, streamlining interviews and optimizing operations. Turn talent acquisition into a strategic business advantage.",
      circleColor: "bg-[#B7D659]",
      subtitleBorderColor: "border-[#B7D659]",
      subtitleColor: "text-[#B7D659]",
    },
    {
      icon: "/assets/product-icons/basics.png",
      title: "Basics",
      subtitle: "STREAMLINE EFFORTLESS HIRING",
      description:
        "Simplify hiring with Monjin’s features that connect you with top talent effortlessly. Access vetted interviews and arrange discussions seamlessly through Monjin Basics.",
      circleColor: "bg-[#F46D70]",
      subtitleBorderColor: "border-[#F46D70]/40",
      subtitleColor: "text-[#F46D70]",
    },
    {
      icon: "/assets/product-icons/spotlight.png",
      title: "Spotlight",
      subtitle: "ACCELERATE EFFICIENT SCREENING",
      description:
        "Experience seamless talent acquisition with Monjin’s Spotlight Solution, connecting candidates, recruiters, and hiring managers effortlessly. From planning to onboarding, build great teams with ease.",
      circleColor: "bg-[#FFB14A]",
      subtitleBorderColor: "border-[#FFB14A]",
      subtitleColor: "text-[#FFB14A]",
    },
  ];

  return (
    <motion.div
      className="relative max-w-7xl mx-auto rounded-[32px] flex flex-col lg:flex-row justify-between bg-[url('/assets/MonjinSuite/monjin-suite-products-bg.png')] bg-cover bg-center my-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: 1.2,
        type: "spring",
        stiffness: 100,
        damping: 20,
        ease: "easeInOut",
      }}
    >
      {/* Left Section */}
      <div className="lg:w-1/2 flex flex-col items-center lg:items-start lg:justify-evenly justify-center text-center lg:text-left px-6 lg:px-10 py-8">
        <div className="md:flex md:flex-col md:justify-center md:items-center lg:items-start flex flex-col items-center">
          <Image
            src={"/assets/MonjinSuite/MonjinSuiteLogo.png"}
            alt="Monjin Suite Logo"
            width={150}
            height={150}
            quality={100}
            className="object-contain mb-2 lg:mb-6 lg:w-6/12 w-full h-auto md:w-full"
          />
          <p className="text-sm leading-[30px] sm:text-base font-figtree font-light text-gray-300 mb-4 lg:mb-10 hidden lg:block">
            Monjin Suite empowers your business to streamline the hiring
            journey, enhance workforce management, and deliver an exceptional
            experience for both your teams and customers.
          </p>
        </div>
        <div>
          <Link href="https://uni.monjin.com/public/organization/registration" passHref target="_blank">
            <Button className="bg-[#ffffff] text-black rounded-[8px] w-64 h-16 hidden lg:block font-onest font-normal text-sm py-2 hover:bg-gray-200 hover:shadow-monjin transition-all duration-300 ease-in-out">
              Start Exploring
            </Button>
          </Link>
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-10/12 w-full grid grid-cols-2 lg:gap-4 md:gap-4 md:p-6 gap-2 lg:p-8 p-4 h-auto">
        {productCards.map((card, index) => (
          <ProductCard key={index} {...card} />
        ))}
      </div>

      <div className="flex items-center justify-center lg:hidden py-2 mb-6 px-6">
        <Link href="https://uni.monjin.com" passHref>
          <Button className="flex-1 bg-[#ffffff] text-black rounded-[8px] w-64 h-16 font-onest font-normal text-sm py-2 hover:bg-gray-200 hover:shadow-monjin transition-all duration-300 ease-in-out">
            Start Exploring
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default MonjinSuiteProducts;
