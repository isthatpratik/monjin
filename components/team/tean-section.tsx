import Image from "next/image"
import { Linkedin } from "lucide-react"

interface TeamMember {
  name: string
  role: string
  image: string
  isWide?: boolean
}

const teamMembers: TeamMember[] = [
  {
    name: "Aniket Tapre",
    role: "Global - \nChief Executive Officer ",
    image: "/assets/our-team/aniket.png",
  },
  {
    name: "Abhijit Kashyape",
    role: "Founder, Chief Product\nOfficer & Senior VP:\nUK & EU",
    image: "/assets/our-team/abhijit.png",
  },
  {
    name: "Aniruddha Fansalkar",
    role: "Co-Founder &\nChief Human Resource\nOfficer",
    image: "/assets/our-team/aniruddha.png",
  },
  {
    name: "Avadhoot Deshpande",
    role: "Co-Founder &\nSenior Vice President - US",
    image: "/assets/our-team/avadhoot.png",
  },
  {
    name: "Ashutosh Kulkarni",
    role: "Co-Founder &\nVice President - Engineering",
    image: "/assets/our-team/ashutosh.png",
  },
  {
    name: "Sonal Gokhale",
    role: "Head of People & Purpose",
    image: "/assets/our-team/sonal.png",
    isWide: true,
  },
  {
    name: "Sharon Matharu",
    role: "General Counsel & Investor Relations",
    image: "/assets/our-team/sharon.png",
    isWide: true,
  },
]

export default function TeamSection() {
  return (
    <div className="min-h-screen w-full bg-black/40 p-8 md:p-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-5">
          {teamMembers.slice(0, 5).map((member) => (
            <TeamCard key={member.name} {...member} />
          ))}
        </div>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          {teamMembers.slice(5).map((member) => (
            <TeamCard key={member.name} {...member} />
          ))}
        </div>
      </div>
    </div>
  )
}



function TeamCard({ name, role, image, isWide = false }: TeamMember) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[200px] transition-all duration-300 hover:scale-105 ${
        isWide ? "col-span-1 md:col-span-1" : "col-span-1"
      }`}
      style={{
        // background: `url(monjin/public/assets/bg/our-team.png)`,
        // backgroundSize: "cover",
        // backgroundPosition: "center",
      }}
    >
      {/* Add backdrop blur overlay */}
      <div className="absolute inset-0 backdrop-blur-[2px] bg-black/10" />

      {/* Content with relative positioning to appear above the blur */}
      <div className="relative p-6">
        {isWide ? (
          // Wide card layout
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full bg-white/10">
                <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold text-white">{name}</h3>
                <p className="mt-1 text-sm text-white/80">{role}</p>
              </div>
            </div>
            <a href="#" className="rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20">
              <Linkedin className="h-5 w-5 text-white" />
            </a>
          </div>
        ) : (
          // Regular card layout
          <div className="flex flex-col items-center space-y-4">
            <div className="relative h-32 w-32 overflow-hidden rounded-full bg-white/10">
              <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-white">{name}</h3>
              <p className="mt-1 whitespace-pre-line text-sm text-white/80">{role}</p>
            </div>
            <a href="#" className="rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20">
              <Linkedin className="h-5 w-5 text-white" />
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

