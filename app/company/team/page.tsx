"use client";

import { Footer } from "@/components/layout/footer";
import Image from "next/image";
import { ClientsSlider } from "@/components/sliders/clients-slider";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/company-tabs";
import WhoWeAre from "@/components/about/who-we-are";
import MonjinTech from "@/components/about/monjin-tech";
import HowItWorks from "@/components/about/how-it-works";
import WhyWeDoIt from "@/components/about/why-we-do-it";
import { NavbarWhite } from "@/components/layout/navbar-white";
import CultureHero from "@/components/culture/culture-hero";
import ValeusSection from "@/components/culture/values-section";
import Quote from "@/components/culture/quote";
import CareersHero from "@/components/careers/careers-hero-section";
import WhyChooseMonjin from "@/components/careers/why-choose-monjin";
import JobApplicationForm from "@/components/careers/apply";
import { MobileNavbarLight } from "@/components/layout/mobile-navbar-light";
import AboutHeroMobile from "@/components/about/about-hero-mobile";
import { motion } from "framer-motion";
import TeamGrid from "@/components/team/team";

export default function Team() {
  return (
    <main className="relative min-h-screen overflow-hidden justify-center">
      <motion.div
        className="absolute inset-0 -z-10 hidden lg:block"
        initial={{ opacity: 0, translateY: -100 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{
          duration: 0.8,
          type: "spring",
          stiffness: 100,
          damping: 20,
          ease: "easeOut",
        }}
      >
        <Image
          alt="gradient-bg"
          src={"/assets/about/about-bg.jpg"}
          quality={100}
          fill
          priority
          className="object-cover object-top xl:-translate-y-[300px] lg:-translate-y-[200px]"
        />
      </motion.div>
      <motion.div
        className="absolute inset-0 -z-10 block lg:hidden"
        initial={{ opacity: 0, translateY: -100 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{
          duration: 0.8,
          type: "spring",
          stiffness: 100,
          damping: 20,
          ease: "easeOut",
        }}
      >
        <Image
          alt="gradient-bg"
          src={"/assets/team/team-bg-mobile.jpg"}
          quality={100}
          fill
          priority
          className="object-cover object-top md:-translate-y-[400px]"
        />
      </motion.div>

      <div className="z-999">
        <NavbarWhite />
        <MobileNavbarLight />
      </div>

      <motion.div
        className="mx-auto py-8 -z-30"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.8,
          type: "spring",
          stiffness: 100,
          damping: 20,
          ease: "easeOut",
        }}
      >
        <Tabs
          className="flex flex-col justify-center max-auto items-center"
          defaultValue="team"
        >
          <TabsList className="bg-white">
            <TabsTrigger value="about" className="">
              About Us
            </TabsTrigger>
            <TabsTrigger value="team">Our Team</TabsTrigger>
            <TabsTrigger value="culture">Culture</TabsTrigger>
            <TabsTrigger value="careers">Careers</TabsTrigger>
          </TabsList>

          <TabsContent value="about">
            <div className="h-full w-full lg:flex flex-col gap-4 items-center justify-between mb-10 py-12 hidden">
              <div className="flex flex-col justify-center items-center space-y-4 mt-6">
                <h1 className="text-center font-onest font-semibold text-[78px] text-white tracking-tighter leading-tight">
                  Where top talent & memorable <br />
                  interview experiences converge
                </h1>
                <p className="text-center font-light text-white font-figtree text-lg max-w-full">
                  Leveraging a global network of expert interviewers and
                  advanced technology, we empower businesses to save time, cut
                  hiring costs, and make <br />
                  smarter decisions. Whether you&apos;re expanding your team or
                  seeking specialized expertise, Monjin guarantees a seamless,
                  efficient, and tailored <br />
                  hiring experience. Step into the future of recruitment with
                  Monjin – where top talent meets unmatched opportunity.
                </p>
              </div>
              <div className="-z-10 py-24">
                <Image
                  src={"/assets/about/about-hero.png"}
                  alt="Monjin Suite Illustration"
                  width={1000}
                  height={1000}
                  quality={100}
                  className="object-contain object-center w-[100vw] h-auto mt-8"
                />
              </div>
            </div>

            <AboutHeroMobile />

            <div className="flex flex-col justify-center items-center space-y-4 mt-12 lg:mt-24">
              <WhoWeAre />
              <MonjinTech />
              <HowItWorks />
              <WhyWeDoIt />
            </div>
          </TabsContent>

          <TabsContent value="team">
            <TeamGrid />
          </TabsContent>

          <TabsContent value="culture">
            <CultureHero />
            <ValeusSection />
            <Quote />
          </TabsContent>

          <TabsContent value="careers">
            <CareersHero />
            <WhyChooseMonjin />
            <JobApplicationForm />
          </TabsContent>
        </Tabs>
      </motion.div>

      <footer>
        <ClientsSlider />
        <Footer />
      </footer>
    </main>
  );
}
