"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuIndicator,
} from "@/components/ui/navigation-menu";
import { motion } from "framer-motion";

const products = [
  {
    title: "OCOI",
    description: "Our Candidates Our interviewers",
    imageSrc: "/assets/product-icons/ocoi.png",
    color: "bg-[#947EFF]/10",
    titleColor: "text-[#7D65EA]",
    href: "/products/OCOI",
  },
  {
    title: "Basics",
    description: "Streamline Effortless Hiring",
    imageSrc: "/assets/product-icons/basics.png",
    color: "bg-[#FEF0F1]",
    titleColor: "text-[#F46D70]",
    href: "/products/Basics",
  },
  {
    title: "YCOI",
    description: "Your Candidates Our interviewers",
    imageSrc: "/assets/product-icons/ycoi.png",
    color: "bg-[#F6FAEA]",
    titleColor: "text-[#899B51]",
    href: "/products/YCOI",
  },
  {
    title: "Performance Management",
    description: "Pre-Assessed Candidatures",
    imageSrc: "/assets/product-icons/performance_management.png",
    color: "bg-[#F8EEFB]",
    titleColor: "text-[#BA57D3]",
    href: "/products/PerformanceManagement",
  },
  {
    title: "Spotlight",
    description: "Accelerate Efficient Screening",
    imageSrc: "/assets/product-icons/spotlight.png",
    color: "bg-[#FCF3E8]",
    titleColor: "text-[#C28331]",
    href: "/products/Spotlight",
  },
  {
    title: "Monjin Suite",
    description: "Attract, engage & retain talent",
    imageSrc: "/assets/product-icons/monjin-suite.png",
    bgImage: "/assets/product-icons/monjin-suite-bg.png",
    hoverColor: "hover:bg-[#2E2F33]",
    titleColor: "text-gray-700",
    href: "/products/MonjinSuite",
  },
];

const company = [
  {
    title: "About Us",
    description: "Learn about Monjin's unique story.",
    imageSrc: "/assets/product-icons/about.png",
    color: "bg-[#9F8AFF]/10",
    iconColor: "text-[#563EC3]",
    href: "/company/about",
  },
  {
    title: "Culture",
    description: "Discover our vibrant culture",
    imageSrc: "/assets/product-icons/culture.png",
    color: "bg-[#F6FAEA]",
    iconColor: "text-[#899B51]",
    href: "/company/culture",
  },
  {
    title: "Our Team",
    description: "Meet our talented team members.",
    imageSrc: "/assets/product-icons/our-team.png",
    color: "bg-[#FCF3E8]",
    iconColor: "text-[#C28331]",
    href: "/company/team",
  },
  {
    title: "Careers",
    description: "Empower Thrive Succeed",
    imageSrc: "/assets/product-icons/careers.png",
    color: "bg-[#D9FBFF]",
    iconColor: "text-[#4DACD1]",
    href: "/company/careers",
  },
];

function ListItem({
  title,
  description,
  imageSrc,
  bgImage,
  color,
  titleColor,
  href,
  hoverColor,
}) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          href={href}
          className={`block select-none z-2000 space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all ${
            hoverColor || "hover:bg-[#F4F9F9]"
          } hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group`}
        >
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              {/* Image or Background Image */}
              <div
                className={`p-2 rounded-lg ${bgImage ? "" : color}`}
                style={
                  bgImage
                    ? {
                        backgroundImage: `url(${bgImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        width: "36px",
                        height: "36px",
                      }
                    : {}
                }
              >
                {!bgImage && (
                  <Image
                    src={imageSrc}
                    alt={title}
                    className="h-5 w-5 object-contain"
                    width={20}
                    height={20}
                  />
                )}
              </div>
              <div>
                <div
                  className={`text-[15px] font-medium leading-none ${
                    title == "Monjin Suite"
                      ? "group-hover:text-white"
                      : titleColor
                  }`}
                >
                  {title}
                </div>
                <p className="text-sm leading-snug whitespace-nowrap text-[#6C8888]">
                  {description}
                </p>
              </div>
            </div>
            <ArrowRight className="h-4 w-4 opacity-0 transition-all text-[#6C8888] group-hover:opacity-100 duration-100" />
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
}

export function NavbarBlack() {
  return (
    <motion.header
      className="w-full py-6 px-6 md:my-0 my-4 z-100 bg-transparent hidden lg:block"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
    >
      <div className="container max-auto max-w-[1600px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative">
            <Image
              src="/assets/monjin-navbar.png"
              alt="Logo"
              width={140}
              height={120}
              className="object-contain"
            />
          </div>
        </Link>

        {/* Navigation and Buttons */}
        <div className="flex items-center gap-6 z-2000">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-figtree text-sm">
                  Product
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[700px] gap-3 p-4 md:grid-cols-2 z-999">
                    {products.map((product) => (
                      <ListItem key={product.title} {...product} />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-figtree text-sm">
                  Company
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[400px] z-999">
                    {company.map((item) => (
                      <ListItem key={item.title} {...item} />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-figtree text-sm">
                  Jobs
                </NavigationMenuTrigger>
                <NavigationMenuContent className="grid w-[600px] gap-3 p-4 md:w-[300px] z-999">
                  <Link
                    href={
                      "https://uni.monjin.com/public/organization/registration"
                    }
                    target="_blank"
                    className="text-black"
                  >
                    <NavigationMenuLink target="_blank">
                      Post a Job
                    </NavigationMenuLink>
                  </Link>
                  <Link
                    href={
                      "/viewjobs"
                    }
                    className="text-black"
                  >
                    <NavigationMenuLink target="_blank">
                      View Jobs
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/support" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Support
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem target="_blank">
                <Link
                  href="https://uni.monjin.com/public/candidate/registration"
                  target="_blank"
                  legacyBehavior
                  passHref
                >
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Candidate
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem target="_blank">
                <Link
                  href="https://uni.monjin.com/public/interviewer/registration"
                  target="_blank"
                  legacyBehavior
                  passHref
                >
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Interviewer
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuIndicator />
            </NavigationMenuList>
          </NavigationMenu>

          <div className="grid grid-cols-2 items-center gap-3">
            <Link
              href="/contact"
              className="w-full h-full flex items-center justify-center"
            >
              <Button
                variant="outline"
                className="rounded-[8px] border-black/50 bg-transparent font-onest font-normal text-[15px] px-6 py-3 h-auto transition-all duration-500 hover:scale-[98%] w-full"
              >
                Contact Us
              </Button>
            </Link>
            <Link
              href="https://uni.monjin.com/public/organization/registration"
              target="_blank"
              passHref
              className="w-full"
            >
              <Button className="rounded-[8px] font-onest bg-[#1B1B1B] font-normal text-[15px] px-6 py-3 h-auto hover:scale-[98%] transition-all duration-500 w-full">
                Login
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
