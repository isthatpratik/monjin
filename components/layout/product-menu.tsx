"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface MenuItem {
  id: string
  title: string
  description: string
  imageURL: string
  textColor: string
}

const menuItems: MenuItem[] = [
  {
    id: "ocoi",
    title: "OCOI",
    description: "Our Candidates Our Interviewers",
    imageURL: "/assets/product-icons/ocoi.png",
    textColor: "#7D65EA",
  },
  {
    id: "basics",
    title: "Basics",
    description: "Streamline Effortless Hiring",
    imageURL: "/assets/product-icons/basics.png",
    textColor: "#F46D70",
  },
  {
    id: "ycoi",
    title: "YCOI",
    description: "Your Candidates Our Interviewers",
    imageURL: "/assets/product-icons/ycoi.png",
    textColor: "#B7D659",
  },
  {
    id: "performance",
    title: "Performance Management",
    description: "Accelerate Efficient Screening",
    imageURL: "/assets/product-icons/performance.png",
    textColor: "#BA57D3",
  },
  {
    id: "spotlight",
    title: "Spotlight",
    description: "Accelerate Efficient Screening",
    imageURL: "/assets/product-icons/spotlight.png",
    textColor: "#FCB352",
  },
  {
    id: "monjin-suite",
    title: "Monjin Suite",
    description:
      "Experience a comprehensive solution designed to attract, engage, and retain top talent across multiple channels.",
    imageURL: "/assets/bg/monjin-suite.png",
    textColor: "#000000",
  },
]

export default function ProductMenu() {
  return (
    <div className="relative">
      {/* Triangle pointer */}
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 bg-white border-t border-l border-gray-200" />

      {/* Main dropdown content */}
      <div className="relative bg-white rounded-3xl shadow-lg p-8 w-[1000px] mt-2">
        <div className="grid grid-cols-2 gap-6">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              href={`/products/${item.id}`}
              className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all group relative"
            >
              <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
                <Image
                  src={item.imageURL || "/placeholder.svg"}
                  alt={item.title}
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
              </div>
              <div className="flex flex-col flex-grow min-w-0">
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-semibold" style={{ color: item.textColor }}>
                    {item.title}
                  </h2>
                  <ArrowRight
                    className="h-5 w-5 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0"
                    style={{ color: item.textColor }}
                  />
                </div>
                <p className="text-gray-500 text-sm mt-1 line-clamp-2">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

