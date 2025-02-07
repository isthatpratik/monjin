"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { User, Mail, Building, BriefcaseBusiness, Users } from "lucide-react";
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
import { Toaster } from "@/components/ui/toaster";
import Image from "next/image";
import { useEffect, useState } from "react";

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  countryCode: z.string(),
  mobile: z
    .string()
    .regex(/^\d{10}$/, "Please enter a valid 10-digit mobile number"),
  organization: z.string().min(2, "Organization name is required"),
  jobTitle: z.string().min(2, "Job title is required"),
  email: z.string().email("Please enter a valid email address"),
  numberOfHires: z.string().min(1, "Please select the number of hires"),
  productSelection: z.string().min(1, "Please select a product"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

interface Country {
  code: string;
  flag: string;
  dialCode: string;
}

export default function PricingForm() {
  const [isLoading, setIsLoading] = useState(false);
    const [responseMessage, setResponseMessage] = useState<string | null>(
      null
    );
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    async function fetchCountries() {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all");
        const data: Array<{
          cca2: string;
          flags: { svg: string };
          idd?: { root?: string; suffixes?: string[] };
        }> = await res.json();

        const formattedCountries = data.map((country) => ({
          code: country.cca2,
          flag: country.flags.svg,
          dialCode: country.idd?.root
            ? `${country.idd.root}${country.idd.suffixes ? country.idd.suffixes[0] : ""}`
            : "",
        }));

        setCountries(
          formattedCountries.sort((a: Country, b: Country) =>
            a.code.localeCompare(b.code)
          )
        );
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    }

    fetchCountries();
  }, []);

  const products = [
    {
      id: "ocoi",
      name: "OCOI",
      subtitle: "Our Candidates Our Interviewer",
      image: "/assets/pricing/ocoi.png",
    },
    {
      id: "ycoi",
      name: "YCOI",
      subtitle: "Your Candidates Our Interviewer",
      image: "/assets/pricing/ycoi.png",
    },
    {
      id: "spotlight",
      name: "Spotlight",
      subtitle: "Accelerate Efficient Screening",
      image: "/assets/pricing/spotlight.png",
    },
    {
      id: "basics",
      name: "Basics",
      subtitle: "Streamline Effortless Hiring",
      image: "/assets/pricing/basics.png",
    },
    {
      id: "performance-management",
      name: "Performance Management",
      subtitle: "Pre-Assessed Candidatures",
      image: "/assets/pricing/performance.png",
    },
    {
      id: "monjin-suite",
      name: "Monjin Suite",
      subtitle: "Attract, engage & retain talent",
      image: "/assets/pricing/suite.png",
    },
  ];

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      fullName: "",
      countryCode: "IN",
      mobile: "",
      organization: "",
      jobTitle: "",
      email: "",
      numberOfHires: "10-20",
      productSelection: "ocoi",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
      setIsLoading(true);
      setResponseMessage(null);
  
      fetch("/api/pricing", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setResponseMessage(data.message);
  
          if (data.success) {
            form.reset();
          }
        })
        .catch(() => {
          setResponseMessage("Something went wrong. Please try again.");
        })
        .finally(() => setIsLoading(false));
    }
  

  return (
    <section className="relative w-full lg:px-4 lg:py-6">
      <div className="mx-auto max-w-8xl flex flex-col lg:flex-row gap-12">
        {/* Hero Text */}
        <div className="flex flex-col justify-center lg:w-1/2">
          <h1 className="font-onest text-4xl lg:text-[78px] text-center text-balance lg:text-start font-bold lg:font-semibold leading-tight tracking-tighter text-[#1A1A1A]">
            Unlock Your Exclusive Pricing
          </h1>
          <p className="mt-4 text-lg font-figtree font-light text-[#1A1A1A] hidden lg:block">
            Your reliable partner in navigating the complexities of the hiring
            process – we offer customized solutions designed to address your
            specific requirements and help you secure the ideal candidate for
            your organization.
          </p>
          <p className="mt-4 text-sm font-figtree text-center text-[#1A1A1A] lg:hidden">
          Find the perfect plan for you 
          — 100% satisfaction guaranteed
          </p>
        </div>

        {/* Form Container */}
        <div className="relative lg:w-1/2">
          <div className="relative rounded-3xl bg-white p-5 lg:p-6 shadow-2xl">
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
                            className="border-[#D8E3E5] bg-[#F5F9FA] pl-10 py-6 rounded-[8px] text-sm"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Mobile Number */}
                <FormItem>
                  <Label>Mobile Number</Label>
                  <div className="grid grid-cols-[0.2fr_1fr] lg:grid-cols-[140px_1fr] gap-3">
                    <FormField
                      control={form.control}
                      name="countryCode"
                      render={({ field }) => {
                        const selectedCountry =
                          countries.find((c) => c.code === field.value) ||
                          countries[0];

                        return (
                          <FormItem>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value || countries[0]?.code}
                            >
                              <FormControl>
                                <SelectTrigger className="border-[#D8E3E5] bg-[#F5F9FA] py-6 rounded-[8px] text-sm">
                                  {selectedCountry ? (
                                    <div className="flex items-center gap-2">
                                      <Image
                                        src={selectedCountry.flag}
                                        alt={selectedCountry.code}
                                        width={24}
                                        height={16}
                                        className="hidden lg:block" 
                                      />
                                      <span
                                        className={
                                          field.value
                                            ? "text-black"
                                            : "text-gray-400"
                                        }
                                      >
                                        {selectedCountry.code}{" "}
                                        {selectedCountry.dialCode}
                                      </span>
                                    </div>
                                  ) : (
                                    <span className="text-gray-400 text-sm">
                                      Select Country
                                    </span>
                                  )}
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {countries.map((country) => (
                                  <SelectItem
                                    key={country.code}
                                    value={country.code}
                                    className="p-4"
                                  >
                                    <div className="flex items-center gap-2">
                                      <Image
                                        src={country.flag}
                                        alt={country.code}
                                        width={24}
                                        height={16}
                                      />
                                      <span>
                                        {country.code} {country.dialCode}
                                      </span>
                                    </div>
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </FormItem>
                        );
                      }}
                    />
                    <FormField
                      control={form.control}
                      name="mobile"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="Enter your mobile number"
                              className="border-[#D8E3E5] bg-[#F5F9FA] py-6 rounded-[8px] text-sm"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </FormItem>

                {/* Organization & Job Title */}
                <div className="grid grid-cols-1 lg:grid-cols-[0.55fr_0.45fr] gap-3">
                  <FormField
                    control={form.control}
                    name="organization"
                    render={({ field }) => (
                      <FormItem>
                        <Label>Organization</Label>
                        <FormControl>
                          <div className="relative">
                            <Building className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                            <Input
                              placeholder="Your organization"
                              className="border-[#D8E3E5] bg-[#F5F9FA] pl-10 py-6 rounded-[8px] text-sm"
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
                    name="jobTitle"
                    render={({ field }) => (
                      <FormItem>
                        <Label>Job Title</Label>
                        <FormControl>
                          <div className="relative">
                            <BriefcaseBusiness className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                            <Input
                              placeholder="Your job title"
                              className="border-[#D8E3E5] bg-[#F5F9FA] pl-10 py-6 rounded-[8px] text-sm"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Work Mail & Number of Hires */}
                <div className="grid grid-cols-1 lg:grid-cols-[0.7fr_0.3fr] gap-3">
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
                              className="border-[#D8E3E5] bg-[#F5F9FA] pl-10 py-6 rounded-[8px] text-sm"
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
                    name="numberOfHires"
                    render={({ field }) => (
                      <FormItem>
                        <Label>Number of Hires</Label>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <div className="relative">
                              <Users className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                              <SelectTrigger className="border-[#D8E3E5] bg-[#F5F9FA] pl-10 py-6 rounded-[8px] text-sm">
                                <SelectValue placeholder="10-20" />
                              </SelectTrigger>
                            </div>
                          </FormControl>
                          <SelectContent>
                            {["10-20", "20-50", "50-100", "100+"].map((num) => (
                              <SelectItem
                                key={num}
                                value={String(num)}
                                className="p-3 text-sm"
                              >
                                {num}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Product Selection */}
                <FormField
                  control={form.control}
                  name="productSelection"
                  render={({ field }) => {
                    // Set default to the first product
                    const selectedProduct =
                      products.find((p) => p.id === field.value) || products[0];

                    return (
                      <FormItem>
                        <Label>Product Selection</Label>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value || products[0].id}
                        >
                          <FormControl>
                            <SelectTrigger className="border-[#D8E3E5] bg-[#F5F9FA] py-6 rounded-[8px] overflow-hidden text-sm">
                              <div className="flex items-center gap-3">
                                <Image
                                  src={selectedProduct.image}
                                  alt={selectedProduct.name}
                                  width={20}
                                  height={20}
                                  quality={100}
                                />
                                <span
                                  className={
                                    field.value ? "text-black text-sm" : "text-gray-400 text-sm"
                                  } 
                                >
                                  {selectedProduct.name} (
                                  {selectedProduct.subtitle})
                                </span>
                              </div>
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {products.map((product) => (
                              <SelectItem
                                key={product.id}
                                value={product.id}
                                className="p-4"
                              >
                                <div className="flex items-center gap-3 ">
                                  <Image
                                    src={product.image}
                                    alt={product.name}
                                    width={20}
                                    height={20}
                                    quality={100}
                                  />
                                  <div>
                                    <span className="font-medium text-sm">
                                      {product.name}
                                    </span>
                                    <p className="text-sm text-gray-500">
                                      {product.subtitle}
                                    </p>
                                  </div>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <Label>Description</Label>
                      <FormControl>
                        <Textarea
                          placeholder="Enter Your Description"
                          className="min-h-[80px] border-[#D8E3E5] bg-[#F5F9FA] rounded-[8px] text-sm"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="py-2">
                  <Button
                    type="submit"
                    className="w-full p-6 bg-[#1B1B1B] text-white rounded-[8px] text-sm"
                    disabled={isLoading}
                  >
                    {isLoading ? "Sending..." : "Let's Connect"}
                  </Button>
                </div>
              </form>
            </Form>
            {responseMessage && (
              <div className="mt-4 text-center text-sm text-gray-500">
                {responseMessage}
              </div>
            )}
          </div>
          <div className="relative border-2 border-white -mt-16 lg:-mt-12 -z-10 rounded-b-[32px] overflow-hidden bg-[url('/assets/contact/contact-form-bg.jpg')] bg-cover bg-bottom bg-no-repeat">
            <div className="py-4 lg:py-8">
              <h2 className="text-base font-medium font-Onest text-white text-center mt-14 lg:mt-10">
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
