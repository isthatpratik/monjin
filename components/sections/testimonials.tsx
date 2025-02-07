"use client";

import React, { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";

const testimonials = [
  {
    name: "Praveen Siddannavar",
    position: "Global Recruiting Lead Automotive",
    company: "KPIT",
    description:
    "Digital recruiting is a true game changer and provides competitive advantage to us. By utilizing Monjin, the evaluation cycle time per candidate is reduced, as only pre-screened and pre-vetted profiles are now received by our recruiters and interview panel. This therefore releases some bandwidth of the stakeholders, and also provides cost savings.",
    linkedIn: "https://www.linkedin.com/in/praveen-siddannavar-8280b536/", 
  },
  {
    name: "Mandar Dixit",
    position: "CTO",
    company: "Giving Force",
    description:
    "Finding a talent in india is difficult. With Monjin, you get to see the candidates before meeting them. They are pre-assessed by monjin’s experienced technical interviewers. This improves the selection ratio and optimizes the time to hire.",
    linkedIn: "https://www.linkedin.com/in/mandar-profile", 
  },
  {
    name: "Capt. Surender Saini",
    position: "Yachting",
    company: "Pegasus Yachts",
    description:
      "I have been working with monjin since the inception and it is an excellent platform for candidates. We have been very impressed with such a disruptive tech platform for interviewing. I highly recommend monjin for Yachting, IT as well as other industries.",
    linkedIn: "https://www.linkedin.com/in/surender-saini-b6b17b56/", 
  },
  {
    name: "Thijs Van Dooren",
    position: "Yachting",
    company: "The Williams Club",
    description:
      "Every company is different and has different needs, Monjin understands that and caters accordingly. Working with Monjin has really helped my organization. I want to thank you all for a pleasant cooperation. Whenever required, I received a timely response. I don't think there's another platform which provides the customer service you do. It's been very nice working with everyone at Monjin. Let us continue to strive together and bring a new revolution in the recruitment process.",
    linkedIn: "https://www.linkedin.com/in/thijs-profile", 
  },
  {
    name: "Shashi",
    position: "Head-Service Delivery",
    company: "Samartha Infosolutions",
    description:
      "Finding Monjin was one of the best decisions of our business career to find the best talent for growing our business with quality and trust. We’re scaling every part of the business very quickly with the help of their creative and unique techniques. I am very pleased with the way Monjin structures their professional interview panel and the team to provide us quick and precise comments / feedback on interview execution. I am absolutely delighted with the quality of work I have received from Monjin. I look forward to future projects with Monjin and it is a pleasure to work with such a professional team of experts.",
    linkedIn: "https://www.linkedin.com/in/shashi-reddy-04463b48/", 
  },
];

export default function Testimonials() {
  const plugin = useRef(Autoplay({ delay:4000, stopOnInteraction: false }));

  return (
    <section className="py-16 px-4 md:px-8 bg-[url('/assets/bg-testimonial.png')] bg-cover bg-center bg-no-repeat rounded-2xl mt-16">
      <div className="container mx-auto">
        <h2 className="text-center mb-4 font-onest lg:text-5xl text-3xl tracking-tighter">
          Client Journeys That Define Success
        </h2>
        <p className="text-lg text-[#1D1E23] hidden lg:block lg:text-base text-center mb-12 max-w-3xl mx-auto font-figtree font-light">
          Uncover how our expert interviews have transformed hiring processes,
          helping businesses tap into top talent and make confident decisions.
          Listen to firsthand accounts of the impact we&apos;ve made.
        </p>

        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-6xl mx-auto"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <div className="p-1 h-full">
                  <Card className="testimonial-bg backdrop-blur-md border-[#1D1E23]/10 h-full flex flex-col relative">
                    <Image
                      src="/assets/quote.png"
                      alt="abc"
                      width={127}
                      height={100}
                      className="absolute lg:top-0 lg:right-4 lg:w-[125px] lg:h-auto w-[100px] h-auto top-0 right-4 overflow-hidden"
                    />
                    <CardContent className="lg:p-12 md:p-8 p-4 relative flex-grow">
                      <div className="mt-8 flex flex-col gap-2">
                        <h3 className="text-2xl lg:text-3xl font-onest font-medium tracking-tighter flex items-center gap-2">
                          {testimonial.name}
                          <a
                            href={testimonial.linkedIn}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#A5A5A5] hover:text-[#005582] transition-all duration-300"
                            aria-label={`LinkedIn profile of ${testimonial.name}`}
                          >
                            <LinkedInLogoIcon className="inline-block w-6 h-6 lg:w-8 lg:h-8 pl-1" />
                          </a>
                        </h3>
                        <p className="text-base lg:text-base font-figtree text-[#636671]">
                          {testimonial.position}
                        </p>
                        <p className="text-base text-[#101010] mb-4 font-figtree uppercase tracking-widest">
                          {testimonial.company}
                        </p>
                        <p className="lg:text-lg text-base font-figtree font-light leading-relaxed text-[#1D1E23]">
                        &quot;{testimonial.description}&quot;
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex bg-[#1F1F1F] hover:bg-[#1F1F1F]/90 border-none [&>svg]:text-[#D0F16C] lg:scale-125" />
          <CarouselNext className="hidden md:flex bg-[#1F1F1F] hover:bg-[#1F1F1F]/90 border-none [&>svg]:text-[#D0F16C] lg:scale-125" />
        </Carousel>
      </div>
    </section>
  );
}
