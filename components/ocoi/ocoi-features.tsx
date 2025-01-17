'use client'

import { useState } from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"
import { MobileSlider } from '@/components/ocoi/mobile-slider-ocoi-features'
import { PlayCircle, Star, Search, UserCircle, FileText, Video } from 'lucide-react'

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
    label: 'Ready Interviews',
    title: 'Ready Interviews',
    description: 'Ready-to-Go Interviews with Monjin OCOI - Elevate your hiring process with powerful tools designed to help you build winning teams efficiently and transparently.',
    features: [
      ['Watch Interviews', 'Advanced Indexing'],
      ['Seamless Sharing', 'Detailed Feedback'],
      ['Granular Assessments', 'Summaries & Closed Captions'],
    ],
    icon: <PlayCircle className="w-5 h-5" />,
    imageUrl: '/assets/ocoi/ready-interview.jpg'
  },
  {
    id: 'ratings-feedback',
    label: 'Ratings & Feedback',
    title: 'Ratings & Feedback',
    description: "Monjin's transparent feedback approach fosters accountability, trust, and better talent decisions for all stakeholders.",
    features: [
      ['Transparent Ratings', 'Balanced Insights'],
      ['Interviewer Ratings Guide', 'Address Unfair Ratings'],
      ['Candidate Ratings Guide', ''],
    ],
    icon: <Star className="w-5 h-5" />,
    imageUrl: '/assets/ocoi/ratings.jpg'  },
  {
    id: 'advance-search',
    label: 'Advance Search',
    title: 'Advanced Search',
    description: "Experience the most efficient and tailored search options with Monjin's advanced search capabilities, designed to provide users with the best search experience possible.",
    features: [
      ['Search by Name', 'Experience & Monjin Ratings'],
      ['Skills & Subskills', 'Search by Location'],
    ],
    icon: <Search className="w-5 h-5" />,
    imageUrl: '/assets/ocoi/jd-based.jpg'  },
  {
    id: 'reserve-interviewer',
    label: 'Reserve Interviewer',
    title: 'Reserve your Interviewer',
    description: 'Choose and reserve your preferred interviewer with ease, ensuring you have the right expertise for every interview.',
    features: [
      ['Interviewer by Schedule', ''],
      ['On-Demand Interviews', ''],
    ],
    icon: <UserCircle className="w-5 h-5" />,
    imageUrl: '/assets/ocoi/reserve-your-interviewer.jpg'  },
  {
    id: 'jd-based',
    label: 'JD Based OCOI',
    title: 'JD Based OCOI',
    description: "Leverage Monjin's Job Description (JD) Based OCOI to customize interviews and connect with pre-assessed, ready-to-hire candidates that perfectly match your job requirements.",
    features: [
      ['Customized Interviews'],
      ['On-Demand Talent'],
      ['Seamless Integration'],
    ],
    icon: <FileText className="w-5 h-5" />,
    imageUrl: '/assets/ocoi/jd-based.jpg'  },
  {
    id: 'audio-video',
    label: 'Audio/Video Analytics',
    title: 'Audio and Video Analytics',
    description: "Unlock deeper insights and improve talent discovery and engagement with Monjin's advanced Audio & Video Analytics.",
    features: [
      ['Keyword Extraction', 'Speech-to-Text'],
      ['Sentiment Analysis', 'Automated Transcription'],
      ['Emotional Analysis', 'Visual Analysis'],
      ['Object Identification', 'Gesture & Expression Analysis'],
    ],
    icon: <Video className="w-5 h-5" />,
    imageUrl: '/assets/ocoi/audio-video.jpg'  }
];




export default function OcoiFeatures() {
  const [activeTab, setActiveTab] = useState('ready-interviews')

  return (
    <div className="min-h-auto bg-white rounded-3xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-onest text-center mb-12">
          Unlock Smarter Hiring with Curated Interviews, Real-Time Feedback, and Seamless Scheduling
        </h1>

        {/* Desktop View */}
        <div className="hidden lg:block" >
          <Tabs defaultValue="ready-interviews" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="w-full flex mb-8 h-full border-b gap-10    ">
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
                    <p className="text-lg font-figtree font-light text-[#353535] leading-loose">{tab.description}</p>
                    <div className="grid lg:grid-cols-2 gap-4 text-lg font-figtree">
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
                    <img
                      src={tab.imageUrl || "/placeholder.svg"}
                      alt={tab.title}
                      className="w-full h-full object-contain"
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

