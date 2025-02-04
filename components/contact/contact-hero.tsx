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
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "../ui/label";
import { Toaster } from "@/components/ui/toaster";

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
          form.reset(); // Reset the form fields
        }
      })
      .catch(() => {
        setResponseMessage("Something went wrong. Please try again.");
      })
      .finally(() => setIsLoading(false));
  }

  return (
    <section className="relative w-full px-4 py-6 md:px-6">
      <div className="mx-auto max-w-8xl flex flex-row gap-12">
        {/* Hero Text */}
        <div className="flex flex-col justify-center w-1/2">
          <h1 className="font-onest text-[78px] font-semibold leading-tight text-white">
            Unlock Endless Possibilities
          </h1>
          <p className="mt-4 text-lg font-figtree font-light text-gray-200">
            Send Us a Message and Let&apos;s Create Something <br />
            Extraordinary Together
          </p>
        </div>

        {/* Form Container */}
        <div className="relative w-1/2">
          {/* Background Div */}
          <div className="absolute bottom-0 h-[calc(100%-2rem)] w-full translate-y-8 rounded-3xl bg-cover bg-center" />

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
                              <SelectItem value="GB">🇬🇧 UK +44</SelectItem>
                              <SelectItem value="CA">🇨🇦 CA +1</SelectItem>
                              <SelectItem value="AU">🇦🇺 AU +61</SelectItem>
                              <SelectItem value="DE">🇩🇪 DE +49</SelectItem>
                              <SelectItem value="FR">🇫🇷 FR +33</SelectItem>
                              <SelectItem value="IT">🇮🇹 IT +39</SelectItem>
                              <SelectItem value="ES">🇪🇸 ES +34</SelectItem>
                              <SelectItem value="MX">🇲🇽 MX +52</SelectItem>
                              <SelectItem value="BR">🇧🇷 BR +55</SelectItem>
                              <SelectItem value="ZA">🇿🇦 ZA +27</SelectItem>
                              <SelectItem value="RU">🇷🇺 RU +7</SelectItem>
                              <SelectItem value="CN">🇨🇳 CN +86</SelectItem>
                              <SelectItem value="JP">🇯🇵 JP +81</SelectItem>
                              <SelectItem value="NG">🇳🇬 NG +234</SelectItem>
                              <SelectItem value="KR">🇰🇷 KR +82</SelectItem>
                              <SelectItem value="SA">🇸🇦 SA +966</SelectItem>
                              <SelectItem value="AE">🇦🇪 AE +971</SelectItem>
                              <SelectItem value="EG">🇪🇬 EG +20</SelectItem>
                              <SelectItem value="TR">🇹🇷 TR +90</SelectItem>
                              <SelectItem value="ID">🇮🇩 ID +62</SelectItem>
                              <SelectItem value="PH">🇵🇭 PH +63</SelectItem>
                              <SelectItem value="SE">🇸🇪 SE +46</SelectItem>
                              <SelectItem value="NO">🇳🇴 NO +47</SelectItem>
                              <SelectItem value="FI">🇫🇮 FI +358</SelectItem>
                              <SelectItem value="DK">🇩🇰 DK +45</SelectItem>
                              <SelectItem value="NL">🇳🇱 NL +31</SelectItem>
                              <SelectItem value="BE">🇧🇪 BE +32</SelectItem>
                              <SelectItem value="CH">🇨🇭 CH +41</SelectItem>
                              <SelectItem value="AT">🇦🇹 AT +43</SelectItem>
                              <SelectItem value="PL">🇵🇱 PL +48</SelectItem>
                              <SelectItem value="RO">🇷🇴 RO +40</SelectItem>
                              <SelectItem value="GR">🇬🇷 GR +30</SelectItem>
                              <SelectItem value="TH">🇹🇭 TH +66</SelectItem>
                              <SelectItem value="VN">🇻🇳 VN +84</SelectItem>
                              <SelectItem value="MY">🇲🇾 MY +60</SelectItem>
                              <SelectItem value="PK">🇵🇰 PK +92</SelectItem>
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