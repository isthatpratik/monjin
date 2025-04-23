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
    name: "Abhijit Kashyape",
    role: "Founder, Chief Product\nOfficer & Senior VP -\nUK & EU",
    image: "/assets/team/abhijit.jpg",
    linkedinUrl: "https://www.linkedin.com/in/kabhijeet/",
  },
  {
    name: "Ashutosh Kulkarni",
    role: "Co-Founder &\nVice President - Engineering",
    image: "/assets/team/ashutosh.jpg",
    linkedinUrl: "https://www.linkedin.com/in/ashutosh-kulkarni-4480324/",
  },
  {
    name: "Avadhoot Deshpande",
    role: "Co-Founder &\nSenior Vice President - US",
    image: "/assets/team/avadhoot.jpg",
    linkedinUrl: "https://www.linkedin.com/in/avadhootd/",
  },
  {
    name: "Sharvari Wagh",
    role: "Vice President - Finance & Compliance",
    image: "/assets/team/sharvari.jpg",
    linkedinUrl: "https://www.linkedin.com/in/ca-sharvari-wagh-970a2257/",
  },
  {
    name: "Aniruddha Fansalkar",
    role: "Co-Founder &\nChief Human Resource\nOfficer",
    image: "/assets/team/aniruddha.jpg",
    linkedinUrl: "https://www.linkedin.com/in/aniruddha-fansalkar-731177a/",
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
        width={100}
        height={100}
        className="w-8 h-8 md:w-10 md:h-10 grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
      />
    </Link>
  );
}

function TeamCard({ name, role, image, linkedinUrl }: TeamMember) {
  return (
    <div
      className="bg-white shadow-lg backdrop-blur-sm lg:w-[280px] lg:flex-col lg:rounded-[32px] lg:h-auto flex-row w-full h-[120px] md:h-[140px] rounded-2xl flex"
    >
      {/* Image section */}
      <div className="relative lg:w-full lg:h-[240px] md:w-[160px] w-[120px] bg-transparent flex-shrink-0 lg:order-2 object-center">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover object-center lg:rounded-[32px] rounded-2xl"
          sizes="(max-width: 640px) 180px, 300px"
        />
      </div>

      {/* Info section */}
      <div className="flex flex-row flex-grow justify-between lg:p-6 lg:gap-2 md:p-4 p-2 lg:order-1">
        <div className="flex flex-col gap-1 w-4/5">
          <h3 className="font-bold font-onest w-1/2 text-black tracking-tight leading-tight text-lg lg:text-[28px]">
            {name}
          </h3>
          <p className="text-[10px] lg:text-sm lg:w-full w-4/5 font-normal tracking-tight font-onest text-[#7B7B7B] leading-tight text-balance whitespace-pre-line">
            {role}
          </p>
        </div>
        <div className="flex w-1/5 justify-end">
          <LinkedInButton url={linkedinUrl} />
        </div>
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

      {/* Responsive layout */}
      <div className="mx-auto max-w-screen-xl">
        <div className="hidden lg:flex flex-col gap-6">
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
        </div>

        {/* Stacked layout for small & medium screens */}
        <div className="lg:hidden flex flex-col gap-6">
          {team.map((member) => (
            <TeamCard key={member.name} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
}
