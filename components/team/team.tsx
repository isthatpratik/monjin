import Image from "next/image";
import Link from "next/link";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedinUrl: string;
}

const team: TeamMember[] = [
  {
    name: "Aniket Tapre",
    role: "Global - \nChief Executive Officer ",
    image: "/assets/team/aniket.jpg",
    linkedinUrl: "https://www.linkedin.com/in/atapre/",
  },
  {
    name: "Abhijit Kashyape",
    role: "Founder, Chief Product\nOfficer & Senior VP -\nUK & EU",
    image: "/assets/team/abhijit.jpg",
    linkedinUrl: "https://www.linkedin.com/in/kabhijeet/",
  },
  {
    name: "Aniruddha Fansalkar",
    role: "Co-Founder &\nChief Human Resource\nOfficer",
    image: "/assets/team/aniruddha.jpg",
    linkedinUrl: "https://www.linkedin.com/in/aniruddha-fansalkar-731177a/",
  },
  {
    name: "Avadhoot Deshpande",
    role: "Co-Founder &\nSenior Vice President - US",
    image: "/assets/team/avadhoot.jpg",
    linkedinUrl: "https://www.linkedin.com/in/avadhootd/",
  },
  {
    name: "Ashutosh Kulkarni",
    role: "Co-Founder &\nVice President - Engineering",
    image: "/assets/team/ashutosh.jpg",
    linkedinUrl: "https://www.linkedin.com/in/ashutosh-kulkarni-4480324/",
  },
  {
    name: "Sonal Gokhale",
    role: "Head of People & Purpose",
    image: "/assets/team/sonal.jpg",
    linkedinUrl: "https://www.linkedin.com/in/sonal-gokhale-b9bb196a/",
  },
  {
    name: "Sharon Matharu",
    role: "General Counsel & Investor Relations",
    image: "/assets/team/sharon.jpg",
    linkedinUrl: "https://www.linkedin.com/in/sharon-matharu/",
  },
];

function LinkedInButton({ url }: { url: string }) {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-shrink-0"
    >
      <Image
        src="/assets/team/linkedin.png"
        alt="LinkedIn"
        width={48}
        height={48}
        className="w-8 h-8"
      />
    </Link>
  );
}

function TeamCard({ name, role, image, linkedinUrl }: TeamMember) {
  return (
    <div className="w-[280px] bg-white lg:rounded-[32px] flex flex-col h-auto shadow-lg backdrop-blur-sm">
      <div className="flex justify-between flex-grow p-6 gap-2">
        <div className="space-y-1">
          <h3 className="font-bold lg:w-1/2 font-onest lg:text-[28px] text-black tracking-tight leading-tight">
            {name}
          </h3>
          <p className="text-sm font-normal tracking-tight font-onest text-[#7B7B7B] leading-tight text-balance">
            {role}
          </p>
        </div>
        <div className="flex flex-shrink-0">
            <LinkedInButton url={linkedinUrl} />
          </div>
      </div>
      <div className="mt-auto relative h-[240px] bg-transparent">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover object-center lg:rounded-[32px]"
          sizes="300px"
        />
      </div>
    </div>
  );
}

export default function TeamGrid() {
  return (
    <div className="min-h-screen w-full px-4 lg:py-24 py-6 lg:px-12">
        <div className="text-center space-y-4 mb-6 lg:mb-16">
        <h1 className="text-4xl lg:text-[78px] font-onest font-semibold text-white tracking-tighter leading-tight">
          Meet the visionaries
        </h1>
        <h2 className="text-lg font-figtree font-light text-white max-w-6xl mx-auto hidden leading-tight lg:block">
          Discover the incredible individuals who make up our talented team at
          Monjin! Each member brings unique skills and experiences that
          contribute to our vibrant culture and innovative projects. Join us in
          celebrating their dedication and passion!
        </h2>
      </div>
      <div className="mx-auto max-w-screen-xl">
        {/* First row - 2 cards */}
        <div className="flex justify-center gap-6 mb-6">
          <TeamCard {...team[0]} />
          <TeamCard {...team[1]} />
        </div>

        {/* Second row - 3 cards */}
        <div className="flex justify-center gap-6 mb-6">
          <TeamCard {...team[2]} />
          <TeamCard {...team[3]} />
          <TeamCard {...team[4]} />
        </div>

        {/* Third row - 2 cards */}
        <div className="flex justify-center gap-6">
          <TeamCard {...team[5]} />
          <TeamCard {...team[6]} />
        </div>
      </div>
    </div>
  );
}
