import React from 'react';

const CredibilitySection = () => {
  const credibilityCards = [
    {
      title: "Clean Energy Leader",
      description: "End-to-end revenue operations support from launch to growth. Unified installers and customers, ran digital and offline campaigns, established a voice-AI call centre, and deployed an on-ground sales team.",
      result: "#1 in incremental market share and consistent MoM revenue growth."
    },
    {
      title: "High-Growth e-Commerce Brand",
      description: "Enhanced digital presence with influencer-driven lead generation, AI routing, hybrid sales + fulfilment loop.",
      result: "Record-high conversion velocity and repeat buyers."
    },
    {
      title: "Industrial & Manufacturing Major",
      description: "Simplified complex technical products through clear brand storytelling, full-stack PR, media, analytics, and AI content optimisation.",
      result: "Doubled qualified inbound interest within six months."
    },
    {
      title: "Growth Private Equity",
      description: "Transformed sales collaboration with integrated CRM workflows, data enrichment pipelines, and real-time reporting dashboards.",
      result: "Unified sales operations and accelerated deal cycles by 35%."
    }
  ];

  return (
    <section className="py-16 md:py-24 overflow-visible">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 md:px-8 lg:px-10">
        <h2 className="gradient-text text-3xl sm:text-4xl md:text-4xl lg:text-5xl text-center mb-4 font-bold">
          Proven Credibility
        </h2>
        <p className="text-center text-white text-base sm:text-lg md:text-xl max-w-[900px] mx-auto my-4 mb-12 md:my-6 md:mb-16 leading-relaxed">
          We've built full-funnel revenue systems across Clean Energy, e-Commerce, Industrial, 
          and Enterprise Tech - each powered by real data, live feedback, and applied AI.
        </p>
      </div>
      
      <div className="w-full overflow-hidden mt-12 py-8">
        <div className="flex gap-8 animate-[credibilityScroll_40s_linear_infinite] w-max hover:pause">
          {credibilityCards.map((card, index) => (
            <div 
              key={index} 
              className="p-6 sm:p-8 md:p-10 rounded-2xl border-none transition-all duration-300 min-w-[280px] max-w-[280px] sm:min-w-[300px] sm:max-w-[300px] md:min-w-[340px] md:max-w-[340px] lg:min-w-[380px] lg:max-w-[380px] flex-shrink-0 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
              style={{ background: 'linear-gradient(180deg, #310B20 0%, #1E1E32 100%)' }}
            >
              <div className="w-[70px] h-[70px] flex items-center justify-center mb-6">
                <img src="/proven credibility.png" alt="Proven Credibility" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl md:text-[1.4rem] mb-4 text-white font-semibold">
                {card.title}
              </h3>
              <p className="text-white leading-[1.7] mb-4 text-[0.95rem] md:text-base">
                {card.description}
              </p>
              <div className="mt-6">
                <span className="text-primary-pink font-semibold text-[0.95rem] block mb-2">
                  Result:
                </span>
                <p className="text-white text-[0.95rem] m-0 leading-relaxed">
                  {card.result}
                </p>
              </div>
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {credibilityCards.map((card, index) => (
            <div 
              key={`duplicate-${index}`} 
              className="p-10 rounded-2xl border-none transition-all duration-300 min-w-[380px] max-w-[380px] flex-shrink-0 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] lg:min-w-[340px] lg:max-w-[340px] md:min-w-[300px] md:max-w-[300px] md:p-8 sm:min-w-[280px] sm:max-w-[280px] sm:p-6"
              style={{ background: 'linear-gradient(180deg, #310B20 0%, #1E1E32 100%)' }}
            >
              <div className="w-[70px] h-[70px] flex items-center justify-center mb-6">
                <img src="/proven credibility.png" alt="Proven Credibility" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-[1.4rem] mb-4 text-white font-semibold md:text-xl">
                {card.title}
              </h3>
              <p className="text-white leading-[1.7] mb-4 text-base md:text-[0.95rem]">
                {card.description}
              </p>
              <div className="mt-6">
                <span className="text-[#E1198B] font-semibold text-[0.95rem] block mb-2">
                  Result:
                </span>
                <p className="text-white text-[0.95rem] m-0 leading-relaxed">
                  {card.result}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes credibilityScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default CredibilitySection;
