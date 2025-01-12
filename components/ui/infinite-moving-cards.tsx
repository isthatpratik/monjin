"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
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
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_95%,transparent)]",
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
        {items.map((item, ) => (
          <li
            key={item.name}
            className="w-[350px] max-w-full relative rounded-3xl border flex-shrink-0 px-8 py-10 md:w-[450px] min-h-[300px]" // Add min-h-[300px] or adjust to suit your needs
            style={{
              backgroundColor: "white",
              backgroundImage: "url('/assets/testimonial-bg.png')",
              backgroundPosition: "top right",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          >
            <blockquote>
              {/* Top Left Content (Company, Title, Position) */}
              <div className="absolute top-0 left-0 p-4">
                <div className="text-sm font-figtree text-[#101010]">
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
              <div className="absolute bottom-0 left-0 p-4">
                <div className="text-lg font-figtree text-[#1D1E23]">
                  {item.content}
                </div>
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
