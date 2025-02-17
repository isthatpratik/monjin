"use client";

import { useQuery } from "@tanstack/react-query";
import { useRouter, useParams } from "next/navigation";
import parse from "html-react-parser";
import { useState, useEffect } from "react";
import Image from "next/image";
import { NavbarBlack } from "@/components/layout/navbar-black";
import { MobileNavbarDark } from "@/components/layout/mobile-navbar-dark";
import { Clock, MapPin } from "lucide-react";
import { ClientsSlider } from "@/components/sliders/clients-slider";
import { Footer } from "@/components/layout/footer";
import { Skeleton } from "@/components/ui/skeleton";

interface JobDetail {
  id: number;
  title: string;
  description: string;
  code: string;
  locations: { city: string }[];
  minExpInYears: number;
  maxExpInYears: number;
  company: string;
  companyDescription: string;
  companyLogo: string | null;
  videoUrl: string | null;
  industries: string;
  jobFunction: string;
  role: string;
  overallExperience: string;
  skills: string;
  softSkills: string;
  qualification: string;
  jobType: string;
  vacancy: number;
  salary: string;
  aId: number;
  sCId: number;
}

const fetchJobDetails = async (code: string): Promise<JobDetail> => {
  const res = await fetch(`/api/jobs/${code}`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch job details");
  return res.json();
};

const formatJobDescription = (description: string) => {
  let formattedDesc = description.replace(/<br\s*\/?>/g, "\n");
  formattedDesc = formattedDesc.replace(
    /<strong>(.*?)<\/strong>/g,
    `<h2 class="text-xl font-bold mt-6 mb-2">$1</h2>`
  );
  formattedDesc = formattedDesc.replace(
    /(Experience Level.*?):/g,
    `\n\n<h2 class="text-xl font-bold mt-8 mb-2">$1:</h2>`
  );
  formattedDesc = formattedDesc.replace(
    /<ul>/g,
    `<ul class="list-disc list-inside ml-5 mt-2 space-y-1">`
  );
  formattedDesc = formattedDesc.replace(/<li>/g, `<li class="block">`);
  formattedDesc = formattedDesc.replace(/<\/li>/g, `</li>\n`);
  return parse(formattedDesc);
};

export default function JobDetailPage() {
  const router = useRouter();
  const params = useParams();
  const [code, setCode] = useState<string | null>(null);
  const [isApplying, setIsApplying] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dialCode: "91",
    contactNumber: "",
  });

  useEffect(() => {
    if (params?.code) {
      setCode(params.code as string);
    }
  }, [params]);

  const { data, isLoading, isError } = useQuery<JobDetail>({
    queryKey: ["jobDetail", code],
    queryFn: () => fetchJobDetails(code!),
    staleTime: 5000,
  });

  if (isLoading) return (
    <div className="flex items-center justify-center ">
      {[...Array(1)].map((_, i) => (
        <Skeleton
          key={i}
          className="h-20 w-auto lg:rounded-3xl rounded-2xl"
        />
      ))}
    </div>
  );
  if (isError || !data) return <p>Error loading job details.</p>;

  const handleApply = async () => {
    setIsApplying(true);

    const payload = {
      firstName: formData.firstName.trim(),
      lastName: formData.lastName.trim(),
      email: formData.email.trim(),
      dialCode: formData.dialCode.trim(),
      contactNumber: formData.contactNumber.trim(),
      jobDescriptionId: data.id,
      apexBusinessModelId: data.aId,
      aId: data.aId,
      sCId: data.sCId,
      sourceType: "website",
    };

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      console.log("API Response:", result); // Debugging response

      if (result.success) {
        router.push(result.invitationURL);
      } else {
        alert(result.error || "Application failed. Please try again.");
      }
    } catch (error) {
      alert("Application failed. Please try again.");
    } finally {
      setIsApplying(false);
      setShowDialog(false);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 -z-20 lg:hidden">
        <Image
          alt="gradient-mobile-bg"
          src={"/assets/jobs/all-openings-mobile.jpg"}
          quality={100}
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 -z-20 lg:block hidden md:block">
        <Image
          alt="gradient-web-bg"
          src={"/assets/jobs/all-openings-web.jpg"}
          quality={100}
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      <NavbarBlack />
      <MobileNavbarDark />

      <div className="p-4 lg:p-12 max-w-screen-xl bg-white rounded-2xl lg:rounded-3xl mx-auto py-4 lg:my-16">
        <div className="flex space-y-4 justify-between">
          <div className="grid space-y-4">
            <h1 className="text-xl lg:text-5xl font-onest font-medium tracking-tighter">
              {data.title}
            </h1>
            <p className="text-gray-600">{data.company}</p>
            <div className="flex gap-4 lg:gap-8 pt-2 lg:pt-4">
              <div className="flex items-center gap-1 lg:gap-2">
                <MapPin className="w-4 h-4" />
                <p className="text-[10px] lg:text-base font-onest font-normal text-[#141414]/70 flex items-center">
                  {data.locations.map((loc) => loc.city).join(", ") ||
                    "Location not available"}
                </p>
              </div>
              <div className="flex items-center gap-1 lg:gap-2">
                <Clock className="w-4 h-4" />
                <p className="text-[10px] lg:text-base font-onest font-normal text-[#141414]/70 flex items-center">
                  {data.jobType}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex-1 space-x-4">
              <button
                onClick={() => setShowDialog(true)}
                className="bg-[#141414] text-white px-4 py-2 lg:px-12 lg:py-4 rounded-xl shadow-xl"
                disabled={isApplying}
              >
                {isApplying ? "Applying..." : "Apply"}
              </button>
            </div>
          </div>
        </div>

        {/* {data.companyLogo ? (
          <div className="bg-gray-500 p-4 my-4 w-fit rounded-3xl">
            <Image
              src={data.companyLogo}
              alt={data.company}
              height={200}
              width={200}
              className="w-40 h-auto object-contain"
            />
          </div>
        ) : (
          <div className="w-20 h-20 mt-4 bg-gray-200 rounded-md flex items-center justify-center">
            <span className="text-gray-500">No Logo</span>
          </div>
        )} */}

        <div className="font-figtree lg:text-lg text-sm border-b border-[#9F8AFF] lg:py-8">
          {formatJobDescription(data.description)}
        </div>

        <div className="mt-8 space-y-8 py-6">
          <div className="flex-1 flex flex-col space-y-4 border-b border-[#9F8AFF] pb-6 lg:pb-10">
            <h2 className="lg:text-[28px] text-base font-semibold font-onest mb-4">
              Role and Industry
            </h2>
            <div className="flex flex-col lg:flex-row justify-between max-w-[80%] gap-4">
              <div className="flex flex-col space-y-4">
                <p className="font-onest font-medium text-sm lg:text-xl flex flex-col text-[#0D0E11]/50">
                  Role
                </p>
                <span className="font-onest font-normal">{data.role}</span>
              </div>
              <div className="flex flex-col space-y-4">
                <p className="font-onest text-sm flex flex-col font-medium lg:text-xl text-[#0D0E11]/50">
                  Industry
                </p>
                <span>{data.industries}</span>
              </div>
              <div className="flex flex-col space-y-4">
                <p className="font-onest flex flex-col font-medium text-sm lg:text-xl text-[#0D0E11]/50">
                  Job Function
                </p>
                <span>{data.jobFunction}</span>
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col space-y-4 border-b border-[#9F8AFF] py-6 lg:py-8">
            <h2 className="lg:text-[28px] text-base font-semibold font-onest mb-4">
              Qualification, Experience and Skills
            </h2>
            <div className="flex flex-col lg:flex-row justify-between max-w-[80%] gap-4">
              <div className="flex flex-col space-y-4">
                <p className="font-onest font-medium text-sm lg:text-xl flex flex-col text-[#0D0E11]/50">
                  Overall Experience
                </p>
                <span className="font-onest font-normal">{data.overallExperience}</span>
              </div>
              <div className="flex flex-col space-y-4">
                <p className="font-onest text-sm flex flex-col font-medium lg:text-xl text-[#0D0E11]/50">
                  Skill & Experience
                </p>
                <span>{data.skills}</span>
              </div>
              <div className="flex flex-col space-y-4">
                <p className="font-onest flex flex-col font-medium text-sm lg:text-xl text-[#0D0E11]/50">
                  Soft Skills
                </p>
                <span>{data.softSkills}</span>
              </div>
              <div className="flex flex-col space-y-4">
                <p className="font-onest flex flex-col font-medium text-sm lg:text-xl text-[#0D0E11]/50">
                  Qualification
                </p>
                <span>{data.qualification}</span>
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col space-y-4 pb-6 lg:pb-10">
            <h2 className="lg:text-[28px] text-base font-semibold font-onest mb-4">
              Requirement Details
            </h2>
            <div className="flex flex-col lg:flex-row justify-between max-w-[80%] gap-4">
              <div className="flex flex-col space-y-4">
                <p className="font-onest font-medium text-sm lg:text-xl flex flex-col text-[#0D0E11]/50">
                  Location
                </p>
                <span className="font-onest font-normal">
                  {data.locations.map((loc) => loc.city).join(", ") ||
                    "Location not available"}
                </span>
              </div>
              <div className="flex flex-col space-y-4">
                <p className="font-onest text-sm flex flex-col font-medium lg:text-xl text-[#0D0E11]/50">
                  Vacancy
                </p>
                <span>{data.vacancy}</span>
              </div>
              <div className="flex flex-col space-y-4">
                <p className="font-onest flex flex-col font-medium text-sm lg:text-xl text-[#0D0E11]/50">
                  Salary
                </p>
                <span>{data.salary}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Application Dialog */}
        {showDialog && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
              <h2 className="text-xl font-bold mb-4">Apply for {data.title}</h2>
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-2 border rounded mb-2"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-2 border rounded mb-2"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border rounded mb-2"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <div className="flex space-x-2">
                {/* Dial Code Selector */}
                <select
                  className="w-1/4 p-2 border rounded"
                  value={formData.dialCode}
                  onChange={(e) =>
                    setFormData({ ...formData, dialCode: e.target.value })
                  }
                >
                  <option value="91">+91 🇮🇳</option>
                  <option value="1">+1 🇺🇸</option>
                  <option value="44">+44 🇬🇧</option>
                  <option value="61">+61 🇦🇺</option>
                  <option value="971">+971 🇦🇪</option>
                  {/* Add more country codes if needed */}
                </select>

                {/* Phone Number Input */}
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-3/4 p-2 border rounded"
                  value={formData.contactNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, contactNumber: e.target.value })
                  }
                />
              </div>
              <div className="flex justify-end space-x-2 mt-4">
                <button
                  onClick={() => setShowDialog(false)}
                  className="bg-gray-300 px-4 py-2 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  onClick={handleApply}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <ClientsSlider />
      <Footer />
    </main>
  );
}
