"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/product-accordion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import "swiper/css";
import "swiper/css/pagination";

interface AccordionSectionProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  content?: React.ReactNode;
}

const ProductCard = ({
  icon,
  title,
  subtitle,
  description,
  circleColor,
  subtitleBorderColor,
  subtitleColor,
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
  subtitleColor: string;
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
          <p className={`font-figtree ${subtitleColor} text-sm text-center`}>
            {subtitle}
          </p>
        </div>

        <div className="flex flex-col justify-start  items-center mt-2 mb-2 flex-grow">
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
      subtitleColor:"text-[#8B72FF]",
      buttonHover: "hover:bg-[#947EFF]",
      link: "/products/OCOI",
    },
    {
      icon: "/assets/product-icons/ycoi.png",
      title: "YCOI",
      subtitle: "YOUR CANDIDATE OUR INTERVIEWERS",
      description:
        "YCOI streamlines hiring with access to pre-assessed, expert-reviewed candidates via an intuitive video interview platform.",
      circleColor: "bg-[#B7D659]",
      subtitleBorderColor: "border-[#B7D659]/30",
      subtitleColor:"text-[#B7D659]",
      buttonText: "Discover More",
      buttonHover: "hover:bg-[#B7D659]",
      link: "/products/YCOI",
    },
    {
      icon: "/assets/product-icons/spotlight.png",
      title: "Spotlight",
      subtitle: "ACCELERATE EFFICIENT SCREENING",
      description:
        "Screen candidates efficiently, customize interview questions, and watch video interviews to fast-track your hiring process.",
      circleColor: "bg-[#FFB14A]",
      subtitleBorderColor: "border-[#FFB14A]/30",
      subtitleColor:"text-[#FFB14A]",
      buttonText: "Discover More",
      buttonHover: "hover:bg-[#FFB14A]",
      link: "/products/Spotlight",
    },
    {
      icon: "/assets/product-icons/performance_management.png",
      title: "Performance Management",
      subtitle: "PRE-ASSESSED CANDIDATURES",
      description:
        "Ensuring every candidate is rigorously assessed, skip the screening process and access a pool of curated talent.",
      circleColor: "bg-[#BA57D3]",
      subtitleBorderColor: "border-[#BA57D3]/30",
      subtitleColor:"text-[#BA57D3]",
      buttonText: "Discover More",
      buttonHover: "hover:bg-[#BA57D3]",
      link: "/products/PerformanceManagement",
    },
    {
      icon: "/assets/product-icons/basics.png",
      title: "Basics",
      subtitle: "STREAMLINE EFFORTLESS HIRING",
      description:
        "Conduct video interviews on the fly without requiring any registration, making the process quicker and more accessible.",
      circleColor: "bg-[#F46D70]",
      subtitleBorderColor: "border-[#F46D70]/30",
      subtitleColor:"text-[#F46D70]",
      buttonText: "Discover More",
      buttonHover: "hover:bg-[#F46D70]",
      link: "/products/Basics",
    },
  ];

  return (
    <div
      id="products-section"
      className="lg:my-20 lg:bg-[#FFFFFF] rounded-3xl lg:border lg:p-8 md:p-4 p-0 max-h-1/3 self-center"
    >
      <div className="flex flex-col items-center justify-center gap-4 my-12 ">
        <h2 className="font-onest hidden lg:block font-medium md:text-5xl text-center tracking-tighter text-3xl text-balance max-w-screen-lg">
          Powering Achievements with Transformative Tools
        </h2>
        <p className="font-figtree hidden lg:block tracking-tight text-center max-w-lg text-balance text-sm md:text-lg">
          Unleash the true power of your processes with solutions built for
          rapid execution, flawless precision, and transformative results
        </p>
      </div>

      <div className="container mx-auto p-6 hidden lg:block">
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

      <div className="lg:hidden flex flex-col">
        <div>
          <h2 className="font-onest font-semibold text-2xl text-center pb-4">
            Achieve More with Transformative Tools
          </h2>
          <div className="max-w-2xl mx-auto">
            <Accordion type="single" collapsible>
              <AccordionSection
                icon="/assets/product-icons/ocoi.png"
                title="OCOI"
                subtitle="OUR CANDIDATES OUR INTERVIEWERS"
                borderColor="border-[#8B72FF]/30"
                subtitleColor="text-[#947EFF]"
                content={
                  <div className="space-y-6">
                    <p className="text-[#636671] text-sm font-figtree mb-4 md:text-base">
                      OCOI streamlines hiring with access to pre-assessed,
                      expert-reviewed candidates via an intuitive video
                      interview platform.
                    </p>
                    <Link href={"/products/OCOI"}>
                      <Button className="w-full bg-black py-6 font-onest text-white hover:bg-gray-800 rounded-[8px]">
                        Discover More
                      </Button>
                    </Link>
                  </div>
                }
              />
              <AccordionSection
                icon="/assets/product-icons/ycoi.png"
                title="YCOI"
                subtitle="YOUR CANDIDATES OUR INTERVIEWS"
                borderColor="border-[#8EBD00]/30"
                subtitleColor="text-[#8EBD00]"
                content={
                  <div className="space-y-6">
                    <p className="text-[#636671] text-sm font-figtree mb-4 md:text-base">
                      YCOI empowers businesses to streamline their hiring
                      process by leveraging a global network of experts to
                      interview and assess candidates.
                    </p>
                    <Link href={"/products/YCOI"}>
                      <Button className="w-full bg-black py-6 font-onest text-white hover:bg-gray-800 rounded-[8px]">
                        Discover More
                      </Button>
                    </Link>
                  </div>
                }
              />
              <AccordionSection
                icon="/assets/product-icons/spotlight.png"
                title="Spotlight"
                subtitle="ACCELERATE EFFICIENT SCREENING"
                content={
                  <div className="space-y-6">
                    <p className="text-[#636671] text-sm font-figtree mb-4 md:text-base">
                      Screen candidates efficiently, customize interview
                      questions, and watch video interviews to fast-track your
                      hiring process.
                    </p>
                    <Link href={"/products/Spotlight"}>
                      <Button className="w-full bg-black py-6 font-onest text-white hover:bg-gray-800 rounded-[8px]">
                        Discover More
                      </Button>
                    </Link>
                  </div>
                }
                borderColor="border-[#FFB14A]/30"
                subtitleColor="text-[#FFB14A]"
              />
              <AccordionSection
                icon="/assets/product-icons/performance_management.png"
                title="Performance Management"
                subtitle="PRE-ASSESSED CANDIDATURES"
                borderColor="border-[#BA57D3]/30"
                subtitleColor="text-[#BA57D3]"
                content={
                  <div className="space-y-6">
                    <p className="text-[#636671] text-sm font-figtree mb-4 md:text-base">
                      Ensuring every candidate is rigorously assessed, skip the
                      screening process and access a pool of curated talent.
                    </p>
                    <Link href={"/products/PerformanceManagement"}>
                      <Button className="w-full bg-black py-6 font-onest text-white hover:bg-gray-800 rounded-[8px]">
                        Discover More
                      </Button>
                    </Link>
                  </div>
                }
              />
              <AccordionSection
                icon="/assets/product-icons/basics.png"
                title="Basics"
                subtitle="STREAMLINE EFFORTLESS HIRING"
                borderColor="boder-[#F46D70]/30"
                subtitleColor="text-[#F46D70]"
                content={
                  <div className="space-y-6">
                    <p className="text-[#636671] text-sm font-figtree mb-4 md:text-base">
                      Conduct video interviews on the fly without requiring any
                      registration, making the process quicker and more
                      accessible.
                    </p>
                    <Link href={"/products/Basics"}>
                      <Button className="w-full bg-black py-6 font-onest text-white hover:bg-gray-800 rounded-[8px]">
                        Discover More
                      </Button>
                    </Link>
                  </div>
                }
              />
            </Accordion>
          </div>
        </div>
      </div>

      <div className="lg:max-w-6xl items-center mx-auto lg:justify-center relative rounded-3xl flex flex-col gap-6 md:justify-between lg:bg-[url('/assets/monjin-suite-landing-bg.png')] bg-[url('/assets/monjin-suite-landing-mobile.jpg')] bg-cover bg-center h-auto lg:flex-row lg:mt-4 my-10">
        {/* Monjin Suite Section */}
        <div className="flex flex-col items-center lg:p-10 md:p-6 p-6 gap-4 lg:w-1/2 lg:items-start lg:justify-center text-center lg:text-left">
          {/* Logo and Title */}
          <div className="flex items-center gap-1 lg:gap-4">
            <Image
              alt="Monjin Suite Logo"
              width={40}
              height={40}
              src={"/assets/monjin-suite-logo.png"}
              className="object-contain w-6 h-auto md:w-6 lg:w-8 xl:w-10"
            />
            <h1 className="text-2xl md:text-3xl font-figtree font-medium tracking-tight leading-tight text-white align-text-bottom">
              Monjin Suite
            </h1>
          </div>

          <div className="block lg:hidden lg:w-1/2 relative justify-start items-center">
            <Image
              src="/assets/monjin-suite-landing-illustration.png"
              alt="Monjin Suite Illustration"
              width={520}
              height={365}
              className="object-contain"
            />
          </div>

          {/* Description */}
          <p className="md:text-base text-sm lg:text-lg font-figtree text-gray-300 lg:mt-4 mt-1 w-full md:w-[70%] lg:w-4/5">
            Experience a comprehensive solution designed to attract, engage, and
            retain top talent across multiple channels.
          </p>

          {/* Buttons */}
          <div className="gap-4 flex flex-col md:flex-row mt-4 w-full lg:w-2/3 justify-center lg:justify-normal">
            <Link href={"/products/MonjinSuite"} className="w-full">
              <Button className="lg:bg-[#FFFFFF] lg:text-black text-white border w-full bg-transparent border-white rounded-[8px] p-6 font-onest text-sm transition-all duration-300 ease-in-out lg:hover:shadow-[0px_4px_0px_rgba(255,255,255,0.3)] lg:hover:bg-white">
                Deep Dive In
              </Button>
            </Link>
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

function AccordionSection({
  icon,
  title,
  subtitle,
  content,
  borderColor,
  subtitleColor,
}: AccordionSectionProps & {
  icon: string;
  borderColor: string;
  subtitleColor: string;
}) {
  return (
    <AccordionItem
      value={title}
      className="mb-4 rounded-[8px] bg-white shadow-none border p-2"
    >
      <AccordionTrigger className="px-2 py-4 hover:no-underline">
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-2 items-center">
              <Image
                src={icon}
                alt={`${title} Icon`}
                width={28}
                height={28}
                className="object-contain"
              />
              <h2 className="text-lg md:text-xl font-figtree font-semibold">
                {title}
              </h2>
            </div>
            <span
              className={`px-2 py-1 rounded-[5px] text-[10px] md:text-xs font-figtree border ${borderColor} ${subtitleColor} w-fit`}
            >
              {subtitle}
            </span>
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent className="px-2 pb-4">{content}</AccordionContent>
    </AccordionItem>
  );
}
