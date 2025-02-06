"use client";

import React from "react";
import { useState, useRef, useEffect } from "react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/product-tabs";
import { cn } from "@/lib/utils";
import {
  PlayCircle,
  Star,
  Search,
  UserCircle,
  FileText,
  CircleCheck,
} from "lucide-react";
import Image from "next/image";
import { Separator } from "../ui/separator";

export interface Tab {
  id: string;
  label: string;
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  imageUrl: string;
}

const tabs: Tab[] = [
  {
    id: "ready-interviews",
    label: "Ready Interviews",
    title: "Ready Interviews",
    description:
      "Ready-to-Go Interviews with Monjin OCOI - Elevate your hiring process with powerful tools designed to help you build winning teams efficiently and transparently.",
    features: [
      "Watch Interviews",
      "Advanced Indexing",
      "Seamless Sharing",
      "Detailed Feedback",
      "Summaries & Closed Captions",
      "Granular Assessments",
    ],
    icon: <CircleCheck className="w-5 h-5" />,
    imageUrl: "/assets/ocoi/ready-interviews.png",
  },
  {
    id: "ratings-feedback",
    label: "Ratings & Feedback",
    title: "Ratings & Feedback",
    description:
      "Monjin's transparent feedback approach fosters accountability, trust, and better talent decisions for all stakeholders.",
    features: [
      "Transparent Ratings",
      "Balanced Insights",
      "Interviewer Ratings Guide",
      "Address Unfair Ratings",
      "Candidate Ratings Guide",
    ],
    icon: <Star className="w-5 h-5" />,
    imageUrl: "/assets/ocoi/ratings-feedback.png",
  },
  {
    id: "advance-search",
    label: "Advanced Search",
    title: "Advanced Search",
    description:
      "Experience the most efficient and tailored search options with Monjin's advanced search capabilities, designed to provide users with the best search experience possible.",
    features: [
      "Experience & Monjin Ratings",
      "Search by Name",
      "Skills & Subskills",
      "Search by Location",
    ],
    icon: <Search className="w-5 h-5" />,
    imageUrl: "/assets/ocoi/advanced-search.png",
  },
  {
    id: "reserve-interviewer",
    label: "Reserve Interviewer",
    title: "Reserve your Interviewer",
    description:
      "Choose and reserve your preferred interviewer with ease, ensuring you have the right expertise for every interview.",
    features: ["Interviewer by Schedule", "On-Demand Interviews"],
    icon: <UserCircle className="w-5 h-5" />,
    imageUrl: "/assets/ocoi/reserve-interviewer.png",
  },
  {
    id: "jd-based",
    label: "JD Based OCOI",
    title: "JD Based OCOI",
    description:
      "Leverage Monjin's Job Description (JD) Based OCOI to customize interviews and connect with pre-assessed, ready-to-hire candidates that perfectly match your job requirements.",
    features: [
      "Customized Interviews",
      "On-Demand Talent",
      "Seamless Integration",
    ],
    icon: <FileText className="w-5 h-5" />,
    imageUrl: "/assets/ocoi/jd-based-ocoi.png",
  },
  {
    id: "audio-video",
    label: "Audio/Video Analytics",
    title: "Audio and Video Analytics",
    description:
      "Unlock deeper insights and improve talent discovery and engagement with Monjin's advanced Audio & Video Analytics.",
    features: [
      "Keyword Extraction",
      "Sentiment Analysis",
      "Automated Transcription",
      "Emotional Analysis",
      "Gesture & Expression Analysis",
      "Speech-to-Text",
      "Object Identification",
      "Visual Analysis",
    ],
    icon: <PlayCircle className="w-5 h-5" />,
    imageUrl: "/assets/ocoi/audio-video-analytics.png",
  },
];

