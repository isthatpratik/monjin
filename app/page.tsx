import { MessageSquare, Gauge, Calendar } from 'lucide-react';
import { NavBar } from "@/components/navbar"
import { FeatureCard } from "@/components/feature-card"
import { ProfileGrid } from "@/components/profile-grid"
import { CompanyLogos } from "@/components/company-logos"
import { Button } from "@/components/ui/button"
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-rose-500/20 via-green-500/20 to-violet-500/20 backdrop-blur-3xl">
      <div className="absolute inset-0 bg-black/80 -z-10" />
      
      <NavBar />
      
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-medium text-white mb-6 leading-tight tracking-tighter">
            Hire Top Talent Faster with Expert Interviews
          </h1>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto font-figtree font-light">
            Lorem ipsum dolor sit amet consectetur. Urna urna egestas bibendum sit. Rem ipsum dolor sit amet consectetur.
          </p>
          <Button className="bg-[#D3F56A] text-black hover:bg-[#c1e356] text-lg px-8 py-6 rounded-[50]">
            Get started
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-20">
          <FeatureCard 
            icon={MessageSquare}
            title="Lorem ipsum dolor"
            subtitle="Practitioner Program"
          />
          <FeatureCard 
            icon={Gauge}
            title="Lorem ipsum dolor"
            subtitle="of hybrid learning"
          />
          <FeatureCard 
            icon={Calendar}
            title="Lorem ipsum dolor"
            subtitle="every Sunday"
          />
        </div>

        <ProfileGrid />

        <div className="mt-20 bg-white/5 backdrop-blur-xl rounded-3xl p-12">
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
              <span className="text-white/70 text-sm">17+ professionals hired this week</span>
            </div>
            
            <h2 className="text-4xl font-bold text-white mb-4">
              Hire Top Talent Faster with Expert Interviews
            </h2>
            <p className="text-gray-400 mb-8">
              We are live across 150+ global projects helping them acquire & engage quality users for their platform.
            </p>
            <Button className="bg-[#8B5CF6] text-white hover:bg-[#7C3AED]">
              Get started
            </Button>
          </div>
        </div>

        <CompanyLogos />
      </div>
    </main>
  )
}

