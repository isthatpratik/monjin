"use client"

import { Search } from "lucide-react"
import { Input } from "../ui/input"
import { Button } from "@/components/ui/button"

export default function SupportHero() {
  return (
    <section
      className="w-full relative flex items-center justify-center overflow-hidden"
    >
      <div className="container px-4 py-24 relative z-10">
        <div className="mx-auto text-center space-y-4">
          <h1
            className="text-[78px] tracking-tight font-onest font-semibold text-white"
          >
            Hello, how can we help?
          </h1>

          <h2
            className="text-lg md:text-xl font-figtree font-bold text-white"
          >
            Your go-to partner for the best hiring solutions – we&apos;re here to help
          </h2>

          <p className="text-lg text-white/90 font-light font-figtree">
            Submit the form below, and our experts will reach out with customized pricing details
          </p>

          <div className="max-w-2xl mx-auto mt-8 pt-20">
            <div className="relative">
              <Input
                type="text"
                placeholder="Ask A Question..."
                className="w-full pl-12 pr-20 py-8 text-lg bg-[#F5F9FA] rounded-lg"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Button className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-900 hover:bg-gray-800">
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}
