import AvatarCircles from "./ui/avatar-circles";
import { CompanySlider } from "./company-slider";

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
    <div className="mt-20 bg-[#FFFFFF] rounded-3xl p-12 max-h-1/3 self-center">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="max-w-xl md:w-1/2 mx-10">
          <div className="flex gap-2 mb-6">
            <div className="text-black text-sm flex flex-row items-center gap-2">
              <AvatarCircles avatarUrls={avatars} />
              <h3 className="font-figtree font-medium">17+ professionals</h3>
              <p className="font-figtree font-light">hired this week</p>
            </div>
          </div>

          <h2 className="text-5xl font-Onest font-medium text-[#262628] mb-4 max-w-xl tracking-tighter">
            Enabling Global Leaders to Build Exceptional Teams
          </h2>
          <p className="text-sm text-[#0D0E11] mb-8 font-figtree font-regular max-w-sm felx-wrap mt-4">
            Join the ranks of top companies worldwide who trust us for expert
            assessments and streamlined hiring.
          </p>
        </div>

        <div className="md:w-1/2 mt-10 md:mt-0">
          <CompanySlider />
        </div>
      </div>
    </div>
  );
}
