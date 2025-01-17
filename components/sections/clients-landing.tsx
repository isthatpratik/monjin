import AvatarCircles from "../ui/avatar-circles";
import { CompanySlider } from "../sliders/company-slider";
import { HorizontalSlider } from "../sliders/horizontal-slider";

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
    <div className="mt-20 bg-[#FFFFFF] rounded-3xl lg:p-12 self-center">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="w-full lg:w-1/2 lg:max-w-xl mx-0 lg:mx-10 px-6 pt-6 md:w-full">
          <div className="flex flex-col sm:flex-row gap-2 mb-4 lg:mb-6 w-full">
            <div className="text-black text-sm flex flex-row items-center gap-2 w-full lg:justify-start justify-center">
              <AvatarCircles avatarUrls={avatars} />
              <h3 className="font-figtree font-medium text-xs md:text-md lg:text-lg text-center md:text-base">25+ professionals hired this week</h3>
            </div>
          </div>

          <h2 className="text-3xl lg:text-5xl text-center md:text-center lg:text-left font-Onest font-medium text-[#262628] mb-6 tracking-tighter mt-6 max-w-xl md:max-w-full md:px-12 lg:px-0">
            Enabling Global Leaders to Build Exceptional Teams
          </h2>
          <p className="text-sm text-[#0D0E11] lg:mb-8 font-figtree text-center md:text-center lg:text-left font-regular max-w-sm md:max-w-full flex-wrap mt-2 lg:mt-4 md:px-12 lg:px-0">
            Join the ranks of top companies worldwide who trust us for expert assessments and streamlined hiring.
          </p>
        </div>

        <div className="w-full lg:w-1/2 mt-2 md:mt-0 relative overflow-hidden">
          <div className="block lg:hidden overflow-hidden py-6">
            <HorizontalSlider />
          </div>
          <div className="hidden lg:block">
            <CompanySlider />
          </div>
        </div>
      </div>
    </div>
  );
}