export default function OcoiFeatures() {
  const [activeTab, setActiveTab] = useState("ready-interviews");
  const [indicatorStyle, setIndicatorStyle] = useState<React.CSSProperties>({});
  const tabsListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateIndicator = () => {
      const activeTabElement = tabsListRef.current?.querySelector(
        `[data-state="active"]`
      ) as HTMLElement;

      if (activeTabElement) {
        const { offsetLeft, offsetWidth } = activeTabElement;
        setIndicatorStyle({
          transform: `translateX(${offsetLeft}px)`,
          width: `${offsetWidth}px`,
          transition: "transform 0.3s ease, width 0.3s ease",
        });
      }
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeTab]);

  return (
    <div className="bg-white rounded-3xl lg:mx-12 mx-auto lg:my-10 border mt-4">
      <div className="lg:max-w-7xl max-w-full mx-auto px-1 md:px-2 lg:px-8 py-12">
        <h1 className="text-2xl lg:text-5xl md:text-3xl font-onest font-semibold text-center lg:mb-12 mb-6 tracking-tighter text-balance leading-normal">
          Simplify Hiring with Curated Interviews, Instant Feedback, and Easy
          Scheduling
        </h1>

        {/* Desktop View */}
        <div className="">
          <Tabs
            defaultValue="ready-interviews"
            className="w-full"
            onValueChange={setActiveTab}
          >
            <TabsList
              ref={tabsListRef}
              className="relative lg:w-full flex mb-8 h-full border-b justify-between bg-transparent overflow-x-auto scrollbar-hide"
            >
              <div
                className="absolute bottom-0 left-0 h-0.5 bg-primary z-10"
                style={indicatorStyle}
              />
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className={cn(
                    "relative flex items-center lg:gap-2 md:gap-4 gap-1 p-2 whitespace-nowrap",
                    "data-[state=active]:text-primary font-light font-figtree text-base"
                  )}
                >
                  <span
                    className={cn(
                      "p-1 rounded-full hidden lg:block",
                      "data-[state=active]:bg-primary/10",
                      tab.id === activeTab ? "text-[#8B72FF]" : "text-gray-600"
                    )}
                  >
                    {tab.icon}
                  </span>
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {tabs.map((tab) => (
              <TabsContent
                key={tab.id}
                value={tab.id}
                className="space-y-8 pt-4 justify-between"
              >
                <div className="grid lg:grid-cols-2 lg:gap-12 gap-2">
                  <div className="space-y-6 order-2 lg:order-1">
                    <h2 className="font-figtree hidden lg:block font-medium text-2xl tracking-tighter">
                      {tab.title}
                    </h2>
                    <p className="text-lg hidden lg:block font-figtree font-light text-[#353535] leading-loose">
                      {tab.description}
                    </p>
                    <div className="hidden w-fit lg:grid lg:grid-cols-2 gap-4 text-lg font-figtree font-normal pt-2 tracking-wide relative">
                      {tab.features.map((feature, index) => (
                        <React.Fragment key={index}>
                          <div
                            className={cn(
                              "space-y-6",
                              index % 2 === 1 ? "pl-2" : ""
                            )}
                          >
                            <div className="text-lg text-nowrap w-min pr-2">
                              {feature}
                            </div>
                          </div>
                          {index % 2 === 1 &&
                            index < tab.features.length - 1 && (
                              <Separator className="col-span-2 my-1" />
                            )}
                        </React.Fragment>
                      ))}
                      {tab.features.length > 1 && (
                        <Separator
                          orientation="vertical"
                          className="absolute left-1/2 top-0 h-full"
                        />
                      )}
                    </div>
                    <div className="lg:hidden grid gap-4 text-sm font-figtree font-normal px-4 md:px-8 tracking-wide relative">
                      {tab.features.map((feature, index) => (
                        <React.Fragment key={index}>
                          <div className="text-sm md:text-lg">{feature}</div>

                          {index < tab.features.length - 1 && (
                            <Separator className="col-span-2" />
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                  <div className="relative items-center flex rounded-lg overflow-hidden order-1 lg:order-2">
                    <Image
                      src={tab.imageUrl || "/placeholder.svg"}
                      alt={tab.title}
                      className="w-full h-auto object-contain aspect-[4/3]"
                      height={1000}
                      width={1000}
                      quality={50}
                      priority
                      loading="eager"
                    />
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
}
