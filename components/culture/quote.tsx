import React from "react";

const Quote = () => {
  return (
    <section className="mx-auto px-4 py-16">
      <div className="flex items-center justify-center bg-[url('/assets/culture/quote-bg.jpg')] bg-cover bg-center bg-no-repeat p-36 rounded-[48px] mt-12">
        <h2 className="font-onest font-light text-5xl max-w-7xl text-center text-white">
          Talent is transformative. The more energy, attention, and trust you
          pour into your team, the greater the rewards— for them, for your
          customers, and for you. <br />
          <span className="font-onest font-medium text-5xl text-[#D0F16C]">Talent does not just add value; it multiplies it.</span>
        </h2>
      </div>
    </section>
  );
};

export default Quote;
