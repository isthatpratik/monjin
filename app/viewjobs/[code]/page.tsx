"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import parse from "html-react-parser";
import { useState, useEffect } from "react";
import Image from "next/image";
import { NavbarBlack } from "@/components/layout/navbar-black";
import { MobileNavbarDark } from "@/components/layout/mobile-navbar-dark";
import { Clock, MapPin } from "lucide-react";
import { ClientsSlider } from "@/components/sliders/clients-slider";
import { Footer } from "@/components/layout/footer";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

interface JobDetail {
  id: number;
  title: string;
  description: string;
  code: string;
  locations: { city: string }[];
  minExpInYears: number;
  maxExpInYears: number;
  company: string;
  companyDescription: string;
  companyLogo: string | null;
  videoUrl: string | null;
  industries: string;
  jobFunction: string;
  role: string;
  overallExperience: string;
  skills: string;
  softSkills: string;
  qualification: string;
  jobType: string;
  vacancy: number;
  salary: string;
  aId: number;
  apexBusinessModelId: number;
  scId: number;
  alreadyApplied: boolean;
}

interface CountryDialCode {
  name: string;
  dial_code: string;
  code: string;
}

interface Country {
  name: string;
  callingCodes: string[];
  alpha2Code: string;
}

const fetchCountryDialCodes = async (): Promise<CountryDialCode[]> => {
  const response = await fetch(
    "https://restcountries.com/v2/all?fields=name,callingCodes,alpha2Code"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch country dial codes");
  }

  const data: Country[] = await response.json();
  return data.map((country) => ({
    name: country.name,
    dial_code: `+${country.callingCodes[0]}`,
    code: country.alpha2Code,
  }));
};


const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email format"),
  dialCode: z.string(),
  contactNumber: z
    .string()
    .regex(/^\d{10}$/, "Phone number must be exactly 10 digits"),
});

type FormValues = z.infer<typeof formSchema>;

