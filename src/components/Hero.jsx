import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-dark-bg py-16 md:py-24 lg:py-32 text-center overflow-visible">
      {/* Background Gradient Effect - Purple glow from right near client slider */}
      <div className="absolute right-[-15%] bottom-[-20%] w-[700px] h-[700px] pointer-events-none z-0"
           style={{
             background: 'radial-gradient(circle, rgba(116, 101, 233, 0.3) 0%, rgba(116, 101, 233, 0.15) 35%, transparent 65%)',
             clipPath: 'inset(0 0 0 0)'
           }}>
      </div>
      
      {/* Background Gradient Effect - Pink glow from left near client slider */}
      <div className="absolute left-[-15%] bottom-[-20%] w-[700px] h-[700px] pointer-events-none z-0"
           style={{
             background: 'radial-gradient(circle, rgba(225, 25, 139, 0.3) 0%, rgba(225, 25, 139, 0.15) 35%, transparent 65%)',
             clipPath: 'inset(0 0 0 0)'
           }}>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-6 md:px-8 lg:px-10">
        <div className="hero-content">
          <h1 className="text-4xl sm:text-5xl md:text-[2.5rem] lg:text-6xl xl:text-[5rem] mb-6 font-bold leading-tight">
            <span className="text-[#585858]">We build </span>
            <span className="text-[#E1198B]">Revenue.</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[1.3rem] mb-8 md:mb-12 text-[#ffffff] max-w-[700px] mx-auto">
            Engineered by people who've done it before. Shaped by real operators.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-stretch sm:items-center">
            <button className="bg-[#E1198B] text-white border-none px-10 py-4 text-base font-semibold rounded-full cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(225,25,139,0.3)]">
              Get in touch
            </button>
            <button className="bg-transparent text-white border-2 border-white px-10 py-4 text-base font-semibold rounded-full cursor-pointer transition-all duration-300 hover:bg-[rgba(255,255,255,0.1)]">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
