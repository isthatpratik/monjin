import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function Testimonials() {
  const imageUrl = "/assets/testimonial-bg.png";  

  return (
    <div className="my-10 flex flex-col items-center justify-between rounded-[48px] bg-gradient-to-b from-white from 30% to-transparent to-70%">
      <div className="flex flex-col items-center justify-center mt-20 pt-10 max-w-4xl">
        <h2 className="font-Onest font-medium text-6xl text-[#1D1E23] text-center tracking-tighter">
          Client Journeys That Define Success
        </h2>
        <p className="font-figtree text-base text-[#1D1E23] text-center mt-8 max-w-3xl">
          Uncover how our expert interviews have transformed hiring processes, helping businesses tap into top talent and make confident decisions. Listen to firsthand accounts of the impact we&apos;ve made.
        </p>
      </div>
      <div className="h-[30rem] rounded-md flex flex-col antialiased bg-transparent dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards 
          items={testimonials} 
          direction="right" 
          speed="slow" 
          imageUrl={imageUrl} 
        />
      </div>
    </div>
  );
}

const testimonials = [
  {
    name: "Praveen Siddannavar",
    position: "Global Recruiting Lead Automotive",
    content: "Monjin’s digital recruiting offers a competitive edge by reducing the evaluation cycle time, providing pre-screened candidates, and freeing up bandwidth for stakeholders.",
    company: "ABC",
  },
  {
    content: "Monjin’s platform is disruptive and efficient for interviewing. I highly recommend it for industries like Yachting and IT.",
    name: "Capt. Surender Saini",
    position: "Pegasus Yachts",
    company: "ABC",
  },
  {
    content: "Monjin has been instrumental in helping us scale our business quickly with their unique interview techniques and reliable feedback.",
    name: "Shashi",
    position: "Samartha Infosolutions",
    company: "ABC",
  },
  {
    content: "Monjin tailors its services to meet the needs of different companies. Excellent customer service and quick responses have made our experience seamless.",
    name: "Thijs Van Dooren",
    position: "The Williams Club",
    company: "ABC",
  },
  {
    content: "Monjin simplifies talent acquisition by pre-assessing candidates, improving selection ratios, and optimizing the hiring process.",
    name: "Mandar Dixit",
    position: "Giving Force",
    company: "ABC",
  }
];
