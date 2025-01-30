"use client"

import { Card, CardContent, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const offices = [
  {
    country: "India (Registered Office)",
    address: "Monjin Interviews Private Limited, Survey NO 286/1B/2, Pallod Farms 3, Baner, Pune 411045",
    image: "/assets/contact/india.png", 
  },
  {
    country: "USA",
    address: "Monjin Corporation USA\n1460 Broadway, New York City, NY 10036, USA",
    image: "/assets/contact/usa.png",
  },
  {
    country: "United Kingdom",
    address: "Monjin UK Ltd 24 Bedford Row\nLondon WC1R 4TQ\nUnited Kingdom",
    image: "/assets/contact/uk.png",
  },
]

export function OfficeLocations() {
  return (
    <div className="py-20 px-6 max-w-fit mx-auto bg-white rounded-[32px] mt-20 mb-12">
      <h2 className="text-3xl lg:text-5xl font-medium font-onest tracking-tighter text-[#353535] text-center mb-12">Office Locations</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {offices.map((office) => (
          <Card key={office.country} className="relative overflow-hidden border-none shadow-none">
            <div className="absolute inset-0 bg-white/40" />
            <CardContent className="relative lg:p-6 p-4">
              <div className="flex items-start gap-1">
                {/* Image on the left */}
                <Image
                  src={office.image}
                  alt={`${office.country} office`}
                  width={104}
                  height={104}
                  className="lg:w-24 lg:h-24 w-16 h-16 object-contain"
                />
                {/* Location and Address on the right */}
                <div className="space-y-2">
                  <div>
                    <CardTitle className="text-xl lg:text-[28px] font-semibold">{office.country}</CardTitle>
                  </div>
                  <p className="whitespace-pre-line leading-5 text-base lg:text-lg font-figtree font-light text-[#828489]">
                    {office.address}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
