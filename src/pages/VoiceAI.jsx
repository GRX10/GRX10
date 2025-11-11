import React from 'react';

const VoiceAI = () => {
  const metrics = [
    { value: '700ms', label: 'AVERAGE LATENCY' },
    { value: '98%', label: 'HUMAN-LIKE RATING' },
    { value: '24/7', label: 'ALWAYS AVAILABLE' }
  ];

  const features = [
    {
      title: 'Ultra-Low Latency',
      description: '700ms end-to-end response time—within the range of human cognitive response for a natural, delightful experience. Achieved through optimized pipeline architecture and native cloud infra. No dead air, no pauses, just naturally paced conversations.'
    },
    {
      title: 'Culturally-Aware Context',
      description: 'Understands multiple Indian nuances. No generic language. Seamlessly converses in between languages within conversations, just like a human would.'
    },
    {
      title: 'Deep Knowledge Base Integration',
      description: 'Connect your product catalogs, policy documents, and internal knowledge bases. Our AI assistant answers complex queries with precise context and relevance.'
    },
    {
      title: 'WhatsApp & Multi-Channel',
      description: 'Seamless integration with WhatsApp, Telegram, and other channels. Seamlessly manages customer journeys across platforms with a unified conversation context.'
    },
    {
      title: 'CRM & System Integration',
      description: 'Pre-built integrations with Salesforce, Hubspot, Zoho, Freshworks, and custom CRMs. Sync customer data, update records, and trigger workflows automatically from conversations.'
    },
    {
      title: 'Journey Orchestration',
      description: 'Designs and executes multi-step customer journeys across multiple touchpoints. Trigger follow-ups, send reminders, and escalate to human agents based on conversation context.'
    }
  ];

  const useCases = [
    {
      title: 'Outbound Tele-Sales',
      image: '/telecall.png',
      category: 'EdTech Case Study',
      description: 'AI-powered outbound calling that feels human. Qualify leads, pitch products, and converse with a personalized narrative in multiple languages.',
      challenge: 'Needed to reach 53,000+ parents across India to promote new courses. Manual calling was slow and ineffective.',
      solution: 'Deployed Voice AI to make personalized calls in Hindi, English, and regional languages. AI qualified interests, answered questions about courses, and scheduled callbacks for human sales.',
      results: ['10,000 calls per day', '32% conversion rate', '₹12L monthly savings']
    },
    {
      title: 'Service Desk Automation',
      image: '/service-desk.png',
      category: 'FinTech Case Study',
      description: '24/7 technical support that actually solves problems. Handles troubleshooting, account queries, and escalations with deep integration to your knowledge base.',
      challenge: 'Support team overwhelmed with 2,000+ daily calls about account issues, transaction queries, and KYC problems. Average wait time: 15 minutes.',
      solution: 'Integrated Voice AI with CRM and knowledge base. AI handles 70% of queries autonomously—password resets, transaction status, KYC guidance. Complex issues routed to humans with full context.',
      results: ['85% first-call resolution', '2 min average wait time', '92% CSAT score']
    },
    {
      title: 'Appointment Setting & Follow-up',
      image: '/follow-up.png',
      category: 'Healthcare Case Study',
      description: 'Never miss a beat. Automated scheduling, reminders, and follow-ups via voice and WhatsApp. Sync with your calendar and CRM in real-time.',
      challenge: '40% no-show rate for doctor appointments. Manual reminder calls ineffective. Lost revenue of ₹25L monthly.',
      solution: 'Voice AI calls patients 24 hours before appointments in their preferred language. Confirms attendance, offers rescheduling, and sends WhatsApp reminders. Integrates with hospital management system.',
      results: ['12% no-show rate (down from 40%)', '5,000+ calls automated monthly', '₹18L recovered revenue']
    }
  ];

  const engineeringSpecs = [
    {
      title: 'End-to-End Latency',
      description: '400ms from speech-to-text, 200ms for AI processing, and 100ms for text-to-speech. Our 700ms cognitive response time allows for natural, human-like conversations.'
    },
    {
      title: 'Uptime SLA',
      description: '99.9% guaranteed availability with a robust and resilient backend.'
    },
    {
      title: 'Languages',
      description: 'Supports 10+ languages with multilingual voice synthesis and understanding, across major Indian languages.'
    },
    {
      title: 'VAD',
      description: 'Voice Activity Detection (VAD) for accurate speech detection and noise filtering.'
    }
  ];

  return (
    <div className="w-full bg-dark-bg text-white">
      {/* Hero Section */}
      <section className="relative bg-dark-bg py-16 md:py-24 lg:py-32 text-center overflow-visible">
        {/* Background gradients */}
        <div className="absolute right-[-15%] bottom-[-20%] w-[700px] h-[700px] pointer-events-none z-0"
             style={{
               background: 'radial-gradient(circle, rgba(116, 101, 233, 0.3) 0%, rgba(116, 101, 233, 0.15) 35%, transparent 65%)'
             }}>
        </div>
        <div className="absolute left-[-15%] bottom-[-20%] w-[700px] h-[700px] pointer-events-none z-0"
             style={{
               background: 'radial-gradient(circle, rgba(225, 25, 139, 0.3) 0%, rgba(225, 25, 139, 0.15) 35%, transparent 65%)'
             }}>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-6 md:px-8 lg:px-10">
          <h1 className="gradient-text text-4xl sm:text-5xl md:text-[3rem] lg:text-6xl xl:text-[5rem] mb-6 font-bold leading-tight">
            GRX10 Voice AI
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl mb-8 text-white font-semibold">
            Conversational AI that's actually human.
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-12 text-[#a0a0a0] max-w-[800px] mx-auto leading-relaxed">
            Ultra low 700ms latency - within human reaction times for cognitive, careful responses. 
            The perfect balance for important conversations that feel completely natural.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-stretch sm:items-center">
            <button className="bg-[#E1198B] text-white border-none px-10 py-4 text-base font-semibold rounded-full cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(225,25,139,0.3)]">
              Get Started
            </button>
            <button className="bg-transparent text-white border-2 border-white px-10 py-4 text-base font-semibold rounded-full cursor-pointer transition-all duration-300 hover:bg-[rgba(255,255,255,0.1)]">
              Learn more
            </button>
          </div>
        </div>
      </section>

      {/* Key Performance Metrics */}
      <section className="py-16 md:py-24 bg-dark-bg">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 md:px-8 lg:px-10">
          <h2 className="gradient-text text-3xl sm:text-4xl md:text-4xl lg:text-5xl text-center mb-16 font-bold">
            Key Performance Metrics
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {metrics.map((metric, index) => (
              <div 
                key={index}
                className="p-10 md:p-12 rounded-2xl text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
                style={{ background: 'linear-gradient(180deg, #310B20 0%, #1E1E32 100%)' }}
              >
                <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
                  {metric.value}
                </div>
                <div className="text-[#E1198B] text-sm font-bold tracking-wider">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built for Real Conversations */}
      <section className="py-16 md:py-24 bg-gradient-team">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 md:px-8 lg:px-10">
          <h2 className="gradient-text text-3xl sm:text-4xl md:text-4xl lg:text-5xl text-center mb-4 font-bold">
            Built for Real Conversations
          </h2>
          <p className="text-center text-white text-base sm:text-lg md:text-xl max-w-[900px] mx-auto my-4 mb-12 md:mb-16 leading-relaxed">
            Designed for the Indian market. Production-tested. Customer-validated.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-8 md:p-10 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
                style={{ background: 'linear-gradient(180deg, #310B20 0%, #1E1E32 100%)' }}
              >
                <div className="w-[70px] h-[70px] flex items-center justify-center mb-6">
                  <img src="/proven credibility.png" alt="Feature" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-xl md:text-2xl mb-4 text-white font-semibold">
                  {feature.title}
                </h3>
                <p className="text-white leading-relaxed text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proven Use Cases */}
      <section className="py-16 md:py-24 bg-dark-bg">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 md:px-8 lg:px-10">
          <h2 className="gradient-text text-3xl sm:text-4xl md:text-4xl lg:text-5xl text-center mb-4 font-bold">
            Proven Use Cases
          </h2>
          <p className="text-center text-white text-base sm:text-lg md:text-xl max-w-[900px] mx-auto my-4 mb-12 md:mb-16 leading-relaxed">
            Real deployments delivering measurable results.
          </p>
          <div className="space-y-8 md:space-y-12">
            {useCases.map((useCase, index) => (
              <div 
                key={index}
                className="p-8 md:p-12 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] overflow-hidden"
                style={{ background: 'linear-gradient(180deg, #310B20 0%, #1E1E32 100%)' }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-[450px_1fr] gap-8 md:gap-12 items-start">
                  {/* Image */}
                  <div className="w-full h-[300px] sm:h-[350px] lg:h-[450px] rounded-xl overflow-hidden">
                    <img 
                      src={useCase.image} 
                      alt={useCase.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Content */}
                  <div>
                    <p className="text-[#E1198B] font-semibold text-sm mb-2">{useCase.category}</p>
                    <h3 className="text-2xl md:text-3xl mb-4 text-white font-bold">
                      {index + 1}. {useCase.title}
                    </h3>
                    <p className="text-[#a0a0a0] text-base md:text-lg mb-6 leading-relaxed">
                      {useCase.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-[#E1198B] font-semibold text-base mb-2">Challenge:</h4>
                      <p className="text-white text-base leading-relaxed">{useCase.challenge}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-[#E1198B] font-semibold text-base mb-2">Solution:</h4>
                      <p className="text-white text-base leading-relaxed">{useCase.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-[#E1198B] font-semibold text-base mb-3">Results:</h4>
                      <ul className="space-y-2">
                        {useCase.results.map((result, idx) => (
                          <li key={idx} className="text-white text-base leading-relaxed flex items-start">
                            <span className="text-[#E1198B] mr-2">•</span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Excellence */}
      <section className="py-16 md:py-24 bg-gradient-team">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 md:px-8 lg:px-10">
          <h2 className="gradient-text text-3xl sm:text-4xl md:text-4xl lg:text-5xl text-center mb-4 font-bold">
            Engineering Excellence
          </h2>
          <p className="text-center text-white text-base sm:text-lg md:text-xl max-w-[900px] mx-auto my-4 mb-12 md:mb-16 leading-relaxed">
            Precision-engineered for performance at scale.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {engineeringSpecs.map((spec, index) => (
              <div 
                key={index}
                className="p-8 md:p-10 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
                style={{ background: 'linear-gradient(180deg, #310B20 0%, #1E1E32 100%)' }}
              >
                <div className="w-[70px] h-[70px] flex items-center justify-center mb-6">
                  <img src="/proven credibility.png" alt="Engineering" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-xl md:text-2xl mb-4 text-white font-semibold">
                  {spec.title}
                </h3>
                <p className="text-white leading-relaxed text-base">
                  {spec.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 md:py-24 flex justify-center items-center bg-dark-bg">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 md:px-8 lg:px-10 w-full">
          <div className="rounded-2xl md:rounded-3xl p-10 px-6 sm:p-12 md:p-16 text-center shadow-[0_20px_60px_rgba(0,0,0,0.4)] w-full relative mx-2.5 md:mx-0"
               style={{ background: 'linear-gradient(180deg, #310B20 0%, #1E1E32 100%)' }}>
            <h2 className="gradient-text text-2xl sm:text-[1.8rem] md:text-[2.5rem] lg:text-5xl xl:text-[3.5rem] mb-4 md:mb-6 font-bold leading-tight pb-1">
              Ready to Transform Your Customer Experience?
            </h2>
            <p className="text-[#d1d5db] text-base sm:text-lg md:text-xl mb-6 md:mb-8 leading-relaxed max-w-[900px] mx-auto">
              Join the elite, program and experience the future of conversational AI.
            </p>
            <button className="mt-4 bg-[#E1198B] text-white border-none px-10 py-4 text-base font-semibold rounded-full cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(225,25,139,0.3)]">
              Join Now
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default VoiceAI;

