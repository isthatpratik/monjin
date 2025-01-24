import { Footer } from "@/components/layout/footer";
import Image from "next/image";
import { ClientsSlider } from "@/components/sliders/clients-slider";
import ContactHero from "@/components/contact/contact-hero";
import { Navbar } from "@/components/layout/navbar";
import { EnquiryCards } from "@/components/contact/enquiry-cards";
import { OfficeLocations } from "@/components/contact/office-locations";

export default function Careers() {
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
          className="object-cover object-top"
        />
      </div>

      <div className="z-999">
        <Navbar />
      </div>

      <div className="md:max-w-[1600px] mx-auto px-6 py-10 -z-30">
        <ContactHero />
        <EnquiryCards />
        <OfficeLocations />
      </div>

      <footer>
        <ClientsSlider />
        <Footer />
      </footer>
    </main>
  );
}
