"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { EyeIcon, EyeOffIcon, UserIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-purple-900 via-slate-900 to-green-900">
      <div className="w-full max-w-md p-8 space-y-8">
        {/* Logo */}
        <div className="flex justify-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/form1-wWjsVGlY4mI9QF93tsH8jRMu3Ba1o8.png"
            alt="Monjin Logo"
            width={150}
            height={40}
            className="h-10 w-auto"
          />
        </div>

        {/* Headings */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold text-white font-onest">Welcome back!</h1>
          <p className="text-base text-gray-300 font-figtree">Enter your Credentials to access your account</p>
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
                className="pl-10 bg-white/10 border-0 text-white placeholder:text-gray-400"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-white font-onest">Password</label>
            <div className="relative">
              <Input type={showPassword ? "text" : "password"} className="bg-white/10 border-0 text-white pr-10" />
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

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" />
              <label htmlFor="remember" className="text-sm text-white font-onest">
                Remember me
              </label>
            </div>
            <Link href="/forgot-password" className="text-[#CDEA68] hover:underline text-sm">
              Forgot password?
            </Link>
          </div>

          <Button type="submit" className="w-full bg-[#CDEA68] hover:bg-[#CDEA68]/90 text-black font-medium py-6">
            Login
          </Button>
        </form>

        {/* Sign Up Link */}
        <p className="text-center text-white">
          Don't have an account?{" "}
          <Link href="/signup" className="text-[#CDEA68] hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  )
}

