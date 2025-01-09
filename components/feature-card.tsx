import { motion } from "framer-motion"
import Image from 'next/image'

interface FeatureCardProps {
  imageSrc: string  // Accept an image source URL
  title: string
  subtitle: string
}

export function FeatureCard({ imageSrc, title, subtitle }: FeatureCardProps) {
  return (
    <div className="flex items-center gap-4 p-2 bg-[#FEF7F1]/10 rounded-full backdrop-blur-[36px]">
      <div className="p-10 rounded-full bg-[#16171D]">
        {/* Use the Next.js Image component to display the image */}
        <Image 
          src={imageSrc} 
          alt={title} 
          width={28}  // Adjust width and height to match the icon size
          height={28}
        />
      </div>
      <div>
        <h3 className="text-white font-medium">{title}</h3>
        <p className="text-gray-400 text-sm">{subtitle}</p>
      </div>
    </div>
  )
}
