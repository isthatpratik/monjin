"use client";

import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface Job {
  code: string;
  title: string;
  description: string;
  company: string;
  companyLogo: string | null;
}

// Function to fetch jobs from API
const fetchJobs = async () => {
  const res = await fetch("/api/jobs", { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch jobs");
  return res.json();
};

export default function ViewJobs() {
  const router = useRouter();

  // Use React Query to fetch data
  const { data: jobs, isLoading, isError, refetch } = useQuery({
    queryKey: ["jobs"],
    queryFn: fetchJobs,
    refetchInterval: 50000, // Auto-refresh every 100 seconds
  });

  const truncateDescription = (text: string, maxLength = 100) => {
    const strippedText = text.replace(/<\/?[^>]+(>|$)/g, ""); // Remove HTML tags
    return strippedText.length > maxLength
      ? `${strippedText.substring(0, maxLength)}...`
      : strippedText;
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Available Jobs</h1>

      <button
        onClick={() => refetch()}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded"
        disabled={isLoading}
      >
        {isLoading ? "Refreshing..." : "Refresh Jobs"}
      </button>

      {isError && <p className="text-red-500">Error fetching jobs.</p>}

      <ul className="space-y-4">
        {jobs?.length > 0 ? (
          jobs.map((job: Job) => (
            <li
              key={job.code}
              className="p-4 border rounded-lg shadow flex items-center space-x-4 hover:bg-gray-100 cursor-pointer"
              onClick={() => router.push(`/viewjobs/${job.code}`)}
            >
              {job.companyLogo ? (
                <Image
                  src={job.companyLogo}
                  alt={job.company}
                  width={50}
                  height={50}
                  className="w-12 h-12 rounded-full object-cover"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
                  🏢
                </div>
              )}

              <div>
                <h2 className="text-lg font-semibold">{job.title}</h2>
                <p className="text-sm text-gray-600">{job.company}</p>
                <p className="text-sm text-gray-700">
                  {truncateDescription(job.description, 120)}
                </p>
              </div>
            </li>
          ))
        ) : (
          <p>No jobs available at the moment.</p>
        )}
      </ul>
    </div>
  );
}
