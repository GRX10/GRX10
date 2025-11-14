import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ContactForm from './ContactForm';

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 left-0 right-0 z-[1000] w-full bg-dark-bg py-6 transition-all duration-300">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 md:px-8 lg:px-10 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center max-md:fixed max-md:top-6 max-md:left-5 max-md:z-[1002]">
          <img 
            src="/logo.png" 
            alt="GRX10 Logo" 
            className="h-11 w-auto cursor-pointer transition-transform duration-300 hover:scale-105" 
          />
        </Link>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden max-md:fixed max-md:top-6 max-md:right-5 max-md:z-[1002] bg-transparent border-none text-white text-2xl cursor-pointer p-2"
          onClick={toggleMobileMenu} 
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>

        {/* Navigation Links */}
        <ul className={`
          hidden md:flex list-none gap-12 absolute left-1/2 -translate-x-1/2
          ${mobileMenuOpen ? 'max-md:flex' : 'max-md:hidden'}
          max-md:fixed max-md:top-0 max-md:left-0 max-md:w-full max-md:h-screen
          max-md:bg-[rgba(20,20,20,0.98)] max-md:backdrop-blur-lg
          max-md:flex-col max-md:justify-center max-md:items-center max-md:gap-8
          max-md:z-[1000] max-md:translate-x-0 max-md:overflow-y-auto
        `}>
          <li>
            <Link 
              to="/" 
              className={`no-underline text-base transition-colors duration-300 hover:text-[#E1198B] max-md:text-2xl ${location.pathname === '/' ? 'text-[#E1198B] font-bold' : 'text-white font-medium'}`}
              onClick={closeMobileMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/voice-ai" 
              className={`no-underline text-base transition-colors duration-300 hover:text-[#E1198B] max-md:text-2xl ${location.pathname === '/voice-ai' ? 'text-[#E1198B] font-bold' : 'text-white font-medium'}`}
              onClick={closeMobileMenu}
            >
              Voice AI
            </Link>
          </li>
          {/* <li>
            <a 
              href="#about" 
              className="no-underline text-white font-medium text-base transition-colors duration-300 hover:text-[#E1198B] max-md:text-2xl" 
              onClick={closeMobileMenu}
            >
              About
            </a>
          </li> */}
        </ul>

        {/* Contact Button */}
        <button 
          onClick={() => setShowContactForm(true)}
          className="hidden md:block bg-[#E1198B] text-white border-none px-7 py-[0.75rem] text-[0.95rem] font-semibold rounded-full cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(225,25,139,0.3)]"
        >
          Contact us
        </button>
      </div>

      {/* Contact Form Modal */}
      <ContactForm isOpen={showContactForm} onClose={() => setShowContactForm(false)} />
    </nav>
  );
};

export default Navbar;
