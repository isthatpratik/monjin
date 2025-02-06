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
  FileText,
  StarIcon,
  SquarePen,
  CircleCheck,
  CircleUser,
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
    id: "expert-assessments",
    label: "Expert Assessments",
    title: "Expert Assessments",
    description:
      "Leverage Industry Expertise for Superior Candidate Evaluation.",
    features: [
      "Top-Tier Assessments",
      "Video Feedback & Insights",
      "Comprehensive Skill Evaluation",
      "Customizable Assessments",
    ],
    icon: <StarIcon className="w-5 h-5" />,
    imageUrl: "/assets/ycoi/expert-assessments.png",
  },
  {
    id: "scheduling-interviewing",
    label: "Scheduling & Interviewing",
    title: "Smart Scheduling & Interviewing with Monjin",
    description:
      "Optimize your interview process with flexible, efficient, and intelligent scheduling features designed for both candidates and interviewers.",
    features: [
      "Candidate-Driven Scheduling",
      "AI-Powered Auto Matching",
      "Interviewer-Driven Scheduling",
      "Live Interview Viewing",
      "Customized Scheduling Support",
      "Recorded & Indexed Interviews",
    ],
    icon: <SquarePen className="w-5 h-5" />,
    imageUrl: "/assets/ycoi/scheduling-interviewing.png",
  },
  {
    id: "job-posting",
    label: "Job Posting",
    title: "Effortless Job Posting",
    description:
      "Attract top talent with Monjin's streamlined job posting tools, designed to enhance your hiring strategy and brand visibility.",
    features: [
      "Create or Import JD’s",
      "Publish Seamlessly",
      "Video Job Descriptions",
      "Candidate Invitations",
    ],
    icon: <CircleUser className="w-5 h-5" />,
    imageUrl: "/assets/ycoi/job-posting.png",
  },
  {
    id: "hiring-decisions",
    label: "Swift Hiring Decisions",
    title: "Collaboration for Swift Hiring Decisions",
    description:
      "Enhance teamwork and streamline hiring with Monjin’s collaborative features designed to bring candidates, hiring managers, and recruiters together effortlessly.",
    features: [
      "Comments & Feedback", 
      "Sharing", 
      "Playback & verdict"
    ],
    icon: <CircleCheck className="w-5 h-5" />,
    imageUrl: "/assets/ycoi/hiring-decisions.png",
  },
  {
    id: "data-driven-hiring",
    label: "Data-Driven Hiring",
    title: "Reports & Analytics for Data-Driven Hiring",
    description:
      "Gain valuable insights into your hiring process with Monjin’s comprehensive Reports & Analytics module. From standard reports to customized insights, we provide the data you need to optimize talent acquisition.",
    features: ["Customized Reports", "Real-Time Updates"],
    icon: <FileText className="w-5 h-5" />,
    imageUrl: "/assets/ycoi/data-driven-hiring.png",
  },
];

export default function YcoiFeatures() {
  const [activeTab, setActiveTab] = useState("expert-assessments");
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
    <div className="bg-white rounded-3xl lg:mx-12 mx-auto my-10 border">
      <div className="lg:max-w-7xl max-w-full mx-auto px-1 md:px-2 lg:px-8 py-12">
        <h1 className="text-2xl lg:text-5xl font-onest font-semibold text-center lg:mb-12 mb-6 tracking-tighter leading-tight text-balance">
          Transform hiring with tailored interviews, instant feedback,
          and seamless scheduling
        </h1>

        <div className="">
          <Tabs
            defaultValue="expert-assessments"
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
