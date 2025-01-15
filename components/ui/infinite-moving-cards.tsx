'use client';

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
  imageUrl, // Single imageUrl prop for all cards
}: {
  items: {
    company: string;
    name: string;
    position: string;
    content: string;
  }[]; 
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
  imageUrl: string; // Single imageUrl for all cards
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  });

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "50s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "90s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_95%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, index) => (
          <li
            key={index}
            className="bg-white w-[350px] max-w-full relative rounded-xl shadow-lg flex-shrink-0 px-8 py-10 md:w-[450px] min-h-[350px]"
          >
            <blockquote>
              {/* Top Left Content (Company, Title, Position) */}
              <div className="absolute top-0 left-0 p-6">
                <div className="text-sm font-figtree text-[#101010] mt-2">
                  {item.company}
                </div>
                <div className="text-xl font-figtree font-medium text-[#16171D]">
                  {item.name}
                </div>
                <div className="text-sm font-figtree text-[#636671]">
                  {item.position}
                </div>
              </div>

              {/* Bottom Left Content (Content) */}
              <div className="absolute bottom-0 left-0 p-6">
                <div className="text-lg font-figtree text-[#1D1E23]">
                  {item.content}
                </div>
              </div>

              {/* Same Image for All Cards */}
              <div
                className="absolute top-4 right-4"
                style={{
                  width: "100px",  // Adjust image size
                  height: "auto",
                }}
              >
                <Image
                  src={imageUrl} // Use the same image URL for all cards
                  alt="testimonial image"
                  className="w-full h-auto object-cover"
                  width={50}
                  height={50}
                />
              </div>

              {/* Overlay for the background image */}
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
