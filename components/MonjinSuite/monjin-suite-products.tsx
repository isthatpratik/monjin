"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import "swiper/css";

const ProductCard = ({
  icon,
  title,
  subtitle,
  description,
  circleColor,
  subtitleBorderColor,
}: {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  circleColor: string;
  subtitleBorderColor: string;
}) => {
  return (
    <Card className="relative bg-white p-4 rounded-2xl shadow-sm flex flex-col items-center overflow-hidden h-full min-w-[200px] ">
      <div
        className={`absolute -bottom-10 -right-10 w-[135px] -rotate-45 h-[90px] ${circleColor} rounded-full blur-[80px] z-10`}
      ></div>

      <div className="flex flex-col items-center mt-2 relative z-20 flex-grow">
        <Image
          src={icon || "/placeholder.svg"}
          alt={`${title} Icon`}
          width={50}
          height={50}
          quality={80}
          className="mt-4"
        />

        <h3 className="font-Onest font-semibold text-lg text-[#1D1E23] mt-4 text-center">
          {title}
        </h3>

        <div className={`border ${subtitleBorderColor} p-1 mt-2 rounded-[3px]`}>
          <p className="font-figtree text-[#565656] text-xs text-center">{subtitle}</p>
        </div>

        <div className="flex flex-col justify-center items-center mt-2 mb-2 flex-grow">
          <p className="font-figtree text-center text-[#636671] text-sm mt-2 lg:max-w-[90%]">
            {description}
          </p>
        </div>
      </div>
    </Card>
  );
};

const MonjinSuiteProducts = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  const productCards = [
    {
      icon: "/assets/product-icons/ocoi.png",
      title: "OCOI",
      subtitle: "OUR CANDIDATE OUR INTERVIEWERS",
      description:
        "Discover Monjin’s Integrated OCOI for streamlined hiring with pre-assessed video interviews. Connect with top talent faster, more personally, and efficiently.",
      circleColor: "bg-[#9F8AFF]",
      subtitleBorderColor: "border-[#8B72FF]",
    },
    {
      icon: "/assets/product-icons/ycoi.png",
      title: "YCOI",
      subtitle: "YOUR CANDIDATE OUR INTERVIEWERS",
      description:
        "Empower leaders to make smarter decisions with Monjin’s YCOI, streamlining interviews and optimizing operations. Turn talent acquisition into a strategic business advantage.",
      circleColor: "bg-[#B7D659]",
      subtitleBorderColor: "border-[#B7D659]",
    },
    {
      icon: "/assets/product-icons/basics.png",
      title: "Basics",
      subtitle: "STREAMLINE EFFORTLESS HIRING",
      description:
        "Simplify hiring with Monjin’s features that connect you with top talent effortlessly. Access vetted interviews and arrange discussions seamlessly through Monjin Basics.",
      circleColor: "bg-[#F46D70]",
      subtitleBorderColor: "border-[#F46D70]/40",
    },
    {
      icon: "/assets/product-icons/spotlight.png",
      title: "Spotlight",
      subtitle: "ACCELERATE EFFICIENT SCREENING",
      description:
        "Experience seamless talent acquisition with Monjin’s Spotlight Solution, connecting candidates, recruiters, and hiring managers effortlessly. From planning to onboarding, build great teams with ease.",
      circleColor: "bg-[#FFB14A]",
      subtitleBorderColor: "border-[#FFB14A]",
    },
  ];

  return (
    <div className="relative mx-auto rounded-[32px] flex flex-col lg:flex-row justify-between bg-[url('/assets/MonjinSuite/monjin-suite-products-bg.png')] bg-cover bg-center my-10">
      {/* Left Section */}
      <div className="lg:w-1/2 flex flex-col items-center lg:items-start lg:justify-evenly justify-center text-center lg:text-left px-6 lg:px-10 py-8">
        <div className="md:flex md:flex-col md:justify-center md:items-center lg:items-start flex flex-col items-center">
          <Image
            src={"/assets/MonjinSuite/MonjinSuiteLogo.png"}
            alt="Monjin Suite Logo"
            width={150}
            height={150}
            quality={100}
            className="object-contain mb-4 lg:mb-6 lg:w-3/5 w-3/5 h-auto md:w-2/5"
          />
          <p className="text-sm leading-[30px] sm:text-base font-figtree font-light text-gray-300 mb-4 lg:mb-10">
            Monjin Suite empowers your business to streamline the hiring
            journey, enhance workforce management, and deliver an exceptional
            experience for both your teams and customers.
          </p>
        </div>
        <div>
          <Button className="bg-[#ffffff] text-black rounded-[8px] w-64 h-16 hidden lg:block md:block font-onest font-normal text-xl py-2 hover:bg-gray-200 hover:shadow-monjin transition-all duration-300 ease-in-out">
            Start Trial
          </Button>
        </div>
      </div>

      {/* Right Section */}
      {isMobile ? (
        <div className="w-4/5 mx-auto">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          >
            {productCards.map((card, index) => (
              <SwiperSlide key={index}>
                <ProductCard {...card} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="mt-8 pb-8">
            <Button className="bg-[#ffffff] text-black rounded-[8px] w-full py-2 hover:bg-gray-200 hover:shadow-monjin transition-all duration-300 ease-in-out">
              Start Trial
            </Button>
          </div>
        </div>
      ) : (
        <div className="lg:w-1/2 grid grid-cols-2 gap-4 p-8 h-auto">
          {productCards.map((card, index) => (
            <ProductCard key={index} {...card} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MonjinSuiteProducts;

