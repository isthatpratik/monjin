import React from "react";
import Image from "next/image";

export default function WhyMonjin() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Why Monjin&apos;s Elite Talent Pool Works ?
        </h2>
        <p className="mt-4 text-xl text-gray-600">Get access to talent that&apos;s a perfect fit, every time.</p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 lg:gap-16 justify-items-center">
        {/* Speed Card */}
        <div className="relative bg-white p-8 rounded-2xl h-full w-full">
          <div className="flex flex-col items-center">
            <div className="h-auto w-64 rounded-2xl flex items-center justify-center">
              <Image
                src="/assets/performance-management/speed.png"
                alt="Speed icon"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Speed</h3>
            <p className="text-center text-gray-600 w-[70%]">
              Forget the delays—your talent needs are met faster than ever before.
            </p>
          </div>
        </div>

        {/* Cost-Effective Card */}
        <div className="relative bg-white p-8 rounded-2xl h-full w-full">
          <div className="flex flex-col items-center">
            <div className="h-auto w-64 rounded-2xl flex items-center justify-center">
              <Image
                src="/assets/performance-management/cost-effective.png"
                alt="Cost-effective icon"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Cost-Effective</h3>
            <p className="text-center text-gray-600 w-[70%]">Save on recruitment costs without compromising on quality.</p>
          </div>
        </div>

        {/* Flexibility Card */}
        <div className="relative bg-white p-8 rounded-2xl h-full w-full">
          <div className="flex flex-col items-center">
            <div className="h-auto w-64 rounded-2xl flex items-center justify-center">
              <Image
                src="/assets/performance-management/flexibility.png"
                alt="Flexibility icon"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Flexibility</h3>
            <p className="text-center text-gray-600 w-[70%]">
              Hire based on your needs, not the calendar. Scale your workforce when it makes sense for your business.
            </p>
          </div>
        </div>

        {/* Top-Quality Professionals Card */}
        <div className="relative bg-white p-8 rounded-2xl h-full w-full">
          <div className="flex flex-col items-center">
            <div className="h-auto w-64 rounded-2xl flex items-center justify-center">
              <Image
                src="/assets/performance-management/top-quality.png"
                alt="Top-quality professionals icon"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Top-Quality Professionals</h3>
            <p className="text-center text-gray-600 w-[70%]">
              Confidently hire candidates who have already been vetted by industry experts. We bring you the best.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}