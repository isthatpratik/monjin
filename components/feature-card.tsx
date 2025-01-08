import { motion } from "framer-motion"
import { type LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  subtitle: string
}

export function FeatureCard({ icon: Icon, title, subtitle }: FeatureCardProps) {
  return (
    <div 
      className="flex items-center gap-4 p-6 bg-[#BBBBBB] backdrop-blur-xl border border-white/10 rounded-full"
    >
      <div className="p-3 rounded-full bg-black/30">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div>
        <h3 className="text-white font-medium">{title}</h3>
        <p className="text-gray-400 text-sm">{subtitle}</p>
      </div>
    </div>
  )
}

