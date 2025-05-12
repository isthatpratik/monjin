"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Star,
  TrendingUp,
  Eye,
  User,
  Mail,
  Briefcase,
  Flag,
  Link,
  Upload,
} from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "../ui/label";
import { useState, useEffect } from "react";
import Image from "next/image";

interface Country {
  code: string;
  flag: string;
  dialCode: string;
}

const formSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  countryCode: z.string().min(1, "Please select a country code"),
  mobile: z.string().min(10, "Please enter a mobile number"),
  workMail: z.string().email("Please enter a valid email address"),
  position: z.string().min(1, "Please select a position"),
  cv: z.any().optional(),
});

export default function JobApplicationForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState<string | null>(null);
  const [countries, setCountries] = useState<Country[]>([]);

  function onSubmit(values: any) {
    setIsLoading(true);
    setResponseMessage(null);

    const formData = new FormData();
    formData.append("fullName", values.fullName);
    formData.append("countryCode", values.countryCode);
    formData.append("mobile", values.mobile);
    formData.append("workMail", values.workMail);
    formData.append("position", values.position);
    if (values.cv && values.cv[0]) {
      formData.append("cv", values.cv[0]);
    }

    fetch("/api/job-application", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
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
            ? `${country.idd.root}${
                country.idd.suffixes ? country.idd.suffixes[0] : ""
              }`
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

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      fullName: "",
      countryCode: "IN",
      mobile: "",
      workMail: "",
      position: "",
    },
  });

  return (
    <div className="p-4 lg:p-8 lg:my-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div>
              <h1 className="text-2xl lg:text-5xl font-onest font-medium lg:font-semibold text-center lg:text-start tracking-tighter text-gray-900 pb-4">
                Apply For Position
              </h1>
              <p className="mt-4 text-sm lg:text-lg font-figtree text-[#2E2C2C]">
                At Monjin, you would not just work—you will innovate, lead, and
                grow. Join us to be part of a transformative journey where your
                potential meets endless possibilities.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-[#FFA7A7]/40 p-3 drop-shadow-[0_8px_12px_rgba(244,109,109,0.6)]">
                  <Star className="w-4 h-4 lg:h-6 lg:w-6 text-[#F46D70]" />
                </div>
                <p className="text-gray-600 font-figtree text-sm lg:text-lg">
                  Opportunities to take initiative and drive impactful change.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-[#CEA7FF]/40 p-3 drop-shadow-[0_8px_12px_rgba(197,109,244,0.6)]">
                  <TrendingUp className="w-4 h-4 lg:h-6 lg:w-6 text-[#9F8AFF]" />
                </div>
                <p className="text-gray-600 font-figtree text-sm lg:text-lg">
                  A dynamic environment to challenge the status quo and grow.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-[#B9F647]/40 p-3 drop-shadow-[0_8px_12px_rgba(233,244,109,0.6)]">
                  <Flag className="w-4 h-4 lg:h-6 lg:w-6 text-[#9BCD04]" />
                </div>
                <p className="text-gray-600 font-figtree text-sm lg:text-lg">
                  A chance to lead from the front and shape your journey with
                  unwavering support from us.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-[#81ECF4]/40 p-3 drop-shadow-[0_8px_12px_rgba(129,236,244,0.6)]">
                  <Eye className="w-4 h-4 lg:h-6 lg:w-6 text-[#47CACD]" />
                </div>
                <p className="text-gray-600 font-figtree text-sm lg:text-lg">
                  If you are a self-starter with the vision to lead, we will
                  provide the platform to help you succeed.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <Card className="relative overflow-hidden shadow-2xl flex flex-col rounded-[24px]">
            <CardContent className="space-y-6 p-6">
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
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-[#F5F9FA] border-[#D8E3E5] py-6">
                              <div className="flex items-center">
                                <Briefcase className="mr-2 h-5 w-5 text-gray-400" />
                                <SelectValue placeholder="Choose Position" />
                              </div>
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="software-engineer">
                              Software Engineer
                            </SelectItem>
                            <SelectItem value="product-manager">
                              Product Manager
                            </SelectItem>
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
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>CV</FormLabel>
                        <FormControl>
                          <div>
                            <label
                              htmlFor="cv-upload"
                              className="flex items-center gap-4 cursor-pointer border border-[#D8E3E5] bg-[#F5F9FA] rounded-md px-4 py-3 w-full transition hover:border-gray-400"
                            >
                              <Upload className="w-5 h-5 text-gray-400" />
                              <span className="text-sm text-gray-400">
                                {field.value && field.value.length > 0
                                  ? field.value[0].name
                                  : "Upload Your CV Here"}
                              </span>
                              <input
                                id="cv-upload"
                                type="file"
                                accept=".pdf,.doc,.docx"
                                className="hidden"
                                onChange={(e) => field.onChange(e.target.files)}
                              />
                            </label>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-gray-900 text-white hover:bg-gray-800 py-6"
                  >
                    {isLoading ? "Sending..." : "Submit Application"}
                  </Button>
                </form>
              </Form>
              {responseMessage && (
              <div className="mt-4 text-center text-sm text-gray-500">
                {responseMessage}
              </div>
            )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
