"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function Testimonials() {
  return (
    <div className="my-10 flex flex-col items-center justify-between rounded-[48px] bg-white border">
        <div className="flex flex-col items-center justify-center mt-20 pt-10 max-w-4xl">
            <h2 className="font-Onest font-medium text-6xl text-[#1D1E23] text-center tracking-tighter">Client Journeys That Define Success</h2>
            <p className="font-figtree text-base text-[#1D1E23] text-center mt-8 max-w-3xl">Uncover how our expert interviews have transformed hiring processes, helping businesses tap into top talent and make confident decisions. Listen to firsthand accounts of the impact we&apos;ve made.</p>
        </div>
        <div className="h-[30rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
        />
        </div>
    </div>
  );
}

const testimonials = [
  {
    content:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    position: "A Tale of Two Cities",
    company: 'ABC'
  },
  {
    content:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    position: "A Tale of Two Cities",
    company: 'ABC'
  },
  {
    content:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    position: "A Tale of Two Cities",
    company: 'ABC'
  },
  {
    content:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    position: "A Tale of Two Cities",
    company: 'ABC'
  },
  {
    content:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    position: "A Tale of Two Cities",
    company: 'ABC'
  },
];
