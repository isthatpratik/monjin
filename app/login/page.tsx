"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { EyeIcon, EyeOffIcon, UserIcon, MailIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen w-full flex items-center justify-center"

        style={{
            backgroundImage: "url('/assets/bg/form-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
    >
      <div
        className="w-[600px] h-[635px] bg-white rounded-[28px] shadow-lg p-8 space-y-8"
        style={{
          backgroundImage: "url('/assets/bg/formbg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        >
        <div className="flex justify-center">
          <Image
            src="/assets/monjin-logo.png"
            alt="Monjin Logo"
            width={150}
            height={40}
            className="h-10 w-auto"
          />
        </div>

        {/* Headings */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold text-white font-onest">Welcome to Monjin</h1>
          <p className="text-base text-white font-figtree">Create Your Account</p>
        </div>

        {/* Form */}
        <form className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-white font-onest">Name</label>
            <div className="relative">
              <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Enter your full name"
                className="pl-10 bg-gray-100 border border-gray-300 text-gray-900 placeholder:text-gray-400"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-white font-onest">Email Address</label>
            <div className="relative">
              <MailIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="email"
                placeholder="Enter your work mail"
                className="pl-10 bg-gray-100 border border-gray-300 text-gray-900 placeholder:text-gray-400"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-white font-onest">Password</label>
            <div className="relative">
              <Input type={showPassword ? "text" : "password"} className="bg-gray-100 border border-gray-300 text-gray-900 pr-10" placeholder="********"/>
              <button
                type="button"
                
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                {showPassword ? (
                  <EyeOffIcon className="h-5 w-5 text-gray-400" />
                ) : (
                  <EyeIcon className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>
          </div>

          <Button type="submit" className="w-full bg-[#CDEA68] hover:bg-[#CDEA68]/90 text-black font-medium py-6">
            Sign Up
          </Button>
        </form>

        {/* Login Link */}
        <p className="text-center text-white">
          Already have an account?{" "}
          <Link href="/login" className="text-[#CDEA68] hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}