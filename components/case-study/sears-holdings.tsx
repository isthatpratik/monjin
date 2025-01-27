"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function CaseTwo() {
  return (
    <section className="w-full relative grid items-center justify-center overflow-hidden">
      <div className="container px-8 pt-24 relative">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-[78px] font-semibold text-white">
            Futuristic Hiring Routes
          </h1>
          <h2 className="text-lg md:text-xl font-figtree font-light text-white ">
            Delivering higher selection ratio.
          </h2>
          <div className="max-w-2xl mx-auto mt-8 pt-20"></div>
        </div>
      </div>

      <div className="min-h-screen bg-white p-16 rounded-3xl">
        <div className="mx-auto max-w-6xl space-y-16">
          {/* Overview Section */}
          <Card className="overflow-hidden bg-[url('/assets/bg/casestudy1.jpg')] bg-cover bg-center rounded-[32px] shadow-none border">
            <CardContent className="p-16">
              <div className="grid gap-8 md:grid-cols-2 items-center">
                <div className="space-y-4">
                  <h1 className="text-[72px] font-medium font-onest tracking-tighter">
                    Overview
                  </h1>
                  <p className="text-gray-600 font-figtree font-normal text-xl">
                    Retail Industry has transformed from conventional grocery
                    markets to fast-track hypermarkets in the recent years. The
                    ever-fluctuating sector poses its uniqe challenges –
                    Applicants have multiple options; Low barriers to exit;
                    Candidates market is highly localised. With India being
                    ranked 1st in the Global Retail Development Index 2017.{" "}
                    We see an opportunity. Monjin looks to resolve hiring
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
          <section className="space-y-8 p-4">
            <h2 className="text-[72px] font-medium font-onest tracking-tighter">
              Challenges
            </h2>
            <div className="grid md:grid-cols-4 gap-3">
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
                  title: "Lack of connectivityto global retailorganisations",
                },
              ].map((challenge, index) => (
                <Card
                  key={index}
                  className="overflow-hidden bg-transparent shadow-none border-none"
                >
                  <CardContent className="p-6 text-center space-y-4">
                    <div
                      className={`max-w-3xl h-3xl mx-auto rounded-lg flex items-center justify-center text-2xl`}
                    >
                      <Image
                        src={challenge.icon}
                        alt={"src"}
                        width={100}
                        height={100}
                      />
                    </div>
                    <p className="font-figtree font-normal text-[#383838] text-[20px]">
                      {challenge.title}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Method Section */}
          <section className="space-y-4">
            <h2 className="text-[72px] font-medium font-onest">
              Monjin Approach
            </h2>
            <p className="text-xl font-normal font-figtree text-gray-600 leading-relaxed">
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
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-[url('/assets/case-study/benefits.png')] bg-cover bg-center] rounded-[32px] shadow-none border-none">
              <CardContent className="p-12 space-y-6">
                <h2 className="text-5xl leading-relaxed font-medium font-onest text-[#742325]">
                  Benefits
                </h2>
                <ul className="space-y-4 text-white">
                  {[
                    "Convenience in Candidate Screening",
                    "Hiring managers can view pre-assessed candidates’ videos within 72 hours",
                    "Hiring Cycle reduced with accurate pre-assessments of candidates",
                    "Increased technical fitment of candidates with job role",
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2 pb-8">
                      <div className="mt-1 w-4 h-4 flex items-center justify-center">
                        <Image
                          src="/assets/case-study/icons/tick.png"
                          alt="icon"
                          width={32} 
                          height={32}
                          className="rounded-full"
                        />
                      </div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[url('/assets/case-study/highlights.png')] bg-cover bg-center] rounded-[32px] shadow-none border-none">
              <CardContent className="p-12 space-y-6">
                <h2 className="text-5xl leading-relaxed font-medium font-onest text-[#41308F]">
                  Highlights
                </h2>
                <ul className="space-y-4 leading-loose text-white">
                  {[
                    "Monjin Licenses availability within a month",
                    "300+ Interviews conducted within 6 months",
                    "Large retail companies shortlisted pre-assessed candidates from Monjin",
                  ].map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2 pb-8">
                      <div className="mt-1 w-4 h-4 flex items-center justify-center">
                        <Image
                          src="/assets/case-study/icons/light.png"
                          alt="icon"
                          width={32} 
                          height={32}
                          className="rounded-full"
                        />
                      </div>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <section>
            <Card className="overflow-hidden bg-[url('/assets/bg/casestudymonjin.png')] bg-cover bg-center shadow-none border-none">
              <CardContent className="px-40 py-20">
                <div className="grid gap-8 items-center">
                  <div className="space-y-4">
                    <h1 className="text-5xl font-medium font-onest text-white">
                      The Future
                    </h1>
                    <p className="text-white">
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