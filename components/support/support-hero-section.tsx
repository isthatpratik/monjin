"use client"

export default function SupportHero() {
  return (
    <div
      className="w-full relative flex items-center justify-center overflow-hidden"
    >
      <div className="container lg:px-4 lg:py-24 py-4 relative">
        <div className="mx-auto text-center space-y-4">
          <h1
            className="lg:text-[78px] text-4xl font-bold tracking-tight font-onest lg:font-semibold text-white leading-tight"
          >
            Your hub for instant answers and <br /> effortless solutions!
          </h1>

          <h2
            className="text-lg md:text-xl font-figtree font-light text-white hidden lg:block"
          >
            Browse through our carefully curated FAQs to quickly find detailed, easy-to-understand information designed to resolve your queries and provide <br />seamless support.
          </h2>

          {/* <div className="max-w-2xl mx-auto mt-8 lg:pt-20 pt-4">
            <div className="relative">
              <Input
                type="text"
                placeholder="Ask A Question..."
                className="w-full pl-12 pr-20 py-8 text-lg bg-[#F5F9FA] rounded-lg mb-10 lg:mb-0"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Button className="hidden lg:block absolute right-4 top-1/2 -translate-y-1/2 bg-[#1B1B1B] hover:bg-[#1B1B1B]/80 text-base font-onest font-normal">
                Search
              </Button>
            </div>
          </div> */}
        </div>
      </div>
    </div>

  )
}
