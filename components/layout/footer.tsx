import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion-basic";

const footerLinks = {
  products: [
    { name: "Monjin Suite", href: "/products/MonjinSuite" },
    { name: "OCOI", href: "products/OCOI" },
    { name: "YCOI", href: "/products/YCOI" },
    { name: "Spotlight", href: "/products/Spotlight" },
    { name: "Performance Management", href: "/products/PerformanceManagement" },
    { name: "Basics", href: "/products/Basics" },
  ],
  interviewer: [
    {
      name: "Become an Interviewer",
      href: "https://uni.monjin.com/public/interviewer/registration",
    },
    {
      name: "Why Monjin",
      href: "https://uni.monjin.com/public/interviewer/registration",
    },
    {
      name: "Express Interview",
      href: "https://uni.monjin.com/public/interviewer/registration",
    },
    {
      name: "Interviewer Requirement",
      href: "https://uni.monjin.com/public/interviewer/registration",
    },
    {
      name: "Bonus",
      href: "https://uni.monjin.com/public/interviewer/registration",
    },
    {
      name: "Earnings",
      href: "https://uni.monjin.com/public/interviewer/registration",
    },
    { name: "Support", href: "/support" },
  ],
  candidates: [
    {
      name: "Give an Interview",
      href: "https://uni.monjin.com/public/candidate/registration",
    },
    {
      name: "What's in it for you",
      href: "https://uni.monjin.com/public/candidate/registration",
    },
    {
      name: "Express Interview",
      href: "https://uni.monjin.com/public/candidate/registration",
    },
    {
      name: "Premium Packages",
      href: "https://uni.monjin.com/public/candidate/registration",
    },
    { name: "Support", href: "/support" },
  ],
  company: [
    { name: "About", href: "/company/about" },
    { name: "Culture", href: "/company/culture" },
    { name: "Careers", href: "/company/careers" },
    { name: "GDPR", href: "/gdpr" },
    { name: "CSR", href: "/csr" },
    { name: "Contact Us", href: "/contact" },
  ],
};

const locations = ["INDIA", "USA", "UK"];

export function Footer() {
  return (
    <footer className="w-full mx-auto text-gray-100 rounded-t-[32px] relative">
      <div className="absolute inset-0 -z-1 overflow-hidden rounded-t-2xl lg:rounded-t-[32px]">
        <Image
          src={"/assets/footer-bg-web.jpg"}
          fill
          alt="Footer Background"
          className="object-cover object-top lg:block md:block hidden"
        />
        <Image
          src={"/assets/footer-bg-mobile.jpg"}
          fill
          alt="Footer Background"
          className="object-fill object-top md:hidden lg:hidden"
        />
      </div>
      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Top Section */}
        <div className="md:flex md:justify-between md:items-center mb-8 mt-8">
          {/* Logo and Description */}
          <div className="text-center md:text-left mb-8 md:mb-0 mt-2 max-w-sm sm:max-w-md lg:max-w-3xl">
            <Image
              src="/assets/monjin-footer-logo.png"
              alt="Monjin Logo"
              width={100}
              height={100}
              className="mx-auto md:mx-0 h-auto w-auto mb-4 object-contain lg:block hidden"
            />

            <Image
              src="/assets/monjin-footer-logo.png"
              alt="Monjin Logo Small"
              width={186}
              height={186}
              className="mx-auto md:mx-0 h-auto w-auto mb-4 object-contain lg:hidden block"
            />
            <p className="text-xs md:text-base text-[#AAAAAA] font-figtree md:max-w-lg lg:max-w-xl">
              Monjin is a dynamic network of expert interviewers spanning
              diverse skill sets, conducting real-time video interviews that
              empower businesses to find the right talent faster and more
              effectively.
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
            <h2 className="text-lg md:text-5xl font-light font-onest mb-6">
              Say hello.
            </h2>
            <div className="flex justify-center md:justify-end gap-4">
              <Link href="https://www.linkedin.com/company/monjin/">
                <Image
                  src="/assets/social-media/linkedin.png"
                  alt="LinkedIn"
                  width={100}
                  height={100}
                  className="hover:opacity-80 w-8 h-8 lg:w-12 lg:h-12 object-contain"
                />
              </Link>       
              <Link href="https://www.youtube.com/@MonjinInterviewsPvtLtd">
                <Image
                  src="/assets/social-media/youtube.png"
                  alt="YouTube"
                  width={100}
                  height={100}
                  className="hover:opacity-80 w-8 h-8 lg:w-12 lg:h-12  object-contain"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-b border-[#FFFFFF]/20 mb-8"></div>

        {/* Desktop Navigation */}
        <div className="hidden md:grid md:grid-cols-4 gap-12 mb-12 lg:flex lg:flex-row lg:justify-between">
          {/* Products, Interviewer, Candidates, Company sections */}
          {Object.entries(footerLinks).map(([key, links]) => (
            <div key={key}>
              <h3 className="text-2xl mb-4 font-Onest">
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-[#ABABAB] text-base hover:text-white"
                    >
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
              <Accordion
                type="single"
                collapsible
                className="w-[60%] mx-auto"
                key={key}
              >
                <AccordionItem value={key} className="border-none">
                  <AccordionTrigger className="hover:no-underline">
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2">
                      {links.map((link) => (
                        <li key={link.name}>
                          <Link
                            href={link.href}
                            className="text-gray-400 hover:text-white"
                          >
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
        <div className="hidden lg:flex justify-end gap-4 mb-8">
          <Image
            src="/assets/certification-1.png"
            alt="AICPA SOC"
            width={80}
            height={80}
          />
          <Image
            src="/assets/certification-2.png"
            alt="ISO Certification"
            width={80}
            height={80}
          />
        </div>

        {/* Footer Bottom */}
        <div className="text-sm text-white mb-8">
          <div className="flex flex-col lg:flex-row items-center justify-between lg:items-start gap-4">
            <div className="flex lg:flex-row md:flex-row lg:justify-start justify-center items-center lg:items-start md:items-start gap-1 lg:w-1/2 w-full">
              <Link
                href="/terms-of-services"
                className="hover:text-white md:text-sm font-figtree text-xs hover:underline"
              >
                Terms of Service
              </Link>
              -
              <Link
                href="/privacy-policy"
                className="hover:text-white md:text-sm font-figtree text-xs hover:underline"
              >
                Privacy Notice
              </Link>
              -
              <Link href="/gdpr" className="hover:text-white md:text-sm font-figtree text-xs hover:underline">
                GDPR
              </Link>
            </div>
            <div className="flex text-left gap-2 justify-center lg:justify-start items-center lg:items-start md:mt-2 lg:mt-0 mt-4 px-6">
              <div className="flex font-figtree md:text-sm text-xs max-w-xs md:max-w-full">

              © 2025 Monjin Interviews Pvt. Ltd. All Rights Reserved
              </div>
              <div className="lg:hidden flex flex-shrink-0">
                <Image
                  src="/assets/certification-1.png"
                  alt="AICPA SOC"
                  width={32}
                  height={32}
                  className="flex-shrink-0 object-contain"
                />
                <Image
                  src="/assets/certification-2.png"
                  alt="ISO Certification"
                  width={32}
                  height={32}
                  className="flex-shrink-0 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
