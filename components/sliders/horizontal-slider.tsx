import { cn } from "@/lib/utils";
import Marquee from "../ui/marquee";
import Image from "next/image";

const clientsSet1 = [
  { img: "/assets/clients/accenture.png" },
  { img: "/assets/clients/Altair.png" },
  { img: "/assets/clients/annalect.png" },
  { img: "/assets/clients/birlasoft.png" },
  { img: "/assets/clients/brillio.png" },
  { img: "/assets/clients/calsoft.png" },
  { img: "/assets/clients/cognizant.png" },
  { img: "/assets/clients/cyient.png" },
  { img: "/assets/clients/emids.png" },
  { img: "/assets/clients/evry.png" },
  { img: "/assets/clients/netsurion.png" },
  { img: "/assets/clients/peoplefy.png" },
  { img: "/assets/clients/persistent.png" },
  { img: "/assets/clients/quadwave.png" },
  { img: "/assets/clients/rahi.png" },
];

const clientsSet2 = [
  { img: "/assets/clients/tm.png" },
  { img: "/assets/clients/expleo.png" },
  { img: "/assets/clients/GlobalLogic.png" },
  { img: "/assets/clients/guardian.png" },
  { img: "/assets/clients/hexaware.png" },
  { img: "/assets/clients/infosys.png" },
  { img: "/assets/clients/intraedge.png" },
  { img: "/assets/clients/itc.png" },
  { img: "/assets/clients/L&T.png" },
  { img: "/assets/clients/Mastek.png" },
  { img: "/assets/clients/mgneto.png" },
  { img: "/assets/clients/redington.png" },
  { img: "/assets/clients/talent500.png" },
  { img: "/assets/clients/tata-tech.png" },
  { img: "/assets/clients/tcs.png" },
  { img: "/assets/clients/tavant.png" },
];

const ReviewCard = ({ img }: { img: string }) => {
  return (
    <figure
      className={cn(
        "bg-[#F5FAF9] relative flex h-[100px] w-[160px] cursor-pointer overflow-hidden rounded-[18px] p-4",
        "items-center justify-center hover:bg-[#e0fff9] hover:scale-1 transition-all duration-300"
      )}
    >
      <div className="flex items-center justify-center w-full h-full">
        <Image
          className="object-contain opacity-70 hover:opacity-100 grayscale transition duration-300 ease-in-out hover:grayscale-0"
          width={100}
          height={100}
          alt=""
          src={img}
        />
      </div>
    </figure>
  );
};

export function HorizontalSlider() {
  return (
    <div className="relative flex flex-col items-center justify-center space-y-8 bg-transparent overflow-hidden">
      <div className="relative flex h-[250px] w-full flex-col items-center justify-center overflow-hidden bg-transparent">
        <Marquee pauseOnHover className="[--duration:90s] space-x-4">
          {clientsSet1.map((client) => (
            <ReviewCard key={client.img} img={client.img} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:90s] space-x-4">
          {clientsSet2.map((client) => (
            <ReviewCard key={client.img} img={client.img} />
          ))}
        </Marquee>
      </div>
    </div>
  );
}