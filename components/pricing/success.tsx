import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Success({ onBackHome }: { onBackHome: () => void }) {
  return (
    <main className="p-10 flex flex-col items-center justify-center mx-auto px-4 py-6">
      <div className="flex items-center justify-center">
        <Image
          src={"/assets/pricing/success.png"}
          alt="Succes Icon"
          width={100}
          height={100}
          className="object-contain w-auto h-auto"
        />
      </div>
      <div className="flex flex-col items-center justify-center space-y-4">
        <h2>Thank you for reaching out!</h2>
        <h3>Your request has been submitted successfully.</h3>
        <p>
          Our team will review your information and get back to you shortly. We
          look forward to connecting and discussing how Monjin can help you.
        </p>
      </div>
      <div className="flex items-center justify-center">
        <Link href={"/"}>
          <Button
            className="mt-6 px-6 py-3 bg-black text-white rounded-md"
            onClick={onBackHome}
          >
            Back To Home
          </Button>
        </Link>
      </div>
    </main>
  );
}
