'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { type Tab } from '@/components/ocoi/ocoi-features'
import Image from "next/image"

interface MobileSliderProps {
  tabs: Tab[]
}

export function MobileSlider({ tabs }: MobileSliderProps) {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {tabs.map((tab) => (
          <CarouselItem key={tab.id}>
            <div className="space-y-6 p-4">
              <div className="flex items-center gap-2 text-primary">
                <span className="p-1 rounded-full bg-primary/10">
                  {tab.icon}
                </span>
                <h2 className="text-3xl font-bold">{tab.title}</h2>
              </div>
              <p className="text-lg text-gray-600">{tab.description}</p>
              <div className="grid grid-cols-1 gap-4">
                {tab.features.map((feature, index) => (
                  <div key={index} className="space-y-4">
                    {Array.isArray(feature) ? feature.map(
                      (feature, featureIdx) =>
                        feature && (
                          <div key={featureIdx} className="text-lg">
                            {feature}
                          </div>
                        )
                    ) : (
                      <div className="text-lg">{feature}</div>
                    )}
                  </div>
                ))}
              </div>
              <div className="relative h-[300px] rounded-lg overflow-hidden mt-6">
                <Image
                  src={tab.imageUrl || "/placeholder.svg"}
                  alt={tab.title}
                  className="w-full h-full object-contain"
                  height={50}
                  width={50}
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:flex" />
      <CarouselNext className="hidden sm:flex" />
    </Carousel>
  )
}
