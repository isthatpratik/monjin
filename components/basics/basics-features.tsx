'use client'

import { useState } from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/product-tabs"
import { cn } from "@/lib/utils"
import { MobileSlider } from '@/components/ocoi/mobile-slider-ocoi-features'
import { UserCircle, CircleCheck, StarIcon, FileStack, Files, FileChartColumn } from 'lucide-react'
import Image from 'next/image'

export interface Tab {
  id: string
  label: string
  title: string
  description: string
  features: string[][]
  icon: React.ReactNode
  imageUrl: string
}
<div>
    
</div>
const tabs: Tab[] = [
  {
    id: 'customize-interview',
    label: 'OTP-Based Interviews',
    title: 'OTP-Based Interviews',
    description: 'Simplify your interview process with instant, secure invites. Share a unique OTP  for candidates to join video interviews seamlessly. No registration required — just enter the code and connect instantly, ensuring a fast and frictionless experience for both interviewers and candidates.',
    features: [
      ['Simple Code Login', 'Calendar Integration'],
      ['Interviewer Access', 'Lightning-Fast Setup'],
      ['', ''],
    ],
    icon: <CircleCheck className="w-5 h-5" />,
    imageUrl: '/assets/basics/otp-interviews.png'
  },
  {
    id: 'invite-candidates',
    label: 'Multi-Panel Interview',
    title: 'Multi-Panel Interview',
    description: "Enhance your hiring process with Basics' multi-panel feature, allowing you to add multiple interviewers to a single session for a more comprehensive and collaborative evaluation.",
    features: [
      ['Collaborative Scheduling', 'Screen Sharing'],
      ['Time Zone Management', 'Granular Feedback'],
      ['Proctoring', ''],
    ],
    icon: <UserCircle className="w-5 h-5" />,
    imageUrl: '/assets/spotlight/invite-candidates.png'  },
  {
    id: 'assessment',
    label: 'Scheduling an Interview',
    title: 'Scheduling an Interview',
    description: "Streamline your interview scheduling with easy-to-use online tools, making it quick and efficient to set up interviews.With an intuitive interface, you can quickly set up interview sessions and ensure a smooth process for both candidates and interviewers.",
    features: [
      ['Matching Interviewers', 'Online Calendar'],
    ],
    icon: <StarIcon className="w-5 h-5" />,
    imageUrl: '/assets/spotlight/assessment.png'  },
  {
    id: 'collaboration',
    label: 'Video Conclave',
    title: 'Video Conclave',
    description: "The heart of your interview process, the Conclave is where the actual interview takes place. Whether you're conducting a one-on-one or a multi-panel session, the Conclave offers a seamless space for interviewers to collaborate and assess candidates in real-time.",
    features: [
      ['Sharing', 'Move Forward'],
    ],
    icon: <FileStack className="w-5 h-5" />,
    imageUrl: '/assets/spotlight/collaboration.png'  },
  {
    id: 'question-bank',
    label: 'Question Bank',
    title: 'Question Bank',
    description: "Monjin Spot Light offers a powerful question bank to help you assess candidates effectively, ensuring a tailored and thorough evaluation process.",
    features: [
      ['Smart Question Bank', 'Customized Question Bank'],
    ],
    icon: <Files className="w-5 h-5" />,
    imageUrl: '/assets/spotlight/question-bank.png'  },
  {
    id: 'report-analytics',
    label: 'Reports Analytics ',
    title: 'Reports Analytics ',
    description: "Simplify your hiring decisions with Monjin Spot Light's advanced analytics, providing deep insights into your recruitment process.",
    features: [
      ['Advanced Reports', 'Sharing and Collaboration'],
    ],
    icon: <FileChartColumn className="w-5 h-5" />,
    imageUrl: '/assets/spotlight/report-analytics.png'  }
];




export default function BasicsFeatures() {
  const [activeTab, setActiveTab] = useState('customize-interview')

  return (
    <div className="min-h-auto bg-white rounded-3xl mx-12 mb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-onest font-medium text-center mb-12 tracking-tighter">
        Unlock Smarter Hiring with Curated Interviews, Real-Time Feedback, and Seamless Scheduling
        </h1>

        {/* Desktop View */}
        <div className="hidden lg:block" >
          <Tabs defaultValue="customize-interview" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="w-full flex mb-8 h-full border-b justify-between">
              {tabs.map((tab) => (
                <TabsTrigger
                key={tab.id}
                value={tab.id}
                className={cn(
                  "relative flex items-center lg:gap-2 md:gap-4 gap-4 p-2",
                  "data-[state=active]:text-primary font-light font-figtree text-base",
                  "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5",
                  "after:scale-x-0 data-[state=active]:after:scale-x-100",
                  "after:bg-primary after:transition-transform"
                )}
              >
                <span
                  className={cn(
                    "p-1 rounded-full",
                    "data-[state=active]:bg-primary/10",
                    tab.id === activeTab ? "text-[#8B72FF]" : "text-gray-600" // Apply color conditionally
                  )}
                >
                  {tab.icon}
                </span>
                {tab.label}
              </TabsTrigger>
              
              ))}
            </TabsList>

            {tabs.map((tab) => (
              <TabsContent key={tab.id} value={tab.id} className="space-y-8 px-10">
                <div className="grid lg:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <h2 className="font-figtree font-medium text-2xl tracking-tighter">{tab.title}</h2>
                    <p className="ftext-lg font-figtree font-light text-[#353535] leading-loose">{tab.description}</p>
                    <div className="grid lg:grid-cols-2 gap-4 text-lg font-figtree font-normal pt-2 tracking-wide">
                      {tab.features.map((featurePair, idx) => (
                        <div key={idx} className="space-y-4">
                          {featurePair.map(
                            (feature, featureIdx) =>
                              feature && (
                                <div key={featureIdx} className="text-lg">
                                  {feature}
                                </div>
                              )
                          )}
                        </div>
                      ))}
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

        {/* Mobile View */}
        <div className="lg:hidden">
          <MobileSlider tabs={tabs} />
        </div>
      </div>
    </div>
  )
}