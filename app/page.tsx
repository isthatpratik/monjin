import { NavBar } from "@/components/navbar";
import { Clients } from "@/components/clients";
import { HeroSection } from "@/components/hero-section";
import FeatureSection from "@/components/feature-section";
import ProdcutsSection from "@/components/products-section";
import BlogSection from "@/components/blog";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden relative">

      <NavBar />
      
      <div className="max-w-[1600px] mx-auto px-6 py-10 z-10">
        <HeroSection />
        <Clients />
        <FeatureSection />
        <ProdcutsSection />
        <BlogSection />
        <div>
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-[-35%] left-1/2 -translate-x-1/2 md:w-[200vw] h-5/6 bg-[#16171D] blur-[200px] rounded-[60%] -z-30"></div>
            <div className="absolute top-[75vh] -left-[15%] w-[60%] h-[50%] bg-[#F26B64] opacity-30 rounded-full filter blur-[150px] animate-blob1 animation-delay-2000 mix-blend-lighten"></div>
            <div className="absolute top-[75vh] left-1/3 w-[60%] h-[50%] bg-[#D0F16C] opacity-30 rounded-full filter blur-[150px] animate-blob2 animation-delay-1000 mix-blend-lighten"></div>
            <div className="absolute top-[60vh] left-2/3 w-[70%] h-[25%] bg-[#9F8AFF] opacity-40 rounded-full filter blur-[150px] animate-blob3 "></div>
            <div className="absolute top-[120vh] left-1/2 -translate-x-1/2 md:w-[200vw] h-1/2 bg-[#F5FAF8] blur-[200px] rounded-[60%] opacity-90 filer mix-blend-"></div>
          </div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}
