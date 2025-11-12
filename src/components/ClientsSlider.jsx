import React from 'react';

const ClientsSlider = () => {
  const clients = [
    { name: 'Melooha', logo: '/melooha.png' },
    { name: 'Fenice Energy', logo: '/fenice energy.png' },
    { name: 'Deesan Home', logo: '/deesan home.png' },
    { name: 'Seshaasai', logo: '/Seshaasai.png' },
    { name: 'Eco Soch', logo: '/Eco soch.png' },
    { name: 'Atria Power', logo: '/Atria Power.png' },
    { name: 'Ohmium', logo: '/ohmium.png' },
  ];

  return (
    <section className="py-12 md:py-16 border-t border-b border-white/10 relative overflow-visible">
      {/* Background Gradient Effect - Pink glow from left */}
      <div className="absolute left-[-15%] top-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none z-0"
           style={{
             background: 'radial-gradient(circle, rgba(225, 25, 139, 0.3) 0%, rgba(225, 25, 139, 0.15) 35%, transparent 65%)',
             clipPath: 'inset(0 0 0 0)'
           }}>
      </div>
      <div className="w-full overflow-hidden relative py-4 z-10">
        <div className="flex animate-[scroll_30s_linear_infinite] w-max hover:pause">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center px-8 min-w-[150px] flex-shrink-0 md:px-12 md:min-w-[200px]"
            >
              <img 
                src={client.logo} 
                alt={client.name}
                className="max-h-[45px] md:max-h-[60px] w-auto object-contain opacity-60 transition-all duration-300 hover:opacity-100 hover:scale-110 brightness-0 invert"
              />
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {clients.map((client, index) => (
            <div 
              key={`duplicate-${index}`} 
              className="flex items-center justify-center px-8 min-w-[150px] flex-shrink-0 md:px-12 md:min-w-[200px]"
            >
              <img 
                src={client.logo} 
                alt={client.name}
                className="max-h-[45px] md:max-h-[60px] w-auto object-contain opacity-60 transition-all duration-300 hover:opacity-100 hover:scale-110 brightness-0 invert"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
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

export default ClientsSlider;

