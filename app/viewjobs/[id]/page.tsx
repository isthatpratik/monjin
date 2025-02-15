'use client'

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

interface JobDetail {
  id: string;
  title: string;
  company: string;
  location: string;
  jobType: string;
  description: string;
}

export default function JobDetailsPage() {
  const { code } = useParams();
  const [job, setJob] = useState<JobDetail | null>(null);
  const [error] = useState<string | null>(null);

  useEffect(() => {
    if (!code) return;

    fetch(`/api/jobs/${code}`)
      .then((res) => res.json())
      .then((data) => setJob(data))
  }, [code]);

  if (error) return <div className="text-red-500">{error}</div>;
  if (!job) return <div>Loading job details...</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{job.title}</h1>
      <p className="text-gray-600">{job.company} - {job.location}</p>
      <p className="text-sm">{job.jobType}</p>
      <p className="mt-4">{job.description}</p>
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">Apply Now</button>
    </div>
  );
}
