import { NavBar } from "@/components/navbar";
import { Clients } from "@/components/clients";
import { HeroSection } from "@/components/hero-section";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden relative">
      {/* Page Content */}

      <NavBar />

      <div className="max-w-[1600px] mx-auto px-6 py-20 z-10">
        <HeroSection />

        <Clients />

        <div>
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-[-35%] left-1/2 -translate-x-1/2 md:w-[200vw] h-[115%] bg-[#16171D] blur-[200px] rounded-[60%] -z-30"></div>
            <div className="absolute top-[40%] -left-[15%] w-[60%] h-[60%] bg-[#F26B64] opacity-30 rounded-full filter blur-[150px] animate-blob1 animation-delay-2000"></div>
            <div className="absolute top-[40%] left-1/3 w-[60%] h-[60%] bg-[#D0F16C] opacity-30 rounded-full filter blur-[150px] animate-blob2 animation-delay-1000 mix-blend-normal"></div>
            <div className="absolute top-[40%] left-2/3 w-[70%] h-[70%] bg-[#9F8AFF] opacity-40 rounded-full filter blur-[150px] animate-blob3 "></div>
          </div>
        </div>
      </div>
    </main>
  );
}
