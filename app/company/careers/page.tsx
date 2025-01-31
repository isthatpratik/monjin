import { Footer } from "@/components/layout/footer";
import Image from "next/image";
import { ClientsSlider } from "@/components/sliders/clients-slider";
import CareersHero from "@/components/careers/careers-hero-section";
import WhyChooseMonjin from "@/components/careers/why-choose-monjin";
import { NavbarProducts } from "@/components/layout/navbar-products";
import CareerOpportunities from "@/components/careers/career-opportunities";
import ApplyForm from "@/components/careers/apply";

export default function Careers() {
  return (
    <main className="relative min-h-screen overflow-hidden justify-center">
      <div className="absolute inset-0 -z-10">
        <Image
          alt="gradient-bg"
          src={"/assets/careers/careers-bg.jpg"}
          quality={100}
          fill
          sizes="100vw"
          priority
          className="object-cover object-top"
        />
      </div>

        <div className="bg-white">
      <NavbarProducts />

        </div>

      <div className="md:max-w-[1600px] mx-auto px-6 py-10">
        <CareersHero />
        <WhyChooseMonjin />
        <CareerOpportunities />
        <ApplyForm />
      </div>

      <footer>
        <ClientsSlider />
        <Footer />
      </footer>
    </main>
  );
}
