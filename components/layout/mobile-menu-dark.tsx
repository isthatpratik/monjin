"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "../ui/button";

type MenuType = "main" | "product" | "company";

export function MobileMenuDark() {
  const [activeMenu, setActiveMenu] = useState<MenuType>("main");
  const [open, setOpen] = useState(false);

  const renderMainMenu = () => (
    <div className="min-h-screen flex flex-col">
      <div className="flex items-center justify-between p-6">
        <Link href={"/"}>
          <Image
            src="/assets/monjin-navbar.png"
            alt="Monjin Logo"
            width={100}
            height={40}
            className="h-8 w-auto"
          />
        </Link>
        <button
          onClick={() => setOpen(false)}
          className="h-8 w-8 flex items-center justify-center border-[1.5px] border-[#222222] rounded"
        >
          <X className="h-6 w-6" />
        </button>
      </div>
      <nav className="flex-1 p-6">
        <div className="space-y-8">
          <button
            onClick={() => setActiveMenu("product")}
            className="flex items-center gap-2 w-full text-lg text-[#0E0E0E]/60 font-figtree font-light "
          >
            Product
            <ChevronRight className="h-5 w-5" />
          </button>
          <button
            onClick={() => setActiveMenu("company")}
            className="flex items-center w-full gap-2 text-lg text-[#0E0E0E]/60 font-figtree font-light "
          >
            Company
            <ChevronRight className="h-5 w-5" />
          </button>
          <Link
            href="/support"
            className="block text-lg text-[#0E0E0E]/60 font-figtree font-light "
          >
            Support
          </Link>
          <Link
            href="https://uni.monjin.com/public/candidate/registration"
            className="block text-lg text-[#0E0E0E]/60 font-figtree font-light "
            target="_blank"
          >
            Candidate
          </Link>
          <Link
            href="https://uni.monjin.com/public/interviewer/registration"
            className="block text-lg text-[#0E0E0E]/60 font-figtree font-light "
            target="_blank"
          >
            Interviewer
          </Link>
          <Link
            href="https://uni.monjin.com/public/organization/registration"
            className="block text-lg text-[#0E0E0E]/60 font-figtree font-light "
            target="_blank"
          >
            Post a Job
          </Link>
          <Link
            href="/viewjobs"
            className="block text-lg text-[#0E0E0E]/60 font-figtree font-light "
          >
            View Jobs
          </Link>
          <div className="grid grid-cols-1 gap-4">
            <Link
              href="https://uni.monjin.com/public/organization/registration"
              passHref
              className="col-span-1"
            >
              <Button className="w-full items-center justify-center text-center font-onest h-auto px-5 py-4 bg-[#212121] text-white rounded-[8px]">
                Login
              </Button>
            </Link>

            <Link href="/contact" className="col-span-1">
              <Button className="w-full items-center justify-center text-center hover:bg-transparent h-auto px-5 py-4 shadow-none border border-[#0E0E0E]/25 bg-transparent text-black rounded-[8px]">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );

  const renderProductMenu = () => (
    <div className="min-h-screen">
      <div className="flex items-center gap-4 p-6">
        <button
          onClick={() => setActiveMenu("main")}
          className="h-8 w-8 flex items-center justify-center border-[1.5px] border-[#222222] rounded-[4px]"
        >
          <ChevronLeft className="h-5 w-5 text-[#3A3A3A]" />
        </button>
        <h1 className="text-2xl font-semibold font-onest">Product</h1>
      </div>
      <div className="p-6 space-y-8">
        <Link href="/products/OCOI" className="flex gap-4">
          <div className="h-10 w-10 bg-[#947EFF]/10 rounded-[4px] flex items-center justify-center">
            <Image
              src={"/assets/product-icons/ocoi.png"}
              alt="ocoi icon"
              width={48}
              height={48}
              className="w-6 h-6 object-center"
            />
          </div>
          <div>
            <h3 className="text-[15px] font-onest text-[#7D65EA]">OCOI</h3>
            <p className="text-[#6C8888] font-figtree text-sm">
              Our Candidates Our interviewers
            </p>
          </div>
        </Link>
        <Link href="/products/YCOI" className="flex gap-4">
          <div className="h-10 w-10 bg-[#F6FAEA] rounded-[4px] flex items-center justify-center">
            <Image
              src={"/assets/product-icons/ycoi.png"}
              alt="ycoi icon"
              width={48}
              height={48}
              className="w-6 h-6 object-center"
            />
          </div>
          <div>
            <h3 className="text-[15px] font-onest text-[#899B51]">YCOI</h3>
            <p className="text-[#6C8888] font-figtree text-sm">
              Your Candidates Our interviewers
            </p>
          </div>
        </Link>
        <Link href="/products/Spotlight" className="flex gap-4">
          <div className="h-10 w-10 bg-[#FCF3E8] rounded-[4px] flex items-center justify-center">
            <Image
              src={"/assets/product-icons/spotlight.png"}
              alt="ycoi icon"
              width={48}
              height={48}
              className="w-6 h-6 object-center"
            />
          </div>
          <div>
            <h3 className="text-[15px] font-onest text-[#C28331]">Spotlight</h3>
            <p className="text-[#6C8888] font-figtree text-sm">
              Accelerate Efficient Screening
            </p>
          </div>
        </Link>
        <Link href="/products/Basics" className="flex gap-4">
          <div className="h-10 w-10 bg-[#FEF0F1] rounded-[4px] flex items-center justify-center">
            <Image
              src={"/assets/product-icons/basics.png"}
              alt="ycoi icon"
              width={48}
              height={48}
              className="w-6 h-6 object-center"
            />
          </div>
          <div>
            <h3 className="text-[15px] font-onest text-[#F46D70]">Basics</h3>
            <p className="text-[#6C8888] font-figtree text-sm">
              Streamline Effortless Hiring
            </p>
          </div>
        </Link>
        <Link href="/products/PerformanceManagement" className="flex gap-4">
          <div className="h-10 w-10 bg-[#F8EEFB] rounded-[4px] flex items-center justify-center">
            <Image
              src={"/assets/product-icons/performance_management.png"}
              alt="ycoi icon"
              width={48}
              height={48}
              className="w-6 h-6 object-center"
            />
          </div>
          <div>
            <h3 className="text-[15px] font-onest text-[#BA57D3]">
              Performance Management
            </h3>
            <p className="text-[#6C8888] font-figtree text-sm">
              Pre-Assessed Candidatures
            </p>
          </div>
        </Link>
        <Link href="/products/MonjinSuite" className="flex gap-4">
          <div className="h-10 w-10 rounded-[4px] flex items-center justify-center">
            <Image
              src={"/assets/product-icons/monjin-suite-bg.png"}
              alt="ycoi icon"
              width={48}
              height={48}
              className="w-10 h-10 object-center"
            />
          </div>
          <div>
            <h3 className="text-[15px] font-onest text-[#373737]">
              Monjin Suite
            </h3>
            <p className="text-[#6C8888] font-figtree text-sm">
              Attract, engage & retain talent
            </p>
          </div>
        </Link>
      </div>
    </div>
  );

  const renderCompanyMenu = () => (
    <div className="min-h-screen">
      <div className="flex items-center gap-4 p-6">
        <button
          onClick={() => setActiveMenu("main")}
          className="h-8 w-8 flex items-center justify-center border-[1.5px] border-[#222222] rounded-[4px]"
        >
          <ChevronLeft className="h-5 w-5 text-[#3A3A3A]" />
        </button>
        <h1 className="text-2xl font-semibold font-onest">Company</h1>
      </div>
      <div className="p-6 space-y-10">
        <Link href="/company/about" className="flex gap-4">
          <div className="h-10 w-10 bg-[#947EFF]/10 rounded-[4px] flex items-center justify-center">
            <Image
              src={"/assets/product-icons/about.png"}
              alt="ycoi icon"
              width={80}
              height={80}
              className="w-6 h-6 object-center"
            />
          </div>
          <div>
            <h3 className="text-[15px] font-onest text-[#7D65EA]">About Us</h3>
            <p className="text-[#6C8888] font-figtree text-sm">
              Pre-Assessed Candidatures
            </p>
          </div>
        </Link>
        <Link href="/company/culture" className="flex gap-4">
          <div className="h-10 w-10 bg-[#F6FAEA] rounded-[4px] flex items-center justify-center">
            <Image
              src={"/assets/product-icons/culture.png"}
              alt="ycoi icon"
              width={80}
              height={80}
              className="w-6 h-6 object-center"
            />
          </div>
          <div>
            <h3 className="text-[15px] font-onest text-[#899B51]">Culture</h3>
            <p className="text-[#6C8888] font-figtree text-sm">
              Discover our vibrant culture
            </p>
          </div>
        </Link>
        <Link href="/company/team" className="flex gap-4">
          <div className="h-10 w-10 bg-[#FCF3E8] rounded-[4px] flex items-center justify-center">
            <Image
              src={"/assets/product-icons/our-team.png"}
              alt="ycoi icon"
              width={80}
              height={80}
              className="w-6 h-6 object-center"
            />
          </div>
          <div>
            <h3 className="text-[15px] font-onest text-[#C28331]">Our Team</h3>
            <p className="text-[#6C8888] font-figtree text-sm">
              Meet our talented team members
            </p>
          </div>
        </Link>
        <Link href="/company/careers" className="flex gap-4">
          <div className="h-10 w-10 bg-[#D9FBFF] rounded-[4px] flex items-center justify-center">
            <Image
              src={"/assets/product-icons/careers.png"}
              alt="ycoi icon"
              width={80}
              height={80}
              className="w-6 h-6 object-center"
            />
          </div>
          <div>
            <h3 className="text-[15px] font-onest text-[#3B89A8]">Careers</h3>
            <p className="text-[#6C8888] font-figtree text-sm">
              Empower Thrive Succeed
            </p>
          </div>
        </Link>
      </div>
    </div>
  );

  return (
    <div className="lg:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button className="h-8 w-8 flex flex-col items-center justify-center gap-1.5 border-[1.5px] border-[#222222] rounded-[4px]">
            <div className="w-5 h-0.5 bg-[#3A3A3A]"></div>
            <div className="w-5 h-0.5 bg-[#3A3A3A]"></div>
          </button>
        </SheetTrigger>
        <SheetContent side="right" className="w-full p-0">
          {activeMenu === "main" && renderMainMenu()}
          {activeMenu === "product" && renderProductMenu()}
          {activeMenu === "company" && renderCompanyMenu()}
        </SheetContent>
      </Sheet>
    </div>
  );
}
