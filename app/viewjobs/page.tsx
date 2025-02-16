"use client";

import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
  PaginationLink,
} from "@/components/ui/pagination";
import { Skeleton } from "@/components/ui/skeleton";

interface Job {
  code: string;
  title: string;
  description: string;
  company: string;
  companyLogo: string | null;
  location: string;
}

interface JobResponse {
  jobs: Job[];
  pagination: {
    page: number;
    limit: number;
    total: number;
  };
}

const fetchJobs = async (page: number, limit: number): Promise<JobResponse> => {
  const res = await fetch(`/api/jobs?page=${page}&limit=${limit}`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch jobs");
  return res.json();
};

export default function ViewJobs() {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const limit = 10;

  const { data, isLoading, isError } = useQuery<JobResponse>({
    queryKey: ["jobs", page],
    queryFn: () => fetchJobs(page, limit),
    staleTime: 5000,
  });

  const totalPages = data ? Math.ceil(data.pagination.total / limit) : 1;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">Available Jobs</h1>

      {isError && <p className="text-red-500 text-center">Error fetching jobs.</p>}
      {isLoading && (
        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} className="h-20 w-full rounded-lg" />
          ))}
        </div>
      )}

      <ul className="space-y-4">
        {data?.jobs?.length ? (
          [...data.jobs].reverse().map((job) => (
            <li
              key={job.code}
              className="p-4 border rounded-lg shadow flex items-center space-x-4 hover:bg-gray-100 cursor-pointer transition-all"
              onClick={() => router.push(`/viewjobs/${job.code}`)}
            >
              {/* Company Logo */}
              {job.companyLogo ? (
                <img
                  src={job.companyLogo}
                  alt={job.company}
                  className="w-16 h-16 object-cover rounded-md"
                />
              ) : (
                <div className="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-10 h-10 text-gray-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1.5 14a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm0-5.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5.5 5.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm0-5.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}

              {/* Job Details */}
              <div className="flex-1 overflow-hidden">
                <h2 className="text-lg font-semibold">{job.title}</h2>
                <p className="text-gray-600">{job.company}</p>
                <p className="text-sm text-gray-500 truncate">{job.description.replace(/<[^>]*>/g, "")}</p>
              </div>

              {/* Location */}
              <p className="text-sm text-gray-700">{job.location}</p>
            </li>
          ))
        ) : (
          <p className="text-center text-gray-600">No jobs found.</p>
        )}
      </ul>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6">
          <Pagination>
            <PaginationContent>
              {/* Previous Button */}
              <PaginationItem>
                <PaginationPrevious
                  className={`cursor-pointer ${page === 1 ? "cursor-not-allowed" : ""}`}
                  onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                />
              </PaginationItem>

              {/* Page Numbers */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <PaginationItem key={pageNum}>
                  <PaginationLink
                    className={`cursor-pointer ${pageNum === page ? "bg-blue-500 text-white" : ""}`}
                    onClick={() => setPage(pageNum)}
                  >
                    {pageNum}
                  </PaginationLink>
                </PaginationItem>
              ))}

              {/* Next Button */}
              <PaginationItem>
                <PaginationNext
                  className={`cursor-pointer ${page === totalPages ? "cursor-not-allowed" : ""}`}
                  onClick={() => {
                    if (page < totalPages) {
                      setPage((prev) => Math.min(prev + 1, totalPages));
                    }
                  }}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
}
