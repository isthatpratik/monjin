import React from "react";

const Quote = () => {
  return (
    <section className="mx-auto md:max-w-xl lg:max-w-screen-2xl px-4 lg:py-16">
      <div className="flex items-center justify-center lg:bg-[url('/assets/culture/quote-bg.jpg')] bg-[url('/assets/culture/quote-bg-mobile.jpg')] bg-cover bg-center bg-no-repeat p-12 lg:p-36 rounded-2xl lg:rounded-[48px] lg:mt-12">
        <h2 className="font-onest font-light text-base md:text-2xl lg:text-5xl max-w-7xl text-center text-white leading-snug">
          Talent is transformative. The more energy, attention, and trust you
          pour into your team, the greater the rewards— for them, for your
          customers, and for you. <br />
          <span className="font-onest font-medium text-base md:text-2xl lg:text-5xl text-[#D0F16C]">Talent does not just add value; it multiplies it.</span>
        </h2>
      </div>
    </section>
  );
};

export default Quote;
