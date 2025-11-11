import React from 'react';
import Hero from '../components/Hero';
import ClientsSlider from '../components/ClientsSlider';
import CredibilitySection from '../components/CredibilitySection';
import TeamSection from '../components/TeamSection';
import RevenueSystem from '../components/RevenueSystem';
import NewsSection from '../components/NewsSection';
import CTASection from '../components/CTASection';

function Home() {
  return (
    <>
      <Hero />
      <ClientsSlider />
      <CredibilitySection />
      <TeamSection />
      <RevenueSystem />
      <NewsSection />
      <CTASection />
    </>
  );
}

export default Home;

