"use client"

import Link from "next/link"
import { Button } from "../ui/button"
import Image from "next/image"
import { Shield, Users, HighlighterIcon as Spotlight, BarChart, Box, ArrowRight } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuIndicator,
} from "@/components/ui/dark-navbar"

const products = [
  {
    title: "OCOI",
    description: "Our Candidates Our interviewers",
    icon: Shield,
    color: "bg-purple-100",
    iconColor: "text-purple-500",
    titleColor: "text-purple-700",
    href: "/products/OCOI",
  },
  {
    title: "YCOI",
    description: "Your Candidates Our interviewers",
    icon: Users,
    color: "bg-green-100",
    iconColor: "text-green-500",
    titleColor: "text-green-700",
    href: "/products/YCOI",
  },
  {
    title: "Spotlight",
    description: "Accelerate Efficient Screening",
    icon: Spotlight,
    color: "bg-orange-100",
    iconColor: "text-orange-500",
    titleColor: "text-orange-700",
    href: "/products/Spotlight",
  },
  {
    title: "Basics",
    description: "Streamline Effortless Hiring",
    icon: Box,
    color: "bg-red-100",
    iconColor: "text-red-500",
    titleColor: "text-red-700",
    href: "/products/Basics",
  },
  {
    title: "Performance Management",
    description: "Accelerate Efficient Screening",
    icon: BarChart,
    color: "bg-violet-100",
    iconColor: "text-violet-500",
    titleColor: "text-violet-700",
    href: "/products/PerformanceManagement",
  },
  {
    title: "Monjin Suite",
    description: "Attract, engage & retain talent",
    icon: Shield,
    color: "bg-gray-100",
    iconColor: "text-gray-500",
    titleColor: "text-gray-700",
    href: "/products/MonjinSuite",
  },
]

const company = [
  {
    title: "About Us",
    description: "Learn about Monjin's unique story.",
    icon: Users,
    color: "bg-[#9F8AFF]/10",
    iconColor: "text-[#563EC3]",
    href: "/company",
  },
  {
    title: "Culture",
    description: "Discover our vibrant culture",
    icon: Spotlight,
    color: "bg-[#F6FAEA]",
    iconColor: "text-[#899B51]",
    href: "/company",
  },
  {
    title: "Our Team",
    description: "Meet our talented team members.",
    icon: Shield,
    color: "bg-[#FCF3E8]",
    iconColor: "text-[#C28331]",
    href: "/company",
  },
  {
    title: "Careers",
    description: "Empower Thrive Succeed",
    icon: Shield,
    color: "bg-[#D9FBFF]",
    iconColor: "text-[#4DACD1]",
    href: "/careers",
  },
]

function ListItem({ title, description, icon: Icon, color, iconColor, titleColor, href }) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          href={href}
          className="block select-none z-2000 space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all hover:bg-[#F4F9F9] hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group"
        >
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className={`p-2 rounded-lg ${color}`}>
                <Icon className={`h-5 w-5 ${iconColor}`} />
              </div>
              <div>
                <div className={`text-[15px] font-medium leading-none ${titleColor}`}>{title}</div>
                <p className="text-sm leading-snug  whitespace-nowrap text-[#6C8888]">{description}</p>
              </div>
            </div>
            <ArrowRight className="h-4 w-4 opacity-0 transition-all group-hover:opacity-100 duration-100" />
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  )
}

export function Navbar() {
  return (
    <header className="w-full py-6 px-6 md:my-0 my-4 z-999">
      <div className="container max-auto max-w-[1600px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative">
            <Image src="/assets/monjin-logo.png" alt="Logo" width={140} height={120} className="object-contain" />
          </div>
        </Link>

        {/* Navigation and Buttons */}
        <div className="flex items-center gap-6 z-999">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-figtree text-sm text-white bg-transparent">Product</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[700px] gap-3 p-4 md:grid-cols-2">
                    {products.map((product) => (
                      <ListItem key={product.title} {...product} />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-figtree text-sm text-white bg-transparent">Company</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[400px]">
                    {company.map((item) => (
                      <ListItem key={item.title} {...item} />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/support" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Support</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/candidate" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Candidate</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/interviewer" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Interviewer</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuIndicator />
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className="rounded-[8px] border-white font-Onest font-normal text-base px-6 py-2 h-auto"
            >
              Contact Us
            </Button>
            <Button className="rounded-[8px] font-Onest bg-[#D0F16C] text-black hover:bg-[#D0F16C]/70 transition-all duration-200 font-normal text-base px-6 py-2 h-auto">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

