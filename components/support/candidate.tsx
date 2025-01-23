"use client"

import { Minus, Plus } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    "question": "What is Monjin?",
    "answer": "Monjin is the world’s first professional network of interviewers, enabling virtual connections between interviewers and employers. It provides vetted video interviews, making hiring efficient and transparent."
  },
  {
    "question": "How do I register on Monjin?",
    "answer": "To register as a candidate:\nClick Sign Up and select your role as \"Candidate.\"\nVerify your email address and complete the registration form.\nRecord a 1-Minute Introductory Video and upload your latest CV to finalize your profile."
  },
  {
    "question": "What is the skill self-rating?",
    "answer": "Your skills are crucial on Monjin. You can:\nAdd up to 6 skills (1 primary and 5 additional). Rate your expertise in each skill on a scale of 1 to 5, which helps interviewers gauge your proficiency."
  },
  {
    "question": "What documents do I need to upload?",
    "answer": "Upload your latest CV. Optionally, you can submit a photo ID for added credibility."
  },
  {
    "question": "What is the 1-minute introduction video?",
    "answer": "The 1-minute introduction video allows you to present yourself, your skills, experience, and career aspirations to interviewers and employers."
  },
  {
    "question": "Can I re-record my 1-minute introduction video?",
    "answer": "Yes, you can re-record it up to 3 times if you're not satisfied with the initial recording."
  },
  {
    "question": "Who will be my interviewer?",
    "answer": "Your interviewer will be a subject matter expert with vast industry experience. You will know about them 24 hours before the interview in the Green Room."
  },
  {
    "question": "When can I give the interview?",
    "answer": "Select an available slot on your Monjin calendar based on your convenience. Interviewer slots are pre-confirmed, making scheduling hassle-free."
  },
  {
    "question": "How do I join the interview?",
    "answer": "Before your interview, click the Join Interview link. This will take you to the Green Room, where you can view your interviewer’s profile and introduction."
  },
  {
    "question": "What is the Green Room?",
    "answer": "The Green Room is your pre-interview waiting area, accessible 24 hours before your interview. Here, you can view a short introduction video of your interviewer and join the live interview."
  },
  {
    "question": "What happens after the interview is completed?",
    "answer": "Your video interview is made available to employers seeking candidates like you. Employers will review the video and contact you directly for further discussions."
  },
  {
    "question": "When will I get feedback?",
    "answer": "Employers usually provide feedback within 2-4 weeks after the interview."
  }
]
export default function SupportSection() {
  return (
    <div className="w-full max-w-7xl mx-auto p-8 bg-[url('/assets/support/q&a-bg.jpg')] bg-cover bg-no-repeat object-contain rounded-[32px]">
      <Tabs defaultValue="general" className="w-full">
        <TabsList className="w-full justify-between border-b-2 border-t-0 border-r-0 border-l-0 rounded-none h-auto px-8 bg-transparent">
          <TabsTrigger
            value="general"
            className="text-3xl font-Onest rounded-none border-b-2 border-transparent data-[state=active]:border-[#795BFF] data-[state=active]:text-[#795BFF] pb-4"
          >
            General
          </TabsTrigger>
          <TabsTrigger
            value="candidate"
            className="text-3xl font-Onest rounded-none border-b-2 border-transparent data-[state=active]:border-[#795BFF] data-[state=active]:text-[#795BFF] pb-4"
          >
            Candidate
          </TabsTrigger>
          <TabsTrigger
            value="interviewer"
            className="text-3xl font-Onest rounded-none border-b-2 border-transparent data-[state=active]:border-[#795BFF] data-[state=active]:text-[#795BFF] pb-4"
          >
            Interviewer
          </TabsTrigger>
          <TabsTrigger
            value="employer"
            className="text-3xl font-Onest rounded-none border-b-2 border-transparent data-[state=active]:border-purple-500 data-[state=active]:text-purple-500 pb-4"
          >
            Employer
          </TabsTrigger>
        </TabsList>
        <TabsContent value="general" className="flex flex-col items-center justify-center mt-8">
  <div className="my-12 text-center">
    <h1 className="font-medium mb-4 font-Onest text-5xl tracking-tighter">General</h1>
    <p className="text-[#2D2D2D] font-figtree text-lg mb-8">
      Find answers to all your questions, from posting job openings to understanding our interview process
    </p>
  </div>
  <Accordion type="single" collapsible className="w-full max-w-5xl">
    {faqs.map((faq, index) => (
      <AccordionItem
        key={index}
        value={`item-${index}`}
        className="border border-gray-200 rounded-lg mb-4 px-6 py-2"
      >
        <AccordionTrigger className="hover:no-underline flex justify-between items-center font-Onest font-normal text-2xl tracking-tight bg-white">
          <span>{faq.question}</span>
          <div className="shrink-0">
            <div className="h-8 w-8 rounded-[4px] flex items-center justify-center">
              <div className="p-1.5 rounded-[4px] bg-green-50 data-[state=open]:hidden">
                <Plus className="h-4 w-4 text-green-600" />
              </div>
              <div className="p-1.5 rounded-[4px] bg-red-50 data-[state=closed]:hidden">
                <Minus className="h-4 w-4 text-red-600" />
              </div>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="text-gray-600 p-5 font-figtree text-lg font-light">{faq.answer}</AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
</TabsContent>

        <TabsContent value="candidate">
          <div className="flex items-center justify-center h-48 text-gray-500">Candidate FAQs coming soon...</div>
        </TabsContent>
        <TabsContent value="interviewer">
          <div className="flex items-center justify-center h-48 text-gray-500">Interviewer FAQs coming soon...</div>
        </TabsContent>
        <TabsContent value="employer">
          <div className="flex items-center justify-center h-48 text-gray-500">Employer FAQs coming soon...</div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

