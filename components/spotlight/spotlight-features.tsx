"use client";

import { useState, useRef, useEffect } from "react";
import React from "react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/product-tabs";
import { cn } from "@/lib/utils";
import {
  UserCircle,
  CircleCheck,
  StarIcon,
  FileStack,
  Files,
  FileChartColumn,
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
    id: "customize-interview",
    label: "Customize Your Interview",
    title: "Customize Your Interview",
    description:
      "Tailor your interview process to fit your hiring needs with Spot Light’s customizable options.",
    features: [
      "Multiple Choice Question",
      "Video Question", 
    ],
    icon: <CircleCheck className="w-5 h-5" />,
    imageUrl: "/assets/spotlight/customize-interview.png",
  },
  {
    id: "invite-candidates",
    label: "Invite Your Candidates",
    title: "Invite Your Candidates",
    description:
      "Simplify the interview invitation process with Spot Light’s easy-to-use features for both individual and bulk invitations.",
    features: ["Single Invite", "Bulk Invite"],
    icon: <UserCircle className="w-5 h-5" />,
    imageUrl: "/assets/spotlight/invite-candidates.png",
  },
  {
    id: "assessment",
    label: "Assessment",
    title: "Assessment",
    description:
      "Spot Light offers comprehensive candidate evaluations using advanced AI and expert assessments to ensure the best hiring decisions.",
    features: [
      "Assesment by Experts",
      "AI Based Assessment", 
    ],
    icon: <StarIcon className="w-5 h-5" />,
    imageUrl: "/assets/spotlight/assessment.png",
  },
  {
    id: "collaboration",
    label: "Collaboration",
    title: "Collaboration",
    description:
      "Spot Light offers comprehensive candidate evaluations using advanced AI and expert assessments to ensure the best hiring decisions.",
    features: [
      "Move Forward",
      "Sharing", 
    ],
    icon: <FileStack className="w-5 h-5" />,
    imageUrl: "/assets/spotlight/collaboration.png",
  },
  {
    id: "question-bank",
    label: "Question Bank",
    title: "Question Bank",
    description:
      "Monjin Spot Light offers a powerful question bank to help you assess candidates effectively, ensuring a tailored and thorough evaluation process.",
    features: [
      "Customized Question Bank",
      "Smart Question Bank", 
    ],
    icon: <Files className="w-5 h-5" />,
    imageUrl: "/assets/spotlight/question-bank.png",
  },
  {
    id: "report-analytics",
    label: "Reports Analytics ",
    title: "Reports Analytics ",
    description:
      "Simplify your hiring decisions with Monjin Spot Light's advanced analytics, providing deep insights into your recruitment process.",
    features: [
      "Sharing and Collaboration",
      "Advanced Reports", 
    ],
    icon: <FileChartColumn className="w-5 h-5" />,
    imageUrl: "/assets/spotlight/report-analytics.png",
  },
];

export default function SpotlightFeatures() {
  const [activeTab, setActiveTab] = useState("customize-interview");
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
    <div className="bg-white rounded-3xl lg:mx-12 mx-auto my-10 mt-4">
      <div className="lg:max-w-7xl max-w-full mx-auto px-1 md:px-2 lg:px-8 py-12">
        <h1 className="text-2xl lg:text-5xl font-onest font-semibold text-center lg:mb-12 mb-6 tracking-tighter px-4">
          Unlock Smarter Hiring with Curated Interviews, Real-Time Feedback, and
          Seamless Scheduling
        </h1>

        <div className="">
          <Tabs
            defaultValue="customize-interview"
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
                      className="w-auto h-auto object-contain aspect-[4/3]"
                      height={900}
                      width={900}
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
