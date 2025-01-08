import Image from "next/image"

const companies = [
  "Infosys",
  "ANSR",
  "Guess",
  "Tech Mahindra",
  "KPIT",
  "NPCI"
]

export function CompanyLogos() {
  return (
    <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-center max-w-4xl mx-auto mt-16">
      {companies.map((company) => (
        <div key={company} className="flex items-center justify-center">
          <Image
            src={`/placeholder.svg`}
            alt={`${company} logo`}
            width={120}
            height={40}
            className="opacity-50 hover:opacity-100 transition-opacity"
          />
        </div>
      ))}
    </div>
  )
}

