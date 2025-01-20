'use client'

import { useState } from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/product-tabs"
import { cn } from "@/lib/utils"
import { MobileSlider } from '@/components/ocoi/mobile-slider-ocoi-features'
import { FileText, StarIcon, SquarePen, CircleCheck, CircleUser } from 'lucide-react'
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
    id: 'expert-assessments',
    label: 'Expert Assessments',
    title: 'Expert Assessments',
    description: 'Leverage Industry Expertise for Superior Candidate Evaluation.',
    features: [
      ['Top-Tier Assessments', 'Comprehensive Skill Evaluation'],
      ['Video Feedback & Insights', 'Customizable Assessments'],
    ],
    icon: <StarIcon className="w-5 h-5" />,
    imageUrl: '/assets/ycoi/expert-assessments.png'
  },
  {
    id: 'scheduling-interviewing',
    label: 'Scheduling & Interviewing',
    title: 'Smart Scheduling & Interviewing with Monjin',
    description: "Optimize your interview process with flexible, efficient, and intelligent scheduling features designed for both candidates and interviewers.",
    features: [
      ['Candidate-Driven Scheduling', 'AI-Powered Auto Matching'],
      ['Interviewer-Driven Scheduling', 'Live Interview Viewing', ],
      [  'Customized Scheduling Support', 'Recorded & Indexed Interviews'],
    ],
    icon: <SquarePen className="w-5 h-5" />,
    imageUrl: '/assets/ycoi/scheduling-interviewing.png'  },
  {
    id: 'job-posting',
    label: 'Job Posting',
    title: 'Effortless Job Posting',
    description: "Attract top talent with Monjin's streamlined job posting tools, designed to enhance your hiring strategy and brand visibility.",
    features: [
      ['Create or Import JD’s', 'Publish Seamlessly'],
      ['Video Job Descriptions', 'Candidate Invitations'],
    ],
    icon: <CircleUser className="w-5 h-5" />,
    imageUrl: '/assets/ycoi/job-posting.png'  },
  {
    id: 'hiring-decisions',
    label: 'Swift Hiring Decisions',
    title: 'Collaboration for Swift Hiring Decisions',
    description: 'Enhance teamwork and streamline hiring with Monjin’s collaborative features designed to bring candidates, hiring managers, and recruiters together effortlessly.',
    features: [
      ['Sharing', ''],
      ['Comments & Feedback', ''],
      ['Playback & verdict', ''],
    ],
    icon: <CircleCheck className="w-5 h-5" />,
    imageUrl: '/assets/ycoi/hiring-decisions.png'  },
  {
    id: 'data-driven-hiring',
    label: 'Data-Driven Hiring',
    title: 'Reports & Analytics for Data-Driven Hiring',
    description: "Gain valuable insights into your hiring process with Monjin’s comprehensive Reports & Analytics module. From standard reports to customized insights, we provide the data you need to optimize talent acquisition.",
    features: [
      ['Customized Reports' ],
      ['Real-Time Updates' ],
    ],
    icon: <FileText className="w-5 h-5" />,
    imageUrl: '/assets/ycoi/data-driven-hiring.png'  }
];

export default function YcoiFeatures() {
  const [activeTab, setActiveTab] = useState('expert-assessments')

  return (
    <div className="min-h-auto bg-white rounded-3xl mx-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl flex flex-row items-center justify-center font-onest font-medium text-center mb-12 tracking-tighter">
        Simplify Hiring with Curated Interviews, 
        Instant Feedback, and Easy Scheduling
        </h1>

        {/* Desktop View */}
        <div className="hidden lg:block" >
          <Tabs defaultValue="expert-assessments" className="w-full" onValueChange={setActiveTab}>
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
              <TabsContent key={tab.id} value={tab.id} className="space-y-8 px-10 pt-4">
                <div className="grid lg:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <h2 className="font-figtree font-medium text-2xl tracking-tighter">{tab.title}</h2>
                    <p className="text-lg font-figtree font-light text-[#353535] leading-loose">{tab.description}</p>
                    <div className="grid lg:grid-cols-2 gap-6 text-lg font-figtree font-normal pt-2 tracking-wide">
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
