"use client";

import React, { useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { QuoteIcon } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const testimonials = [
  {
    name: "Shashi",
    position: "Head-Service Delivery",
    company: "Samartha Infosolutions",
    description:
      "Finding Monjin was one of the best decisions of our business career to find the best talent for growing our business with quality and trust. We’re scaling every part of the business very quickly with the help of their creative and unique techniques. I am very pleased with the way Monjin structures their professional interview panel and the team to provide us quick and precise comments / feedback on interview execution. I am absolutely delighted with the quality of work I have received from Monjin. I look forward to future projects with Monjin and it is a pleasure to work with such a professional team of experts.",
  },
  {
    name: "Thijs Van Dooren",
    position: "Yachting",
    company: "The Williams Club",
    description:
      "Every company is different and has different needs, Monjin understands that and caters accordingly. Working with Monjin has really helped my organization. I want to thank you all for a pleasant cooperation. Whenever required, I received a timely response. I don't think there's another platform which provides the customer service you do. It's been very nice working with everyone at Monjin. Let us continue to strive together and bring a new revolution in the recruitment process.",
  },
  {
    name: "Mandar Dixit",
    position: "CTO",
    company: "Giving Force",
    description:
      "Finding a talent in india is difficult. With Monjin, you get to see the candidates before meeting them. They are pre-assessed by monjin’s experienced technical interviewers. This improves the selection ratio and optimizes the time to hire.",
  },
  {
    name: "Praveen Siddannavar",
    position: "Global Recruiting Lead Automotive",
    company: "KPIT",
    description:
      "Digital recruiting is a true game changer and provides competitive advantage to us. By utilizing Monjin, the evaluation cycle time per candidate is reduced, as only pre-screened and pre-vetted profiles are now received by our recruiters and interview panel. This therefore releases some bandwidth of the stakeholders, and also provides cost savings.",
  },
  {
    name: "Capt. Surender Saini",
    position: "Yachting",
    company: "Pegasus Yachts",
    description:
      "I have been working with monjin since the inception and it is an excellent platform for candidates. We have been very impressed with such a disruptive tech platform for interviewing. I highly recommend monjin for Yachting, IT as well as other industries.",
  },
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
    }
  }, [emblaApi]);

  return (
    <section className="py-16 px-4 md:px-8 bg-[url('/assets/bg-testimonial.png')] bg-cover bg-center bg-no-repeat rounded-3xl mt-16">
      <div className="container mx-auto">
        <h2 className="md:text-4xl text-center mb-4 font-Onest lg:text-5xl text-3xl tracking-tighter">
          Client Journeys That Define Success
        </h2>
        <p className="text-lg lg:text-base text-center mb-12 max-w-3xl mx-auto font-figtree">
          Uncover how our expert interviews have transformed hiring processes,
          helping businesses tap into top talent and make confident decisions.
          Listen to firsthand accounts of the impact we&apos;ve made.
        </p>

        <Carousel
          ref={emblaRef}
          className="w-full max-w-5xl mx-auto"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <div className="p-1 h-full">
                  <Card className="testimonial-bg backdrop-blur-sm border-none h-full flex flex-col relative">
                    <Image
                      src="/assets/abc.png"
                      alt="abc"
                      width={127} 
                      height={100} 
                      className="absolute lg:-top-2 lg:right-4 lg:w-[125px] lg:h-auto w-[100px] h-auto -top-2 right-4"
                    />
                    <CardContent className="lg:p-8 md:p-6 p-4 relative flex-grow">
                      <QuoteIcon className="absolute top-4 left-4 w-8 h-16 text-white/20" />
                      <div className="mt-8 flex flex-col gap-2">
                        <h3 className="text-xl lg:text-3xl md:text-2xl font-medium">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm text-[#636671]">
                          {testimonial.position}
                        </p>
                        <p className="text-sm opacity-75 mb-4">
                          {testimonial.company}
                        </p>
                        <p className="text-sm leading-relaxed">
                          {testimonial.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex bg-white border-none [&>svg]:text-black" />
          <CarouselNext className="hidden md:flex bg-white border-none [&>svg]:text-black" />
        </Carousel>
      </div>
    </section>
  );
}
