import React, { useState } from 'react';

const NewsSection = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const newsItems = [
    {
      title: "Solar Installation and Commissioning: Revolutionizing Speed and Customer Experience",
      date: "05 November 24",
      description: "In this fascinating discussion, we sit down with Shailendra Nair, Head of Operations at Atria Renewable, to uncover how his team is redefining the standards of solar installations.",
      image: "/solar-installation.png",
      videoUrl: "https://www.youtube.com/embed/PMhZ30sEYY8?start=1"
    },
    {
      title: "Podcast - Melooha",
      date: "05 September 24",
      description: "Listen to Vikram Labhe, CEO – Melooha describe his journey from the silicon valley, his journey that started from the world of Astrology, and his quest to apply deep tech to an ancient belief. ",
      image: "/podcast-melooha.png",
      videoUrl: "https://www.youtube.com/embed/dgwMSUjQ1Gc?start=1"
    },
    {
      title: "Everthing about solar in India in 2024",
      date: "09 May 24",
      description: "Listen to Prem and Sriram talk Solar energy in India, the current trends and tribulations of a beleaguered industry witnessing a phenomenal growth recetly.",
      image: "/solar-india-2024.png",
      videoUrl: "https://www.youtube.com/embed/suCMrxVr_VY"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-team">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 md:px-8 lg:px-10">
        <h2 className="gradient-text text-3xl sm:text-4xl md:text-4xl lg:text-5xl text-center mb-4 font-bold">
          GRX10 in the news
        </h2>
        <p className="text-center text-white text-base sm:text-lg md:text-xl max-w-[900px] mx-auto my-4 mb-12 md:my-6 md:mb-16 leading-relaxed">
          Real conversations on scaling smarter, not just bigger.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-6 md:gap-8 mt-12">
          {newsItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-dark-card rounded-xl overflow-hidden border border-white/10 transition-transform duration-300 hover:-translate-y-1"
            >
              <div 
                className="w-full h-[200px] overflow-hidden cursor-pointer relative group"
                onClick={() => setSelectedVideo(item.videoUrl)}
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors duration-300">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-[#E1198B] ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-lg md:text-[1.3rem] mb-3 text-white leading-snug">
                  {item.title}
                </h3>
                <p className="text-[#E1198B] text-sm mb-4">
                  {item.date}
                </p>
                <p className="text-white leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Popup Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div 
            className="relative w-full max-w-5xl aspect-video bg-black rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Close video"
            >
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* YouTube iframe */}
            <iframe
              className="w-full h-full"
              src={selectedVideo}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default NewsSection;
