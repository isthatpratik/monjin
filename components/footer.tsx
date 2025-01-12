import Image from "next/image";
import Link from "next/link";
import { Facebook, Linkedin, Instagram, Youtube, Twitter } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const footerLinks = {
  products: [
    { name: "Monjin Suite", href: "#" },
    { name: "Monjin OCOI", href: "#" },
    { name: "Monjin YCOI", href: "#" },
    { name: "Monjin Spot Light", href: "#" },
    { name: "Monjin Basics", href: "#" },
    { name: "Monjin Talent Pool", href: "#" },
    { name: "Monjin Assessment", href: "#" },
  ],
  interviewer: [
    { name: "Become an Interviewer", href: "#" },
    { name: "Why Monjin", href: "#" },
    { name: "Express Interview", href: "#" },
    { name: "Interviewer Requirement", href: "#" },
    { name: "Bonus", href: "#" },
    { name: "Earnings", href: "#" },
    { name: "Support", href: "#" },
  ],
  candidates: [
    { name: "Give an Interview", href: "#" },
    { name: "What's in it for you", href: "#" },
    { name: "Express Interview", href: "#" },
    { name: "Premium Packages", href: "#" },
    { name: "Support", href: "#" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Culture", href: "#" },
    { name: "Careers", href: "#" },
    { name: "GDPR", href: "#" },
    { name: "CSR", href: "#" },
    { name: "Contact Us", href: "#" },
  ],
};

const locations = ["INDIA", "USA", "MALTA", "UK"];

export function Footer() {
  return (
    <footer className="w-full  text-gray-100 rounded-t-[32px] relative md:footer-bg-web footer-bg-mobile">
      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Top Section */}
        <div className="md:flex md:justify-between md:items-center mb-8 mt-8">
          {/* Logo and Description */}
          <div className="text-center md:text-left mb-8 md:mb-0 mt-2 max-w-sm sm:max-w-md lg:max-w-3xl">
            <Image
              src="/assets/monjin-footer-logo.png"
              alt="Monjin Logo"
              width={100}
              height={24}
              className="mx-auto md:mx-0 mb-4 object-contain block sm:hidden"
            />

            <Image
              src="/assets/monjin-footer-logo.png"
              alt="Monjin Logo Small"
              width={186}
              height={44}
              className="mx-auto md:mx-0 mb-4 object-contain hidden sm:block"
            />
            <p className="text-xs md:text-base text-[#AAAAAA] font-figtree">
              Monjin is a dynamic network of expert interviewers spanning diverse skill sets, conducting real-time video interviews that empower businesses to find the right talent faster and more effectively.
            </p>
            {/* Locations */}
            <div className="flex flex-wrap justify-center md:justify-start mt-8 gap-2 items-center mb-8">
              {locations.map((location, index) => (
                <span key={location} className="text-base font-Onest">
                  {location}
                  {index < locations.length - 1 && (
                    <span className="mx-2 text-[#4E4E4E]">•</span>
                  )}
                </span>
              ))}
            </div>
          </div>

          {/* Say Hello Section */}
          <div className="text-center md:text-right mb-8 md:mb-0 md:flex md:flex-col md:items-end md:justify-center">
            <h2 className="text-lg md:text-5xl font-light font-Onest mb-6">Say hello.</h2>
            <div className="flex justify-center md:justify-end gap-4">
              <Link href="#" className="p-2 md:p-3 bg-white bg-opacity-10 rounded-full hover:text-gray-300">
                <Facebook className="w-4 h-4 md:w-5 md:h-5" />
              </Link>
              <Link href="#" className="p-2 md:p-3 bg-white bg-opacity-10 rounded-full hover:text-gray-300">
                <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
              </Link>
              <Link href="#" className="p-2 md:p-3 bg-white bg-opacity-10 rounded-full hover:text-gray-300">
                <Instagram className="w-4 h-4 md:w-5 md:h-5" />
              </Link>
              <Link href="#" className="p-2 md:p-3 bg-white bg-opacity-10 rounded-full hover:text-gray-300">
                <Youtube className="w-4 h-4 md:w-5 md:h-5" />
              </Link>
              <Link href="#" className="p-2 md:p-3 bg-white bg-opacity-10 rounded-full hover:text-gray-300">
                <Twitter className="w-4 h-4 md:w-5 md:h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-b border-gray-800 mb-8"></div>

        {/* Desktop Navigation */}
        <div className="hidden md:grid md:grid-cols-4 gap-8 mb-12 lg:flex lg:flex-row lg:justify-between">
          {/* Products, Interviewer, Candidates, Company sections */}
          {Object.entries(footerLinks).map(([key, links]) => (
            <div key={key}>
              <h3 className="text-2xl mb-4 font-Onest">{key.charAt(0).toUpperCase() + key.slice(1)}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-[#ABABAB] text-base hover:text-white">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden mb-8">
          <div className="grid grid-cols-2 gap-4 self-center">
            {Object.entries(footerLinks).map(([key, links]) => (
              <Accordion type="single" collapsible className="w-[60%] mx-auto" key={key}>
                <AccordionItem value={key} className="border-none">
                  <AccordionTrigger className="hover:no-underline">
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2">
                      {links.map((link) => (
                        <li key={link.name}>
                          <Link href={link.href} className="text-gray-400 hover:text-white">
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="hidden md:flex justify-end gap-4 mb-8">
          <Image src="/assets/certification-1.png" alt="AICPA SOC" width={80} height={80} className="" />
          <Image src="/assets/certification-2.png" alt="ISO Certification" width={80} height={80} className="" />
        </div>

        {/* Footer Bottom */}
        <div className="text-sm text-gray-400 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap justify-center items-center gap-1">
              <Link href="#" className="hover:text-white underline">
                Terms of Service
              </Link>
              -
              <Link href="#" className="hover:text-white underline">
                Privacy Notice
              </Link>
              -
              <Link href="#" className="hover:text-white underline">
                GDPR
              </Link>
            </div>
            <div className="text-center underline">© 2023 Monjin Interviews Pvt. Ltd. All Rights Reserved</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
