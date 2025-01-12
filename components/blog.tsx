import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function BlogSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-6xl font-medium mb-4 font-Onest text-[#1D1E23]">Outcome Chronicle</h1>
        <p className="text-[#1D1E23] max-w-3xl mx-auto font-figtree text-base">
          Explore how our partnerships have sparked innovation, driving
          exceptional results and redefining success
        </p>
      </div>

      {/* Custom Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* First Card - 40% width */}
        <div className="md:col-span-2 bg-[#F7FAF9] rounded-2xl p-2 shadow-lg relative group cursor-pointer flex flex-col justify-between transition-all duration-300 transform hover:scale-102 hover:shadow-xl hover:translate-x-1 hover:translate-y-1">
          <div className="absolute -top-4 -right-4 rounded-full p-2 bg-white ">
            <div className="bg-[#f8f8e8] p-6 rounded-full group-hover:bg-[#f0f0d8] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:shadow-md">
              <ArrowUpRight className="w-6 h-6 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </div>
          </div>
          <div className="bg-white rounded-2xl h-full flex flex-col">
            {/* Image Section - 60% Height */}
            <div className="flex-1 align-middle flex p-2">
              <Image
                src="/assets/blog-images/blog-1.png"
                alt="Empower Professionals Logo"
                width={120}
                height={72}
                className="object-contain"
              />
            </div>
            {/* Title and Description Section - 40% Height */}
            <div className="flex flex-col justify-end p-4 my-2">
              <h2 className="text-2xl font-medium mb-2 font-figtree">
                Quality hiring for the digital skills
              </h2>
              <p className="text-[#636671] text-sm font-figtree">
                Delivering higher selection ratio
              </p>
            </div>
          </div>
        </div>

        {/* Second Card - 60% width */}
        <div className="md:col-span-3 bg-[#F7FAF9] rounded-2xl p-2 shadow-lg relative group cursor-pointer flex flex-col justify-between transition-all duration-300 transform hover:scale-102 hover:shadow-xl hover:translate-x-1 hover:translate-y-1">
          <div className="absolute -top-4 -right-4 rounded-full p-2 bg-white ">
            <div className="bg-[#f8f8e8] p-6 rounded-full group-hover:bg-[#f0f0d8] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:shadow-md">
              <ArrowUpRight className="w-6 h-6 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </div>
          </div>
          <div className="bg-white rounded-2xl h-full flex flex-col">
            {/* Image Section - 60% Height */}
            <div className="flex-1 align-middle flex p-2">
              <Image
                src="/assets/blog-images/blog-2.png"
                alt="Sears Holdings Logo"
                width={240}
                height={144}
                className="object-contain"
              />
            </div>
            {/* Title and Description Section - 40% Height */}
            <div className="flex flex-col justify-end p-4 my-2">
              <h2 className="text-2xl font-medium mb-2 font-figtree">
                Futuristic Hiring Route
              </h2>
              <p className="text-[#636671] text-sm font-figtree">
                To resolve talent acquisition challenges in the Retail Industry
              </p>
            </div>
          </div>
        </div>

        {/* Third Card - 60% width */}
        <div className="md:col-span-3 bg-[#F7FAF9] rounded-2xl p-2 shadow-lg relative group cursor-pointer flex flex-col justify-between transition-all duration-300 transform hover:scale-102 hover:shadow-xl hover:translate-x-1 hover:translate-y-1">
          <div className="absolute -top-4 -right-4 rounded-full p-2 bg-white ">
            <div className="bg-[#f8f8e8] p-6 rounded-full group-hover:bg-[#f0f0d8] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:shadow-md">
              <ArrowUpRight className="w-6 h-6 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </div>
          </div>
          <div className="bg-white rounded-2xl h-full flex flex-col">
            {/* Image Section - 60% Height */}
            <div className="flex-1 flex align-middle p-4">
              <Image
                src="/assets/blog-images/blog-3.png"
                alt="DXC Technology Logo"
                width={480}
                height={144}
                className="object-contain"
              />
            </div>
            {/* Title and Description Section - 40% Height */}
            <div className="flex flex-col justify-end p-4 my-2">
              <h2 className="text-2xl font-medium mb-2 font-figtree">
                Propelling Hiring Demands
              </h2>
              <p className="text-[#636671] text-sm font-figtree">
                In the Information Technology Space
              </p>
            </div>
          </div>
        </div>

        {/* Fourth Card - 40% width */}
        <div className="md:col-span-2 bg-[#F7FAF9] rounded-2xl p-2 shadow-lg shadow-[#1E335E]/15 relative group cursor-pointer flex flex-col justify-between transition-all duration-300 transform hover:scale-102 hover:shadow-xl hover:translate-x-1 hover:translate-y-1">
          <div className="absolute -top-4 -right-4 rounded-full p-2 bg-white ">
            <div className="bg-[#f8f8e8] p-6 rounded-full group-hover:bg-[#f0f0d8] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:shadow-md">
              <ArrowUpRight className="w-6 h-6 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </div>
          </div>
          <div className="bg-white rounded-2xl h-full flex flex-col">
            {/* Image Section - 60% Height */}
            <div className="flex-1 align-middle flex p-2">
              <Image
                src="/assets/blog-images/blog-4.png"
                alt="Persistent Logo"
                width={180}
                height={72}
                className="object-contain"
              />
            </div>
            {/* Title and Description Section - 40% Height */}
            <div className="flex flex-col justify-end p-4 my-2">
              <h2 className="text-2xl font-medium mb-2 font-figtree">
                On-demand Panels for Neutrally Assessed Candidates
              </h2>
              <p className="text-[#636671] text-sm font-figtree">
                In the Information Technology Space
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
