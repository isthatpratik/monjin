import { Percent } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%201400003222-L2HfU6QRZoqrICs1hFcSSKWsXlk3ga.png",
    title: "Speed",
    description:
      "Forget the delays—your talent needs are met faster than ever before.",
    iconBg: "bg-[#E8F5D5]",
  },
  {
    icon: <Percent className="w-6 h-6" />,
    title: "Cost-Effective",
    description: "Save on recruitment costs without compromising on quality.",
    iconBg: "bg-[#E9E5FF]",
  },
  {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%201400003222-L2HfU6QRZoqrICs1hFcSSKWsXlk3ga.png",
    title: "Flexibility",
    description:
      "Hire based on your needs, not the calendar. Scale your workforce when it makes sense for your business.",
    iconBg: "bg-[#FFE5E5]",
  },
  {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%201400003222-L2HfU6QRZoqrICs1hFcSSKWsXlk3ga.png",
    title: "Top-Quality Professionals",
    description:
      "Confidently hire candidates who have already been vetted by industry experts. We bring you the best.",
    iconBg: "bg-[#E5F6FF]",
  },
];

export default function WhyMonjin() {
  return (
    <section className=" py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Main Heading */}
        <h1
          className="w-[829px] h-[62px] font-['Onest'] text-[48px] font-medium leading-[62.4px] tracking-[-0.06em] text-center text-black mb-4"
          style={{
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
            opacity: 1, // Note: Changed from 0 to make text visible
          }}
        >
          Why Monjin's Elite Talent Pool Works?
        </h1>

        {/* Subheading */}
        <p
          className="w-[584px] h-[22px] font-['Figtree'] text-base font-normal leading-[22px] text-center text-[#101010]/80 mb-12"
          style={{
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
            opacity: 1, // Note: Changed from 0 to make text visible
          }}
        >
          Get access to talent that's a perfect fit, every time.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-12 flex flex-col items-center"
              style={{ width: "300px", height: "300px" }} // Adjust the size as needed
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 ${feature.iconBg} rounded-2xl flex items-center justify-center mb-6`}
              >
                <Image
                  src="/placeholder.svg"
                  alt={feature.title}
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </div>

              {/* Card Heading */}
              <h2
                className="font-['Onest'] text-[28px] font-semibold leading-[46px] tracking-[-0.2px] text-center mb-2"
                style={{
                  textUnderlinePosition: "from-font",
                  textDecorationSkipInk: "none",
                }}
              >
                {feature.title}
              </h2>

              {/* Card Description */}
              <p
                className="font-['Figtree'] text- font-figtree leading-[22px] text-center text-[#828489]"
                style={{
                  textUnderlinePosition: "from-font",
                  textDecorationSkipInk: "none",
                }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
