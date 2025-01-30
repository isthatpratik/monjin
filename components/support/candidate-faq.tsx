"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Monjin?",
    answer:
      "Monjin is the world’s first professional network of interviewers, enabling virtual connections between interviewers and employers. It provides vetted video interviews, making hiring efficient and transparent.",
  },
  {
    question: "How do I register on Monjin?",
    answer:
      "To register as a candidate: Click Sign Up and select your role as 'Candidate'.Verify your email address and complete the registration form.Record a 1-Minute Introductory Video and upload your latest CV to finalize your profile.",
  },
  {
    question: "What is the skill self-rating?",
    answer:
      "Your skills are crucial on Monjin. You can: Add up to 6 skills (1 primary and 5 additional). Rate your expertise in each skill on a scale of 1 to 5, which helps interviewers gauge your proficiency.",
  },
  {
    question: "What documents do I need to upload?",
    answer:
      "Upload your latest CV. Optionally, you can submit a photo ID for added credibility.",
  },
  {
    question: "What is the 1-minute introduction video?",
    answer:
      "The 1-minute introduction video allows you to present yourself, your skills, experience, and career aspirations to interviewers and employers.",
  },
  {
    question: "Can I re-record my 1-minute introduction video?",
    answer:
      "CYes, you can re-record it up to 3 times if you're not satisfied with the initial recording.",
  },
  {
    question: "Who will be my interviewer?",
    answer:
      "Your interviewer will be a subject matter expert with vast industry experience. You will know about them 24 hours before the interview in the Green Room.",
  },
  {
    question: "When can I give the interview?",
    answer:
      "Select an available slot on your Monjin calendar based on your convenience. Interviewer slots are pre-confirmed, making scheduling hassle-free.",
  },
  {
    question: "How do I join the interview?",
    answer:
      "Before your interview, click the Join Interview link. This will take you to the Green Room, where you can view your interviewer’s profile and introduction.",
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

export default function CandidateFAQ() {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <Accordion
        type="single"
        collapsible
        defaultValue="item-0" // Set the first accordion item to be open by default
        className="w-full max-w-5xl"
      >
        {faqs.map((faq, index) => (
          <AccordionItem
            key={`faq-${index}`}
            value={`item-${index}`}
            className="border border-gray-200 bg-white rounded-lg mb-4 lg:px-6 lg:py-4 px-3 py-1"
          >
            <AccordionTrigger className="hover:no-underline flex justify-between items-center lg:font-onest text-sm lg:text-[25px] font-figtree">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 lg:py-5 font-figtree lg:text-lg text-sm font-light">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
