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
    <section className="py-12 md:py-16 relative overflow-visible">
      {/* Background Gradient Effect - Purple glow from bottom-left */}
      <div className="absolute left-[-15%] bottom-[-15%] w-[600px] h-[600px] pointer-events-none z-0"
           style={{
             background: 'radial-gradient(circle, rgba(131, 56, 236, 0.4) 0%, rgba(131, 56, 236, 0.2) 30%, rgba(131, 56, 236, 0.1) 50%, transparent 70%)'
           }}>
      </div>
      
      {/* Background Gradient Effect - Pink glow from top-right */}
      <div className="absolute right-[-15%] top-[-15%] w-[600px] h-[600px] pointer-events-none z-0"
           style={{
             background: 'radial-gradient(circle, rgba(225, 25, 139, 0.4) 0%, rgba(225, 25, 139, 0.2) 30%, rgba(225, 25, 139, 0.1) 50%, transparent 70%)'
           }}>
      </div>

      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 md:px-8 lg:px-10 relative z-10">
        <h2 className="gradient-text text-3xl sm:text-4xl md:text-4xl lg:text-5xl text-center mb-4 font-bold">
          The GRX10 Revenue System
        </h2>
        <p className="text-center text-white text-base sm:text-lg md:text-xl max-w-[700px] mx-auto my-3 mb-8 md:my-4 md:mb-12 leading-relaxed">
          Five modules. One backbone. Every layer measurable. Every number connected to revenue.
        </p>
        
        <div className={`mt-8 md:mt-12 flex justify-center items-center min-h-[500px] md:min-h-[700px] py-8 md:py-12 relative ${hoveredOps ? 'mb-[450px] xl:mb-0' : ''}`}>
          <div className="relative flex justify-center items-center w-full revenue-diagram-container">
            <svg className="w-[340px] h-[340px] sm:w-[380px] sm:h-[380px] md:w-[450px] md:h-[450px] lg:w-[520px] lg:h-[520px] xl:w-[600px] xl:h-[600px]" viewBox="0 0 700 700" preserveAspectRatio="xMidYMid meet">
            <defs>
              {/* Define paths for curved text */}
              <path id="outerPath" d="M 350,40 A 310,310 0 1,1 349.9,40" fill="none" />
              <path id="middlePath" d="M 350,130 A 220,220 0 1,1 349.9,130" fill="none" />
              
              {/* Masks to cut lines where text appears */}
              <mask id="innerCircleMask">
                <circle cx="350" cy="350" r="220" fill="white" stroke="white" strokeWidth="20" />
                {/* Black areas will hide the line */}
                <text fontSize="24" fontWeight="700" dominantBaseline="middle" fill="black" stroke="black" strokeWidth="10">
                  <textPath href="#middlePath" startOffset="5%" textAnchor="middle">RevOps</textPath>
                </text>
                <text fontSize="24" fontWeight="700" dominantBaseline="middle" fill="black" stroke="black" strokeWidth="10">
                  <textPath href="#middlePath" startOffset="25%" textAnchor="middle">SupportOps</textPath>
                </text>
                <text fontSize="24" fontWeight="700" dominantBaseline="middle" fill="black" stroke="black" strokeWidth="10">
                  <textPath href="#middlePath" startOffset="45%" textAnchor="middle">SalesOps</textPath>
                </text>
                <text fontSize="24" fontWeight="700" dominantBaseline="middle" transform="rotate(180 350 350)" fill="black" stroke="black" strokeWidth="10">
                  <textPath href="#middlePath" startOffset="35%" textAnchor="middle">VoiceOps</textPath>
                </text>
                <text fontSize="24" fontWeight="700" dominantBaseline="middle" transform="rotate(180 350 350)" fill="black" stroke="black" strokeWidth="10">
                  <textPath href="#middlePath" startOffset="15%" textAnchor="middle">DemandOps</textPath>
                </text>
              </mask>
              
              <mask id="outerCircleMask">
                <circle cx="350" cy="350" r="310" fill="white" stroke="white" strokeWidth="20" />
                {/* Black areas will hide the line */}
                <text fontSize="24" fontWeight="700" dominantBaseline="middle" fill="black" stroke="black" strokeWidth="10">
                  <textPath href="#outerPath" startOffset="25%" textAnchor="middle">AI & Expertize</textPath>
                </text>
                <text fontSize="24" fontWeight="700" dominantBaseline="middle" fill="black" stroke="black" strokeWidth="10">
                  <textPath href="#outerPath" startOffset="50%" textAnchor="middle">AI & Expertize</textPath>
                </text>
                <text fontSize="24" fontWeight="700" dominantBaseline="middle" transform="rotate(180 350 350)" fill="black" stroke="black" strokeWidth="10">
                  <textPath href="#outerPath" startOffset="25%" textAnchor="middle">AI & Expertize</textPath>
                </text>
                <text fontSize="24" fontWeight="700" dominantBaseline="middle" transform="rotate(180 350 350)" fill="black" stroke="black" strokeWidth="10">
                  <textPath href="#outerPath" startOffset="50%" textAnchor="middle">AI & Expertize</textPath>
                </text>
              </mask>
            </defs>
            
            {/* Outer dashed circle - rotating clockwise with mask */}
            <g className="rotating-outer" style={{ animation: 'rotateClockwise 60s linear infinite', transformOrigin: '350px 350px' }}>
              <circle cx="350" cy="350" r="310" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1" strokeDasharray="8,8" mask="url(#outerCircleMask)" />
            </g>
            
            {/* Inner solid circle - rotating counter-clockwise with mask */}
            <g className="rotating-inner" style={{ animation: 'rotateCounterClockwise 60s linear infinite', transformOrigin: '350px 350px' }}>
              <circle cx="350" cy="350" r="220" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1" mask="url(#innerCircleMask)" />
            </g>
            
            {/* Center Revenue circle */}
            <circle cx="350" cy="350" r="110" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1" />
            <text x="350" y="365" textAnchor="middle" fill="#EC4899" fontSize="32" fontWeight="bold">Revenue</text>
            
            {/* Middle ring text - 5 Ops labels equally spaced - rotating counter-clockwise */}
            <g className="rotating-inner-text" style={{ animation: 'rotateCounterClockwise 60s linear infinite', transformOrigin: '350px 350px' }}>
              {/* RevOps - Position 1 (5%) */}
              <text fill="white" fontSize="24" fontWeight="700" dominantBaseline="middle" className="cursor-pointer" onMouseEnter={() => setHoveredOps('RevOps')} onMouseLeave={() => setHoveredOps(null)}>
                <textPath href="#middlePath" startOffset="5%" textAnchor="middle">RevOps</textPath>
              </text>
              
              {/* SupportOps - Position 2 (25%) */}
              <text fill="white" fontSize="24" fontWeight="700" dominantBaseline="middle" className="cursor-pointer" onMouseEnter={() => setHoveredOps('SupportOps')} onMouseLeave={() => setHoveredOps(null)}>
                <textPath href="#middlePath" startOffset="25%" textAnchor="middle">SupportOps</textPath>
              </text>
              
              {/* SalesOps - Position 3 (45%) */}
              <text fill="white" fontSize="24" fontWeight="700" dominantBaseline="middle" className="cursor-pointer" onMouseEnter={() => setHoveredOps('SalesOps')} onMouseLeave={() => setHoveredOps(null)}>
                <textPath href="#middlePath" startOffset="45%" textAnchor="middle">SalesOps</textPath>
              </text>
              
              {/* VoiceOps - Position 4 (65% - bottom right, rotated) */}
              <text fill="white" fontSize="24" fontWeight="700" dominantBaseline="middle" transform="rotate(180 350 350)" className="cursor-pointer" onMouseEnter={() => setHoveredOps('VoiceOps')} onMouseLeave={() => setHoveredOps(null)}>
                <textPath href="#middlePath" startOffset="35%" textAnchor="middle">VoiceOps</textPath>
              </text>
              
              {/* DemandOps - Position 5 (85% - bottom middle, rotated) */}
              <text fill="white" fontSize="24" fontWeight="700" dominantBaseline="middle" transform="rotate(180 350 350)" className="cursor-pointer" onMouseEnter={() => setHoveredOps('DemandOps')} onMouseLeave={() => setHoveredOps(null)}>
                <textPath href="#middlePath" startOffset="15%" textAnchor="middle">DemandOps</textPath>
              </text>
            </g>
            
            {/* Outer labels - AI & Expertize curved text at 4 positions - rotating clockwise */}
            <g className="rotating-outer-text" style={{ animation: 'rotateClockwise 60s linear infinite', transformOrigin: '350px 350px' }}>
              {/* Top */}
              <text fill="#8b7db8" fontSize="24" fontWeight="700" dominantBaseline="middle">
                <textPath href="#outerPath" startOffset="25%" textAnchor="middle">AI & Expertize</textPath>
              </text>
              
              {/* Right */}
              <text fill="#8b7db8" fontSize="24" fontWeight="700" dominantBaseline="middle">
                <textPath href="#outerPath" startOffset="50%" textAnchor="middle">AI & Expertize</textPath>
              </text>
              
              {/* Bottom (rotated) */}
              <text fill="#8b7db8" fontSize="24" fontWeight="700" dominantBaseline="middle" transform="rotate(180 350 350)">
                <textPath href="#outerPath" startOffset="25%" textAnchor="middle">AI & Expertize</textPath>
              </text>
              
              {/* Left (rotated) */}
              <text fill="#8b7db8" fontSize="24" fontWeight="700" dominantBaseline="middle" transform="rotate(180 350 350)">
                <textPath href="#outerPath" startOffset="50%" textAnchor="middle">AI & Expertize</textPath>
              </text>
            </g>
          </svg>

          {/* Info Popup Box */}
          {hoveredOps && (
            <div className="absolute max-xl:left-1/2 max-xl:-translate-x-1/2 max-xl:top-[calc(100%+20px)] xl:left-[calc(50%+320px)] xl:top-1/2 xl:-translate-y-1/2 2xl:left-[calc(50%+340px)] bg-[#E1198B] text-white p-5 xl:p-6 rounded-2xl w-[90%] max-w-[400px] xl:w-[300px] 2xl:w-[380px] shadow-[0_20px_60px_rgba(0,0,0,0.5)] z-20 overflow-y-auto max-h-[85vh]">
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

      <style jsx>{`
        @keyframes rotateClockwise {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes rotateCounterClockwise {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }

        .rotating-inner-text text:hover,
        .rotating-outer-text text:hover {
          cursor: pointer;
        }

        .rotating-inner-text text[fill="white"]:hover {
          fill: #E1198B !important;
        }

        svg:has(.rotating-inner-text text:hover) .rotating-inner,
        svg:has(.rotating-inner-text text:hover) .rotating-inner-text,
        svg:has(.rotating-inner-text text:hover) .rotating-outer,
        svg:has(.rotating-inner-text text:hover) .rotating-outer-text {
          animation-play-state: paused !important;
        }

        svg:has(.rotating-outer-text text:hover) .rotating-outer,
        svg:has(.rotating-outer-text text:hover) .rotating-outer-text,
        svg:has(.rotating-outer-text text:hover) .rotating-inner,
        svg:has(.rotating-outer-text text:hover) .rotating-inner-text {
          animation-play-state: paused !important;
        }
      `}</style>
    </section>
  );
};

export default RevenueSystem;
