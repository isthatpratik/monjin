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
        "bg-transparent relative flex lg:h-[80px] lg:w-[140px] h-[60px] w-[100px] overflow-visible rounded-[18px] lg:p-4 md:p-2 p-0 xl:scale-125 lg:scale-125 lg:m-6 m-1",
        "items-center justify-center grayscale opacity-70"
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

export function ClientsSlider() {
  return (
    <div className="relative flex flex-col items-center justify-center bg-transparent overflow-hidden w-full pt-3">
      <div className="relative flex h-auto w-full flex-col items-center justify-center overflow-hidden bg-transparent gap-2">
        <div className="flex items-center justify-center lg:w-[80%] md:w-full w-full relative">
          <div className="flex items-center justify-center w-full relative">
            {/* Left Line */}
            <div className="h-0.5 xl:w-1/3 lg:w-1/3 w-1/3 bg-gradient-to-r from-transparent to-[#666666]/50"></div>

            {/* Center Text */}
            <p className="lg:text-[18px] text-xs font-figtree text-[#5E5E5E] text-center leading-tight lg:mx-4 lg:px-2 px-2 w-max">
              Enabling Global Leaders to Build Exceptional Teams
            </p>

            {/* Right Line */}
            <div className="h-0.5 xl:w-1/3 lg:w-1/3 w-1/3 bg-gradient-to-l from-transparent to-[#666666]/50"></div>
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
