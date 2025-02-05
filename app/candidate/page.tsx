import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Candidate() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[url('/assets/404-mobile.jpg')] lg:bg-[url('/assets/404.jpg')] bg-cover bg-bottom">
      <div className="min-h-screen mx-auto z-999 flex flex-col items-center justify-evenly px-4">
        <div className="max-w-screen-xl px-4 py-8 lg:w-40 w-48 h-auto flex itmes-center justify-center">
          <Image
            src={"/assets/monjin-navbar.png"}
            alt="Monjin Logo"
            width={200}
            height={200}
            className="object-contain"
          />
        </div>
        <div className="flex flex-col items-center justify-center space-y-2">
          <h1 className="font-onest font-bold lg:font-semibold text-center text-4xl lg:text-[78px] tracking-normal leading-tight">
            Coming Soon!
          </h1>
          <p className="font-figtree lg:font-onest text-center font-semibold text-base lg:text-3xl tracking-normal leading-tight">
            
          </p>
        </div>
        <div>
          <Link href={"/"}>
            <Button className="bg-[#0F0F0F] px-12 py-6 font-normal rounded-[8px] text-sm font-onest">
              Go Back To Home
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
