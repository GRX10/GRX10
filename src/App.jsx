import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import VoiceAI from './pages/VoiceAI';

function App() {
  return (
    <Router>
      <div className="w-full bg-dark-bg text-text-white relative overflow-visible">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/voice-ai" element={<VoiceAI />} />
        </Routes>
        <Footer />
          </div>
    </Router>
  );
}

export default App;
