import AvatarCircles from "./ui/avatar-circles";
import { CompanySlider } from "./company-slider";
import { HorizontalSlider } from "./horizontal-slider";

const avatars = [
  {
    imageUrl: "/assets/avatars/avatar-1.png",
    profileUrl: "/",
  },
  {
    imageUrl: "/assets/avatars/avatar-2.png",
    profileUrl: "/",
  },
  {
    imageUrl: "/assets/avatars/avatar-3.png",
    profileUrl: "/",
  },
];

export function Clients() {
  return (
    <div className="mt-20 bg-[#FFFFFF] rounded-3xl md:p-12 self-center">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-1/2 md:max-w-xl mx-0 md:mx-10 px-6 pt-6">
          <div className="flex flex-col sm:flex-row gap-2 mb-4 md:mb-6 w-full">
            <div className="text-black text-sm flex flex-row items-center gap-2 w-full md:justify-start justify-center">
              <AvatarCircles avatarUrls={avatars} />
              <h3 className="font-figtree font-medium text-xs md:text-lg text-center ">17+ professionals hired this week</h3>
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl text-center md:text-left font-Onest font-medium text-[#262628] mb-6 tracking-tighter mt-6 max-w-xl">
            Enabling Global Leaders to Build Exceptional Teams
          </h2>
          <p className="text-sm text-[#0D0E11] md:mb-8 font-figtree text-center md:text-left font-regular max-w-sm flex-wrap mt-2 md:mt-4">
            Join the ranks of top companies worldwide who trust us for expert assessments and streamlined hiring.
          </p>
        </div>

        <div className="w-full md:w-1/2 mt-2 md:mt-0 relative overflow-hidden">
          <div className="block md:hidden overflow-hidden py-6">
            <HorizontalSlider />
          </div>
          <div className="hidden md:block">
            <CompanySlider />
          </div>
        </div>
      </div>
    </div>
  );
}

