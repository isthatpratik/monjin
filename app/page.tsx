import { NavBar } from "@/components/navbar";
import { Clients } from "@/components/clients";
import { HeroSection } from "@/components/hero-section";
import FeatureSection from "@/components/feature-section";
import ProdcutsSection from "@/components/products-section";
import BlogSection from "@/components/blog";
import { Footer } from "@/components/footer";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background Image for Mobile */}
      <div className="absolute inset-0 -z-10 bg-no-repeat bg-top bg-cover bg-[url('/assets/gradient-mobile.png')] md:hidden"></div>

      {/* Background Circles and Overlay Images for Web */}
      <div className="absolute inset-0 -z-10 hidden md:block">
        {/* Background Circles */}
        <div className="absolute top-[-50vh] left-1/2 -translate-x-1/2 w-[300vw] h-5/6 bg-[#16171D] blur-[200px] rounded-[60%]"></div>
        <div className="absolute top-[75vh] -left-[15%] w-[60%] h-[30%] bg-[#F26B64] opacity-30 rounded-full filter blur-[150px] animate-blob1 animation-delay-2000 mix-blend-lighten"></div>
        <div className="absolute top-[65vh] left-1/3 w-[65%] h-[30%] bg-[#D0F16C] opacity-30 rounded-full filter blur-[150px] animate-blob2 animation-delay-1000 mix-blend-lighten"></div>
        <div className="absolute top-[60vh] left-2/3 w-[70%] h-[25%] bg-[#9F8AFF] opacity-40 rounded-full filter blur-[150px] animate-blob3"></div>
        <div className="absolute top-[120vh] left-1/2 -translate-x-1/2 w-[200vw] h-full bg-[#F5FAF8] blur-[300px] rounded-[60%] opacity-90"></div>

        {/* Overlay Images */}
        <div className="absolute top-[6vh] left-0 z-20 hidden md:block">
          <img
            src="/assets/vectors/middle-left.png"
            alt="Middle Left Overlay"
            className="w-[600px] h-auto"
          />
        </div>
        <div className="absolute top-0 right-0 z-20 hidden md:block">
          <img
            src="/assets/vectors/top-right.png"
            alt="Top Right Overlay"
            className="w-[400px] h-auto"
          />
        </div>
      </div>

      <NavBar />

      <div className="max-w-[1600px] mx-auto px-6 py-10 z-10">
        <HeroSection />
        <Clients />
        <FeatureSection />
        <ProdcutsSection />
        <BlogSection />
        <Testimonials />
      </div>

      <footer>
        <Footer />
      </footer>
    </main>
  );
}
