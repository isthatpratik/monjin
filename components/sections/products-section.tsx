"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import "swiper/css";
import "swiper/css/pagination";

const ProductCard = ({
  icon,
  title,
  subtitle,
  description,
  circleColor,
  subtitleBorderColor,
  buttonText,
  buttonHover,
  link,
}: {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  circleColor: string;
  subtitleBorderColor: string;
  buttonText: string;
  buttonHover: string;
  link: string;
}) => {
  return (
    <Card className="relative bg-white p-4 rounded-2xl shadow-sm flex flex-col items-center overflow-hidden h-full min-w-[240px]">
      <div
        className={`absolute -bottom-10 -right-10 w-[135px] -rotate-45 h-[90px] ${circleColor} rounded-full blur-[80px] z-10`}
      ></div>

      <div className="flex flex-col items-center mt-2 relative z-20 flex-grow">
        <Image
          src={icon}
          alt={`${title} Icon`}
          width={50}
          height={50}
          quality={80}
          className="mt-4"
        />

        <h3 className="font-Onest font-semibold text-xl text-[#1D1E23] mt-4 text-center">
          {title}
        </h3>

        <div
          className={`border ${subtitleBorderColor} p-2 mt-2 rounded-3xl w-[90%]`}
        >
          <p className="font-figtree text-[#565656] text-sm text-center">
            {subtitle}
          </p>
        </div>

        <div className="flex flex-col justify-center items-center mt-2 mb-2 flex-grow">
          <p className="font-figtree text-center text-[#636671] text-base mt-2 max-w-[90%]">
            {description}
          </p>
        </div>
      </div>

      <div className="md:flex-row flex-1 flex-col gap-4 mt-2 justify-center pb-2 w-[90%]">
      <Link href={link}>
          <Button
            className={`bg-white border border-black/30 rounded-[8px] w-full text-black font-Onest font-normal text-xs px-6 py-4 transition-all duration-300 ease-in-out ${buttonHover} hover:text-white hover:shadow-md`}
          >
            {buttonText}
          </Button>
        </Link>
      </div>
    </Card>
  );
};

