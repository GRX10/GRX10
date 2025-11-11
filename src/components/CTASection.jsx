import React from 'react';

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 flex justify-center items-center">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 md:px-8 lg:px-10 w-full">
        <div className="rounded-2xl md:rounded-3xl p-10 px-6 sm:p-12 md:p-16 text-center shadow-[0_20px_60px_rgba(0,0,0,0.4)] w-full relative mx-2.5 md:mx-0"
             style={{ background: 'linear-gradient(180deg, #310B20 0%, #1E1E32 100%)' }}>
          <h2 className="gradient-text text-2xl sm:text-[1.8rem] md:text-[2.5rem] lg:text-5xl xl:text-[3.5rem] mb-4 md:mb-6 font-bold leading-tight pb-1">
            Looking for something else?
          </h2>
          <p className="text-[#d1d5db] text-base sm:text-lg md:text-xl mb-6 md:mb-8 leading-relaxed max-w-[900px] mx-auto">
            Feel free to get in touch with us and we will get back to you in a day, Tops.
          </p>
          <button className="mt-4 bg-[#E1198B] text-white border-none px-12 py-[1.1rem] text-lg font-semibold rounded-full cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(225,25,139,0.3)]">
            Get in touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
