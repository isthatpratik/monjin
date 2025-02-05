import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

const faqSections = [
  {
    id: "ocoi",
    title: "OCOI",
    borderColor: "border-[#9F8AFF]",
    subtitleColor: "text-[#6C58C6]",
    subtitle: "Our Candidate Our Interview",
    questions: [
      {
        question: "What is OCOI?",
        answer:
          "OCOI (Our Candidates, Our Interviewers) is Monjin's database of pre-assessed candidates with video interviews conducted by our expert panel. It streamlines the hiring process by providing access to high-quality candidate profiles and insights.",
      },
      {
        question: "How do I search for candidate videos?",
        answer:
          "Use the universal search bar available on every page to find candidate videos. Search by entering skills, sub-skills, or candidate names. You can further refine results using facet filters in the right column.",
      },
      {
        question: "How do I create a Job Description (JD)?",
        answer:
          'You can create a textual or video JD by:\nClicking on "Looking for Talent? Post a Job" on the dashboard.\nNavigating to the Jobs page and selecting "Looking to Hire? Create JD".\nUsing the "Post a Job" option under the Jobs dropdown.\nVideo JDs, a premium feature, help recruiters explain their requirements effectively in a 3-minute video.',
      },
    ],
  },
  {
    id: "ycoi",
    title: "YCOI",
    borderColor: "border-[#83AB09]",
    subtitleColor: "text-[#83AB09]",
    subtitle: "Your Candidate Our Interview",
    questions: [
      {
        question: "What is YCOI?",
        answer:
          "YCOI (Your Candidates, Our Interviewers) allows you to interview your candidates using Monjin's network of expert interviewers. The process is customizable to suit your requirements, ensuring better calibration and alignment with organizational needs.",
      },
      {
        question: "How do I invite candidates for interviews?",
        answer:
          "Inviting candidates is simple:\nEnter the candidate’s first name, last name, and email address.Use Monjin's customized templates to send an interview code to the candidates.",
      },
      {
        question: "How does interview matching and scheduling work?",
        answer:
          "Inviting candidates is simple:\nEnter the candidate’s first name, last name, and email address.Use Monjin's customized templates to send an interview code to the candidates.",
      },
      {
        question: "How can I collaborate and gather feedback on interviews?",
        answer:
          "Playback and Assessment: Navigate through the interview using timestamps to review specific skills. Access textual and video assessments by expert interviewers.\nInternal Sharing: Share interviews with your team for feedback and decision-making.\nFeedback Section: View all feedback and final verdicts for each interview in one place.",
      },
      {
        question: "What are the privacy settings available for YCOI?",
        answer:
          "With Monjin’s privacy settings, you can control who can view your profile and interviews, ensuring confidentiality.",
      },
    ],
  },
  {
    id: "basics",
    title: "Basics",
    borderColor: "border-[#F46D70]",
    subtitleColor: "text-[#F46D70]",
    subtitle: "Streamline Effortless Hiring",
    questions: [
      {
        question: "What is Monjin Basics?",
        answer:
          "Monjin Basics is a Unique ID-based interviewing platform that enables browser-based multi-party interviews. It’s an efficient way to conduct and manage interviews with candidates and interviewers.",
      },
      {
        question: "How do I schedule an interview?",
        answer:
          "To schedule an interview:\nEnter the details of the candidate, interviewer(s), and interview specifics.\nEnsure the correct time zones are entered for all participants before confirming the schedule.You can also schedule multi-party interviews by adding multiple interviewers.",
      },
      {
        question: "Can I cancel or reschedule an interview?",
        answer:
          "Cancel: Navigate to the “Manage Schedules” button under Jobs to find scheduled interviews. Use the action menu to cancel.\nReschedule: Use the same “Manage Schedules” button to access active schedules. Change the date and time through the action menu.",
      },
      {
        question: "How can I collaborate and gather feedback on interviews?",
        answer:
          "Playback and Assessment: Watch interview recordings, navigate through timestamps, and review detailed textual and video assessments.\nSharing: Internally share interviews with your team. External sharing is restricted to one-way videos and YCYI (Your Candidates, Your Interviewers) videos only.\nFeedback: Access all feedback and final verdicts for an interview in the Feedback section.",
      },
    ],
  },
  {
    id: "spotlight",
    title: "Spotlight",
    borderColor: "border-[#F18800]",
    subtitleColor: "text-[#DC7F07]",
    subtitle: "Accelerate Efficient Screening",
    questions: [
      {
        question: "What is Spotlight?",
        answer:
          "Spotlight is Monjin's one-way interview platform where candidates respond to pre-configured questions and record their answers on video. These interviews are assessed by Monjin's expert panel based on client requirements.",
      },
      {
        question: "How do create a job requirement?",
        answer:
          "You can create a textual or video job description. Video job descriptions, a premium feature, allow recruiters to explain their requirements in a 3-minute video, which candidates and interviewers can access.",
      },
      {
        question: "How do I setup questions for the interview?",
        answer:
          "Customize your own questions or use Monjin's question bank.Multiple sets of questions can be created for a single job.Use Monjin’s randomizer feature to shuffle between question sets for multiple invites.Questions can be in video or multiple-choice format.",
      },
      {
        question: "How can I invite candidates for Spotlight round?",
        answer:
          "Enter the candidate's first name, last name, and email address.Use Monjin’s customized templates to send the interview code to the candidates.",
      },
      {
        question: "Can I collaborate with others to review feedback?",
        answer:
          "You can playback interviews and navigate specific questions using timestamps.Share interviews internally or externally for feedback from stakeholders.Multiple-choice scores are generated systemically.All feedback and verdicts are available under the feedback section.",
      },
      {
        question: "Can I view all candidate feedback and status in one place?",
        answer:
          "Yes, all feedback, verdicts, and statuses (e.g., selects, rejects, or shared interviews) are available under the 'Activities' tab.",
      },
    ],
  },
];

export default function EmployerFAQ() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 pb-12">
      <div className="space-y-8">
        {faqSections.map((section, index) => (
          <div key={section.id}>
            {index > 0 && <Separator className="lg:my-16 my-8" />}

            <div className="lg:grid lg:grid-cols-[240px_1fr] flex flex-col gap-12">
              <div className="space-y-1">
                <h2 className="lg:text-5xl text-xl font-onest text-[#010101] font-medium lg:pb-4 pb-2">
                  {section.title}
                </h2>
                <div className={`lg:text-sm text-xs p-2 w-fit font-figtree font-medium border lg:p-3 rounded-[8px] ${section.borderColor} ${section.subtitleColor}`}>
                  {section.subtitle}
                </div>
              </div>

              <Accordion type="single" collapsible className="w-full max-w-5xl" defaultValue={section.id === "ocoi" ? "ocoi-item-0" : undefined}>
                {section.questions.map((item, i) => (
                  <AccordionItem
                    key={i}
                    value={`${section.id}-item-${i}`}
                    className="border border-gray-200 bg-white rounded-lg mb-4 lg:px-6 lg:py-4 px-3 py-1"
                  >
                    <AccordionTrigger className="hover:no-underline flex justify-between items-center lg:font-onest text-sm lg:text-[25px] font-figtree leading-tight">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 lg:py-5 font-figtree lg:text-lg text-sm font-light">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
