import React from "react";
import Image from "next/image";
import { Solitreo } from "next/font/google";

const solitreo = Solitreo({ weight: "400", preload: false });

export default function CultureHero() {
    return (
      <section className="min-h-screen px-4 py-24 flex flex-col items-center text-white">
        {/* Logo and Culture text */}
        <div className="flex flex-col items-center justify-center gap-3 mb-12">
          <div className="bg-white/10 backdrop-blur-sm px-14 py-6 gap-4 rounded-full flex flex-col items-center justify-center">
            <Image 
                src={'/assets/culture/monjin-logo.png'}
                alt="Monjin Logo in White"
                width={32}
                height={32}
                className="object-contain "
            />
            <span className="textlg font-Onest tracking-wide">CULTURE AT MONJIN</span>
          </div>
        </div>
  
        {/* Main heading */}
        <h1 className="text-[78px] font-semibold font-onest text-center mb-6 tracking-tighter">The Catalyst for Success</h1>
  
        {/* Subtitle */}
        <p className="text-lg font-figtree font-light text-center mb-12">
          Whether you are launching your dream business or leading an established legacy, we&apos;re here to amplify your
          success.
        </p>
  
        {/* Testimonial Card */}
        <div className="bg-white rounded-3xl py-24 px-36 max-w-7xl">
          <blockquote className="text-gray-800">
            <p className="text-lg md:text-xl text-center leading-relaxed mb-8">
              &quot;We have learned that culture is not just part of the equation—it is the equation. When you define your core
              values, hire people who embody them, and weave them into every aspect of your business, something magical
              happens: your team thrives. They do not just work; they innovate, deliver, and create unforgettable WOW
              experiences for your customers.&quot;
            </p>
            <footer className="text-center">
              <cite className="not-italic">
                <span className={`${solitreo.className} font-solitreo text-[34px] mb-1 text-[#381664] block`}>Aniket Tapre</span>
                <span className="text-[#F46D70] text-sm font-medium font-onest">CEO of Monjin</span>
              </cite>
            </footer>
          </blockquote>
        </div>
      </section>
    )
  }
  
  