"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/support-accordion";
import InterviewerFAQ from "./interviewer-FAQ";

const faqs = [
  {
    question: "What if my internet bandwidth is low?",
    answer:
      "For an optimal Monjin experience, you need a stable internet connection with at least 1Mbps upload/download speed and a latency of less than 50ms. If your connection does not meet these specifications, we recommend conducting the interview from a location with adequate internet speed",
  },
  {
    question: "Why is my video quality poor despite a 1Mbps connection?",
    answer:
      "This could be due to various factors including network congestion, background processes, or hardware limitations.",
  },
  {
    question: "Why can't I log in with my social credentials?",
    answer:
      "There might be an issue with your social media authentication. Please try logging in directly or contact support.",
  },
  {
    question: "I've connected headphones but can't hear anything.",
    answer:
      "Check your system audio settings and ensure your headphones are selected as the output device.",
  },
  {
    question: "What happens if my interview gets interrupted?",
    answer:
      "You can rejoin the interview session using the same link. The interviewer will be notified of the technical difficulty.",
  },
  {
    question: "Why can't I see myself on video?",
    answer:
      "Ensure your camera permissions are enabled and no other application is using your camera.",
  },
  {
    question: "Can I register on Monjin using a mobile or tablet?",
    answer: "Yes, you can register using any device with a modern web browser.",
  },
  {
    question: "Can I give an interview on a mobile or tablet?",
    answer:
      "Yes, interviews can be conducted on mobile devices or tablets with good internet connectivity.",
  },
  {
    question: "When can I give the interview?",
    answer:
      "Interview slots are flexible and can be scheduled according to your availability.",
  },
  {
    question: "What is the Green Room?",
    answer:
      "The Green Room is a pre-interview space where you can test your audio and video settings.",
  },
  {
    question: "What happens after the interview is completed?",
    answer:
      "After the interview, your responses will be evaluated and you'll receive feedback through our platform.",
  },
  {
    question: "When will I get feedback?",
    answer:
      "Feedback timing varies but typically you'll receive it within 48-72 hours after the interview.",
  },
];

export default function SupportSection() {
  return (
    <div className="w-full max-w-7xl mx-auto p-8 bg-[url('/assets/support/q&a-bg.jpg')] bg-cover bg-no-repeat object-center rounded-[32px]">
      <Tabs defaultValue="general" className="w-full">
        <TabsList className="w-full justify-between border-b-2 border-t-0 border-r-0 border-l-0 rounded-none h-[44px] bg-transparent">
          <TabsTrigger
            value="general"
            className="text-3xl font-Onest rounded-none border-transparent data-[state=active]:border-b-[#795BFF] data-[state=active]:text-[#795BFF]"
          >
            General
          </TabsTrigger>
          <TabsTrigger
            value="candidate"
            className="text-3xl font-Onest rounded-none border-transparent data-[state=active]:border-b-[#795BFF] data-[state=active]:text-[#795BFF] "
          >
            Candidate
          </TabsTrigger>
          <TabsTrigger
            value="interviewer"
            className="text-3xl font-Onest rounded-none border-transparent data-[state=active]:border-b-[#795BFF] data-[state=active]:text-[#795BFF] "
          >
            Interviewer
          </TabsTrigger>
          <TabsTrigger
            value="employer"
            className="text-3xl font-Onest rounded-none border-transparent data-[state=active]:border-b-[#795BFF] data-[state=active]:text-[#795BFF] "
          >
            Employer
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="general"
          className="flex flex-col items-center justify-center mt-8"
        >
          <div className="my-12 text-center">
            <h1 className="font-medium mb-4 font-Onest text-5xl tracking-tighter">
              General
            </h1>
            <p className="text-[#2D2D2D] font-figtree text-lg mb-8">
              Find answers to all your questions, from posting job openings to
              understanding our interview process
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full max-w-5xl">
            {faqs.map((faq, index) => (
              
                <AccordionItem
                  key={`faq-${index}`} // Add a unique key here
                  value={`item-${index}`}
                  className="border border-gray-200 bg-white rounded-lg mb-4 px-6 py-2"
                >
                  <AccordionTrigger className="hover:no-underline flex justify-between items-center font-Onest font-normal text-2xl tracking-tight bg-white">
                    <span>{faq.question}</span>
                    <div className="shrink-0">
                      <div className="h-8 w-8 rounded-[4px] flex items-center justify-center">
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 p-5 font-figtree text-lg font-light">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}

          </Accordion>
        </TabsContent>

        <TabsContent value="candidate">
          <div className="flex items-center justify-center h-48 text-gray-500">
            Candidate FAQs coming soon...
          </div>
        </TabsContent>
        <TabsContent value="interviewer">
          <InterviewerFAQ />
        </TabsContent>
        <TabsContent value="employer">
          <div className="flex items-center justify-center h-48 text-gray-500">
            Employer FAQs coming soon...
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
