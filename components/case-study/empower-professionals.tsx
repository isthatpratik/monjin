"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "../ui/separator";

export default function CaseOne() {
  return (
    <section className="w-full relative grid items-center justify-center overflow-hidden">
      <div className="container px-8 pt-24 relative">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-[78px] font-semibold text-white">
            Quality hiring for the digital skills
          </h1>
          <h2 className="text-lg md:text-xl font-figtree font-light text-white">
            The client ramped up their team in the North America and faced
            challenges when it comes to recruiting quality talent. Taking this
            as an opportunity, Monjin looks to resolve hiring challenges faced
            by Empower Professionals.
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
                    The client ramped up their team in the North America and
                    faced challenges when it comes to recruiting quality talent.
                    Taking this as an opportunity, Monjin looks to resolve
                    hiring challenges faced by Empower Professionals.
                  </p>
                </div>
                <div className="flex justify-center">
                  <Image
                    src="/assets/case-study/company1.png"
                    alt="Empower Professionals Logo"
                    width={400}
                    height={400}
                    className="object-contain"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
          {/* Goals Section */}
          <div className="space-y-4">
            <h2 className="text-5xl font-medium font-onest">Goals</h2>
            <div className="flex flex-row gap-8 items-center">
              <p className="font-figtree font-normal text-[20px] text-[#0D0E11] leading-loose basis-3/5">
                Providing value to every talent, helping with assessed talent.
                Hiring has tremendously evolved in the last decade. Experts
                predict that it is placed on the threshold to rise with the
                passage of every year. To capitalise on this rise, here&apos;s a
                closer look at how Monjin resolves talent acquisition challenges
                and improves business productivity.
              </p>
              <div className="w-full basis-2/5">
                <Image
                  src="/assets/bg/case-study1.png"
                  alt="Professional"
                  width={500}
                  height={100}
                  className="relative z-10 rounded-lg object-contain"
                />
              </div>
            </div>
          </div>

          <Separator className="w-full h-[2px]"/>
          {/* Challenges Section */}
          <section className="space-y-8 p-4">
            <h2 className="text-[72px] font-medium font-onest tracking-tighter">
              Challenges
            </h2>
            <div className="grid md:grid-cols-3 gap-3">
              {[
                {
                  icon: "/assets/case-study/icons/1.png",
                  title: "Bulk Hiring",
                },
                {
                  icon: "/assets/case-study/icons/12.png",
                  title: "Panel Quality",
                },
                {
                  icon: "/assets/case-study/icons/13.png",
                  title: "Section Ratio",
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
                        className="mx-auto"
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
            <h2 className="text-[72px] font-medium font-onest">Method</h2>
            <p className="text-xl font-normal font-figtree text-gray-600 leading-relaxed">
              In the US Staffing market, particularly when dealing with
              mid-level commodity resources, there is rampant gaming of the
              system in the form of proxy interviews and fabricated experience
              and credentials. <br />
              Monjin has its network of interviewers across the globe. The
              client used the platform and YCOI to focus more on North America.
              The assessment reports and the video interviews were available to
              the client&apos;s recruitment & business teams on a real time basis for
              the digital skills like Angular JS, Node JS, Full stack, Core
              Java, Salesforce, Test automation, Selenium.
            </p>
          </section>

          {/* Benefits and Highlights Section */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-[url('/assets/case-study/benefits.png')] bg-cover bg-center] rounded-[32px]">
              <CardContent className="p-12 space-y-6">
                <h2 className="text-[72px] leading-relaxed font-medium tracking-tighter text-center font-onest text-[#742325]">
                  Benefits
                </h2>
                <ul className="space-y-4 text-white">
                  {[
                    "Convenience in Candidate Screening",
                    "Increased technical fitment of candidates with job role",
                    "Shortest TAT",
                    "Real-time support",
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-center gap-2 pb-8 px-8">
                      <div className="mt-1 w-6 h-6 rounded-full  flex items-center justify-center">
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

            <Card className="bg-[url('/assets/case-study/highlights.png')] bg-cover bg-center] rounded-[32px]">
              <CardContent className="p-12 space-y-6">
                <h2 className="text-[72px] leading-relaxed font-medium tracking-tighter text-center font-onest text-[#41308F]">
                  Highlights
                </h2>
                <ul className="space-y-4 leading-loose text-white">
                  {[
                    "4 out of 5 Monjin selects got placed",
                    "45 positions closed in 80 days",
                    "Zero travel, logistics and conveyance costs",
                  ].map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2 pb-8 px-8">
                      <div className="mt-1 w-6 h-6 flex items-center justify-center">
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
          <section>
            <Card className="overflow-hidden border-none shadow-none bg-transparent">
              <CardContent className="py-20">
                <div className="grid gap-8 items-start">
                  <div className="space-y-4">
                    <h1 className="text-5xl font-medium font-onest text-black">
                      About Client
                    </h1>
                    <p className="text-black">
                      Empower Professionals is a privately-owned, certified
                      Minority Owned Business Enterprise (MBE), national
                      business and technology consulting firm focused on
                      efficiently and reliably providing flexible solutions for
                      team building across all 50 states. The founding team
                      brings over two decades of experience operating multiple
                      firms in contract, contract to hire, and full-time
                      staffing, and over three decades in the IT enabled
                      services domain.
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