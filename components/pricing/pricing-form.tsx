"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { User, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "../ui/label";
import { Toaster } from "@/components/ui/toaster"

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  countryCode: z.string(),
  mobile: z
    .string()
    .regex(/^\d{10}$/, "Please enter a valid 10-digit mobile number"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function PricingForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      countryCode: "IN",
      mobile: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <section className="relative w-full px-4 py-6 md:px-6">
      <div className="mx-auto max-w-8xl flex flex-row gap-12">
        {/* Hero Text */}
        <div className="flex flex-col justify-center w-1/2">
          <h1 className="font-onest text-[78px] font-semibold leading-tight text-[#1A1A1A]">
          Unlock Your Exclusive Pricing
          </h1>
          <p className="mt-4 text-lg font-figtree font-light text-[#1A1A1A]">
          Your reliable partner in navigating the complexities of the hiring process – we offer customized solutions designed to address your specific requirements and help you secure the ideal candidate for your organization.
          </p>
        </div>

        {/* Form Container */}
        <div className="relative w-1/2">
          {/* Background Div */}
          <div
            className="absolute bottom-0 h-[calc(100%-2rem)] w-full translate-y-8 rounded-3xl bg-cover bg-center"
          />

          {/* Form */}
          <div className="relative rounded-3xl bg-white p-6 shadow-xl md:p-8 ">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <Label>Full Name</Label>
                      <FormControl>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                          <Input
                            placeholder="Enter your full name"
                            className="border-[#D8E3E5] bg-[#F5F9FA] pl-10 py-6 rounded-[8px]"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormItem>
                  <Label>Mobile Number</Label>
                  <div className="grid grid-cols-[120px_1fr] gap-3">
                    <FormField
                      control={form.control}
                      name="countryCode"
                      render={({ field }) => (
                        <FormItem>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="border-[#D8E3E5] bg-[#F5F9FA] py-6 rounded-[8px]">
                                <SelectValue placeholder="🇮🇳 +91" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="IN">🇮🇳 IN +91</SelectItem>
                              <SelectItem value="US">🇺🇸 US +1</SelectItem>
                              <SelectItem value="UK">🇬🇧 UK +44</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="mobile"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="Enter your mobile number"
                              className="border-[#D8E3E5] bg-[#F5F9FA] py-6 rounded-[8px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </FormItem>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <Label>Work Mail</Label>
                      <FormControl>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                          <Input
                            placeholder="Enter your work mail"
                            type="email"
                            className="border-[#D8E3E5] bg-[#F5F9FA] pl-10 py-6 rounded-[8px]"
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
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <Label>Your Message</Label>
                      <FormControl>
                        <Textarea
                          placeholder="Enter Your Message"
                          className="min-h-[120px] border-[#D8E3E5] bg-[#F5F9FA] rounded-[8px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full p-6 bg-[#1B1B1B] text-white hover:bg-[#1B1B1B]/90 rounded-[8px]"
                >
                  Let&apos;s Connect
                </Button>
              </form>
            </Form>
          </div>
          <div className="relative border-2 border-white -mt-12 -z-10 rounded-b-[32px] overflow-hidden bg-[url('/assets/contact/contact-form-bg.jpg')] bg-cover bg-bottom bg-no-repeat">
            <div className="py-8">
              <h2 className="text-base font-medium font-Onest text-white text-center mt-10">
                - Bridging Talent and Opportunity -
              </h2>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </section>
  );
}

