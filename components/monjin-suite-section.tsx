"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import "swiper/css";
import "swiper/css/pagination";
import { MonjinSuite } from "./monjin-suite";

const ProductCard = ({
  icon,
  title,
  subtitle,
  description,
  circleColor,
  subtitleBorderColor,
  buttonText1,
  buttonText2,
}: {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  circleColor: string;
  subtitleBorderColor: string;
  buttonText1: string;
  buttonText2: string;
}) => {
  return (
    <Card className="relative bg-white p-4 rounded-[35px] shadow-sm flex flex-col items-center overflow-hidden h-full min-w-[240px]">
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

        <h3 className="font-Onest font-semibold text-lg text-[#1D1E23] mt-4">
          {title}
        </h3>

        <div className={`border ${subtitleBorderColor} p-1 mt-2 rounded-[3px]`}>
          <p className="font-figtree text-[#565656] text-xs">{subtitle}</p>
        </div>

        <div className="flex flex-col justify-center items-center mt-2 mb-2 flex-grow">
          <p className="font-figtree text-center text-[#636671] text-sm mt-2 max-w-[90%]">
            {description}
          </p>
        </div>
      </div>

      <div className="flex gap-4 mt-2 justify-center pb-2">
        <Button
          variant="default"
          className="bg-black text-white font-Onest text-sm px-6 py-2 rounded-[65px] transition-all duration-300 ease-in-out hover:shadow-[0px_2px_0px_rgba(0,0,0,0.3)]"
        >
          {buttonText1}
        </Button>

        <Button
          variant="outline"
          className="border-[#565656] border-b-2 text-[#565656] font-Onest text-sm px-6 py-2 rounded-[65px] transition-all duration-300 ease-in-out hover:shadow-[0px_2px_0px_rgba(0,0,0,0.3)]"
        >
          {buttonText2}
        </Button>
      </div>
    </Card>
  );
};

const MonjinSuiteSection = () => {
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
        "Schedule an interview for your applicants via Monjin's video platform – all without having to reach out to the candidate yourself",
      circleColor: "bg-[#9F8AFF]",
      subtitleBorderColor: "border-[#8B72FF]",
      buttonText1: "Start Trial",
      buttonText2: "Learn More",
    },
    {
      icon: "/assets/product-icons/ycoi.png",
      title: "YCOI",
      subtitle: "YOUR CANDIDATE YOUR INTERVIEWERS",
      description:
        "Schedule an interview for your applicants via Monjin's video platform – all without having to reach out to the candidate yourself",
      circleColor: "bg-[#B7D659]",
      subtitleBorderColor: "border-[#B7D659]",
      buttonText1: "Start Trial",
      buttonText2: "Learn More",
    },
    {
      icon: "/assets/product-icons/basics.png",
      title: "Basics",
      subtitle: "SCHEDULE INTERVIEWS REMOTELY",
      description:
        "Coordinate interviews effortlessly with Monjin, no direct candidate contact required",
      circleColor: "bg-[#F46D70]",
      subtitleBorderColor: "border-[#F46D70]/40",
      buttonText1: "Start Trial",
      buttonText2: "Learn More",
    },
    {
      icon: "/assets/product-icons/spotlight.png",
      title: "Spotlight",
      subtitle: "AUTOMATE INTERVIEWS WITH MONJIN",
      description:
        "Effortlessly arrange interviews for your candidates through Monjin's video platform, eliminating the need for direct outreach.",
      circleColor: "bg-[#FFB14A]",
      subtitleBorderColor: "border-[#FFB14A]",
      buttonText1: "Start Trial",
      buttonText2: "Learn More",
    },
  ];

  return (
    <div className="relative mx-auto rounded-[32px]  flex flex-col gap-2 lg:max-w-[1600px] justify-between bg-[url('/assets/monjin-suit-bg2.png')] bg-cover bg-center h-auto sm:h-full md:flex-row">
      {/* Left Section */}
      <div className="space-y-4 flex p-6 flex-col justify-evenly text-center sm:text-left h-full self-center">
        <div>
          <div className="flex flex-row">
          <Image src={'/assets/vector.png'} width={61} height={61} alt="monjin suite logo"/>
          <h1 className="md:text-[48px] font-figtree text-center md:text-left font-medium tracking-tight leading-tight text-white">
            Monjin Suite
          </h1>
          </div>
          <p className="text-sm leading-[30px] sm:text-base pb-11 font-figtree font-light text-gray-300">
            Monjin Suite empowers your business to streamline the hiring <br />
            journey, enhance workforce management, and deliver an <br />
            exceptional experience for both your teams and customers.
          </p>
        </div>
        <div className="flex gap-3 flex-col sm:flex-row">
          <Button className="bg-[#ffffff] text-black rounded-full px-4 w-[252.01px] h-[67.36px] py-2">
            Start Trial
          </Button>
        </div>
      </div>

      {/* Right Section: Image */}
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
        >
          {productCards.map((card, index) => (
            <SwiperSlide key={index}>
              <ProductCard {...card} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2 mx-auto w-1/2 my-12">
          {productCards.map((card, index) => (
            <ProductCard key={index} {...card} />
          ))}
        </div>
      )}
      {isMobile && <div className="swiper-pagination-custom mt-4"></div>}
    </div>
  );
};

export default MonjinSuiteSection;
