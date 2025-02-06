"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import InterviewerFAQ from "./interviewer-FAQ";
import CandidateFAQ from "./candidate-faq";
import EmployerFAQ from "./employer-faq";

const faqs = [
  {
    question: "What if my internet bandwidth is low?",
    answer:
      "For an optimal Monjin experience, you need a stable internet connection with at least 1Mbps upload/download speed and a latency of less than 50ms. If your connection does not meet these specifications, we recommend conducting the interview from a location with adequate internet speed",
  },
  {
    question: "Why is my video quality poor despite a 1Mbps connection?",
    answer:
      "Some connections may have sufficient download speeds but insufficient upload speeds. Ensure both your upload and download speeds are at least 1Mbps. Check your latency, which should be under 50ms, for the best experience.",
  },
  {
    question: "Why can't I log in with my social credentials?",
    answer:
      "If you’re an existing user, ensure you are logging in with the same social credentials you registered with. Forgot them? Email us at info@monjin.com for assistance. If you're a new user, click on the invite link in your email before attempting to log in.",
  },
  {
    question: "I've connected headphones but can't hear anything.",
    answer:
      "Ensure your browser has permission to access your devices (webcam and headset). Confirm that the browser is using the correct devices. If issues persist:Check the Playback Devices list on your system.Test your headset for functionality.Ensure your browser is updated and configured correctly.",
  },
  {
    question: "What happens if my interview gets interrupted?",
    answer:
      "Don’t panic. Monjin automatically saves your progress.If the interviewer loses connectivity, wait patiently for them to rejoin. Important: Stay still and calm as the video may still be recording.",
  },
  {
    question: "Why can't I see myself on video?",
    answer:
      "Check the following: Ensure your webcam is functioning and drivers are up to date.Close any other applications like Skype or Zoom that may have control over your webcam.Verify upload bandwidth (minimum 1Mbps) using tools like Speedtest.Close bandwidth-intensive programs like torrents.Restart your device if the issue persists.",
  },
  {
    question: "Can I register on Monjin using a mobile or tablet?",
    answer:
      "Currently, our mobile app is under development. We recommend registering on Monjin using a desktop or laptop for a seamless experience.",
  },
  {
    question: "Can I give an interview on a mobile or tablet?",
    answer:
      "Until our mobile app is available, we suggest using a desktop or laptop to give your Monjin interview.",
  },
  {
    question: "When can I give the interview?",
    answer:
      "Interview slots are flexible and can be scheduled according to your availability.",
  },
  {
    question: "What is the Green Room?",
    answer:
      "The Green Room is your pre-interview waiting area, accessible 24 hours before your interview. Here, you can view a short introduction video of your interviewer and join the live interview.",
  },
  {
    question: "What happens after the interview is completed?",
    answer:
      "Your video interview is made available to employers seeking candidates like you. Employers will review the video and contact you directly for further discussions.",
  },
  {
    question: "When will I get feedback?",
    answer:
      "Employers usually provide feedback within 2-4 weeks after the interview.",
  },
];

export default function SupportSection() {
  return (
    <div className="w-full max-w-7xl mx-auto lg:p-8 p-2 bg-[url('/assets/support/q&a-bg.jpg')] bg-cover bg-no-repeat object-top lg:rounded-[32px] rounded-2xl lg:px-8">
      <Tabs defaultValue="general" className="w-full h-full">
        <TabsList className="overflow-auto scrollbar-hide w-full justify-around border-b-2 border-t-0 border-r-0 border-l-0 rounded-none lg:h-[48px] bg-transparent mt-8 overflow-x-auto h-[40px]">
          <TabsTrigger
            value="general"
            className="text-base lg:text-3xl font-onest rounded-none data-[state=active]:border-b-[#795BFF] data-[state=active]:border-b-2 data-[state=active]:text-[#795BFF]"
          >
            General
          </TabsTrigger>
          <TabsTrigger
            value="candidate"
            className="text-base lg:text-3xl font-onest rounded-none data-[state=active]:border-b-[#795BFF] data-[state=active]:text-[#795BFF] data-[state=active]:border-b-2"
          >
            Candidate
          </TabsTrigger>
          <TabsTrigger
            value="interviewer"
            className="text-base lg:text-3xl font-onest rounded-none data-[state=active]:border-b-[#795BFF] data-[state=active]:text-[#795BFF] data-[state=active]:border-b-2"
          >
            Interviewer
          </TabsTrigger>
          <TabsTrigger
            value="employer"
            className="text-base lg:text-3xl font-onest rounded-none  data-[state=active]:border-b-[#795BFF] data-[state=active]:text-[#795BFF] data-[state=active]:border-b-2"
          >
            Employer
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="general"
          className="flex flex-col items-center justify-center mt-8"
        >
          <div className="lg:my-12 my-4 text-center">
            <h1 className="font-medium mb-4 font-onest text-3xl lg:text-5xl tracking-tighter">
              General
            </h1>
            <p className="text-[#737373] font-figtree text-sm lg:text-lg mb-8">
              Find answers to all your questions, from posting job openings to
              understanding our interview process
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full max-w-5xl" defaultValue="item-0">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={`faq-${index}`}
                value={`item-${index}`}
                className="border border-gray-200 bg-white rounded-lg mb-4 lg:px-6 lg:py-4 px-3 py-1"
              >
                <AccordionTrigger className="hover:no-underline flex justify-between items-center lg:font-onest text-sm lg:text-[25px] font-figtree">
                  <span>{faq.question}</span>
                  <div className="shrink-0">
                    <div className="h-8 w-8 rounded-[4px] flex items-center justify-center"></div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 lg:py-5 font-figtree lg:text-lg text-sm font-light">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </TabsContent>

        <TabsContent
          value="candidate"
          className="flex flex-col items-center justify-center"
        >
          <div className="lg:my-12 my-4 text-center">
            <h1 className="font-medium mb-4 font-onest text-3xl lg:text-5xl tracking-tighter">
              Candidate
            </h1>
            <p className="text-[#737373] font-figtree text-sm lg:text-lg mb-8">
              Are you looking out for opportunities and want to showcase your
              skills to top companies? Be a <br />
              candidate and meet global experts.
            </p>
          </div>
          <CandidateFAQ />
        </TabsContent>
        <TabsContent
          value="interviewer"
          className="flex flex-col items-center justify-center"
        >
          <div className="lg:my-12 my-4 text-center">
          <h1 className="font-medium mb-4 font-onest text-3xl lg:text-5xl tracking-tighter">
              Interviewer
            </h1>
            <p className="text-[#737373] font-figtree text-sm lg:text-lg mb-8 px-4">
              Earn Money , Recognition and gratification as a Monjin
              Interviewer. Be a Monjin interviewer.
            </p>
          </div>
          <InterviewerFAQ />
        </TabsContent>
        <TabsContent
          value="employer"
          className="flex flex-col items-center justify-center"
        >
          <div className="lg:my-12 my-4 text-center">
          <h1 className="font-medium mb-4 font-onest text-3xl lg:text-5xl tracking-tighter">
              Employer
            </h1>
            <p className="text-[#737373] font-figtree text-sm lg:text-lg mb-8">
              Find answers to all your questions, from posting job openings to
              understanding <br />
              our interview process
            </p>
          </div>
          <EmployerFAQ />
        </TabsContent>
      </Tabs>
    </div>
  );
}
