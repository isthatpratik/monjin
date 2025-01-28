import { Footer } from "@/components/layout/footer";
import Image from "next/image";
import { ClientsSlider } from "@/components/sliders/clients-slider";
import { Navbar } from "@/components/layout/navbar";
import PricingForm from "@/components/pricing/pricing-form";

export default function Pricing() {
  return (
    <main className="relative min-h-screen overflow-hidden justify-center">
      <div className="absolute inset-0 -z-10">
        <Image
          alt="gradient-bg"
          src={"/assets/contact/contact-bg.jpg"}
          quality={100}
          fill
          sizes="100vw"
          priority
          className="object-cover object-top xl:-translate-y-[200px] lg:-translate-y-[50px]"
        />
      </div>

      <div className="z-999">
        <Navbar />
      </div>

      <div className="md:max-w-[1600px] mx-auto px-6 py-10 -z-30">
        <PricingForm />
      </div>

      <footer>
        <ClientsSlider />
        <Footer />
      </footer>
    </main>
  );
}
