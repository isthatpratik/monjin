import Image from "next/image"

export default function WhyChooseMonjin() {
  return (
    <div className="relative w-full max-w-7xl mx-auto">
      {/* Top div with dark background */}
      <div className="relative z-10 bg-[#272727] rounded-[32px] px-8 py-16 text-white">
        <h2 className="text-5xl font-medium font-Onest text-center mb-6">Why Choose Monjin?</h2>
        <p className="text-center font-figtree max-w-3xl mx-auto mb-20 text-lg">
        At Monjin, you would not just work—you will innovate, lead, and grow. Join us to be part of a transformative journey where your potential meets endless possibilities.
        </p>

        {/* Three columns grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Diversity Column */}
          <div className="text-center px-4">
            <div className="rounded-2xl mx-auto flex items-center justify-center">
              <Image
                src="/assets/careers/diversity.png"
                alt="Diversity icon"
                width={200}
                height={200}
                className="w-48 h-auto object-contain"
              />
            </div>
            <h3 className="text-[28px] font-semibold font-Onest mb-4">Commitment to Diversity</h3>
            <p className="text-[#CFCFCF] font-figtree font-light text-lg">
              Diversity at Monjin drives innovation and success through varied perspectives and cultures. We break down
              barriers to create an inclusive workplace delivering exceptional results.
            </p>
          </div>

          {/* Transparency Column */}
          <div className="text-center px-4">
            <div className="rounded-2xl mx-auto flex items-center justify-center">
              <Image
                src="/assets/careers/transparency.png"
                alt="Transparency icon"
                width={200}
                height={200}
                className="w-48 h-auto object-contain"
              />
            </div>
            <h3 className="text-[28px] font-semibold font-Onest mb-4">Transparency at Every Level</h3>
            <p className="text-[#CFCFCF] font-figtree font-light text-lg">
              Transparency is the foundation of our work culture. We believe in open communication, collaborative
              decision-making, and eliminating bureaucracy to create a space where ideas can flourish and everyone feels
              empowered.
            </p>
          </div>

          {/* Opportunities Column */}
          <div className="text-center px-4">
            <div className="rounded-2xl mx-auto flex items-center justify-center">
              <Image
                src="/assets/careers/opportunities.png"
                alt="Opportunities icon"
                width={200}
                height={200}
                className="w-48 h-auto object-contain"
              />
            </div>
            <h3 className="text-[28px] font-semibold font-Onest mb-4">Boundless Opportunities</h3>
            <p className="text-[#CFCFCF] font-figtree font-light text-lg">
              Monjin is a talent-first platform designed to foster growth, innovation, and leadership. For those who are
              driven, determined, and ready to make an impact, Monjin offers unparalleled opportunities to thrive and
              excel.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom div with gradient */}
      <div className="relative -mt-8 rounded-b-[32px] overflow-hidden bg-[url('/assets/careers/why-choose-monjin-bg.jpg')] bg-cover bg-bottom bg-no-repeat">
      <div className="py-8">
          <h2 className="text-[28px] font-semibold font-Onest text-white text-center mt-6">- Be a Monjineer. Be the Future! -</h2>
        </div>
      </div>
    </div>
  )
}

