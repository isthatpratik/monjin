import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface JobPosition {
  title: string
  type: string
}

const positions: JobPosition[] = [
  { title: "Front End Developer", type: "Remote" },
  { title: "Back End Developer", type: "Remote" },
  { title: "Customer Success Agent", type: "Remote" },
]

export default function CareerOpportunities() {
  return (
    <div className="container mx-auto px-4 lg:py-24 py-8">
      <h1 className="text-4xl md:text-5xl font-medium font-onest text-center mb-16 tracking-tighter hidden lg:block">Career Opportunities</h1>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 items-center max-w-6xl mx-auto">
        {/* Left Column - Image */}
        <div className="relative">
          <Image
            src="/assets/careers/career-opportunities.png"
            alt="Career opportunities illustration"
            width={600}
            height={600}
            className="w-full h-auto"
            priority
          />
        </div>

        <h1 className="text-2xl font-semibold font-onest text-center tracking-tighter lg:mb-6 block lg:hidden">Career Opportunities</h1>

        {/* Right Column - Job Listings */}
        <div className="space-y-8">
          {positions.map((position, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="flex items-center justify-between border-b border-black/30 pb-6 transition-colors hover:border-black">
                <div>
                  <h3 className="text-base lg:text-[28px] font-normal font-onest mb-2 text-black">{position.title}</h3>
                  <p className="text-black font-Onest text-sm lg:text-lg">{position.type}</p>
                </div>
                <ArrowRight className="w-6 h-6 text-[#373737] transition-transform group-hover:translate-x-2 group-hover:black/70" />
              </div>
            </div>
          ))}

          <Button variant="secondary" className="mt-10 lg:w-fit w-full bg-[#1B1B1B] text-white hover:bg-gray-800 rounded-[8px] px-6 py-6">
            Discover Open Roles
          </Button>
        </div>
      </div>
    </div>
  )
}

