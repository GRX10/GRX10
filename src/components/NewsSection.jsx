import React from 'react';

const NewsSection = () => {
  const newsItems = [
    {
      title: "Solar Installation and Commissioning: Revolutionizing Speed and Customer Experience",
      date: "05 November 24",
      description: "How we're transforming the solar industry with AI-powered operations and customer-first design."
    },
    {
      title: "Podcast - Melooha",
      date: "05 September 24",
      description: "Deep dive into building revenue systems that scale - from first principle to execution."
    },
    {
      title: "Everything about so 2024",
      date: "09 May 24",
      description: "Our take on what's working in growth, AI, and revenue operations in 2024."
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
              <div className="w-full h-[200px] bg-gradient-to-br from-[rgba(225,25,139,0.3)] to-[rgba(131,56,236,0.3)]"></div>
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
    </section>
  );
};

export default NewsSection;
