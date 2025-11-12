import React, { useState } from 'react';

const RevenueSystem = () => {
  const [hoveredOps, setHoveredOps] = useState(null);

  const opsDetails = {
    'RevOps': {
      title: 'RevOps',
      purpose: 'Connects data, CRM, voice, analytics, and dashboards into one live environment.',
      whatItDoes: [
        'The invisible operating system that ensures data integrity and visibility across all Ops.'
      ],
      outputs: '',
      poweredBy: '',
      metrics: ['Data Sync Accuracy (>95%)', 'Single Source of Truth Reporting', 'Cross-Platform Uptime (99.9%)']
    },
    'SupportOps': {
      title: 'SupportOps',
      purpose: 'Extend the customer journey — where service generates future revenue.',
      whatItDoes: [
        'Manages installation follow-ups, feedback loops, upsell flows.',
        'AI sentiment detection to trigger intervention or opportunity.',
        'Converts service satisfaction into reviews, referrals, and renewals.'
      ],
      outputs: 'Higher retention, NPS growth, recurring revenue.',
      poweredBy: 'Service CRM, WhatsApp bots, post-sale dashboards.',
      metrics: ['Retention Rate (>80%)', 'Referral Conversion (>20%)', 'Customer Satisfaction/NPS (+65 or higher)']
    },
    'SalesOps': {
      title: 'SalesOps',
      purpose: 'Convert engagement into revenue through connected sales systems.',
      whatItDoes: [
        'Integrates voice agents + human sales teams.',
        'Provides real-time data on conversion probability and deal stage.',
        'Uses AI to prioritize leads, predict closing time, and assist during calls or demos.'
      ],
      outputs: 'Consistent closure rates, reduced drop-offs, unified reporting.',
      poweredBy: 'Predictive sales AI, CRM intelligence, precision stack integrations.',
      metrics: ['Lead-to-Sale Conversion (8–12%)', 'Average Deal Velocity (50% lower)', 'AI Accuracy in Conversion Forecasting (>85%)']
    },
    'VoiceOps': {
      title: 'VoiceOps',
      purpose: 'Build relationships before the sale — where human conversation meets AI precision.',
      whatItDoes: [
        'Outbound AI + human tele-agents for qualification and education.',
        'Multilingual voice AI that nurtures leads with real-time adaptation.',
        'Automated reminders, callback scheduling, sentiment capture.'
      ],
      outputs: 'Engaged prospects, higher appointment rates, faster speed-to-sale.',
      poweredBy: 'ASR/TTS stack, LLM-driven dialogue models, CRM sync.',
      metrics: ['Speed to Lead (<30 secs)', 'Contact Rate (>65%)', 'Qualification Rate (>45%)', 'Appointment Rate (15–25%)']
    },
    'DemandOps': {
      title: 'DemandOps',
      purpose: 'Drive brand visibility and lead flow with measurable cost efficiency.',
      whatItDoes: [
        'Runs multi-channel campaigns (digital, influencer, offline).',
        'Builds performance funnels — optimizing cost per lead and cost per qualified intent.',
        'Continuously learns from campaign data to fine-tune message, channel, and spend.'
      ],
      outputs: 'Brand lift, inbound leads, qualified top-of-funnel velocity.',
      poweredBy: 'CRM analytics, AI ad optimization, content engines.',
      metrics: ['Brand reach', 'Cost per Lead (CPL < 10%)', 'Qualified Lead Ratio (>35%)', '50% lower time to optimize creative & spend']
    }
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Gradient Effect - Purple glow from bottom-left */}
      <div className="absolute left-[-10%] bottom-[-10%] w-[700px] h-[700px] pointer-events-none z-0"
           style={{
             background: 'radial-gradient(circle, rgba(131, 56, 236, 0.3) 0%, rgba(131, 56, 236, 0.15) 35%, transparent 65%)',
             clipPath: 'inset(0 0 0 0)'
           }}>
      </div>
      
      {/* Background Gradient Effect - Pink glow from top-right */}
      <div className="absolute right-[-10%] top-[-10%] w-[700px] h-[700px] pointer-events-none z-0"
           style={{
             background: 'radial-gradient(circle, rgba(225, 25, 139, 0.3) 0%, rgba(225, 25, 139, 0.15) 35%, transparent 65%)',
             clipPath: 'inset(0 0 0 0)'
           }}>
      </div>

      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 md:px-8 lg:px-10 relative z-10">
        <h2 className="gradient-text text-3xl sm:text-4xl md:text-4xl lg:text-5xl text-center mb-4 font-bold">
          The GRX10 Revenue System
        </h2>
        <p className="text-center text-white text-base sm:text-lg md:text-xl max-w-[700px] mx-auto my-4 mb-12 md:my-6 md:mb-16 leading-relaxed">
          Five modules. One backbone. Every layer measurable. Every number connected to revenue.
        </p>
        
        <div className="mt-12 md:mt-20 flex justify-center items-center min-h-[400px] md:min-h-[700px] relative">
          <div className="relative flex justify-center items-center w-full">
            <svg className="w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[450px] md:h-[450px] lg:w-[520px] lg:h-[520px] xl:w-[600px] xl:h-[600px]" viewBox="0 0 700 700">
            <defs>
              {/* Define paths for curved text */}
              <path id="outerPath" d="M 350,40 A 310,310 0 1,1 349.9,40" fill="none" />
              <path id="middlePath" d="M 350,130 A 220,220 0 1,1 349.9,130" fill="none" />
            </defs>
            
            {/* Outer dashed circle */}
            <circle cx="350" cy="350" r="310" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1" strokeDasharray="8,8" />
            
            {/* Inner solid circle */}
            <circle cx="350" cy="350" r="220" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
            
            {/* Center Revenue circle */}
            <circle cx="350" cy="350" r="110" fill="#141414" stroke="rgba(255,255,255,0.6)" strokeWidth="1" />
            <text x="350" y="365" textAnchor="middle" fill="#EC4899" fontSize="32" fontWeight="bold">Revenue</text>
            
            {/* Middle ring text - 5 Ops labels equally spaced (20% apart each) */}
            {/* RevOps - Position 1 (5%) */}
            <text fontSize="24" fontWeight="700" dominantBaseline="middle" className="cursor-pointer" onMouseEnter={() => setHoveredOps('RevOps')} onMouseLeave={() => setHoveredOps(null)}>
              <textPath href="#middlePath" startOffset="5%" textAnchor="middle">
                <tspan fill="#141414" stroke="#141414" strokeWidth="12" paintOrder="stroke">RevOps</tspan>
              </textPath>
            </text>
            <text fill="white" fontSize="24" fontWeight="700" dominantBaseline="middle" className="cursor-pointer" onMouseEnter={() => setHoveredOps('RevOps')} onMouseLeave={() => setHoveredOps(null)}>
              <textPath href="#middlePath" startOffset="5%" textAnchor="middle">RevOps</textPath>
            </text>
            
            {/* SupportOps - Position 2 (25%) */}
            <text fontSize="24" fontWeight="700" dominantBaseline="middle" className="cursor-pointer" onMouseEnter={() => setHoveredOps('SupportOps')} onMouseLeave={() => setHoveredOps(null)}>
              <textPath href="#middlePath" startOffset="25%" textAnchor="middle">
                <tspan fill="#141414" stroke="#141414" strokeWidth="12" paintOrder="stroke">SupportOps</tspan>
              </textPath>
            </text>
            <text fill="white" fontSize="24" fontWeight="700" dominantBaseline="middle" className="cursor-pointer" onMouseEnter={() => setHoveredOps('SupportOps')} onMouseLeave={() => setHoveredOps(null)}>
              <textPath href="#middlePath" startOffset="25%" textAnchor="middle">SupportOps</textPath>
            </text>
            
            {/* SalesOps - Position 3 (45%) */}
            <text fontSize="24" fontWeight="700" dominantBaseline="middle" className="cursor-pointer" onMouseEnter={() => setHoveredOps('SalesOps')} onMouseLeave={() => setHoveredOps(null)}>
              <textPath href="#middlePath" startOffset="45%" textAnchor="middle">
                <tspan fill="#141414" stroke="#141414" strokeWidth="12" paintOrder="stroke">SalesOps</tspan>
              </textPath>
            </text>
            <text fill="white" fontSize="24" fontWeight="700" dominantBaseline="middle" className="cursor-pointer" onMouseEnter={() => setHoveredOps('SalesOps')} onMouseLeave={() => setHoveredOps(null)}>
              <textPath href="#middlePath" startOffset="45%" textAnchor="middle">SalesOps</textPath>
            </text>
            
            {/* VoiceOps - Position 4 (65% - bottom right, rotated) */}
            <text fontSize="24" fontWeight="700" dominantBaseline="middle" transform="rotate(180 350 350)" className="cursor-pointer" onMouseEnter={() => setHoveredOps('VoiceOps')} onMouseLeave={() => setHoveredOps(null)}>
              <textPath href="#middlePath" startOffset="35%" textAnchor="middle">
                <tspan fill="#141414" stroke="#141414" strokeWidth="12" paintOrder="stroke">VoiceOps</tspan>
              </textPath>
            </text>
            <text fill="white" fontSize="24" fontWeight="700" dominantBaseline="middle" transform="rotate(180 350 350)" className="cursor-pointer" onMouseEnter={() => setHoveredOps('VoiceOps')} onMouseLeave={() => setHoveredOps(null)}>
              <textPath href="#middlePath" startOffset="35%" textAnchor="middle">VoiceOps</textPath>
            </text>
            
            {/* DemandOps - Position 5 (85% - bottom middle, rotated) */}
            <text fontSize="24" fontWeight="700" dominantBaseline="middle" transform="rotate(180 350 350)" className="cursor-pointer" onMouseEnter={() => setHoveredOps('DemandOps')} onMouseLeave={() => setHoveredOps(null)}>
              <textPath href="#middlePath" startOffset="15%" textAnchor="middle">
                <tspan fill="#141414" stroke="#141414" strokeWidth="12" paintOrder="stroke">DemandOps</tspan>
              </textPath>
            </text>
            <text fill="white" fontSize="24" fontWeight="700" dominantBaseline="middle" transform="rotate(180 350 350)" className="cursor-pointer" onMouseEnter={() => setHoveredOps('DemandOps')} onMouseLeave={() => setHoveredOps(null)}>
              <textPath href="#middlePath" startOffset="15%" textAnchor="middle">DemandOps</textPath>
            </text>
            
            {/* Outer labels - AI & Expertize curved text at 4 positions with background */}
            {/* Top */}
            <text fontSize="24" fontWeight="700" dominantBaseline="middle">
              <textPath href="#outerPath" startOffset="25%" textAnchor="middle">
                <tspan fill="#141414" stroke="#141414" strokeWidth="12" paintOrder="stroke">AI & Expertize</tspan>
              </textPath>
            </text>
            <text fill="#8b7db8" fontSize="24" fontWeight="700" dominantBaseline="middle">
              <textPath href="#outerPath" startOffset="25%" textAnchor="middle">AI & Expertize</textPath>
            </text>
            
            {/* Right */}
            <text fontSize="24" fontWeight="700" dominantBaseline="middle">
              <textPath href="#outerPath" startOffset="50%" textAnchor="middle">
                <tspan fill="#141414" stroke="#141414" strokeWidth="12" paintOrder="stroke">AI & Expertize</tspan>
              </textPath>
            </text>
            <text fill="#8b7db8" fontSize="24" fontWeight="700" dominantBaseline="middle">
              <textPath href="#outerPath" startOffset="50%" textAnchor="middle">AI & Expertize</textPath>
            </text>
            
            {/* Bottom (rotated) */}
            <text fontSize="24" fontWeight="700" dominantBaseline="middle" transform="rotate(180 350 350)">
              <textPath href="#outerPath" startOffset="25%" textAnchor="middle">
                <tspan fill="#141414" stroke="#141414" strokeWidth="12" paintOrder="stroke">AI & Expertize</tspan>
              </textPath>
            </text>
            <text fill="#8b7db8" fontSize="24" fontWeight="700" dominantBaseline="middle" transform="rotate(180 350 350)">
              <textPath href="#outerPath" startOffset="25%" textAnchor="middle">AI & Expertize</textPath>
            </text>
            
            {/* Left (rotated) */}
            <text fontSize="24" fontWeight="700" dominantBaseline="middle" transform="rotate(180 350 350)">
              <textPath href="#outerPath" startOffset="50%" textAnchor="middle">
                <tspan fill="#141414" stroke="#141414" strokeWidth="12" paintOrder="stroke">AI & Expertize</tspan>
              </textPath>
            </text>
            <text fill="#8b7db8" fontSize="24" fontWeight="700" dominantBaseline="middle" transform="rotate(180 350 350)">
              <textPath href="#outerPath" startOffset="50%" textAnchor="middle">AI & Expertize</textPath>
            </text>
          </svg>

          {/* Info Popup Box */}
          {hoveredOps && (
            <div className="hidden lg:block absolute left-[calc(50%+350px)] top-1/2 -translate-y-1/2 bg-[#E1198B] text-white p-8 rounded-2xl w-[400px] shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold">{opsDetails[hoveredOps].title}</h3>
                <button 
                  onClick={() => setHoveredOps(null)}
                  className="text-white text-2xl font-bold hover:opacity-80"
                >
                  ✕
                </button>
              </div>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div>
                  <p className="font-semibold mb-2">Purpose:</p>
                  <p>{opsDetails[hoveredOps].purpose}</p>
                </div>
                
                {opsDetails[hoveredOps].whatItDoes.length > 0 && (
                  <div>
                    <p className="font-semibold mb-2">What It Does:</p>
                    <ul className="space-y-1 pl-4">
                      {opsDetails[hoveredOps].whatItDoes.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {(opsDetails[hoveredOps].outputs || opsDetails[hoveredOps].poweredBy) && (
                  <div>
                    {opsDetails[hoveredOps].outputs && (
                      <>
                        <p className="font-semibold mb-2">Outputs:</p>
                        <p>{opsDetails[hoveredOps].outputs}</p>
                      </>
                    )}
                    {opsDetails[hoveredOps].poweredBy && (
                      <p className="mt-2 text-xs italic">Powered by: {opsDetails[hoveredOps].poweredBy}</p>
                    )}
                  </div>
                )}
                
                <div>
                  <p className="font-semibold mb-2">Metrics:</p>
                  <ul className="space-y-1 pl-4">
                    {opsDetails[hoveredOps].metrics.map((metric, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>{metric}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
        </div>
      </div>
    </section>
  );
};

export default RevenueSystem;
