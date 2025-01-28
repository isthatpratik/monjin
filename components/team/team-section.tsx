import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedinUrl: string;
  isWide?: boolean;
}

const teamMembers: TeamMember[] = [
  {
    name: "Aniket Tapre",
    role: "Global - \nChief Executive Officer ",
    image: "/assets/team/aniket.png",
    linkedinUrl: "https://www.linkedin.com/in/atapre/",
  },
  {
    name: "Abhijit Kashyape",
    role: "Founder, Chief Product\nOfficer & Senior VP:\nUK & EU",
    image: "/assets/team/abhijit.png",
    linkedinUrl: "https://www.linkedin.com/in/kabhijeet/",
  },
  {
    name: "Aniruddha Fansalkar",
    role: "Co-Founder &\nChief Human Resource\nOfficer",
    image: "/assets/team/aniruddha.png",
    linkedinUrl: "https://www.linkedin.com/in/aniruddha-fansalkar-731177a/",
  },
  {
    name: "Avadhoot Deshpande",
    role: "Co-Founder &\nSenior Vice President - US",
    image: "/assets/team/avadhoot.png",
    linkedinUrl: "https://www.linkedin.com/in/avadhootd/",
  },
  {
    name: "Ashutosh Kulkarni",
    role: "Co-Founder &\nVice President - Engineering",
    image: "/assets/team/ashutosh.png",
    linkedinUrl: "https://www.linkedin.com/in/ashutosh-kulkarni-4480324/",
  },
  {
    name: "Sonal Gokhale",
    role: "Head of People & Purpose",
    image: "/assets/team/sonal.png",
    linkedinUrl: "https://www.linkedin.com/in/sonal-gokhale-b9bb196a/",
    isWide: true,
  },
  {
    name: "Sharon Matharu",
    role: "General Counsel & Investor Relations",
    image: "/assets/team/sharon.png",
    linkedinUrl: "https://www.linkedin.com/in/sharon-matharu/",
    isWide: true,
  },
];

export default function TeamSection() {
  return (
    <div className="min-h-screen w-full px-4 py-16 md:px-32">
      <div className="text-center space-y-4">
        <h1 className="text-[78px] font-onest font-semibold text-white tracking-tighter">
          Meet the visionaries
        </h1>
        <h2 className="text-lg font-figtree font-light text-white max-w-6xl">
          Discover the incredible individuals who make up our talented team at
          Monjin! Each member brings unique skills and experiences that
          contribute to our vibrant culture and innovative projects. Join us in
          celebrating their dedication and passion!
        </h2>
        <div className="max-w-2xl mx-auto mt-8 pt-20"></div>
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-5">
          {teamMembers.slice(0, 5).map((member) => (
            <TeamCard key={member.name} {...member} />
          ))}
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {teamMembers.slice(5).map((member) => (
            <TeamCard key={member.name} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
}

function TeamCard({
  name,
  role,
  image,
  linkedinUrl,
  isWide = false,
}: TeamMember) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[375px] transition-all duration-300 ${
        isWide ? "col-span-1 md:col-span-1" : "col-span-1"
      }`}
    >
      <div className="absolute inset-0 backdrop-blur-[10px] bg-[#202020]/20" />

      <div className="relative p-4">
        {isWide ? (
          <div className="flex items-center gap-8">
            <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-full bg-[#202020]/20">
              <Image
                src={image || "/placeholder.svg"}
                alt={name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col align-middle justify-center">
              <div className="text-left">
                <h3 className="text-[20px] font-onest text-white">{name}</h3>
                <p className="mt-2 text-sm font-extralight font-onest text-white">
                  {role}
                </p>
              </div>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-fit"
              >
                <Image
                  src="/assets/social-media/linkedIn.png"
                  alt="LinkedIn"
                  width={48}
                  height={48}
                  className="hover:opacity-80"
                />
              </a>
            </div>
          </div>
        ) : (
          <div className="flex flex-col  items-center justify-between space-y-6 h-[401px]">
            <div className="relative h-40 w-40 overflow-hidden rounded-full bg-white/10">
              <Image
                src={image || "/placeholder.svg"}
                alt={name}
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center">
              <h3 className="text-[20px] font-Onest text-white">{name}</h3>
              <p className="mt-2 text-sm font-light font-onest text-white/80">
                {role}
              </p>
            </div>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full"
            >
              <Image
                src="/assets/social-media/linkedIn.png"
                alt="LinkedIn"
                width={48}
                height={48}
                className="hover:opacity-80"
              />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
