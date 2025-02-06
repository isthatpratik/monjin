"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function CaseTwo() {
  return (
    <section className="w-full relative lg:grid items-center justify-center overflow-hidden">
      <div className="lg:px-8 px-4 lg:pt-24 py-4 relative">
        <div className="text-center space-y-6">
          <h1 className="text-4xl lg:text-[78px] font-onest text-center font-bold text-white leading-tight">
            Futuristic Hiring Routes
          </h1>
          <h2 className="text-base lg:text-xl font-figtree font-light text-white text-center leading-tight">
            Delivering higher selection ratio.
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
                    Retail Industry has transformed from conventional grocery
                    markets to fast-track hypermarkets in the recent years. The
                    ever-fluctuating sector poses its uniqe challenges –
                    Applicants have multiple options; Low barriers to exit;
                    Candidates market is highly localised. With India being
                    ranked 1st in the Global Retail Development Index 2017. We
                    see an opportunity. Monjin looks to resolve hiring
                    challenges faced specific to retail industry.
                  </p>
                </div>
                <div className="flex justify-center">
                  <Image
                    src="/assets/case-study/company2.png"
                    alt="Empower Professionals Logo"
                    width={400}
                    height={400}
                    className="object-contain"
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
            <div className="grid lg:grid-cols-4 gap-3">
              {[
                {
                  icon: "/assets/case-study/icons/4.png",
                  title: "Increased burden of bulk hiring demands",
                },
                {
                  icon: "/assets/case-study/icons/5.png",
                  title:
                    "Delayed interviews due to unavailability of interview panel",
                },
                {
                  icon: "/assets/case-study/icons/6.png",
                  title: "Lack of qualified and pre-assessed candidates",
                },
                {
                  icon: "/assets/case-study/icons/7.png",
                  title: "Lack of connectivityto global retail organisations",
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
            <h2 className="text-2xl lg:text-[72px] font-medium font-onest leading-tight">
              Monjin Approach
            </h2>
            <p className="text-sm lg:text-xl font-normal font-figtree text-gray-600 leading-relaxed">
              Travelling to the interview venue involves effort, time, and
              costs. Specially if you are approaching top holding companies in
              the retail sector. Monjin enabled potential candidates to beat
              this challenge with a video platform. The platform was powered
              with an assessment measuring tool which helped in technical
              fitment of the candidates in the retail industry. <br />
              Hiring in large numbers is a big challenge, especially in the
              retail industry. An expert panel of Monjin helped in conducting
              Level1 interviews. This helped in resolving the burden of bulk
              hiring demand.Monjin managed services helped manage weekend
              interview drives without calling hiring managers to conduct the
              1st level of interview. This ensured a reduction in hiring cycle
              for the employers and better technical fitment of candidates.{" "}
              <br />
              Monjin has achieved resolutions in talent acquisition challenges
              while enabling candidates to reach top retail companies, and
              improved employer’s business productivity in the retail industry.
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
                    "Convenience in Candidate Screening",
                    "Hiring managers can view pre-assessed candidates’ videos within 72 hours",
                    "Hiring Cycle reduced with accurate pre-assessments of candidates",
                    "Increased technical fitment of candidates with job role",
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
                    "Monjin Licenses availability within a month",
                    "300+ Interviews conducted within 6 months",
                    "Large retail companies shortlisted pre-assessed candidates from Monjin",
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
            <Card className="overflow-hidden bg-[url('/assets/bg/casestudymonjin.png')] bg-cover bg-center shadow-none border-none">
            <CardContent className="lg:px-40 lg:py-20">
                <div className="grid gap-8 items-center">
                  <div className="space-y-4 py-12">
                    <h1 className="texc-2xl lg:text-5xl font-medium font-onest text-white">
                      The Future
                    </h1>
                    <p className="text-white text-sm lg:text-xl lg:max-w-3xl">
                      As top holding companies in the retail industry spray
                      multiple opportunities, Monjin is on the path to make a
                      difference in the hiring space. In the Indian scenario,
                      the potential to provide employment to a large youth
                      population is on a rapid growth. Resolve talent
                      acquisition challenges and improve business productivity
                      with innovative hiring solutions focused on the retail
                      sector.
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
