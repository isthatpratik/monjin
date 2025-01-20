'use client'

import { useState } from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/product-tabs"
import { cn } from "@/lib/utils"
import { MobileSlider } from '@/components/ocoi/mobile-slider-ocoi-features'
import { PlayCircle, Star, Search, UserCircle, FileText, CircleCheck } from 'lucide-react'
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
    id: 'ready-interviews',
    label: 'Customize Your Interview',
    title: 'Customize Your Interview',
    description: 'Tailor your interview process to fit your hiring needs with Spot Light’s customizable options.',
    features: [
      ['Video Question', 'Multiple Choice Question'],
      ['', ''],
      ['', ''],
    ],
    icon: <CircleCheck className="w-5 h-5" />,
    imageUrl: '/assets/ocoi/ready-interviews.png'
  },
  {
    id: 'ratings-feedback',
    label: 'Invite Your Candidates',
    title: 'Invite Your Candidates',
    description: "Simplify the interview invitation process with Spot Light’s easy-to-use features for both individual and bulk invitations.",
    features: [
      ['Single Invite', 'Bulk Invite'],
    ],
    icon: <Star className="w-5 h-5" />,
    imageUrl: '/assets/ocoi/ratings-feedback.png'  },
  {
    id: 'advance-search',
    label: 'Assessment',
    title: 'Assessment',
    description: "Spot Light offers comprehensive candidate evaluations using advanced AI and expert assessments to ensure the best hiring decisions.",
    features: [
      ['AI Based Assessment', 'Assesment by Experts'],
    ],
    icon: <Search className="w-5 h-5" />,
    imageUrl: '/assets/ocoi/advanced-search.png'  },
  {
    id: 'reserve-interviewer',
    label: 'Collaboration',
    title: 'Collaboration',
    description: 'Spot Light offers comprehensive candidate evaluations using advanced AI and expert assessments to ensure the best hiring decisions.',
    features: [
      ['Sharing', 'Move Forward'],
    ],
    icon: <UserCircle className="w-5 h-5" />,
    imageUrl: '/assets/ocoi/reserve-interviewer.png'  },
  {
    id: 'jd-based',
    label: 'Question Bank',
    title: 'Question Bank',
    description: "Monjin Spot Light offers a powerful question bank to help you assess candidates effectively, ensuring a tailored and thorough evaluation process.",
    features: [
      ['Smart Question Bank', 'Customized Question Bank'],
    ],
    icon: <FileText className="w-5 h-5" />,
    imageUrl: '/assets/ocoi/jd-based-ocoi.png'  },
  {
    id: 'audio-video',
    label: 'Reports Analytics ',
    title: 'Reports Analytics ',
    description: "Simplify your hiring decisions with Monjin Spot Light's advanced analytics, providing deep insights into your recruitment process.",
    features: [
      ['Advanced Reports', 'Sharing and Collaboration'],
    ],
    icon: <PlayCircle className="w-5 h-5" />,
    imageUrl: '/assets/ocoi/audio-video-analytics.png'  }
];




export default function SpotlightFeatures() {
  const [activeTab, setActiveTab] = useState('ready-interviews')

  return (
    <div className="min-h-auto bg-white rounded-3xl mx-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-onest font-medium text-center mb-12 tracking-tighter">
          Unlock Smarter Hiring with Curated Interviews, Real-Time Feedback, and Seamless Scheduling
        </h1>

        {/* Desktop View */}
        <div className="hidden lg:block" >
          <Tabs defaultValue="ready-interviews" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="w-full flex mb-8 h-full border-b gap-10">
              {tabs.map((tab) => (
                <TabsTrigger
                key={tab.id}
                value={tab.id}
                className={cn(
                  "relative flex items-center lg:gap-2 md:gap-4 gap-4 p-2",
                  "data-[state=active]:text-primary font-medium",
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
                    <p className="font-figtree font-light text-[#353535]" style={{ fontWeight: 300, fontSize: '18px', lineHeight: '30.6px' }}>{tab.description}</p>
                    <div className="grid lg:grid-cols-2 gap-4 text-lg font-figtree font-light">
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
