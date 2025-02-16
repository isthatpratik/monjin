"use client";

import { useQuery } from "@tanstack/react-query";
import { useRouter, useParams } from "next/navigation";
import parse from "html-react-parser";
import { useState, useEffect } from "react";

interface JobDetail {
  id: number;
  title: string;
  description: string;
  code: string;
  location: string;
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

  if (isLoading) return <p>Loading job details...</p>;
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
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center">
        <button onClick={() => router.back()} className="text-blue-500 mb-4">
          &larr; Back
        </button>
        <div className="flex space-x-4">
          <button
            onClick={() => setShowDialog(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            disabled={isApplying}
          >
            {isApplying ? "Applying..." : "Apply"}
          </button>
          <button className="bg-gray-300 px-4 py-2 rounded-lg">Share</button>
        </div>
      </div>

<div className="grid">

      <h1 className="text-3xl font-bold">{data.title}</h1>
      <p className="text-gray-600">{data.company}</p>
      <p className="text-sm text-gray-500">{data.location}</p>
</div>

      {data.companyLogo ? (
        <img
          src={data.companyLogo}
          alt={data.company}
          className="w-20 h-20 mt-4 rounded-md"
        />
      ) : (
        <div className="w-20 h-20 mt-4 bg-gray-200 rounded-md flex items-center justify-center">
          <span className="text-gray-500">No Logo</span>
        </div>
      )}

      <div className="mt-6 border p-6 rounded-lg bg-gray-100">
        {formatJobDescription(data.description)}
      </div>

      <div className="mt-6 border p-6 rounded-lg bg-gray-100 space-y-4">
        <h2 className="text-xl font-bold">Role and Industry</h2>
        <p>
          <strong>Industry:</strong> {data.industries}
        </p>
        <p>
          <strong>Job Function:</strong> {data.jobFunction}
        </p>
        <p>
          <strong>Role:</strong> {data.role}
        </p>
        <h2 className="text-xl font-bold">
          Qualification, Experience and Skills
        </h2>
        <p>
          <strong>Overall Experience:</strong> {data.overallExperience}
        </p>
        <p>
          <strong>Skill & Experience:</strong> {data.skills}
        </p>
        <p>
          <strong>Soft Skills:</strong> {data.softSkills}
        </p>
        <p>
          <strong>Qualification:</strong> {data.qualification}
        </p>
        <h2 className="text-xl font-bold">Requirement Details</h2>
        <p>
          <strong>Location:</strong> {data.location}
        </p>
        <p>
          <strong>Employment Type:</strong> {data.jobType}
        </p>
        <p>
          <strong>Vacancy:</strong> {data.vacancy}
        </p>
        <p>
          <strong>Salary:</strong> {data.salary}
        </p>
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
  );
}
