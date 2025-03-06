import Image from "next/image";
import Link from "next/link";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedinUrl: string;
}

const teamMembers: TeamMember[] = [
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
    role: "Co-Founder &\nVice President - Engineering, Chief Compliance Officer",
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
        className="w-10 h-10"
      />
    </Link>
  );
}

function TeamMemberCard({ member }: { member: TeamMember }) {
    return (
      <div className="bg-white rounded-xl lg:rounded-[32px] p-6 flex items-center gap-2">
        <div className="relative w-24 h-24 lg:w-32 lg:h-32 flex-shrink-0">
          <Image
            src={member.image || "/placeholder.svg"}
            alt={member.name}
            fill
            className="rounded-full object-cover object-center"
          />
        </div>
        <div className="ml-6 lg:ml-0 flex flex-col lg:flex-row justify-between w-full">
          <div className="flex flex-col">
            <h2 className="text-sm lg:text-2xl font-medium font-onest tracking-tighter text-gray-900 mb-2">
              {member.name}
            </h2>
            <p className="text-[#7B7B7B] font-figtree text-xs lg:text-sm mb-4 leading-tight">
              {member.role}
            </p>
          </div>
          <div className="flex flex-shrink-0 items-center lg:justify-center">
            <LinkedInButton url={member.linkedinUrl} />
          </div>
        </div>
      </div>
    );
}

export default function TeamSection() {
  const topRow = teamMembers.slice(0, 2);
  const middleRow = teamMembers.slice(2, 5);
  const bottomRow = teamMembers.slice(5);

  return (
    <div className="min-h-screen w-full px-4 lg:py-24 py-6 lg:px-12">
      <div className="text-center space-y-4 mb-6 lg:mb-16">
        <h1 className="text-4xl lg:text-[78px] font-onest font-semibold text-white tracking-tighter">
          Meet the visionaries
        </h1>
        <h2 className="text-lg font-figtree font-light text-white max-w-6xl mx-auto hidden lg:block">
          Discover the incredible individuals who make up our talented team at
          Monjin! Each member brings unique skills and experiences that
          contribute to our vibrant culture and innovative projects. Join us in
          celebrating their dedication and passion!
        </h2>
      </div>

      <div className="max-w-lg lg:max-w-7xl mx-auto space-y-6">
          {/* Responsive Grid for Different Screens */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {topRow.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {middleRow.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {bottomRow.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </div>
      </div>
    </div>
  );
}
