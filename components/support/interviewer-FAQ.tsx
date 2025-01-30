"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function InterviewerFAQ() {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <Accordion type="single" collapsible defaultValue="interviewer-faq">
        <AccordionItem
          value="interviewer-faq"
          className="border border-gray-200 bg-white rounded-lg mb-4 lg:px-6 lg:py-4 px-3 py-1"
        >
          <AccordionTrigger  className="hover:no-underline flex justify-between items-center lg:font-onest text-sm lg:text-[25px] font-figtree">
            <span>How Should I Conduct an Interview on Monjin?</span>
            <div className="shrink-0">
              <div className="h-8 w-8 rounded-[4px] flex items-center justify-center"></div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 lg:py-5 font-figtree lg:text-lg text-sm font-light">
            <ol className="list-decimal list-inside space-y-8">
              <li>
                <strong>Be Prepared</strong> - Review the candidate&apos;s resume
                thoroughly. Prepare questions that align with the candidate&apos;s
                skills and the job role.
              </li>
              <li>
                <strong>Engage Actively</strong> - Show genuine interest in the
                candidate&apos;s experience and responses. Encourage open
                communication for a productive interview.
              </li>
              <li>
                <strong>Maintain Equality</strong> - Treat all candidates
                fairly, giving each an equal chance to present their skills and
                qualifications.
              </li>
              <li>
                <strong>Create a Professional Environment</strong> - Conduct
                the interview in a distraction-free, professional setting. Ask
                relevant and thoughtful questions to evaluate the candidate&apos;s
                abilities effectively.
              </li>
              <li>
                <strong>Provide Unbiased Assessments</strong> - Ensure each
                candidate is assessed objectively, without preconceived notions
                or biases.
              </li>
              <li>
                <strong>Use Behavioral Interview Techniques</strong> - Gather
                detailed &quot;STAR&quot; information:
                <ul className="list-disc list-inside pl-6 space-y-2 mt-2">
                  <li>
                    <strong>Situation:</strong> Context of the task.
                  </li>
                  <li>
                    <strong>Task:</strong> The candidate&apos;s role or
                    responsibility.
                  </li>
                  <li>
                    <strong>Action:</strong> Steps the candidate took or didn&apos;t
                    take.
                  </li>
                  <li>
                    <strong>Results:</strong> Outcomes of their actions.
                  </li>
                </ul>
              </li>
            </ol>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
