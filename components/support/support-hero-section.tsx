"use client"

import { Search } from "lucide-react"
import { Input } from "../ui/input"
import { Button } from "@/components/ui/button"

export default function SupportHero() {
  return (
    <div
      className="w-full relative flex items-center justify-center overflow-hidden"
    >
      <div className="container px-4 py-24 relative">
        <div className="mx-auto text-center space-y-4">
          <h1
            className="text-[78px] tracking-tight font-onest font-semibold text-white leading-tight"
          >
            Your hub for instant answers and <br /> effortless solutions!
          </h1>

          <h2
            className="text-lg md:text-xl font-figtree font-light text-white"
          >
            Browse through our carefully curated FAQs to quickly find detailed, easy-to-understand information designed to resolve your queries and provide <br />seamless support.
          </h2>

          <div className="max-w-2xl mx-auto mt-8 pt-20">
            <div className="relative">
              <Input
                type="text"
                placeholder="Ask A Question..."
                className="w-full pl-12 pr-20 py-8 text-lg bg-[#F5F9FA] rounded-lg"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Button className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#1B1B1B] hover:bg-[#1B1B1B]/80 p-6 text-base font-Onest font-normal">
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