const ProductsSection = () => {
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
        "OCOI streamlines hiring with access to pre-assessed, expert-reviewed candidates via an intuitive video interview platform.",
      circleColor: "bg-[#9F8AFF]",
      subtitleBorderColor: "border-[#8B72FF]/30",
      buttonText: "Discover More",
      buttonHover: "hover:bg-[#947EFF]",
      link: "/products/OCOI"
    },
    {
      icon: "/assets/product-icons/ycoi.png",
      title: "YCOI",
      subtitle: "YOUR CANDIDATE OUR INTERVIEWERS",
      description:
        "YCOI streamlines hiring with access to pre-assessed, expert-reviewed candidates via an intuitive video interview platform.",
      circleColor: "bg-[#B7D659]",
      subtitleBorderColor: "border-[#B7D659]/30",
      buttonText: "Discover More",
      buttonHover: "hover:bg-[#B7D659]",
      link: "/products/YCOI"
    },
    {
      icon: "/assets/product-icons/spotlight.png",
      title: "Spotlight",
      subtitle: "ACCELERATE EFFICIENT SCREENING",
      description:
        "Screen candidates efficiently, customize interview questions, and watch video interviews to fast-track your hiring process.",
      circleColor: "bg-[#FFB14A]",
      subtitleBorderColor: "border-[#FFB14A]/30",
      buttonText: "Discover More",
      buttonHover: "hover:bg-[#FFB14A]",
      link: "/products/Spotlight"
    },
    {
      icon: "/assets/product-icons/performance_management.png",
      title: "Performance Management",
      subtitle: "PRE-ASSESSED CANDIDATURES",
      description:
        "Ensuring every candidate is rigorously assessed, skip the screening process and access a pool of curated talent.",
      circleColor: "bg-[#BA57D3]",
      subtitleBorderColor: "border-[#BA57D3]/30",
      buttonText: "Discover More",
      buttonHover: "hover:bg-[#BA57D3]",
      link: "/products/PerformanceManagement"
    },
    {
      icon: "/assets/product-icons/basics.png",
      title: "Basics",
      subtitle: "STREAMLINE EFFORTLESS HIRING",
      description:
        "Conduct video interviews on the fly without requiring any registration, making the process quicker and more accessible.",
      circleColor: "bg-[#F46D70]",
      subtitleBorderColor: "border-[#F46D70]/30",
      buttonText: "Discover More",
      buttonHover: "hover:bg-[#F46D70]",
      link: "/products/Basics"
    }
  ];

  return (
    <div id="products-section" className="my-20 bg-[#FFFFFF] rounded-3xl border lg:p-8 md:p-6 p-2 max-h-1/3 self-center">
      <div className="flex flex-col items-center justify-center gap-4 my-12 ">
        <h2 className="font-onest font-medium md:text-5xl text-center tracking-tighter text-3xl lg:max-w-[50vw]">
          Powering Achievements with Transformative Tools
        </h2>
        <p className="font-figtree tracking-tight text-center lg:max-w-[40vw] max-w-[80vw] sm:text-sm md:text-lg">
          Unleash the true power of your processes with solutions built for
          rapid execution, flawless precision, and transformative results
        </p>
      </div>

      {isMobile ? (
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{
            clickable: true,
            el: ".swiper-pagination-custom",
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="my-12"
          loop
        >
          {productCards.map((card, index) => (
            <SwiperSlide key={index}>
              <ProductCard {...card} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="container mx-auto p-6">
          <div className="flex justify-center gap-6 mb-6">
            <div className="grid grid-cols-2 gap-6 lg:max-w-3xl md:max-w-xl">
              {productCards.slice(0, 2).map((feature, index) => (
                <ProductCard key={index} {...feature} />
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:max-w-6xl md:max-w-4xl mx-auto">
            {productCards.slice(2).map((feature, index) => (
              <ProductCard key={index} {...feature} />
            ))}
          </div>
        </div>
      )}
      {isMobile && <div className="swiper-pagination-custom mt-4"></div>}

      <div className="relative mx-auto rounded-3xl flex flex-col gap-6 lg:max-w-[80%] md:justify-between bg-[url('/assets/monjin-suite-landing-bg.png')] bg-cover bg-center h-auto lg:flex-row lg:mt-2 my-10">
        {/* Monjin Suite Section */}
        <div className="flex flex-col items-center p-10 gap-4 lg:w-1/2 lg:items-start lg:justify-center text-center lg:text-left">
          {/* Logo and Title */}
          <div className="flex items-center gap-4">
            <Image
              alt="Monjin Suite Logo"
              width={40}
              height={40}
              src={"/assets/monjin-suite-logo.png"}
              className="object-contain"
            />
            <h1 className="sm:text-2xl md:text-3xl font-figtree font-medium tracking-tight leading-tight text-white align-text-bottom">
              Monjin Suite
            </h1>
          </div>

          {/* Description */}
          <p className="md:text-base text-sm lg:text-lg font-figtree font-light text-gray-300 mt-4 w-full lg:w-4/5">
          Experience a comprehensive solution designed to attract, engage, and retain top talent across multiple channels.
          </p>

          {/* Buttons */}
          <div className="gap-4 flex flex-col md:flex-row mt-4 w-full lg:w-2/3">
            <Button className="bg-[#FFFFFF] text-black rounded-[8px] p-6 font-onest text-sm transition-all duration-300 ease-in-out hover:shadow-[0px_4px_0px_rgba(255,255,255,0.3)] hover:bg-white">
              <Link href={'/products/MonjinSuite'}>
              Deep Dive In
              </Link>
            </Button>
          </div>
        </div>

        {/* Illustration for Larger Devices */}
        <div className="hidden lg:flex lg:w-1/2 relative justify-start items-center p-10">
          <Image
            src="/assets/monjin-suite-landing-illustration.png"
            alt="Monjin Suite Illustration"
            width={520}
            height={365}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;
