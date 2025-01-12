'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Linkedin, Instagram, Youtube, Twitter } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const footerLinks = {
  products: [
    { name: 'Monjin Suite', href: '#' },
    { name: 'Monjin OCOI', href: '#' },
    { name: 'Monjin YCOI', href: '#' },
    { name: 'Monjin Spot Light', href: '#' },
    { name: 'Monjin Basics', href: '#' },
    { name: 'Monjin Talent Pool', href: '#' },
    { name: 'Monjin Assessment', href: '#' },
  ],
  interviewer: [
    { name: 'Become an Interviewer', href: '#' },
    { name: 'Why Monjin', href: '#' },
    { name: 'Express Interview', href: '#' },
    { name: 'Interviewer Requirement', href: '#' },
    { name: 'Bonus', href: '#' },
    { name: 'Earnings', href: '#' },
    { name: 'Support', href: '#' },
  ],
  candidates: [
    { name: 'Give an Interview', href: '#' },
    { name: "What's in it for you", href: '#' },
    { name: 'Express Interview', href: '#' },
    { name: 'Premium Packages', href: '#' },
    { name: 'Support', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Culture', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'GDPR', href: '#' },
    { name: 'CSR', href: '#' },
    { name: 'Contact Us', href: '#' },
  ],
}

const locations = ['INDIA', 'USA', 'MALTA', 'UK']

export function Footer() {
  return (
    <footer className="w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 rounded-t-[32px]">
      <div className="container mx-auto px-4 py-8">
        {/* Top Section */}
        <div className="md:flex md:justify-between md:items-start mb-8 mt-8">
          {/* Logo and Description */}
          <div className="md:max-w-2xl text-center md:text-left mb-8 md:mb-0 mt-2">
            <Image
              src="/assets/monjin-footer-logo.png"
              alt="Monjin Logo"
              width={186}
              height={44}
              className="mx-auto md:mx-0 mb-4 object-contain"
            />
            <p className="text-base text-[#AAAAAA] font-figtree">
              Monjin is a dynamic network of expert interviewers spanning diverse skill sets, conducting real-time video interviews that empower businesses to find the right talent faster and more effectively
            </p>
          </div>

          {/* Say Hello Section */}
          <div className="text-center md:text-right mb-8 md:mb-0">
            <h2 className="text-5xl font-light font-Onest mb-4">Say hello.</h2>
            <div className="flex justify-center md:justify-end gap-4">
              <Link href="#" className="hover:text-gray-300">
                <Facebook className="w-6 h-6" />
              </Link>
              <Link href="#" className="hover:text-gray-300">
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link href="#" className="hover:text-gray-300">
                <Instagram className="w-6 h-6" />
              </Link>
              <Link href="#" className="hover:text-gray-300">
                <Youtube className="w-6 h-6" />
              </Link>
              <Link href="#" className="hover:text-gray-300">
                <Twitter className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>

        {/* Locations */}
        <div className="flex flex-wrap justify-center md:justify-start gap-2 items-center mb-8">
          {locations.map((location, index) => (
            <span key={location} className="text-base font-Onest">
              {location}
              {index < locations.length - 1 && <span className="mx-2 text-[#4E4E4E]">•</span>}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="border-b border-gray-800 mb-8"></div>

        {/* Desktop Navigation */}
        <div className="hidden md:grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl mb-4">Products</h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl mb-4">Interviewer</h3>
            <ul className="space-y-2">
              {footerLinks.interviewer.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl mb-4">Candidates</h3>
            <ul className="space-y-2">
              {footerLinks.candidates.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden mb-8">
          <div className="grid grid-cols-2 gap-4">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="products" className="border-none">
                <AccordionTrigger className="hover:no-underline">Products</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2">
                    {footerLinks.products.map((link) => (
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

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="interviewer" className="border-none">
                <AccordionTrigger className="hover:no-underline">Interviewer</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2">
                    {footerLinks.interviewer.map((link) => (
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

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="candidates" className="border-none">
                <AccordionTrigger className="hover:no-underline">Candidates</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2">
                    {footerLinks.candidates.map((link) => (
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

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="company" className="border-none">
                <AccordionTrigger className="hover:no-underline">Company</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2">
                    {footerLinks.company.map((link) => (
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
          </div>
        </div>

        {/* Certifications */}
        <div className="hidden md:flex justify-end gap-4 mb-8">
          <Image
            src="/placeholder.svg"
            alt="AICPA SOC"
            width={80}
            height={80}
            className="opacity-75"
          />
          <Image
            src="/placeholder.svg"
            alt="ISO Certification"
            width={80}
            height={80}
            className="opacity-75"
          />
        </div>

        {/* Footer Bottom */}
        <div className="text-sm text-gray-400">
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="#" className="hover:text-white">Terms of Service</Link>
              <Link href="#" className="hover:text-white">Privacy Notice</Link>
              <Link href="#" className="hover:text-white">GDPR</Link>
            </div>
            <div className="text-center">
              © 2023 Monjin Interviews Pvt. Ltd. All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}