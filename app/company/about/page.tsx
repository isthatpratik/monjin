import { Footer } from "@/components/layout/footer";
import Image from "next/image";
import { ClientsSlider } from "@/components/sliders/clients-slider";
import { NavbarProducts } from "@/components/layout/navbar-products";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/company-tabs";
import CareersHero from "@/components/careers/careers-hero-section";


export default function Careers() {
  return (
    <main className="relative min-h-screen overflow-hidden justify-center">
      <div className="absolute inset-0 -z-10">
        <Image
          alt="gradient-bg"
          src={"/assets/about/about-bg.jpg"}
          quality={100}
          fill
          sizes="100vw"
          priority
          className="object-cover object-top"
        />
      </div>

      <div className="z-999">
        <NavbarProducts />
      </div>

      <div className="md:max-w-[1600px] mx-auto px-6 py-10 -z-30">
        <Tabs className="flex flex-col justify-center max-auto items-center">
            <TabsList className="bg-white">
                <TabsTrigger value="about" className="">
                    About Us
                </TabsTrigger>
                <TabsTrigger value="team">
                    Our Team
                </TabsTrigger>
                <TabsTrigger value="culture">
                    Culture
                </TabsTrigger>
                <TabsTrigger value="careers">
                    Careers
                </TabsTrigger>
                
            </TabsList>

            <TabsContent value="about">
                
            </TabsContent>
            <TabsContent value="team">

            </TabsContent>
            <TabsContent value="culture">

            </TabsContent>
            <TabsContent value="careers">
                <CareersHero />
                
            </TabsContent>
        </Tabs>
      </div>

      <div className="md:max-w-[1600px] mx-auto px-6 py-10 -z-30">
        
      </div>

      <footer>
        <ClientsSlider />
        <Footer />
      </footer>
    </main>
  );
}
