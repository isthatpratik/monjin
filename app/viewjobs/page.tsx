"use client";

import { useQuery } from "@tanstack/react-query";
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
import { NavbarBlack } from "@/components/layout/navbar-black";
import Image from "next/image";
import { MapPin, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ClientsSlider } from "@/components/sliders/clients-slider";
import { Footer } from "@/components/layout/footer";
import { MobileNavbarDark } from "@/components/layout/mobile-navbar-dark";

interface Job {
  code: string;
  title: string;
  description: string;
  company: string;
  companyLogo: string | null;
  locations: { city: string }[];
  jobType: string;
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
  const res = await fetch(`/api/jobs?page=${page}&limit=${limit}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch jobs");
  return res.json();
};

const getVisiblePages = (page: number, totalPages: number) => {
  if (totalPages <= 2) return Array.from({ length: totalPages }, (_, i) => i + 1);
  if (page <= 1) return [1, 2, '...', totalPages];
  if (page >= totalPages) return [1, '...', totalPages - 1, totalPages];
  return [1, '...', page, '...', totalPages];
};

export default function ViewJobs() {
  const [page, setPage] = useState(1);
  const limit = 10;

  const { data, isLoading, isError } = useQuery<JobResponse>({
    queryKey: ["jobs", page],
    queryFn: () => fetchJobs(page, limit),
    staleTime: 5000,
  });

  const totalPages = data ? Math.ceil(data.pagination.total / limit) : 1;

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

      <div className="p-4 lg:p-6 max-w-screen-xl mx-auto py-4 lg:py-16">
        <h1 className="text-4xl lg:text-[78px] tracking-tighter font-semibold lg:py-12 py-4 text-center">
          All Openings
        </h1>

        {isError && (
          <p className="text-red-500 text-center">Error fetching jobs.</p>
        )}
        {isLoading && (
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <Skeleton
                key={i}
                className="h-40 w-full lg:rounded-3xl rounded-2xl"
              />
            ))}
          </div>
        )}

        <ul className="space-y-4">
          {data?.jobs?.length ? (
            [...data.jobs].reverse().map((job) => (
              <li
                key={job.code}
                className="p-4 lg:p-8 border-[0.5px] border-black/30 bg-white justify-between rounded-2xl lg:rounded-3xl flex items-start space-x-4 cursor-pointer"
                onClick={() => window.open(`/viewjobs/${job.code}`, '_blank')}
              >
                {/* Company Logo */}
                {/* {job.companyLogo ? (
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
                )} */}

                {/* Job Details */}
                <div className="flex-1 overflow-hidden space-y-2 lg:space-y-4 md:max-w-3xl">
                  <h2 className="font-onest font-medium text-base lg:text-2xl text-[#141414]">
                    {job.title}
                  </h2>
                  <p className="font-onest font-normal text-sm lg:text-lg text-[#141414]">
                    {job.company}
                  </p>
                  <p className="text-sm lg:text-base font-onest font-normal text-[#141414]/70 truncate">
                    {job.description.replace(/<[^>]*>/g, "")}
                  </p>
                  <div className="flex gap-4 lg:gap-8 pt-2 lg:pt-4">
                    <div className="flex items-center gap-1 lg:gap-2">
                      <MapPin className="w-4 h-4" />
                      <p className="text-[10px] lg:text-base font-onest font-normal text-[#141414]/70 flex items-center">
                        {job.locations.map((loc) => loc.city).join(", ") ||
                          "Location not available"}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 lg:gap-2">
                      <Clock className="w-4 h-4" />
                      <p className="text-[10px] lg:text-base font-onest font-normal text-[#141414]/70 flex items-center">
                        {job.jobType}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="hidden md:block">
                  <Button className="font-onest text-[15px] font-normal bg-[#1B1B1B] px-6 py-4 lg:px-12 lg:py-6 shadow-lg">
                    Apply
                  </Button>
                </div>
              </li>
            ))
          ) : (
            <p className="text-center mt-6 text-gray-600">Loading...</p>
          )}
        </ul>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-6">
            <Pagination>
              <PaginationContent className="flex items-center">
                {/* Previous Button */}
                <PaginationItem>
                  <PaginationPrevious
                    className={`cursor-pointer ${
                      page === 1 ? "cursor-not-allowed opacity-50" : ""
                    }`}
                    onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                  >
                    <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
                  </PaginationPrevious>
                </PaginationItem>

                {/* Page Numbers - Adjusted for small screens */}
                {getVisiblePages(page, totalPages).map((pageNum, index) => (
                  <PaginationItem key={index}>
                    {pageNum === "..." ? (
                      <PaginationEllipsis className="mx-2 lg:mx-4" />
                    ) : (
                      <PaginationLink
                        className={`cursor-pointer mx-1 lg:mx-4 ${
                          pageNum === page
                            ? "bg-[#141414] text-white text-sm lg:text-base font-onest font-medium lg:p-4 p-2 rounded-lg"
                            : "text-sm lg:text-base font-onest font-medium"
                        }`}
                        onClick={() => setPage(pageNum as number)}
                      >
                        {pageNum}
                      </PaginationLink>
                    )}
                  </PaginationItem>
                ))}

                {/* Next Button */}
                <PaginationItem>
                  <PaginationNext
                    className={`cursor-pointer ${
                      page === totalPages ? "cursor-not-allowed opacity-50" : ""
                    }`}
                    onClick={() => {
                      if (page < totalPages) {
                        setPage((prev) => Math.min(prev + 1, totalPages));
                      }
                    }}
                  >
                    <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
                  </PaginationNext>
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </div>

      <ClientsSlider />
      <Footer />
    </main>
  );
}