const fetchJobDetails = async (code: string): Promise<JobDetail> => {
  const res = await fetch(`/api/jobs/${code}`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch job details");
  return res.json();
};

const formatJobDescription = (description: string) => {
  let formattedDesc = description.replace(/<br\s*\/?>/g, "\n");
  formattedDesc = formattedDesc.replace(
    /<strong>(.*?)<\/strong>/g,
    `<h2 class="text-xl font-bold mt-6 mb-2">$1</h2>`
  );
  formattedDesc = formattedDesc.replace(
    /(Experience Level.*?):/g,
    `\n\n<h2 className="text-xl font-bold mt-8 mb-2">$1:</h2>`
  );
  formattedDesc = formattedDesc.replace(
    /<ul>/g,
    `<ul class="list-disc list-inside ml-5 mt-2 space-y-1">`
  );
  formattedDesc = formattedDesc.replace(/<li>/g, `<li class="block">`);
  formattedDesc = formattedDesc.replace(/<\/li>/g, `</li>\n`);
  return parse(formattedDesc);
};

export default function JobDetailPage() {
  const params = useParams();
  const [code, setCode] = useState<string | null>(null);
  const [isApplying, setIsApplying] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [successDialog, setSuccessDialog] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      dialCode: "IN",
      contactNumber: "",
    },
  });

  const { data: countryDialCodes } = useQuery<
    CountryDialCode[]
  >({
    queryKey: ["countryDialCodes"],
    queryFn: fetchCountryDialCodes,
  });

  const selectedCountry = countryDialCodes?.find(
    (country) => country.code === form.watch("dialCode")
  );

  useEffect(() => {
    if (params?.code) {
      setCode(params.code as string);
    }
  }, [params]);

  const { data, isLoading, isError } = useQuery<JobDetail>({
    queryKey: ["jobDetail", code],
    queryFn: () => fetchJobDetails(code!),
    staleTime: 5000,
  });

  if (isLoading)
    return (
      <div className="flex items-center justify-center ">
        {[...Array(1)].map((_, i) => (
          <Skeleton
            key={i}
            className="h-20 w-auto lg:rounded-3xl rounded-2xl"
          />
        ))}
      </div>
    );
  if (isError || !data) return <p>Error loading job details.</p>;

  const onSubmit = async (values: FormValues) => {
    setIsApplying(true);
    setErrorMessage(null);

    const payload = {
      ...values,
      jobDescriptionId: data.id,
      apexBusinessModelId: data.apexBusinessModelId,
      aId: data.aId,
      scId: data.scId,
      sourceType: "website",
    };

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setDialogMessage("Please check your mail to join the interview.");
        setShowDialog(false);
        setSuccessDialog(true);
        form.reset();
      } else {
        setErrorMessage(
          result.error || "An error occurred while submitting your application."
        );
        setShowDialog(true);
      }
    } catch (error) {
      console.error("Application error:", error);
      setErrorMessage("An unexpected error occurred. Please try again.");
    } finally {
      setIsApplying(false);
    }
  };

  const overallExperience = `${data.minExpInYears} - ${data.maxExpInYears} years`;

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 -z-20 lg:hidden">
        <Image
          alt="gradient-mobile-bg"
          src={"/assets/jobs/all-openings-mobile.jpg"}
          quality={100}
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 -z-20 lg:block hidden md:block">
        <Image
          alt="gradient-web-bg"
          src={"/assets/jobs/all-openings-web.jpg"}
          quality={100}
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      <NavbarBlack />
      <MobileNavbarDark />

      <div className="p-4 lg:p-12 max-w-screen-xl bg-white rounded-2xl lg:rounded-3xl mx-auto py-4 lg:my-16">
        <div className="flex space-y-4 justify-between">
          <div className="grid space-y-4">
            <h1 className="text-xl lg:text-5xl font-onest font-medium tracking-tighter">
              {data.title}
            </h1>
            <p className="text-gray-600">{data.company}</p>
            <div className="flex gap-4 lg:gap-8 pt-2 lg:pt-4">
              <div className="flex items-center gap-1 lg:gap-2">
                <MapPin className="w-4 h-4" />
                <p className="text-[10px] lg:text-base font-onest font-normal text-[#141414]/70 flex items-center">
                  {data.locations.map((loc) => loc.city).join(", ") ||
                    "Location not available"}
                </p>
              </div>
              <div className="flex items-center gap-1 lg:gap-2">
                <Clock className="w-4 h-4" />
                <p className="text-[10px] lg:text-base font-onest font-normal text-[#141414]/70 flex items-center">
                  {data.jobType}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex-1 space-x-4">
              <Button
                onClick={() => setShowDialog(true)}
                className="bg-[#141414] text-white px-4 py-2 lg:px-12 lg:py-6 rounded-lg shadow-xl"
                disabled={isApplying || data.alreadyApplied}
              >
                {data.alreadyApplied
                  ? "Already Applied"
                  : isApplying
                  ? "Applying..."
                  : "Apply"}
              </Button>
            </div>
          </div>
        </div>

        {/* Job Description */}
        <div className="font-figtree lg:text-lg text-sm border-b border-[#9F8AFF] lg:py-8">
          {formatJobDescription(data.description)}
        </div>

        <div className="mt-8 space-y-8 py-6">
          <div className="flex-1 flex flex-col space-y-4 border-b border-[#9F8AFF] pb-6 lg:pb-10">
            <h2 className="lg:text-[28px] text-base font-semibold font-onest mb-4">
              Role and Industry
            </h2>
            <div className="flex flex-col lg:flex-row justify-between max-w-[80%] gap-4">
              <div className="flex flex-col space-y-4">
                <p className="font-onest font-medium text-sm lg:text-xl flex flex-col text-[#0D0E11]/50">
                  Role
                </p>
                <span className="font-onest font-normal">{data.role}</span>
              </div>
              <div className="flex flex-col space-y-4">
                <p className="font-onest text-sm flex flex-col font-medium lg:text-xl text-[#0D0E11]/50">
                  Industry
                </p>
                <span>{data.industries}</span>
              </div>
              <div className="flex flex-col space-y-4">
                <p className="font-onest flex flex-col font-medium text-sm lg:text-xl text-[#0D0E11]/50">
                  Job Function
                </p>
                <span>{data.jobFunction}</span>
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col space-y-4 border-b border-[#9F8AFF] py-6 lg:py-8">
            <h2 className="lg:text-[28px] text-base font-semibold font-onest mb-4">
              Qualification, Experience and Skills
            </h2>
            <div className="flex flex-col lg:flex-row justify-between max-w-[80%] gap-4">
              <div className="flex flex-col space-y-4">
                <p className="font-onest font-medium text-sm lg:text-xl flex flex-col text-[#0D0E11]/50">
                  Overall Experience
                </p>
                <span className="font-onest font-normal">
                  {overallExperience}
                </span>
              </div>
              <div className="flex flex-col space-y-4">
                <p className="font-onest text-sm flex flex-col font-medium lg:text-xl text-[#0D0E11]/50">
                  Skill & Experience
                </p>
                <span>{data.skills}</span>
              </div>
              <div className="flex flex-col space-y-4">
                <p className="font-onest flex flex-col font-medium text-sm lg:text-xl text-[#0D0E11]/50">
                  Soft Skills
                </p>
                <span>{data.softSkills}</span>
              </div>
              <div className="flex flex-col space-y-4">
                <p className="font-onest flex flex-col font-medium text-sm lg:text-xl text-[#0D0E11]/50">
                  Qualification
                </p>
                <span>{data.qualification}</span>
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col space-y-4 pb-6 lg:pb-10">
            <h2 className="lg:text-[28px] text-base font-semibold font-onest mb-4">
              Requirement Details
            </h2>
            <div className="flex flex-col lg:flex-row justify-between max-w-[80%] gap-4">
              <div className="flex flex-col space-y-4">
                <p className="font-onest font-medium text-sm lg:text-xl flex flex-col text-[#0D0E11]/50">
                  Location
                </p>
                <span className="font-onest font-normal">
                  {data.locations.map((loc) => loc.city).join(", ") ||
                    "Location not available"}
                </span>
              </div>
              <div className="flex flex-col space-y-4">
                <p className="font-onest text-sm flex flex-col font-medium lg:text-xl text-[#0D0E11]/50">
                  Vacancy
                </p>
                <span>{data.vacancy}</span>
              </div>
              <div className="flex flex-col space-y-4">
                <p className="font-onest flex flex-col font-medium text-sm lg:text-xl text-[#0D0E11]/50">
                  Salary
                </p>
                <span>{data.salary}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Application Dialog */}
        <Dialog open={showDialog} onOpenChange={setShowDialog}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Apply for {data.title}</DialogTitle>
              <DialogDescription>
                Please fill out the form below to apply for this position.
              </DialogDescription>
            </DialogHeader>
            {errorMessage && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{parse(errorMessage)}</AlertDescription>
              </Alert>
            )}
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="First Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Last Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Email" type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex space-x-2">
                  <FormField
                    control={form.control}
                    name="dialCode"
                    render={({ field }) => (
                      <FormItem className="w-fit">
                        <FormLabel>Code</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={
                            field.value || countryDialCodes?.[0]?.code
                          }
                        >
                          <FormControl>
                            <SelectTrigger className="rounded-[8px] text-sm">
                              {selectedCountry ? (
                                <div className="flex items-center gap-2">
                                  <span
                                    className={
                                      field.value
                                        ? "text-black"
                                        : "text-gray-400"
                                    }
                                  >
                                    {selectedCountry.code}{" "}
                                    {selectedCountry.dial_code}
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
                            {countryDialCodes?.map((country) => (
                              <SelectItem
                                key={country.code}
                                value={country.code}
                                className="p-4"
                              >
                                <div className="flex items-center gap-2">
                                  <span>
                                    {country.code} {country.dial_code}
                                  </span>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="contactNumber"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Phone Number"
                            type="tel"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <DialogFooter>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowDialog(false)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" disabled={isApplying}>
                    {isApplying ? "Applying..." : "Apply"}
                  </Button>
                </DialogFooter>
              </form>
            </Form>
          </DialogContent>
        </Dialog>

        {/* Success Dialog */}
        <Dialog open={successDialog} onOpenChange={setSuccessDialog}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Application Submitted</DialogTitle>
              <DialogDescription>{dialogMessage}</DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button onClick={() => setSuccessDialog(false)}>Close</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <ClientsSlider />
      <Footer />
    </main>
  );
}
