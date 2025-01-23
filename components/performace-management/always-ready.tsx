import { Card, CardContent } from "@/components/ui/card"

export default function AlwaysReady() {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-[1200px] mx-auto py-16 px-4">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="font-[Onest] text-[48px] leading-[62.4px] tracking-[-0.06em] font-medium mb-4 max-w-[829px]">
          Talent That's Always Ready
        </h1>
        <p className="font-[Figtree] text-base leading-[22px] max-w-[584px] mx-auto">
          Streamline your hiring with Monjin's pre-vetted, industry-ready professionals, ready to deliver results from
          day one
        </p>
      </div>

      {/* Single Card with Three Sections */}
      <Card className="w-full h-full p-8">
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-8 h-full">
          {/* Section 1 */}
          <div className="flex flex-col items-center text-center">
            <img
              src="/assets/performance-management/hire-elite-talent.png"
              alt="Candidate listings interface"
              width={500} // Adjust width as needed
              height={300} // Adjust height as needed
              className="w-full h-auto mb-4"
            />
            <h2 className="font-[Onest] text-[28px] leading-[46px] tracking-[-0.2px] font-semibold max-w-[295px]">
              Hire Elite Talent Today
            </h2>
            <p className="font-[Figtree] text-base leading-[22px] max-w-[285px]">
              Access a curated pool of top-tier talent, all rigorously assessed and ready to contribute from day one.
            </p>
          </div>

          {/* Section 2 */}
          <div className="flex flex-col items-center text-center">
            <img
              src="/assets/performance-management/efficient-hiring.png"
              alt="Interview scheduling interface"
              width={500} // Adjust width as needed
              height={300} // Adjust height as needed
              className="w-full h-auto mb-4"
            
            />
            <h2 className="font-[Onest] text-[28px] leading-[46px] tracking-[-0.2px] font-semibold max-w-[295px]">
              Efficient Hiring Process
            </h2>
            <p className="font-[Figtree] text-base leading-[22px] max-w-[285px]">
              Skip the time-consuming screening process and get immediate access to qualified candidates.
            </p>
          </div>

          {/* Section 3 */}
          <div className="flex flex-col items-center text-center">
            <img
              src="/assets/performance-management/need-based.png"
              alt="Calendar interface"
              width={500} // Adjust width as needed
              height={300} // Adjust height as needed
              className="w-full h-auto mb-4"
            />
            <h2 className="font-[Onest] text-[28px] leading-[46px] tracking-[-0.2px] font-semibold max-w-[295px]">
              Need Based Availability
            </h2>
            <p className="font-[Figtree] text-base leading-[22px] max-w-[285px]">
              Whether you need immediate joiners, quick starters in 30 days, or candidates for future planning, Monjin
              offers flexible availability to suit your timeline.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}