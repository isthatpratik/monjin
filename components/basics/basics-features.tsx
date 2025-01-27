"use client";

import { useState, useEffect, useRef } from "react";
import React from "react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/product-tabs";
import { cn } from "@/lib/utils";
import {
  CircleCheck,
  Files,
  FileBarChartIcon as FileChartColumn,
  FileStackIcon,
  CalendarCheck,
  SquarePlay,
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
    id: "otp-interviews",
    label: "OTP-Based Interviews",
    title: "OTP-Based Interviews",
    description:
      "Simplify your interview process with instant, secure invites. Share a unique OTP for candidates to join video interviews seamlessly. No registration required — just enter the code and connect instantly, ensuring a fast and frictionless experience for both interviewers and candidates.",
    features: [
      "Simple Code Login",
      "Calendar Integration",
      "Interviewer Access",
      "Lightning-Fast Setup",
    ],
    icon: <CircleCheck className="w-5 h-5" />,
    imageUrl: "/assets/basics/otp-interviews.png",
  },
  {
    id: "multi-panel",
    label: "Multi-Panel Interview",
    title: "Multi-Panel Interview",
    description:
      "Enhance your hiring process with Basics' multi-panel feature, allowing you to add multiple interviewers to a single session for a more comprehensive and collaborative evaluation.",
    features: [
      "Collaborative Scheduling",
      "Screen Sharing",
      "Time Zone Management",
      "Granular Feedback",
      "Proctoring",
    ],
    icon: <FileStackIcon className="w-5 h-5" />,
    imageUrl: "/assets/basics/multipanel-interviews.png",
  },
  {
    id: "schedule-interview",
    label: "Scheduling an Interview",
    title: "Scheduling an Interview",
    description:
      "Streamline your interview scheduling with easy-to-use online tools, making it quick and efficient to set up interviews.With an intuitive interface, you can quickly set up interview sessions and ensure a smooth process for both candidates and interviewers.",
    features: ["Matching Interviewers", "Online Calendar"],
    icon: <CalendarCheck className="w-5 h-5" />,
    imageUrl: "/assets/basics/schedule-interview.png",
  },
  {
    id: "video-conclave",
    label: "Video Conclave",
    title: "Video Conclave",
    description:
      "The heart of your interview process, the Conclave is where the actual interview takes place. Whether you're conducting a one-on-one or a multi-panel session, the Conclave offers a seamless space for interviewers to collaborate and assess candidates in real-time.",
    features: [
      "Creating Timestamps",
      "Screen Sharing",
      "Code and Chat",
      "Granular Feedback",
    ],
    icon: <SquarePlay className="w-5 h-5" />,
    imageUrl: "/assets/basics/video-conclave.png",
  },
  {
    id: "collaboration",
    label: "Collaboration",
    title: "Collaboration",
    description:
      "Monjin Basics enhances your hiring process with powerful collaboration features, allowing seamless feedback collection from key stakeholders. The platform allows feedback to be provided in both textual and video formats, ensuring that all perspectives are captured.",
    features: ["Sharing Interview Visuals", "Verdict"],
    icon: <Files className="w-5 h-5" />,
    imageUrl: "/assets/basics/collaboration.png",
  },
  {
    id: "report-analytics",
    label: "Reports & Analytics ",
    title: "Reports & Analytics ",
    description:
      "Make data-driven hiring decisions with Basics' advanced reporting and analytics features. With advanced reporting capabilities, you can visually track key metrics such as candidate ratings, performance scores, and the overall efficiency of your hiring operations. These insights allow you to make data-driven decisions and improve your recruitment strategy.",
    features: ["Advanced Reports", "Sharing and Collaboration"],
    icon: <FileChartColumn className="w-5 h-5" />,
    imageUrl: "/assets/basics/reports-analytics.png",
  },
];

export default function BasicsFeatures() {
  const [activeTab, setActiveTab] = useState("otp-interviews");
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
    <div className="min-h-auto bg-white rounded-3xl mx-12 my-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-onest font-medium text-center mb-12 tracking-tighter">
          Unlock Smarter Hiring with Curated Interviews, Real-Time Feedback, and
          Seamless Scheduling
        </h1>

        {/* Desktop View */}
        <div className="hidden lg:block">
          <Tabs
            defaultValue="otp-interviews"
            className="w-full"
            onValueChange={setActiveTab}
          >
            <TabsList
              ref={tabsListRef}
              className="relative w-full flex mb-8 h-full border-b justify-between bg-transparent"
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
                    "relative flex items-center lg:gap-2 md:gap-4 gap-4 p-2",
                    "data-[state=active]:text-primary font-light font-figtree text-base"
                  )}
                >
                  <span
                    className={cn(
                      "p-1 rounded-full",
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
                <div className="grid lg:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <h2 className="font-figtree font-medium text-2xl tracking-tighter">
                      {tab.title}
                    </h2>
                    <p className="text-lg font-figtree font-light text-[#353535] leading-loose">
                      {tab.description}
                    </p>
                    <div className="grid lg:grid-cols-2 gap-4 text-lg font-figtree font-normal pt-2 tracking-wide relative">
                      {tab.features.map((feature, index) => (
                        <React.Fragment key={index}>
                          <div
                            className={cn(
                              "space-y-6",
                              index % 2 === 1 ? "pl-14" : ""
                            )}
                          >
                            <div className="text-lg">{feature}</div>
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
                  </div>
                  <div className="relative h-[400px] rounded-lg overflow-hidden">
                    <Image
                      src={tab.imageUrl || "/placeholder.svg"}
                      alt={tab.title}
                      className="w-full h-full object-contain"
                      height={1000}
                      width={1000}
                      quality={70}
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
