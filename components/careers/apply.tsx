"use client"

import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Star, TrendingUp, Eye, User, Phone, Mail, Briefcase, Flag, Upload } from "lucide-react"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useState } from "react"
import { Label } from "../ui/label"

const formSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  mobileNumber: z.string().min(1, "Please enter a mobile number"),
  workMail: z.string().email("Please enter a valid email address"),
  position: z.string().min(1, "Please select a position"),
  cv: z.any().optional(),
})

export default function JobApplicationForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      mobileNumber: "",
      workMail: "",
      position: "",
      cv: null,
    },
  })
  const [file, setFile] = useState<File | null>(null)

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <div className="p-4 md:p-8 my-12 ">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
          {/* Left Column */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl font-onest font-smedium tracking-tighter text-gray-900 pb-4">
                Apply For Position
              </h1>
              <p className="mt-4 text-lg font-figtree text-[#2E2C2C]">
                At Monjin, you would not just work—you will innovate, lead, and grow. Join us to be part of a
                transformative journey where your potential meets endless possibilities.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-red-50 p-3">
                  <Star className="h-6 w-6 text-red-400" />
                </div>
                <p className="text-gray-600">Opportunities to take initiative and drive impactful change.</p>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-purple-50 p-3">
                  <TrendingUp className="h-6 w-6 text-purple-400" />
                </div>
                <p className="text-gray-600">A dynamic environment to challenge the status quo and grow.</p>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-green-50 p-3">
                  <Flag className="h-6 w-6 text-green-400" />
                </div>
                <p className="text-gray-600">
                  A chance to lead from the front and shape your journey with unwavering support from us.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-blue-50 p-3">
                  <Eye className="h-6 w-6 text-blue-400" />
                </div>
                <p className="text-gray-600">
                  If you are a self-starter with the vision to lead, we will provide the platform to help you succeed.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <Card className="relative overflow-hidden shadow-2xl flex flex-col rounded-[24px]">
            <CardContent className="space-y-6 p-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <User className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                            <Input
                              placeholder="Enter your full name"
                              className="bg-[#F5F9FA] border-[#D8E3E5] pl-10 py-6"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="mobileNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mobile number</FormLabel>
                        <div className="flex gap-2">
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button variant="outline" className="w-[100px] bg-[#F5F9FA] border-[#D8E3E5] py-6">
                                {field.value.split(" ")[0] || "+91"}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-[200px] p-0"></PopoverContent>
                          </Popover>
                          <div className="relative flex-1">
                            <Phone className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                            <Input
                              placeholder="Enter your mobile number"
                              className="bg-[#F5F9FA] border-[#D8E3E5] pl-10 py-6"
                              {...field}
                            />
                          </div>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="workMail"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Work Mail</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Mail className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                            <Input
                              placeholder="Enter your work mail"
                              type="email"
                              className="bg-[#F5F9FA] border-[#D8E3E5] pl-10 py-6"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="position"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Position</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-[#F5F9FA] border-[#D8E3E5] py-6">
                              <div className="flex items-center">
                                <Briefcase className="mr-2 h-5 w-5 text-gray-400" />
                                <SelectValue placeholder="Choose Position" />
                              </div>
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="software-engineer">Software Engineer</SelectItem>
                            <SelectItem value="product-manager">Product Manager</SelectItem>
                            <SelectItem value="designer">Designer</SelectItem>
                            <SelectItem value="marketing">Marketing</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="cv"
                    render={({ field: { onChange, ...rest } }) => (
                      <FormItem>
                        <FormLabel>CV/Resume</FormLabel>
                        <FormControl>
                          <div className="flex w-full items-start gap-1.5">
                            <Label htmlFor="cv" className="sr-only w-full text-[#94A2A4]">
                              Upload CV
                            </Label>
                            <Input
                              id="cv"
                              type="file"
                              accept=".pdf,.doc,.docx"
                              className="hidden w-full"
                              onChange={(e) => {
                                const file = e.target.files?.[0]
                                if (file) {
                                  setFile(file)
                                  onChange(file)
                                }
                              }}
                              {...rest}
                            />
                            <Button
                              type="button"
                              variant="outline"
                              className="w-full bg-[#F5F9FA] border-[#D8E3E5] py-6"
                              onClick={() => document.getElementById("cv")?.click()}
                            >
                              <Upload className="mr-2 h-5 w-5 text-[#94A2A4] items-start" />
                              {file ? file.name : "Upload Your CV"}
                            </Button>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full bg-gray-900 text-white hover:bg-gray-800 py-6">
                    Submit Enquiry
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

