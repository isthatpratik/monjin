"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function CaseThree() {
  return (
    <section className="w-full relative lg:grid items-center justify-center overflow-hidden">
      <div className="lg:px-8 px-4 lg:pt-24 py-4 relative">
        <div className="text-center space-y-6">
          <h1 className="text-4xl lg:text-[78px] font-onest text-center font-bold text-white leading-tight">
            On-demand Panels for Neutrally Assessed Candidates
          </h1>
          <h2 className="text-base lg:text-xl font-figtree font-light text-white text-center leading-tight">
            Revolutionized Just-In-Time resourcing, by addressing rapid hiring
            demands in the growing Tech sector.
          </h2>
        </div>
      </div>

      <div className="min-h-screen bg-white lg:p-16 p-4 rounded-3xl my-6 lg:my-12">
        <div className="mx-auto max-w-6xl space-y-16">
          {/* Overview Section */}
          <Card className="overflow-hidden bg-[url('/assets/bg/case-study1-mobile.png')] lg:bg-[url('/assets/bg/casestudy1.png')] bg-cover bg-bottom rounded-[32px] shadow-none border">
            <CardContent className="lg:p-16 p-6">
              <div className="grid gap-8 lg:grid-cols-2 items-center">
                <div className="space-y-4 order-2 lg:order-1">
                  <h1 className="text-2xl lg:text-[72px] font-medium font-onest tracking-tighter leading-tight">
                    Overview
                  </h1>
                  <p className="text-gray-600 font-figtree font-normal text-sm lg:text-xl leading-tight">
                    One of the largest professional services firm in the world
                    and a part of the “Big Four” accounting firms were in search
                    of Just In Time (JIT) resourcing to meet the demand
                    pipeline. As the professional services space is
                    transforming, the hiring demand is predict- ed to experience
                    a rapid growth in the coming years. The market forecasts a
                    5.4% global growth rate from 2016 to 2020, reading almost $5
                    trillion. Monjin seized the opportunity to resolve the
                    hiring challenges faced in the professional services sector.
                  </p>
                </div>
                <div className="flex justify-center order-1 lg:order-2">
                  <Image
                    src="/assets/case-study/company3.png"
                    alt="Empower Professionals Logo"
                    width={400}
                    height={400}
                    className="object-contain w-fit lg:w-full"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Challenges Section */}
          <section className="space-y-8 p-4 text-left">
            <h2 className="text-2xl lg:text-[72px] font-medium font-onest tracking-tighter">
              Challenges
            </h2>
            <div className="grid lg:grid-cols-3 gap-3">
              {[
                {
                  icon: "/assets/case-study/icons/8.png",
                  title: "Attention Ratio",
                },
                {
                  icon: "/assets/case-study/icons/9.png",
                  title:
                    "Delayed interviews due to unavailability of interview panel",
                },
                {
                  icon: "/assets/case-study/icons/10.png",
                  title: "Selection Ratio",
                },
              ].map((challenge, index) => (
                <Card
                  key={index}
                  className="overflow-hidden bg-transparent shadow-none border-none"
                >
                  <CardContent className="lg:p-6 px-0 flex lg:flex-col lg:text-center items-center gap-4">
                    {/* Icon - Left on sm/md, Centered on lg+ */}
                    <div className="w-16 h-16 flex items-center justify-center flex-shrink-0">
                      <Image
                        src={challenge.icon}
                        alt="icon"
                        width={80}
                        height={80}
                        className="object-contain flex items-center justify-center"
                      />
                    </div>
                    {/* Text - Right of Icon in sm/md, Below Icon in lg+ */}
                    <p className="font-figtree font-normal text-[#383838] text-sm lg:text-[20px] lg:text-center text-left">
                      {challenge.title}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Method Section */}
          <section className="space-y-4">
            <h2 className="text-2xl lg:text-[72px] font-medium font-onest">
              Approach
            </h2>
            <p className="text-sm lg:text-xl font-normal font-figtree text-gray-600 leading-relaxed">
              Monjin conducted a market research to provide the accurate
              assistance to Persistent. The company setup a process to reduce
              the Turn-around-time for any action items and timely support.
              Monjin’s team started with one Business Unit of Persistent and
              based on the calibration ratio and utilising the rapport with the
              stakeholders it got 3 more Business Unit projects. The team
              ensured good interviewer quality, timely scheduling and feedbacks
              communicated to client.
            </p>
          </section>

          {/* Benefits and Highlights Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-[url('/assets/case-study/benefits.png')] bg-cover bg-center] rounded-[32px]">
              <CardContent className="p-6 lg:p-12 space-y-6">
                <h2 className="text-2xl lg:text-[72px] leading-relaxed font-medium tracking-tighter text-center font-onest text-[#742325]">
                  Benefits
                </h2>
                <ul className="space-y-4 text-white">
                  {[
                    "Neutrally assessed candidates",
                    "Increased technical fitment of candidates with job role",
                    "Faster hiring process",
                    "Reducing costs and closing positions in a time effective manner.",
                  ].map((benefit, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 pb-8 px-8"
                    >
                      <div className="mt-1 w-6 h-6 rounded-full  flex items-center justify-center flex-shrink-0">
                        <Image
                          src="/assets/case-study/icons/tick.png"
                          alt="icon"
                          width={32}
                          height={32}
                          className="rounded-full"
                        />
                      </div>
                      <span className="text-sm lg:text-lg">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[url('/assets/case-study/highlights.png')] bg-cover bg-center] rounded-[32px]">
              <CardContent className="p-6 lg:p-12 space-y-6">
                <h2 className="text-2xl lg:text-[72px] leading-relaxed font-medium tracking-tighter text-center font-onest text-[#41308F]">
                  Highlights
                </h2>
                <ul className="space-y-4 leading-loose text-white">
                  {[
                    "L2 select ratio is over 80%",
                    "897+ Interviews conducted within 4 months",
                    "Weekend recruitment drives apart from weekdays",
                  ].map((highlight, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 pb-8 px-8"
                    >
                      <div className="mt-1 w-6 h-6 flex items-center justify-center flex-shrink-0">
                        <Image
                          src="/assets/case-study/icons/light.png"
                          alt="icon"
                          width={32}
                          height={32}
                          className="rounded-full"
                        />
                      </div>
                      <span className="text-sm lg:text-lg">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <section>
            <Card className="overflow-hidden bg-[url('/assets/case-study/conclusion-bg.jpg')] bg-cover bg-center shadow-none border-none">
              <CardContent className="lg:px-40 lg:py-20">
                <div className="grid gap-8 items-center">
                  <div className="space-y-4 py-12">
                    <h1 className="texc-2xl lg:text-5xl font-medium font-onest text-black">
                      Conclusion
                    </h1>
                    <p className="text-black text-sm lg:text-xl lg:max-w-3xl">
                      Persistent was extremely satisfied with Monjin’s
                      interviewer quality and service and based on it the
                      company gave a task of L2 selection to team Monjin. The
                      team successfully completed the task in a very short
                      duration of time which saved a tremendous amount of cost
                      and efforts.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </section>
  );
}
