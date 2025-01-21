"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

export function NavBarProducts() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full py-10 px-4 md:my-0 my-4 z-1000">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/monjin-navbar.png"
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
            <NavigationMenuList className="flex items-center gap-8">
              {/* Products with Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-[#16171D] hover:text-[#16171D]/80 transition-colors bg-transparent border-none font-figtree">
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white p-4 rounded-md shadow-lg w-[300px] h-auto border-none font-figtree">
                  <ul className="flex flex-col gap-3 p-4 md:w-[400px] lg:w-[500px]">
                    <li>
                      <Link href="/products/MonjinSuite" passHref>
                        <NavigationMenuLink className="text-[#16171D] hover:text-[#16171D]/80 transition-colors font-figtree">
                          Monjin Suite
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link href="/products/OCOI" passHref>
                        <NavigationMenuLink className="text-[#16171D] hover:text-[#16171D]/80 transition-colors font-figtree">
                          OCOI
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link href="/products/YCOI" passHref>
                        <NavigationMenuLink className="text-[#16171D] hover:text-[#16171D]/80 transition-colors font-figtree">
                          YCOI
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link href="/products/Spotlight" passHref>
                        <NavigationMenuLink className="text-[#16171D] hover:text-[#16171D]/80 transition-colors font-figtree">
                          Spotlight
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link href="/products/Basics" passHref>
                        <NavigationMenuLink className="text-[#16171D] hover:text-[#16171D]/80 transition-colors font-figtree">
                          Basics
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link href="/products/PerformanceManagement" passHref>
                        <NavigationMenuLink className="text-[#16171D] hover:text-[#16171D]/80 transition-colors font-figtree">
                          Performance Management
                        </NavigationMenuLink>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
              <NavigationMenuTrigger className="text-[#16171D] hover:text-[#16171D]/80 transition-colors bg-transparent border-none font-figtree">
                  Company
                  <NavigationMenuContent className="bg-white p-4 rounded-md shadow-lg w-[300px] h-auto border-none font-figtree">
                  <ul className="flex flex-col gap-3 p-4 md:w-[400px] lg:w-[500px]">
                    <li>
                      <Link href="/company/about" passHref>
                        <NavigationMenuLink className="text-[#16171D] hover:text-[#16171D]/80 transition-colors font-figtree">
                          About
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link href="/company/culture" passHref>
                        <NavigationMenuLink className="text-[#16171D] hover:text-[#16171D]/80 transition-colors font-figtree">
                          Culture
                        </NavigationMenuLink>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
                </NavigationMenuTrigger>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#candidate" className="text-[#16171D] hover:text-black transition-colors font-figtree">
                  Candidate
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#interviewer" className="text-[#16171D] hover:text-black transition-colors font-figtree">
                  Interviewer
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#jobs" className="text-[#16171D] hover:text-black transition-colors font-figtree">
                  Careers
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* CTA Button */}
        <Button className="hidden md:block bg-[#16171D] text-white rounded-full font-Onest font-light transition-shadow duration-300 ease-in-out hover:bg-[#16171D]/90 hover:shadow-md hover:shadow-[#16171D]/20">
          Get started
        </Button>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button
              className="md:hidden w-7 h-7 flex flex-col justify-center items-center rounded-sm border border-[#222222] focus:outline-none"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <span className="bg-black block h-0.5 w-4 rounded-sm mb-1" />
              <span className="bg-black block h-0.5 w-4 rounded-sm" />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[300px] sm:w-[400px] bg-white pr-0 text-[#222222] flex flex-col justify-center items-center border-none shadow-none"
          >
            <div className="h-[80%] flex flex-col justify-evenly py-10 font-figtree font-semibold text-center">
              <Accordion type="single" collapsible>
                <AccordionItem value="product">
                  <AccordionTrigger className="items-center text-center">Product</AccordionTrigger>
                  <AccordionContent>
                    <div className="mt-2 ml-4">
                      <Link href="#monjin-suite" className="block hover:text-gray-400 transition-colors">
                        Monjin Suite
                      </Link>
                      <Link href="#ocoi" className="block hover:text-gray-400 transition-colors">
                        OCOI
                      </Link>
                      <Link href="#ycoi" className="block hover:text-gray-400 transition-colors">
                        YCOI
                      </Link>
                      <Link href="#spotlight" className="block hover:text-gray-400 transition-colors">
                        Spotlight
                      </Link>
                      <Link href="#performance-management" className="block hover:text-gray-400 transition-colors">
                        Performance Management
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Link href="#company" className="hover:text-gray-400 transition-colors">
                Company
              </Link>
              <Link href="#candidate" className="hover:text-gray-400 transition-colors">
                Candidate
              </Link>
              <Link href="#interviewer" className="hover:text-gray-400 transition-colors">
                Interviewer
              </Link>
              <Link href="#jobs" className="hover:text-gray-400 transition-colors">
                Careers
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
