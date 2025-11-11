import React from 'react';

const RevenueSystem = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 md:px-8 lg:px-10">
        <h2 className="gradient-text text-3xl sm:text-4xl md:text-4xl lg:text-5xl text-center mb-4 font-bold">
          The GRX10 Revenue System
        </h2>
        <p className="text-center text-white text-base sm:text-lg md:text-xl max-w-[700px] mx-auto my-4 mb-12 md:my-6 md:mb-16 leading-relaxed">
          Five modules. One backbone. Every layer measurable. Every number connected to revenue.
        </p>
        
        <div className="mt-12 md:mt-20 flex justify-center items-center min-h-[400px] md:min-h-[700px] relative">
          <svg className="w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[450px] md:h-[450px] lg:w-[520px] lg:h-[520px] xl:w-[600px] xl:h-[600px]" viewBox="0 0 700 700">
            <defs>
              {/* Define paths for curved text */}
              <path id="outerPath" d="M 350,40 A 310,310 0 1,1 349.9,40" fill="none" />
              <path id="middlePath" d="M 350,130 A 220,220 0 1,1 349.9,130" fill="none" />
            </defs>
            
            {/* Outer dashed circle */}
            <circle cx="350" cy="350" r="310" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeDasharray="8,8" />
            
            {/* Inner solid circle */}
            <circle cx="350" cy="350" r="220" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
            
            {/* Center Revenue circle */}
            <circle cx="350" cy="350" r="110" fill="#141414" stroke="rgba(255,255,255,0.6)" strokeWidth="2" />
            <text x="350" y="365" textAnchor="middle" fill="#EC4899" fontSize="28" fontWeight="bold">Revenue</text>
            
            {/* Middle ring text - 5 Ops labels equally spaced (20% apart each) */}
            {/* RevOps - Position 1 (5%) */}
            <text fontSize="20" fontWeight="600" dominantBaseline="middle">
              <textPath href="#middlePath" startOffset="5%" textAnchor="middle">
                <tspan fill="#141414" stroke="#141414" strokeWidth="10" paintOrder="stroke">RevOps</tspan>
              </textPath>
            </text>
            <text fill="white" fontSize="20" fontWeight="600" dominantBaseline="middle">
              <textPath href="#middlePath" startOffset="5%" textAnchor="middle">RevOps</textPath>
            </text>
            
            {/* SupportOps - Position 2 (25%) */}
            <text fontSize="20" fontWeight="600" dominantBaseline="middle">
              <textPath href="#middlePath" startOffset="25%" textAnchor="middle">
                <tspan fill="#141414" stroke="#141414" strokeWidth="10" paintOrder="stroke">SupportOps</tspan>
              </textPath>
            </text>
            <text fill="white" fontSize="20" fontWeight="600" dominantBaseline="middle">
              <textPath href="#middlePath" startOffset="25%" textAnchor="middle">SupportOps</textPath>
            </text>
            
            {/* SalesOps - Position 3 (45%) */}
            <text fontSize="20" fontWeight="600" dominantBaseline="middle">
              <textPath href="#middlePath" startOffset="45%" textAnchor="middle">
                <tspan fill="#141414" stroke="#141414" strokeWidth="10" paintOrder="stroke">SalesOps</tspan>
              </textPath>
            </text>
            <text fill="white" fontSize="20" fontWeight="600" dominantBaseline="middle">
              <textPath href="#middlePath" startOffset="45%" textAnchor="middle">SalesOps</textPath>
            </text>
            
            {/* VoiceOps - Position 4 (65% - bottom right, rotated) */}
            <text fontSize="20" fontWeight="600" dominantBaseline="middle" transform="rotate(180 350 350)">
              <textPath href="#middlePath" startOffset="35%" textAnchor="middle">
                <tspan fill="#141414" stroke="#141414" strokeWidth="10" paintOrder="stroke">VoiceOps</tspan>
              </textPath>
            </text>
            <text fill="white" fontSize="20" fontWeight="600" dominantBaseline="middle" transform="rotate(180 350 350)">
              <textPath href="#middlePath" startOffset="35%" textAnchor="middle">VoiceOps</textPath>
            </text>
            
            {/* DemandOps - Position 5 (85% - bottom middle, rotated) */}
            <text fontSize="20" fontWeight="600" dominantBaseline="middle" transform="rotate(180 350 350)">
              <textPath href="#middlePath" startOffset="15%" textAnchor="middle">
                <tspan fill="#141414" stroke="#141414" strokeWidth="10" paintOrder="stroke">DemandOps</tspan>
              </textPath>
            </text>
            <text fill="white" fontSize="20" fontWeight="600" dominantBaseline="middle" transform="rotate(180 350 350)">
              <textPath href="#middlePath" startOffset="15%" textAnchor="middle">DemandOps</textPath>
            </text>
            
            {/* Outer labels - AI & Expertize curved text at 4 positions with background */}
            {/* Top */}
            <text fontSize="20" fontWeight="600" dominantBaseline="middle">
              <textPath href="#outerPath" startOffset="25%" textAnchor="middle">
                <tspan fill="#141414" stroke="#141414" strokeWidth="10" paintOrder="stroke">AI & Expertize</tspan>
              </textPath>
            </text>
            <text fill="#8b7db8" fontSize="20" fontWeight="600" dominantBaseline="middle">
              <textPath href="#outerPath" startOffset="25%" textAnchor="middle">AI & Expertize</textPath>
            </text>
            
            {/* Right */}
            <text fontSize="20" fontWeight="600" dominantBaseline="middle">
              <textPath href="#outerPath" startOffset="50%" textAnchor="middle">
                <tspan fill="#141414" stroke="#141414" strokeWidth="10" paintOrder="stroke">AI & Expertize</tspan>
              </textPath>
            </text>
            <text fill="#8b7db8" fontSize="20" fontWeight="600" dominantBaseline="middle">
              <textPath href="#outerPath" startOffset="50%" textAnchor="middle">AI & Expertize</textPath>
            </text>
            
            {/* Bottom (rotated) */}
            <text fontSize="20" fontWeight="600" dominantBaseline="middle" transform="rotate(180 350 350)">
              <textPath href="#outerPath" startOffset="25%" textAnchor="middle">
                <tspan fill="#141414" stroke="#141414" strokeWidth="10" paintOrder="stroke">AI & Expertize</tspan>
              </textPath>
            </text>
            <text fill="#8b7db8" fontSize="20" fontWeight="600" dominantBaseline="middle" transform="rotate(180 350 350)">
              <textPath href="#outerPath" startOffset="25%" textAnchor="middle">AI & Expertize</textPath>
            </text>
            
            {/* Left (rotated) */}
            <text fontSize="20" fontWeight="600" dominantBaseline="middle" transform="rotate(180 350 350)">
              <textPath href="#outerPath" startOffset="50%" textAnchor="middle">
                <tspan fill="#141414" stroke="#141414" strokeWidth="10" paintOrder="stroke">AI & Expertize</tspan>
              </textPath>
            </text>
            <text fill="#8b7db8" fontSize="20" fontWeight="600" dominantBaseline="middle" transform="rotate(180 350 350)">
              <textPath href="#outerPath" startOffset="50%" textAnchor="middle">AI & Expertize</textPath>
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default RevenueSystem;
