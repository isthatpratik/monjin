import { NavBar } from "@/components/layout/navbar";
import { Clients } from "@/components/sections/clients-landing";
import { HeroSection } from "@/components/sections/hero-section";
import FeatureSection from "@/components/sections/feature-section";
import ProdcutsSection from "@/components/sections/products-section";
import CaseStudies from "@/components/sections/case-studies";
import { Footer } from "@/components/layout/footer";
import Testimonials from "@/components/sections/testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10 lg:hidden">
        <Image
          alt="gradient-mobile-bg"
          src={"/assets/gradient-mobile.jpg"}
          quality={100}
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 -z-10 lg:block hidden md:block">
        <Image
          alt="gradient-mobile-bg"
          src={"/assets/gradient-web.jpg"}
          quality={100}
          fill
          sizes="100vw"
          className="object-cover object-top"
          priority
        />
      </div>

      {/* <div className="absolute inset-0 -z-20 hidden md:block">

        <div className="absolute top-[-50vh] left-1/2 -translate-x-1/2 w-[300vw] h-5/6 bg-[#16171D] blur-[200px] rounded-[60%]"></div>
        <div className="absolute top-[75vh] -left-[15%] w-[60%] h-[30%] bg-[#F26B64] opacity-30 rounded-full filter blur-[150px] mix-blend-lighten"></div>
        <div className="absolute top-[65vh] left-1/3 w-[65%] h-[30%] bg-[#D0F16C] opacity-30 rounded-full filter blur-[150px] mix-blend-lighten"></div>
        <div className="absolute top-[60vh] left-2/3 w-[70%] h-[25%] bg-[#9F8AFF] opacity-40 rounded-full filter blur-[150px]"></div>
        <div className="absolute top-[120vh] left-1/2 -translate-x-1/2 w-[200vw] h-full bg-[#F5FAF8] blur-[300px] rounded-[60%] opacity-90"></div>


        <div className="absolute top-[6vh] left-0 z-20 hidden md:block">
          <Image
            src="/assets/vectors/middle-left.png"
            alt="Middle Left Overlay"
            width={600}
            height={600}
            quality={10}
            priority
          />
        </div>
        <div className="absolute top-0 right-0 z-20 hidden md:block">
          <Image
            src="/assets/vectors/top-right.png"
            alt="Top Right Overlay"
            width={300}
            height={300}
            priority
            quality={10}
            className="top-100"
          />
        </div>
      </div> */}

      <NavBar />

      <div className="md:max-w-[1600px] mx-auto px-6 py-10">
        <HeroSection />
        <Clients />
        <FeatureSection />
        <ProdcutsSection />
        <CaseStudies />
        <Testimonials />
      </div>

      <footer>
        <Footer />
      </footer>
    </main>
  );
}
