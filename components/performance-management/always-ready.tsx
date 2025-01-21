import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function AlwaysReady() {
  return (
    <div className="flex flex-col items-center justify-center w-full  mx-auto py-16 px-4 bg-white rounded-2xl">
      <div className="text-center mb-4">
        <h1 className="font-[Onest] text-[48px] leading-[62.4px] tracking-[-0.06em] font-medium mb-4 max-w-[829px]">
          Talent That&apos;s Always Ready
        </h1>
        <p className="font-[Figtree] text-base leading-[22px] max-w-[584px] mx-auto">
          Streamline your hiring with Monjin&apos;s pre-vetted, industry-ready professionals, ready to deliver results from
          day one
        </p>
      </div>

      <Card className="w-full h-full p-8 bg-transparent border-none shadow-none">
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-8 h-full">
          <div className="flex flex-col items-center text-center">
            <Image
              src="/assets/performance-management/feature-1.png"
              alt="Candidate listings interface"
              width={500}
              height={300} 
              className="w-full h-auto mb-4"
            />
            <h2 className="font-[Onest] text-[28px] leading-[46px] tracking-[-0.2px] font-semibold max-w-[295px]">
              Hire Elite Talent Today
            </h2>
            <p className="font-[Figtree] text-base leading-[22px] max-w-[285px]">
              Access a curated pool of top-tier talent, all rigorously assessed and ready to contribute from day one.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Image
              src="/assets/performance-management/feature-2.png"
              alt="Interview scheduling interface"
              width={500} 
              height={300} 
              className="w-full h-auto mb-4"
            
            />
            <h2 className="font-[Onest] text-[28px] leading-[46px] tracking-[-0.2px] font-semibold max-w-[295px]">
              Efficient Hiring Process
            </h2>
            <p className="font-[Figtree] text-base leading-[22px] max-w-[285px]">
              Skip the time-consuming screening process and get immediate access to qualified candidates.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Image
              src="/assets/performance-management/feature-3.png"
              alt="Calendar interface"
              width={500} 
              height={300} 
              className="w-full h-auto mb-4"
            />
            <h2 className="font-[Onest] text-[28px] leading-[46px] tracking-[-0.2px] font-semibold max-w-[295px]">
              Need Based Availability
            </h2>
            <p className="font-figtree text-base leading-[22px] max-w-[285px]">
              Whether you need immediate joiners, quick starters in 30 days, or candidates for future planning, Monjin
              offers flexible availability to suit your timeline.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}