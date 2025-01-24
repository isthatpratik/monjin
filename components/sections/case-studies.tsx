"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const slides = [
  {
    title: "On-demand Panels for Neutrally Assessed Candidates",
    description:
      "Futuristic Hiring Route.",
    buttonText: "Dive In",
    image: "/assets/CaseStudies/case-study-1.png",
  },
  {
    title: "Futuristic Hiring Route",
    description:
      "Revolutionized Just-In-Time resourcing, addressing rapid hiring demands in the growing Tech sector.",
    buttonText: "Dive In",
    image: "/assets/CaseStudies/case-study-2.png",
  },
  {
    title: "Quality hiring for the digital skills",
    description:
      "Delivering higher selection ratio.",
    buttonText: "Dive In",
    image: "/assets/CaseStudies/case-study-3.png",
  },
  {
    title: "Propelling Hiring Demands",
    description:
      "Provided a neutral assessment platform to help the world's leading IT company.",
    buttonText: "Dive In",
    image: "/assets/CaseStudies/case-study-4.png",
  },
];

export default function CaseStudies2() {
  const plugin = useRef(Autoplay({ delay: 9000, stopOnInteraction: true }));

  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 md:px-8 lg:px-16 py-8">
      <div className="text-center mb-16 flex-col self-center">
        <h1 className="text-5xl font-medium mb-4 font-Onest text-[#1D1E23] text-center tracking-tighter">
        Empowering Hiring Outcomes: <br />
        Client Insights{" "}
        </h1>
        <p className="text-[#1D1E23] max-w-3xl mx-auto font-figtree text-lg font-light">
          Explore how our partnerships have sparked innovation, driving <br />
          exceptional results and redefining success
        </p>
      </div>
      <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-6xl drop-shadow-lg"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 items-center lg:p-12 md:p-8 p-4 bg-white rounded-[36px] lg:h-auto h-[400px] md:h-[580px]">
                <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-10 lg:justify-between justify-between">
                  <div className="flex flex-col justify-center gap-4">
                    <h2 className="text-xl lg:text-3xl md:text-2xl font-Onest font-semibold leading-tight text-[#16171D]">
                      {slide.title}
                    </h2>
                    <p className="text-muted-foreground max-w-xl font-figtree lg:text-base md:text-base text-sm">
                      {slide.description}
                    </p>
                  </div>
                  <Button
                    className="bg-black text-white hover:bg-gray-800 rounded-[8px] px-8 "
                    size="lg"
                  >
                    {slide.buttonText}
                  </Button>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="relative lg:aspect-[4/3] aspect-[16/9] w-full overflow-hidden rounded-2xl">
                    <Image
                      src={slide.image || "/placeholder.svg"}
                      alt="Showcase image"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex bg-[#1F1F1F] hover:bg-[#1F1F1F]/90 border-none [&>svg]:text-[#D0F16C] lg:scale-125" />
        <CarouselNext className="hidden md:flex bg-[#1F1F1F] hover:bg-[#1F1F1F]/90 border-none [&>svg]:text-[#D0F16C] lg:scale-125" />
      </Carousel>
    </div>
  );
}
