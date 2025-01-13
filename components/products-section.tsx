'use client'

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

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
    <Card className="relative bg-white p-4 rounded-[35px] shadow-sm flex flex-col items-center overflow-hidden h-full min-w-[280px]">
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
       
        <h3 className="font-Onest font-semibold text-lg text-[#1D1E23] mt-4">{title}</h3>

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
        <Button variant="default" className="bg-black text-white font-Onest text-sm px-6 py-2 rounded-[65px] transition-all duration-300 ease-in-out hover:shadow-[0px_2px_0px_rgba(0,0,0,0.3)]">
          {buttonText1}
        </Button>
        
        <Button variant="outline" className="border-[#565656] border-b-2 text-[#565656] font-Onest text-sm px-6 py-2 rounded-[65px] transition-all duration-300 ease-in-out hover:shadow-[0px_2px_0px_rgba(0,0,0,0.3)]">
          {buttonText2}
        </Button>
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
    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const productCards = [
    {
      icon: "/assets/product-icons/ocoi.png",
      title: "OCOI",
      subtitle: "OUR CANDIDATE OUR INTERVIEWERS",
      description: "Schedule an interview for your applicants via Monjin's video platform – all without having to reach out to the candidate yourself",
      circleColor: "bg-[#9F8AFF]",
      subtitleBorderColor: "border-[#8B72FF]",
      buttonText1: "Start Trial",
      buttonText2: "Learn More",
    },
    {
      icon: "/assets/product-icons/ycoi.png",
      title: "YCOI",
      subtitle: "YOUR CANDIDATE YOUR INTERVIEWERS",
      description: "Schedule an interview for your applicants via Monjin's video platform – all without having to reach out to the candidate yourself",
      circleColor: "bg-[#B7D659]",
      subtitleBorderColor: "border-[#B7D659]",
      buttonText1: "Start Trial",
      buttonText2: "Learn More",
    },
    {
      icon: "/assets/product-icons/basics.png",
      title: "Basics",
      subtitle: "SCHEDULE INTERVIEWS REMOTELY",
      description: "Coordinate interviews effortlessly with Monjin, no direct candidate contact required",
      circleColor: "bg-[#F46D70]",
      subtitleBorderColor: "border-[#F46D70]/40",
      buttonText1: "Start Trial",
      buttonText2: "Learn More",
    },
    {
      icon: "/assets/product-icons/spotlight.png",
      title: "Spotlight",
      subtitle: "AUTOMATE INTERVIEWS WITH MONJIN",
      description: "Effortlessly arrange interviews for your candidates through Monjin's video platform, eliminating the need for direct outreach.",
      circleColor: "bg-[#FFB14A]",
      subtitleBorderColor: "border-[#FFB14A]",
      buttonText1: "Start Trial",
      buttonText2: "Learn More",
    },
    {
      icon: "/assets/product-icons/assessment.png",
      title: "Assessment",
      subtitle: "STREAMLINE INTERVIEWS EFFORTLESSLY",
      description: "Streamline interview scheduling with Monjin's platform, no candidate outreach necessary.",
      circleColor: "bg-[#78DCDD]",
      subtitleBorderColor: "border-[#78DCDD]",
      buttonText1: "Start Trial",
      buttonText2: "Learn More",
    },
    {
      icon: "/assets/product-icons/performance_management.png",
      title: "Performance Management",
      subtitle: "AUTOMATE APPLICANT INTERVIEWS",
      description: "Seamlessly book interviews through Monjin's platform, bypassing direct candidate contact",
      circleColor: "bg-[#BA57D3]",
      subtitleBorderColor: "border-[#BA57D3]/39",
      buttonText1: "Start Trial",
      buttonText2: "Learn More",
    },
  ];

  return (
    <div className="my-20 bg-[#FFFFFF] rounded-3xl border p-8 max-h-1/3 self-center">
      <div className="flex flex-col items-center justify-center gap-4 my-12">
        <h2 className="font-Onest font-medium text-5xl text-center max-w-2xl tracking-tighter">
          Powering Achievements with Transformative Tools
        </h2>
        <p className="font-figtree text-lg text-center max-w-2xl">
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
            el: '.swiper-pagination-custom',
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto max-w-[90%] my-12">
          {productCards.map((card, index) => (
            <ProductCard key={index} {...card} />
          ))}
        </div>
      )}
      {isMobile && (
        <div className="swiper-pagination-custom mt-4"></div>
      )}

      <div className="my-12 text-center">
        <Button className="border-[#788B3E] bg-[#D0F16C] border-b-2 hover:bg-[#788B3E]/90 rounded-[60px] text-[#242424] text-sm font-Onest px-6 py-6 transition-shadow duration-300 ease-in-out hover:bg-[#D0F16C] hover:shadow-[0px_2px_0px_rgba(0,0,0,1)] hover:shadow-[#788B3E]">
          View All Products
        </Button>
      </div>
    </div>
  );
};

export default ProductsSection;

