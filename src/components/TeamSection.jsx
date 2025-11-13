import React from 'react';

const TeamSection = () => {
  const teamMembers = [
    { name: "Prem", role: "Co-founder" },
    { name: "Sriram", role: "Co-founder" },
    { name: "Sai", role: "COO" },
    { name: "Yamuna", role: "Head of Growth" },
    { name: "Arvind", role: "Head of Design" },
    { name: "Damodaran", role: "Head of Development" },
    { name: "Yash", role: "Oprations Lead" },
    { name: "Azim", role: "Call Center Manager" },
    { name: "Archana", role: "Call Center Lead" }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-team">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 md:px-8 lg:px-10">
        <h2 className="gradient-text text-3xl sm:text-4xl md:text-4xl lg:text-5xl text-center mb-4 font-bold">
          The Team That Runs on Outcomes
        </h2>
        <p className="text-center text-white text-base sm:text-lg md:text-xl max-w-[900px] mx-auto my-4 mb-12 md:my-6 md:mb-16 leading-relaxed">
          Leaders from energy, technology, and marketing - operators who've built and scaled 
          revenue systems across industries and continents.
        </p>
      </div>
      
      <div className="w-full overflow-hidden mt-12 py-8">
        <div className="flex gap-6 md:gap-8 animate-[teamScroll_40s_linear_infinite] w-max hover:pause">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="p-6 md:p-8 lg:p-10 rounded-2xl text-left transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.3)] min-w-[240px] max-w-[240px] sm:min-w-[260px] sm:max-w-[260px] md:min-w-[280px] md:max-w-[280px] lg:min-w-[300px] lg:max-w-[300px] min-h-[220px] md:min-h-[250px] flex-shrink-0 hover:-translate-y-2 hover:shadow-[0_8px_25px_rgba(0,0,0,0.5)]"
              style={{ background: 'linear-gradient(180deg, #310B20 0%, #1E1E32 100%)' }}
            >
              <h3 className="text-xl md:text-[1.3rem] lg:text-[1.4rem] mb-3 text-white font-semibold">
                {member.name}
              </h3>
              <p className="text-[#EC4899] mb-3 text-sm md:text-base font-medium">
                {member.role}
              </p>
              <div className="inline-flex w-6 h-6 bg-[#6667ab] rounded items-center justify-center text-[0.95rem] font-bold text-[#120d14] cursor-pointer transition-all duration-300 hover:scale-105">
                in
              </div>
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {teamMembers.map((member, index) => (
            <div 
              key={`duplicate-${index}`} 
              className="p-6 md:p-8 lg:p-10 rounded-2xl text-left transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.3)] min-w-[240px] max-w-[240px] sm:min-w-[260px] sm:max-w-[260px] md:min-w-[280px] md:max-w-[280px] lg:min-w-[300px] lg:max-w-[300px] min-h-[220px] md:min-h-[250px] flex-shrink-0 hover:-translate-y-2 hover:shadow-[0_8px_25px_rgba(0,0,0,0.5)]"
              style={{ background: 'linear-gradient(180deg, #310B20 0%, #1E1E32 100%)' }}
            >
              <h3 className="text-xl md:text-[1.3rem] lg:text-[1.4rem] mb-3 text-white font-semibold">
                {member.name}
              </h3>
              <p className="text-[#EC4899] mb-3 text-sm md:text-base font-medium">
                {member.role}
              </p>
              <div className="inline-flex w-6 h-6 bg-[#6667ab] rounded items-center justify-center text-[0.95rem] font-bold text-[#120d14] cursor-pointer transition-all duration-300 hover:scale-105">
                in
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
