import { cn } from "@/lib/utils";
import Marquee from "../ui/marquee";
import Image from "next/image";

const clientsSet1 = [
  { img: "/assets/clients/Altair.png" },
  { img: "/assets/clients/annalect.png" },
  { img: "/assets/clients/birlasoft.png" },
  { img: "/assets/clients/brillio.png" },
  { img: "/assets/clients/calsoft.png" },
  { img: "/assets/clients/tcs.png" },
  { img: "/assets/clients/accenture.png" },
  { img: "/assets/clients/cognizant.png" },
  { img: "/assets/clients/cyient.png" },
  { img: "/assets/clients/emids.png" },
  { img: "/assets/clients/itc.png" },
];

const clientsSet2 = [
  { img: "/assets/clients/tm.png" },
  { img: "/assets/clients/expleo.png" },
  { img: "/assets/clients/GlobalLogic.png" },
  { img: "/assets/clients/guardian.png" },
  { img: "/assets/clients/hexaware.png" },
  { img: "/assets/clients/evry.png" },
  { img: "/assets/clients/infosys.png" },
  { img: "/assets/clients/intraedge.png" },
  { img: "/assets/clients/L&T.png" },
  { img: "/assets/clients/talent500.png" },
];

const clientsSet3 = [
  { img: "/assets/clients/netsurion.png" },
  { img: "/assets/clients/peoplefy.png" },
  { img: "/assets/clients/Mastek.png" },
  { img: "/assets/clients/persistent.png" },
  { img: "/assets/clients/quadwave.png" },
  { img: "/assets/clients/rahi.png" },
  { img: "/assets/clients/redington.png" },
  { img: "/assets/clients/tata-tech.png" },
  { img: "/assets/clients/mgneto.png" },
  { img: "/assets/clients/tavant.png" },
];

const ReviewCard = ({ img }: { img: string }) => {
  return (
    <figure
      className={cn(
        "bg-[#F5FAF9] relative flex xl:h-[106px] xl:w-[186px] lg:h-[76px] w-[126px]  cursor-pointer overflow-hidden rounded-[18px] p-4",
        "items-center justify-center hover:bg-[#e0fff9] transition-all transition-300",
      )}
    >
      <div className="flex items-center justify-center w-full h-full ">
        <Image
          className="object-contain opacity-70 hover:opacity-100 grayscale-hover grayscale transition duration-300 ease-in-out hover:grayscale-0"
          width={120}
          height={120}
          alt=""
          src={img}
        />
      </div>
    </figure>
  );
};


export function CompanySlider() {
  return (
    <div className="relative flex flex-col items-center justify-center space-y-8 bg-transparent">
      <div className="relative flex lg:h-[540px] w-full flex-row items-center justify-center overflow-hidden bg-transparent">
        <Marquee pauseOnHover vertical className="[--duration:90s]">
          {clientsSet1.map((client) => (
            <ReviewCard key={client.img} {...client} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover vertical className="[--duration:90s]">
          {clientsSet2.map((client) => (
            <ReviewCard key={client.img} {...client} />
          ))}
        </Marquee>
        <Marquee pauseOnHover vertical className="[--duration:90s]">
          {clientsSet3.map((client) => (
            <ReviewCard key={client.img} {...client} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white dark:from-background"></div>
      </div>
    </div>
  );
}