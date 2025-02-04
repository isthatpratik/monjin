import { cn } from "@/lib/utils";
import Marquee from "../ui/marquee";
import Image from "next/image";

const clientsSet1 = [
  { img: "/assets/clients/accenture.png" },
  { img: "/assets/clients/Altair.png" },
  { img: "/assets/clients/annalect.png" },
  { img: "/assets/clients/birlasoft.png" },
  { img: "/assets/clients/tcs.png" },
  { img: "/assets/clients/brillio.png" },
  { img: "/assets/clients/calsoft.png" },
  { img: "/assets/clients/cognizant.png" },
  { img: "/assets/clients/cyient.png" },
  { img: "/assets/clients/emids.png" },
  { img: "/assets/clients/netsurion.png" },
  { img: "/assets/clients/peoplefy.png" },
  { img: "/assets/clients/persistent.png" },
  { img: "/assets/clients/quadwave.png" },
  { img: "/assets/clients/rahi.png" },
  { img: "/assets/clients/tm.png" },
  { img: "/assets/clients/expleo.png" },
  { img: "/assets/clients/GlobalLogic.png" },
  { img: "/assets/clients/guardian.png" },
  { img: "/assets/clients/hexaware.png" },
  { img: "/assets/clients/tt.png" },
  { img: "/assets/clients/infosys.png" },
  { img: "/assets/clients/intraedge.png" },
  { img: "/assets/clients/itc.png" },
  { img: "/assets/clients/L&T.png" },
  { img: "/assets/clients/evry.png" },
  { img: "/assets/clients/Mastek.png" },
  { img: "/assets/clients/mgneto.png" },
  { img: "/assets/clients/redington.png" },
  { img: "/assets/clients/talent500.png" },
  { img: "/assets/clients/tavant.png" },
];

const ReviewCard = ({ img }: { img: string }) => {
  return (
    <figure
      className={cn(
        "relative flex lg:h-[80px] lg:w-[140px] h-[60px] w-[100px] overflow-visible rounded-[18px] lg:p-4 md:p-2 p-0 xl:scale-125 lg:scale-125 lg:m-6 m-1",
        "items-center justify-center grayscale"
      )}
    >
      <div className="flex items-center justify-center w-full h-full">
        <Image
          className="object-contain"
          quality={30}
          width={100}
          height={100}
          alt=""
          src={img}
          priority
        />
      </div>
    </figure>
  );
};

export function PricingSlider() {
  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden w-full mb-12 py-3 bg-white rounded-[18px] px-4 md:px-8 max-w-screen-xl mx-auto">
      {/* Fade effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-2% from-white via-transparent to-white to-98% z-10" />
      
      <div className="relative flex h-auto w-full flex-col items-center justify-center overflow-hidden mt-6 gap-2">
        <div className="flex items-center justify-center lg:w-[80%] md:w-full w-full relative">
          <div className="flex items-center justify-center w-full relative">
            <p className="lg:text-[27px] text-xs font-onest font-semibold text-center leading-tight lg:mx-4 lg:px-2 px-2 w-max z-999">
              Enabling Global Leaders to Build Exceptional Teams
            </p>
          </div>
        </div>
        <Marquee
          className="[--duration:90s] xl:space-x-10 lg:space-x-8 space-x-4 flex-no-wrap w-full"
        >
          {clientsSet1.map((client) => (
            <ReviewCard key={client.img} img={client.img} />
          ))}
        </Marquee>
      </div>
    </div>
  );
}
