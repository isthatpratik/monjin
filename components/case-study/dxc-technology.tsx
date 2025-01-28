"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function CaseFour() {
  return (
    <section className="w-full relative grid items-center justify-center overflow-hidden">
      <div className="container px-8 pt-24 relative">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-[78px] font-onest font-semibold text-white">
            Propelling Hiring Demands
          </h1>
          <h2 className="text-lg md:text-xl font-figtree font-light text-white ">
            Resolved talent acquisition challenges in the Retail Industry.
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
                  <h1 className="text-[72px] font-medium font-onest tracking-tighter">Overview</h1>
                  <p className="text-gray-600 font-figtree font-normal text-xl">
                    World’s leading end-to-end IT company was in the quest of an
                    unbiased and neutral assessment platform to fuel IT sector
                    hiring. A plethora of IT companies are show- ing keen
                    interest in hiring candidates with higher learning ability
                    quotient over the experi- enced counterparts. Monjin stepped
                    in to resolve the hiring challenges faced by top IT
                    companies and upscale their businesses. Here’s a closer look
                    at how Monjin bridged the gap between growing hiring needs
                    and rapid technological transformation.
                  </p>
                </div>
                <div className="flex justify-center">
                  <Image
                    src="/assets/case-study/company4.png"
                    alt="DXC Technology Logo"
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
            <h2 className="text-[72px] font-medium font-onest tracking-tighter">Challenges</h2>
            <div className="grid md:grid-cols-4 gap-3">
              {[
                {
                  icon: "/assets/case-study/icons/11.png",
                  title:
                    "Close bulk hiring demands in shortest turn-around time",

                },
                {
                  icon: "/assets/case-study/icons/12.png",
                  title: "Hiring processes eating into precious project time",

                },
                {
                  icon: "/assets/case-study/icons/13.png",
                  title:
                    "Delayed interviews due to unavailability of interview pane",

                },
                {
                  icon: "/assets/case-study/icons/14.png",
                  title:
                    "Lack of access to qualified and pre-assessed candidates",

                },
              ].map((challenge, index) => (
                <Card key={index} className="overflow-hidden bg-transparent shadow-none border-none">
                  <CardContent className="p-6 text-center space-y-4">
                    <div
                      className={`max-w-3xl h-3xl mx-auto rounded-lg flex items-center justify-center text-2xl`}
                    >
                      <Image
                        src={challenge.icon}
                        alt={'src'}
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
            <h2 className="text-[72px] font-medium font-onest">Monjin Approach</h2>
            <p className="text-xl font-normal font-figtree text-gray-600 leading-relaxed">
              Potential candidates consume time in travelling, incur transit
              costs, and increase futile efforts. Monjin enabled IT companies to
              manoeuvre these challenges through a video platform, powered with
              an assessment tool to help technical fulfilment of the candidates
              in the IT sector. <br />IT companies faced time constraints due to
              unavailability of interview panel. Monjin treaded in with Level1
              interviews that helped save time in resolving the hiring barriers
              within the shortest turn-around time of 48 hours. <br />Bulk hiring
              demand was another area of challenge for IT companies. Monjin
              provided seamless support in closing 50+ hiring requirements in
              the short span of 1 month.
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
                    "Increased candidates’ technical fitment with job role",
                    "Pre-assessed Candidates’ Videos",
                    "Accurate Candidate Pre-assessment",
                    "Reduced Hiring Cycle",
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

            <Card className="bg-[url('/assets/case-study/highlights.png')]  bg-cover bg-center] rounded-[32px] shadow-none border-none">
            <CardContent className="p-12 space-y-6">
                <h2 className="text-5xl leading-relaxed font-medium font-onest text-[#41308F]">
                  Highlights
                </h2>
                <ul className="space-y-4 leading-loose text-white">
                  {[
                    "50+ Positions Closed in 30 Days",
                    "200+ Candidates Evaluated",
                    "Project commencement within 3 Days",
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

          {/* About Client Section */}
          <section className="space-y-8 p-4">
            <h2 className="text-[72px] font-medium font-onest tracking-tighter">Outcomes</h2>
            <div className="grid md:grid-cols-4 gap-3">
              {[
                {
                  icon: "/assets/case-study/icons/15.png",
                  title:
                    "Monjin licenses availability within a month",

                },
                {
                  icon: "/assets/case-study/icons/16.png",
                  title: "Unparalleled Calibration Rate",

                },
                {
                  icon: "/assets/case-study/icons/17.png",
                  title:
                    "Large IT companies shortlisted pre-assessed candidates from Monjin",

                },
                {
                  icon: "/assets/case-study/icons/18.png",
                  title:
                    "No Technical interviews required from employer’s end",

                },
              ].map((challenge, index) => (
                <Card key={index} className="overflow-hidden bg-transparent shadow-none border-none">
                  <CardContent className="p-6 text-center space-y-4">
                    <div
                      className={`max-w-3xl h-3xl mx-auto rounded-lg flex items-center justify-center text-2xl`}
                    >
                      <Image
                        src={challenge.icon}
                        alt={'src'}
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
        </div>
      </div>
    </section>
  );
}