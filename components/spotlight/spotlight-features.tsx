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
    label: 'Customize Your Interview',
    title: 'Customize Your Interview',
    description: 'Tailor your interview process to fit your hiring needs with Spot Light’s customizable options.',
    features: [
      ['Video Question', 'Multiple Choice Question'],
      ['', ''],
      ['', ''],
    ],
    icon: <CircleCheck className="w-5 h-5" />,
    imageUrl: '/assets/spotlight/customize-interview.png'
  },
  {
    id: 'invite-candidates',
    label: 'Invite Your Candidates',
    title: 'Invite Your Candidates',
    description: "Simplify the interview invitation process with Spot Light’s easy-to-use features for both individual and bulk invitations.",
    features: [
      ['Single Invite', 'Bulk Invite'],
    ],
    icon: <UserCircle className="w-5 h-5" />,
    imageUrl: '/assets/spotlight/invite-candidates.png'  },
  {
    id: 'assessment',
    label: 'Assessment',
    title: 'Assessment',
    description: "Spot Light offers comprehensive candidate evaluations using advanced AI and expert assessments to ensure the best hiring decisions.",
    features: [
      ['AI Based Assessment', 'Assesment by Experts'],
    ],
    icon: <StarIcon className="w-5 h-5" />,
    imageUrl: '/assets/spotlight/assessment.png'  },
  {
    id: 'collaboration',
    label: 'Collaboration',
    title: 'Collaboration',
    description: 'Spot Light offers comprehensive candidate evaluations using advanced AI and expert assessments to ensure the best hiring decisions.',
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




export default function SpotlightFeatures() {
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