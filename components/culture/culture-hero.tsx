import React from "react";
import Image from "next/image";

export default function CultureHero() {
    return (
      <section className="px-4 lg:py-24 py-6 flex flex-col items-center text-white flex-wrap">
        {/* Logo and Culture text */}
        <div className="flex flex-col items-center justify-center gap-3 mb-12">
          <div className="bg-white/10 backdrop-blur-sm lg:px-14 px-7 py-4 lg:py-6 gap-4 rounded-full flex flex-col items-center justify-center">
            <Image 
                src={'/assets/culture/monjin-logo.png'}
                alt="Monjin Logo in White"
                width={32}
                height={32}
                className="object-contain "
            />
            <span className="text-xs lg:textlg font-onest tracking-wide">CULTURE AT MONJIN</span>
          </div>
        </div>
  
        {/* Main heading */}
        <h1 className="text-4xl lg:text-[78px] font-semibold font-onest text-center mb-6 tracking-tighter lg:max-w-full max-w-xs">The Catalyst for Success</h1>
  
        {/* Subtitle */}
        <p className="text-lg font-figtree font-light text-center my-8 hidden lg:block">
          Whether you are launching your dream business or leading an established legacy, we&apos;re here to amplify your
          success.
        </p>
  
        {/* Testimonial Card */}
        <div className="bg-white rounded-3xl py-6 lg:py-24 px-6 lg:px-36 max-w-xs md:max-w-lg lg:max-w-7xl">
          <blockquote className="text-gray-800">
            <p className="text-sm lg:text-xl text-center font-figtree font-normal leading-relaxed mb-8">
              &quot;We have learned that culture is not just part of the equation—it is the equation. When you define your core
              values, hire people who embody them, and weave them into every aspect of your business, something magical
              happens: your team thrives. They do not just work; they innovate, deliver, and create unforgettable WOW
              experiences for your customers.&quot;
            </p>
            <footer className="text-center flex flex-col gap-4 items-center justify-center">
                <Image 
                  src={'/assets/culture/signature.png'}
                  alt="Aniket Signature"
                  width={100}
                  height={100}
                  className="object-contain w-24 lg:w-40 h-auto"
                />
                <span className="text-[#F46D70] text-xs lg:text-sm font-medium font-onest">CEO of Monjin</span>
            </footer>
          </blockquote>
        </div>
      </section>
    )
  }
  
  