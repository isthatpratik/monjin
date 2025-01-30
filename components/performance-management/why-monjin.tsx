import React from "react";
import Image from "next/image";

export default function WhyMonjin() {
  return (
    <section className="max-w-7xl mx-auto px-2 py-16 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Why Monjin&apos;s Elite Talent Pool Works?
        </h2>
        <p className="mt-4 text-xl text-gray-600">
          Get access to talent that&apos;s a perfect fit, every time.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-16 justify-items-center">
        {[
          { id: 1, title: "Speed", img: "/assets/performance-management/speed.png", desc: "Forget the delays—your talent needs are met faster than ever before." },
          { id: 2, title: "Cost-Effective", img: "/assets/performance-management/cost-effective.png", desc: "Save on recruitment costs without compromising on quality." },
          { id: 3, title: "Flexibility", img: "/assets/performance-management/flexibility.png", desc: "Hire based on your needs, not the calendar. Scale your workforce when it makes sense for your business." },
          { id: 4, title: "Top-Quality Professionals", img: "/assets/performance-management/top-quality.png", desc: "Confidently hire candidates who have already been vetted by industry experts. We bring you the best." }
        ].map((item) => (
          <div 
            key={item.id} 
            className="relative bg-white lg:p-8 p-3 lg:rounded-2xl rounded-[8px] h-full w-full flex sm:flex-row lg:flex-col sm:items-start lg:items-center gap-2"
          >
            <div className="w-30 lg:w-20 h-auto flex-shrink-0 flex items-center justify-center lg:mx-auto">
              <Image
                src={item.img}
                alt={`${item.title} icon`}
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col sm:items-start lg:items-center text-left lg:text-center">
              <h3 className="lg:text-2xl text-base font-figtree font-semibold text-gray-900 lg:mb-3 mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 lg:w-[70%] w-full">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}