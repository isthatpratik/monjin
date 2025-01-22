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
import { ArrowRight } from "lucide-react";

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full py-10 px-6 md:my-0 my-4 z-1000">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/monjin-logo.png"
            alt="Monjin Logo"
            width={140}
            height={120}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10 font-figtree font-light ml-auto mr-10">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-8 z-1000">
              {/* Products with Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-300 hover:text-white transition-colors bg-transparent border-none">
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white p-4 rounded-3xl shadow-lg w-[300px] h-auto border-none">
                  <ul className="grid grid-cols-2 gap-1 p-2 md:w-[500px] lg:w-[756px]">
                    <li>
                      <div className="flex items-center gap-4 p-2 rounded-lg transition-colors">
                        <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-[#947EFF]/10 flex items-center justify-center">
                          <Image
                            src="/assets/product-icons/ocoi.png"
                            alt="Company Icon"
                            width={30}
                            height={30}
                            className="object-contain"
                          />
                        </div>
                        <div className="flex-1">
                          <Link href="/products/OCOI" passHref>
                            <NavigationMenuLink className="text-[#7D65EA] text-2xl font-bold font-figtree flex justify-start gap-2 items-center">
                              <span>OCOI</span>
                              <ArrowRight className="h-5 w-5"/>
                            </NavigationMenuLink>
                          </Link>
                          <p className="text-[#6F6C90] text-xs">
                            Our Candidates Our Interviewer
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center gap-4 p-2 rounded-lg transition-colors ">
                        <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-[#F46D70]/10 flex items-center justify-center">
                          <Image
                            src="/assets/product-icons/basics.png"
                            alt="Company Icon"
                            width={30}
                            height={30}
                            className="object-contain"
                          />
                        </div>
                        <div className="flex-1">
                          <Link href="/products/Basics" passHref>
                            <NavigationMenuLink className="text-[#F46D70] text-2xl font-bold font-figtree flex justify-start gap-2 items-center">
                              <span>Basics</span>
                              <ArrowRight className="h-5 w-5"/>
                            </NavigationMenuLink>
                          </Link>
                          <p className="text-[#6F6C90] text-xs">
                            Streamline Effortless Hiring
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center gap-4 p-2 rounded-lg transition-colors ">
                        <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-[#B7D659]/10 flex items-center justify-center">
                          <Image
                            src="/assets/product-icons/ycoi.png"
                            alt="Company Icon"
                            width={30}
                            height={30}
                            className="object-contain"
                          />
                        </div>
                        <div className="flex-1">
                          <Link href="/products/YCOI" passHref>
                            <NavigationMenuLink className="text-[#B7D659] text-2xl font-bold font-figtree flex justify-start gap-2 items-center">
                              <span>YCOI</span>
                              <ArrowRight className="h-5 w-5"/>
                            </NavigationMenuLink>
                          </Link>
                          <p className="text-[#6F6C90] text-xs">
                            Your Candidates Our Interviewer
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center gap-4 p-2 rounded-lgtransition-colors ">
                        <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-[#BA57D3]/10 flex items-center justify-center">
                          <Image
                            src="/assets/product-icons/performance_management.png"
                            alt="Company Icon"
                            width={30}
                            height={30}
                            className="object-contain"
                          />
                        </div>
                        <div className="flex-1">
                          <Link href="/products/PerformanceManagement" passHref>
                            <NavigationMenuLink className="text-[#BA57D3] text-2xl font-bold font-figtree flex justify-start gap-2 items-center">
                              <span>Performance Management</span>
                              <ArrowRight className="h-5 w-5"/>
                            </NavigationMenuLink>
                          </Link>
                          <p className="text-[#6F6C90] text-xs">
                            Pre - Assessed Candidatures
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center gap-4 p-2 rounded-lg transition-colors ">
                        <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-[#FFB14A]/10 flex items-center justify-center">
                          <Image
                            src="/assets/product-icons/spotlight.png"
                            alt="Company Icon"
                            width={30}
                            height={30}
                            className="object-contain"
                          />
                        </div>
                        <div className="flex-1">
                          <Link href="/products/Spotlight" passHref>
                            <NavigationMenuLink className="text-[#FFB14A] text-2xl font-bold font-figtree flex justify-start gap-2 items-center">
                              <span>Spotlight</span>
                              <ArrowRight className="h-5 w-5"/>
                            </NavigationMenuLink>
                          </Link>
                          <p className="text-[#6F6C90] text-xs">
                            Our Candidates Our Interviewer
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center gap-4 p-2 rounded-lg transition-colors ">
                        <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-[url('/assets/dropdown-monjin-suite-bg.png')] object-center bg-no-repeat flex items-center justify-center">
                          <Image
                            src="/assets/monjin-suite-dropdown.png"
                            alt="Company Icon"
                            width={30}
                            height={30}
                            className="object-contain"
                          />
                        </div>
                        <div className="flex-1">
                          <Link href="/products/OCOI" passHref>
                            <NavigationMenuLink className="text-[#3B3B3B] text-2xl font-bold font-figtree flex justify-start gap-2 items-center">
                              <span>Monjin Suite</span>
                              <ArrowRight className="h-5 w-5"/>
                            </NavigationMenuLink>
                          </Link>
                          <p className="text-[#6F6C90] text-xs">
                          Experience a comprehensive solution designed to attract, engage, and retain top talent across multiple channels.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-300 hover:text-white transition-colors bg-transparent border-none font-figtree">
                  Company
                  <NavigationMenuContent className="bg-white p-4 rounded-md shadow-lg w-[300px] h-auto border-none font-figtree">
                    <ul className="flex flex-col gap-3 p-2 md:w-[400px] lg:w-full justify-center">
                      <li>
                      <div className="flex items-center gap-4 p-2 rounded-lg transition-colors ">
                        <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-[#F4F2FF] flex items-center justify-center">
                          <Image
                            src="/assets/dropdown/about-us.png"
                            alt="Company Icon"
                            width={30}
                            height={30}
                            className="object-contain"
                          />
                        </div>
                        <div className="flex-1">
                          <Link href="/" passHref>
                            <NavigationMenuLink className="text-[#9F8AFF] text-2xl font-bold font-figtree flex justify-start gap-2 items-center">
                              <span>About Us</span>
                              <ArrowRight className="h-5 w-5"/>
                            </NavigationMenuLink>
                          </Link>
                          
                        </div>
                      </div>
                      </li>
                      <li>
                      <div className="flex items-center gap-4 p-2 rounded-lg transition-colors ">
                        <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-[#FEF0F1] flex items-center justify-center">
                          <Image
                            src="/assets/dropdown/culture.png"
                            alt="Company Icon"
                            width={30}
                            height={30}
                            className="object-contain"
                          />
                        </div>
                        <div className="flex-1">
                          <Link href="/" passHref>
                            <NavigationMenuLink className="text-[#F46D70] text-2xl font-bold font-figtree flex justify-start gap-2 items-center">
                              <span>Culture</span>
                              <ArrowRight className="h-5 w-5"/>
                            </NavigationMenuLink>
                          </Link>
                  
                        </div>
                      </div>
                      </li>
                      <li>
                      <div className="flex items-center gap-4 p-2 rounded-lg transition-colors ">
                        <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-[#F8FBEE] flex items-center justify-center">
                          <Image
                            src="/assets/dropdown/team.png"
                            alt="Company Icon"
                            width={30}
                            height={30}
                            className="object-contain"
                          />
                        </div>
                        <div className="flex-1">
                          <Link href="/" passHref>
                            <NavigationMenuLink className="text-[#B7D659] text-2xl font-bold font-figtree flex justify-start gap-2 items-center">
                              <span>Our Team</span>
                              <ArrowRight className="h-5 w-5"/>
                            </NavigationMenuLink>
                          </Link>
                  
                        </div>
                      </div>
                      </li>
                      <li>
                      <div className="flex items-center gap-4 p-2 rounded-lg transition-colors ">
                        <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-[#FFF7ED] flex items-center justify-center">
                          <Image
                            src="/assets/dropdown/contact.png"
                            alt="Company Icon"
                            width={30}
                            height={30}
                            className="object-contain"
                          />
                        </div>
                        <div className="flex-1">
                          <Link href="/" passHref>
                            <NavigationMenuLink className="text-[#FCB352] text-2xl font-bold font-figtree flex justify-start gap-2 items-center">
                              <span>Contact Us</span>
                              <ArrowRight className="h-5 w-5"/>
                            </NavigationMenuLink>
                          </Link>
                  
                        </div>
                      </div>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuTrigger>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href="/support"
                  className="text-gray-300 hover:text-white transition-colors font-figtree"
                >
                  Support
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href="#candidate"
                  className="text-gray-300 hover:text-white transition-colors font-figtree"
                >
                  Candidate
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href="#interviewer"
                  className="text-gray-300 hover:text-white transition-colors font-figtree"
                >
                  Interviewer
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href="#jobs"
                  className="text-gray-300 hover:text-white transition-colors font-figtree"
                >
                  Careers
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* CTA Button */}
        <Button className="hidden md:block bg-[#D3F56A] text-black rounded-lg font-Onest font-light transition-shadow duration-300 ease-in-out hover:bg-[#D0F16C] hover:shadow-lg hover:shadow-[#D0F16C]/50">
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
  );
}
