"use client"

import { useState } from "react"
import ProductMenu from "./product-menu"

export default function NavProductMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="px-4 py-2 text-white hover:text-gray-200 transition-colors"
      >
        Product
      </button>

      {isOpen && (
        <div
          className="absolute left-1/2 -translate-x-1/2 z-50"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <ProductMenu />
        </div>
      )}
    </div>
  )
}

