'use client'

import React, { useEffect, useRef } from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { QuoteIcon } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const testimonials = [
  {
    name: "Shashi",
    position: "Head-Service Delivery",
    company: "Samartha Infosolutions",
    description: "Finding Monjin was one of the best decisions of our business career to find the best talent for growing our business with quality and trust. We’re scaling every part of the business very quickly with the help of their creative and unique techniques. I am very pleased with the way Monjin structures their professional interview panel and the team to provide us quick and precise comments / feedback on interview execution. I am absolutely delighted with the quality of work I have received from Monjin. I look forward to future projects with Monjin and it is a pleasure to work with such a professional team of experts."
  },
  {
    name: "Thijs Van Dooren",
    position: "Yachting",
    company: "The Williams Club",
    description: "Every company is different and has different needs, Monjin understands that and caters accordingly. Working with Monjin has really helped my organization. I want to thank you all for a pleasant cooperation. Whenever required, I received a timely response. I don't think there's another platform which provides the customer service you do. It's been very nice working with everyone at Monjin. Let us continue to strive together and bring a new revolution in the recruitment process."
  },
  {
    name: "Mandar Dixit",
    position: "CTO",
    company: "Giving Force",
    description: "Finding a talent in india is difficult. With Monjin, you get to see the candidates before meeting them. They are pre-assessed by monjin’s experienced technical interviewers. This improves the selection ratio and optimizes the time to hire."
  },
  {
    name: "Praveen Siddannavar",
    position: "Global Recruiting Lead Automotive",
    company: "KPIT",
    description: "Digital recruiting is a true game changer and provides competitive advantage to us. By utilizing Monjin, the evaluation cycle time per candidate is reduced, as only pre-screened and pre-vetted profiles are now received by our recruiters and interview panel. This therefore releases some bandwidth of the stakeholders, and also provides cost savings."
  },
  {
    name: "Capt. Surender Saini",
    position: "Yachting",
    company: "Pegasus Yachts",
    description: "I have been working with monjin since the inception and it is an excellent platform for candidates. We have been very impressed with such a disruptive tech platform for interviewing. I highly recommend monjin for Yachting, IT as well as other industries."
  }, 

]

export default function Testimonials2() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit()
    }
  }, [emblaApi])

  return (
    <section className="py-16 px-4 md:px-8 bg-[url('/assets/bg-testimonial.png')] bg-cover bg-center bg-no-repeat">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Client Journeys That Define Success
        </h2>
        <p className="text-lg md:text-xl text-center mb-12 max-w-3xl mx-auto">
          Uncover how our expert interviews have transformed hiring processes, helping businesses tap into top talent and 
          make confident decisions. Listen to firsthand accounts of the impact we've made.
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
                  <Card className="testimonial-bg backdrop-blur-sm border-none shadow-xl h-full flex flex-col relative">
                    <img src="/assets/abc.png" alt="abc" className="absolute -top-2 right-4 w-[126.95px] h-auto" />
                    <CardContent className="p-6 relative flex-grow">
                      <QuoteIcon className="absolute top-4 left-4 w-8 h-16 text-white/20" />
                      <div className="mt-8">
                        <h3 className="font-bold text-xl">{testimonial.name}</h3>
                        <p className="text-sm opacity-75">{testimonial.position}</p>
                        <p className="text-sm opacity-75 mb-4">{testimonial.company}</p>
                        <p className="text-sm leading-relaxed">{testimonial.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
 )
}