"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import ProductMenu from "@/components/layout/product-menu"

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="w-full py-10 px-6 md:my-0 my-4 z-1000">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/monjin-logo.png"
            alt="Monjin Logo"
            width={120}
            height={100}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10 font-figtree font-light ml-auto mr-8">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-8 z-1000">
              {/* Products with Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-300 hover:text-white transition-colors bg-transparent border-none">
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white p-4 rounded-md shadow-lg w-full h-auto border-none">
                  <ProductMenu />
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="#company" className="text-gray-300 hover:text-white transition-colors">
                  Company
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/support" className="text-gray-300 hover:text-white transition-colors">
                  Support
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#candidate" className="text-gray-300 hover:text-white transition-colors">
                  Candidate
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#interviewer" className="text-gray-300 hover:text-white transition-colors">
                  Interviewer
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#jobs" className="text-gray-300 hover:text-white transition-colors">
                  Careers
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* CTA Button */}
        <Button className="hidden md:block bg-[#D3F56A] text-black rounded-full font-Onest font-light transition-shadow duration-300 ease-in-out hover:bg-[#D0F16C] hover:shadow-lg hover:shadow-[#D0F16C]/50">
          Get started
        </Button>

        {/* Mobile Drawer Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button
              className="md:hidden w-7 h-7 flex flex-col justify-center items-center rounded-sm border border-[#87888B] focus:outline-none"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <span className="bg-white block h-0.5 w-4 rounded-sm mb-1" />
              <span className="bg-white block h-0.5 w-4 rounded-sm" />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[300px] sm:w-[400px] bg-[#16171D] pr-0 text-white flex flex-col justify-center items-center border-none shadow-none"
          >
            <div className="h-[80%] flex flex-col justify-evenly py-10 font-figtree font-semibold text-center">
              <Link href="#" className="hover:text-gray-400 transition-colors">
                Product
              </Link>
              <Link href="#" className="hover:text-gray-400 transition-colors">
                Company
              </Link>
              <Link href="#" className="hover:text-gray-400 transition-colors">
                Candidate
              </Link>
              <Link href="#" className="hover:text-gray-400 transition-colors">
                Interviewer
              </Link>
              <Link href="#" className="hover:text-gray-400 transition-colors">
                Careers
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}

