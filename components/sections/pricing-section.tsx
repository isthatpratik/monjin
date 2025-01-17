'use client'

import { useState, useEffect } from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { useMediaQuery } from '@/hooks/use-media-query'
import { cn } from '@/lib/utils'
import Image from 'next/image'

export interface PricingPlan {
  title: string
  description: string
  monthlyPrice: number | null
  annualPrice: number | null
  features: string[]
  bgImage: string
  buttonText: string
  buttonVariant?: 'default' | 'outline'
  isHighlighted?: boolean
}

interface PricingSectionProps {
  title: string
  plans: PricingPlan[]
}

export default function PricingSection({ title, plans }: PricingSectionProps) {
  const [activeTab, setActiveTab] = useState('monthly')
  const isDesktop = useMediaQuery('(min-width: 768px)')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const PricingCard = ({ plan, isAnnual }: { plan: PricingPlan; isAnnual: boolean }) => (
    <Card className={cn(
      "relative overflow-hidden border border-black/10 rounded-3xl p-6 flex flex-col justify-between",
      plan.isHighlighted ? "lg:h-[600px]" : "lg:h-[550px]",
      "h-full"
    )}>
      {/* Replaced background style with Image component */}
      <div className="absolute inset-0 z-0">
        <Image
          src={plan.bgImage}
          alt={plan.title}
          fill
          objectFit="cover"
          objectPosition="top"
        />
      </div>
      <div className="relative z-10 flex flex-col h-full p-4"> {/* Added padding */}
        <div>
          <div className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-black/5">
            {plan.title}
          </div>
          <p className="mt-4 text-sm text-gray-600">{plan.description}</p>
          <div className="mt-4 mb-8">
            {plan.monthlyPrice ? (
              <div className="flex items-start">
                <span className="text-lg font-bold translate-y-2">$</span>
                <span className="text-5xl font-bold mx-1">
                  {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                </span>
                <span className="text-gray-600 self-end mb-1">
                  /{isAnnual ? 'yr' : 'mo'}
                </span>
              </div>
            ) : (
              <div className="h-[60px]" />
            )}
          </div>
          <ul className="space-y-3 mb-8">
            {plan.features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm">
                <span className="mr-2">•</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-auto">
          <Button 
            className="w-full rounded-full"
            variant={plan.buttonVariant || 'default'}
          >
            {plan.buttonText}
          </Button>
        </div>
      </div>
    </Card>
  )

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
      </div>

      {isDesktop ? (
        <Tabs
          defaultValue="monthly"
          value={activeTab}
          onValueChange={setActiveTab}
          className="space-y-8"
        >
          <div className="flex justify-center">
            <TabsList className="rounded-full border-2 border-black p-1 bg-transparent">
              <TabsTrigger
                value="monthly"
                className="rounded-full px-8 py-2 data-[state=active]:bg-[#1F1F1F] data-[state=active]:text-white"
              >
                Monthly
              </TabsTrigger>
              <TabsTrigger
                value="annually"
                className="rounded-full px-8 py-2 data-[state=active]:bg-[#1F1F1F] data-[state=active]:text-white"
              >
                Annually
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="monthly" className="mt-8">
            <div className="grid lg:grid-cols-3 gap-6 items-center">
              {plans.map((plan) => (
                <PricingCard key={plan.title} plan={plan} isAnnual={false} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="annually" className="mt-8">
            <div className="grid lg:grid-cols-3 gap-6 items-center">
              {plans.map((plan) => (
                <PricingCard key={plan.title} plan={plan} isAnnual={true} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      ) : (
        <div className="flex justify-center">
          <Carousel
            className="w-[80%]"
            opts={{
              align: "center",
              loop: true,

            }}
          >
            <CarouselContent>
              {plans.map((plan) => (
                <CarouselItem key={plan.title}>
                  <div className="p-1">
                    <PricingCard plan={plan} isAnnual={false} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      )}

      <div className="text-center mt-8 space-y-2 text-sm text-gray-500">
        <p>* Plus applicable taxes</p>
        <p>*Cancel your subscription anytime</p>
        <p>* Company registration details and email verification will be needed prior to subscription activation</p>
      </div>
    </section>
  )
}
