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
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl md:text-5xl font-medium font-onest text-center mb-16 tracking-tighter">Career Opportunities</h1>

      <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
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

        {/* Right Column - Job Listings */}
        <div className="space-y-8">
          {positions.map((position, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="flex items-center justify-between border-b border-black/30 pb-6 transition-colors hover:border-black">
                <div>
                  <h3 className="text-[28px] font-normal font-onest mb-2 text-black">{position.title}</h3>
                  <p className="text-black font-Onest text-lg">{position.type}</p>
                </div>
                <ArrowRight className="w-6 h-6 text-[#373737] transition-transform group-hover:translate-x-2 group-hover:black/70" />
              </div>
            </div>
          ))}

          <Button variant="secondary" className="mt-10 bg-[#1B1B1B] text-white hover:bg-gray-800 rounded-[8px] px-6 py-6">
            Discover Open Roles
          </Button>
        </div>
      </div>
    </div>
  )
}

