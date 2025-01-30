import { Footer } from "@/components/layout/footer";
import Image from "next/image";
import { ClientsSlider } from "@/components/sliders/clients-slider";
import ContactHero from "@/components/contact/contact-hero";
import { NavbarWhite } from "@/components/layout/navbar-white";
import { EnquiryCards } from "@/components/contact/enquiry-cards";
import { OfficeLocations } from "@/components/contact/office-locations";
import { MobileNavbarLight } from "@/components/layout/mobile-navbar-light";

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
          className="object-cover object-top xl:-translate-y-[200px] lg:-translate-y-[50px]"
        />
      </div>
      <div className="absolute inset-0 -z-10 lg:hidden block">
        <Image
          alt="gradient-bg"
          src={"/assets/contact/contact-bg-mobile.jpg"}
          quality={100}
          fill
          sizes="100vw"
          priority
          className="object-cover object-top"
        />
      </div>

      <div className="z-999">
        <NavbarWhite />
        <MobileNavbarLight />
      </div>

      <div className="md:max-w-[1600px] mx-auto px-2 lg:px-8 py-10 -z-30">
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
