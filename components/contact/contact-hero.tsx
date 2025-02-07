"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { User, Mail } from "lucide-react";
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
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "../ui/label";
import { useState, useEffect } from "react";
import Image from "next/image";

interface Country {
  code: string;
  flag: string;
  dialCode: string;
}

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  countryCode: z.string(),
  mobile: z
    .string()
    .regex(/^\d{10}$/, "Please enter a valid 10-digit mobile number"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function ContactHero() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [responseMessage, setResponseMessage] = React.useState<string | null>(
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
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setResponseMessage(null);

    fetch("/api/contact", {
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
    <section className="relative w-full px-0 py-6">
      <div className="mx-auto max-w-screen-2xl flex flex-col lg:flex lg:flex-row gap-12">
        {/* Hero Text */}
        <div className="flex flex-col justify-center lg:w-1/2">
          <h1 className="font-onest text-4xl text-center lg:text-start lg:text-[78px] font-semibold leading-tight text-white">
            Unlock Endless Possibilities
          </h1>
          <p className="mt-4 text-base lg:text-lg text-center lg:text-start font-figtree font-light text-gray-200">
            Send Us a Message and Let&apos;s Create Something <br />
            Extraordinary Together
          </p>
        </div>

        {/* Form Container */}
        <div className="relative lg:w-1/2">
          {/* Background Div */}
          <div className="absolute bottom-0 h-[calc(100%-2rem)] w-full translate-y-8 rounded-3xl bg-cover bg-center" />

          {/* Form */}
          <div className="relative rounded-3xl bg-white p-4 lg:p-6 shadow-xl md:p-8 ">
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
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <Label>Your Message</Label>
                      <FormControl>
                        <Textarea
                          placeholder="Enter Your Message"
                          className="min-h-[120px] border-[#D8E3E5] bg-[#F5F9FA] rounded-[8px] text-sm"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full p-6 bg-[#1B1B1B] text-white hover:bg-[#1B1B1B]/90 rounded-[8px] text-sm"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Let's Connect"}
                </Button>
              </form>
            </Form>
            {responseMessage && (
              <div className="mt-4 text-center text-sm text-gray-500">
                {responseMessage}
              </div>
            )}
          </div>
          <div className="relative border-2 border-white -mt-12 -z-10 rounded-b-[32px] overflow-hidden bg-[url('/assets/contact/contact-form-bg.jpg')] bg-cover bg-bottom bg-no-repeat">
            <div className="lg:py-8 py-4">
              <h2 className="text-sm lg:text-base font-medium font-onest text-white text-center mt-10">
                - Bridging Talent and Opportunity -
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
