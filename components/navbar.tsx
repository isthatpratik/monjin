import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function NavBar() {
  return (
    <nav className="w-full py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/assets/monjin-logo.png" alt="Monjin Logo" width={100} height={50} />
        </Link>
        
        <div className="hidden md:flex items-center gap-8 font-figtree font-light">
          <Link href="#product" className="text-gray-300 hover:text-white transition-colors">
            Product
          </Link>
          <Link href="#company" className="text-gray-300 hover:text-white transition-colors">
            Company
          </Link>
          <Link href="#candidate" className="text-gray-300 hover:text-white transition-colors">
            Candidate
          </Link>
          <Link href="#interviewer" className="text-gray-300 hover:text-white transition-colors">
            Interviewer
          </Link>
          <Link href="#jobs" className="text-gray-300 hover:text-white transition-colors">
            Jobs
          </Link>
        </div>

        <Button className="bg-[#D3F56A] text-black font-light hover:bg-[#c1e356] rounded-[50]">
          Get started
        </Button>
      </div>
    </nav>
  )
}

