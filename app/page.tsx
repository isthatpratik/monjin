import { MessageSquare, Gauge, Calendar } from "lucide-react";
import { NavBar } from "@/components/navbar";
import { FeatureCard } from "@/components/feature-card";
import { ProfileGrid } from "@/components/profile-grid";
import { CompanyLogos } from "@/components/company-logos";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { HeroBackground } from "@/components/hero-background";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden relative">
      {/* Page Content */}

      <NavBar />

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-[86px] font-medium text-white mb-6 leading-tight tracking-tighter">
            Hire Top Talent Faster with Expert Interviews
          </h1>
          <p className="text-gray-400 mb-8 max-w-[20vw] mx-auto font-figtree font-light">
            Lorem ipsum dolor sit amet consectetur. Urna urna egestas bibendum
            sit. Rem ipsum dolor sit amet consectetur.
          </p>
          <Button className="bg-[#D3F56A] text-black hover:bg-[#c1e356] text-lg px-8 py-6 rounded-[50]">
            Get started
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-20">
          <FeatureCard
            imageSrc="/assets/feature-1.png"
            title="Lorem ipsum dolor"
            subtitle="Practitioner Program"
          />
          <FeatureCard
            imageSrc="/assets/feature-2.png"
            title="Lorem ipsum dolor"
            subtitle="of hybrid learning"
          />
          <FeatureCard
            imageSrc="/assets/feature-3.png"
            title="Lorem ipsum dolor"
            subtitle="every Sunday"
          />
        </div>

        <ProfileGrid />
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[180vw] h-[100%] bg-[#16171D] blur-[300px] rounded-[60%] -z-20 mix-blend-screen"></div>
          <div className="absolute top-[45%] w-1/3 h-[30%] bg-[#F26B64] opacity-40 rounded-full blur-3xl mix-blend-screen"></div>
          <div className="absolute top-[40%] left-1/3 w-1/3 h-[40%] bg-[#D0F16C] opacity-40 rounded-full blur-3xl"></div>
          <div className="absolute top-[35%] left-2/3 w-1/3 h-[50%] bg-[#9F8AFF] opacity-50 rounded-full blur-3xl"></div>
        </div>

        <div className="mt-20 bg-[#F5FAF9] rounded-3xl p-12">
          <div className="max-w-xl">
            <div className="flex gap-2 mb-6">
              <Image
                src="/placeholder.svg"
                alt="Avatar 1"
                width={32}
                height={32}
                className="rounded-full"
              />
              <Image
                src="/placeholder.svg"
                alt="Avatar 2"
                width={32}
                height={32}
                className="rounded-full"
              />
              <Image
                src="/placeholder.svg"
                alt="Avatar 3"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="text-black text-sm">
                17+ professionals hired this week
              </span>
            </div>

            <h2 className="text-4xl font-bold text-white mb-4">
              Hire Top Talent Faster with Expert Interviews
            </h2>
            <p className="text-gray-400 mb-8">
              We are live across 150+ global projects helping them acquire &
              engage quality users for their platform.
            </p>
            <Button className="bg-[#8B5CF6] text-white hover:bg-[#7C3AED]">
              Get started
            </Button>
          </div>
        </div>

        <CompanyLogos />
      </div>
    </main>
  );
}
