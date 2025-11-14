import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import VoiceAI from './pages/VoiceAI';
import PrivacyPolicy from './pages/PrivacyPolicy';
import LegalDisclaimer from './pages/LegalDisclaimer';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <Router>
      <div className="w-full bg-dark-bg text-text-white relative overflow-visible">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/voice-ai" element={<VoiceAI />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/legal-disclaimer" element={<LegalDisclaimer />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer />
          </div>
    </Router>
  );
}

export default App;
