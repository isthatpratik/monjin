"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Card, CardContent } from "@/components/ui/card";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import type { Swiper as SwiperType } from "swiper";

const blogData = [
  {
    image: "/assets/blog-images/blog-1.png",
    title: "Quality hiring for the digital skills",
    description: "Delivering higher selection ratio",
    width: 120,
    height: 72,
    span: 2,
  },
  {
    image: "/assets/blog-images/blog-2.png",
    title: "Futuristic Hiring Route",
    description:
      "To resolve talent acquisition challenges in the Retail Industry",
    width: 240,
    height: 144,
    span: 3,
  },
  {
    image: "/assets/blog-images/blog-3.png",
    title: "Propelling Hiring Demands",
    description: "In the Information Technology Space",
    width: 480,
    height: 144,
    span: 3,
  },
  {
    image: "/assets/blog-images/blog-4.png",
    title: "On-demand Panels for Neutrally Assessed Candidates",
    description: "In the Information Technology Space",
    width: 180,
    height: 72,
    span: 2,
  },
];

export default function CaseStudies() {
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    const swiper = swiperRef.current;
    if (swiper && swiper.autoplay) {
      swiper.autoplay.start();
    }
  }, []);

  const BlogCard = ({
    data,
    isMobile,
  }: {
    data: (typeof blogData)[0];
    isMobile: boolean;
  }) => (
    <Card
      className={`bg-[#F7FAF9] rounded-2xl p-2 shadow-lg relative group cursor-pointer transition-all duration-300 transform hover:scale-102 hover:shadow-xl hover:translate-x-1 hover:translate-y-1 ${
        isMobile ? "h-[400px] w-full" : "h-full"
      }`}
    >
      <div
        className={`absolute -top-4 -right-4 rounded-full p-2 bg-white ${
          isMobile ? "hidden" : "block"
        }`}
      >
        <div className="bg-[#f8f8e8] p-6 rounded-full group-hover:bg-[#f0f0d8] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:shadow-md">
          <ArrowUpRight className="w-6 h-6 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </div>
      </div>
      <CardContent className="bg-white rounded-2xl h-full flex flex-col p-0">
        <div
          className={`flex-1 align-middle flex justify-center items-center p-2 ${
            isMobile ? "h-1/2" : ""
          }`}
        >
          <Image
            src={data.image}
            alt={data.title}
            width={isMobile ? 240 : data.width}
            height={isMobile ? 490 : data.height}
            className="object-contain"
          />
        </div>
        <div
          className={`flex flex-col justify-end p-4 ${
            isMobile ? "h-1/2" : "my-2"
          }`}
        >
          <h2 className="text-2xl font-medium mb-2 font-figtree">
            {data.title}
          </h2>
          <p className="text-[#636671] text-sm font-figtree">
            {data.description}
          </p>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-6xl font-medium mb-4 font-Onest text-[#1D1E23]">
          Outcome Chronicle
        </h1>
        <p className="text-[#1D1E23] max-w-3xl mx-auto font-figtree text-base">
          Explore how our partnerships have sparked innovation, driving
          exceptional results and redefining success
        </p>
      </div>

      {/* Mobile View */}
      <div className="md:hidden">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="h-[450px]"
        >
          {blogData.map((blog, index) => (
            <SwiperSlide key={index}>
              <BlogCard data={blog} isMobile={true} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex md:flex-col gap-7 ">
        {/* Row 1 */}
        <div className="flex w-full gap-7">
          {/* Card 1 (30%) */}
          <div className="md:w-[30%]">
            <BlogCard data={blogData[0]} isMobile={false} />
          </div>
          {/* Card 2 (70%) */}
          <div className="md:w-[70%]">
            <BlogCard data={blogData[1]} isMobile={false} />
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex w-full gap-7">
          {/* Card 1 (70%) */}
          <div className="md:w-[70%]">
            <BlogCard data={blogData[2]} isMobile={false} />
          </div>
          {/* Card 2 (30%) */}
          <div className="md:w-[30%]">
            <BlogCard data={blogData[3]} isMobile={false} />
          </div>
        </div>
      </div>
    </div>
  );
}
