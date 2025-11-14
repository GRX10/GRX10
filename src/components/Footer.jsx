import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black py-12 pb-6 md:py-16 md:pb-8 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_2fr] gap-8 md:gap-10 lg:gap-12 mb-12">
          {/* Newsletter Section */}
          <div className="footer-left">
            <div className="mb-8 flex items-center">
              <img src="/logo.png" alt="GRX10 Logo" className="h-10" />
            </div>
            <div className="newsletter">
              <h4 className="text-xl sm:text-2xl mb-2 font-bold text-white">
                Get in touch
              </h4>
              <p className="text-white mb-6 text-base">
                {/* Sign up for the latest update and news */}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <input 
                  type="email" 
                  placeholder="Your Email"
                  className="py-[0.9rem] px-4 bg-white border-none rounded-lg text-[#333] text-[0.95rem] placeholder:text-[#999]"
                />
                <input 
                  type="text" 
                  placeholder="Your Contact"
                  className="py-[0.9rem] px-4 bg-white border-none rounded-lg text-[#333] text-[0.95rem] placeholder:text-[#999]"
                />
              </div>
              <button className="w-full border-2 border-[#6667ab] rounded-lg text-[#6667ab] py-[0.9rem] text-base font-semibold cursor-pointer transition-all duration-300 bg-black hover:bg-[#6667ab] hover:text-white">
                Sign up
              </button>
            </div>
          </div>
          
          {/* Company Links */}
          <div>
            <h4 className="text-lg mb-6 text-[#E1198B] font-bold">Company</h4>
            <ul className="list-none">
              <li className="mb-3">
                <a href="#about" className="text-white no-underline transition-colors duration-300 text-[0.95rem] hover:text-[#E1198B]">
                  About us
                </a>
              </li>
              <li className="mb-3">
                <a href="#blog" className="text-white no-underline transition-colors duration-300 text-[0.95rem] hover:text-[#E1198B]">
                  Blog
                </a>
              </li>
              <li className="mb-3">
                <a href="#contact" className="text-white no-underline transition-colors duration-300 text-[0.95rem] hover:text-[#E1198B]">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Services Links */}
          <div>
            <h4 className="text-lg mb-6 text-[#E1198B] font-bold">Services</h4>
            <ul className="list-none">
              <li className="mb-3">
                <a href="#pm" className="text-white no-underline transition-colors duration-300 text-[0.95rem] hover:text-[#E1198B]">
                  Product Management
                </a>
              </li>
              <li className="mb-3">
                <a href="#commerce" className="text-white no-underline transition-colors duration-300 text-[0.95rem] hover:text-[#E1198B]">
                  360° Commerce
                </a>
              </li>
              <li className="mb-3">
                <a href="#sales" className="text-white no-underline transition-colors duration-300 text-[0.95rem] hover:text-[#E1198B]">
                  Sales
                </a>
              </li>
              <li className="mb-3">
                <a href="#marketing" className="text-white no-underline transition-colors duration-300 text-[0.95rem] hover:text-[#E1198B]">
                  Marketing
                </a>
              </li>
            </ul>
          </div>
          
          {/* Address & Social */}
          <div className="footer-right">
            <h4 className="text-lg mb-6 text-[#E1198B] font-bold">Address</h4>
            <p className="text-white leading-[1.8] text-[0.95rem] md:text-sm">
              MKB Tower, 3rd floor, 2nd Cross Road, Appareddy Palya Rd, HAL 2nd Stage, 
              Indiranagar, Bengaluru, Karnataka 560008
            </p>
            <div className="flex gap-4 mt-6">
              <a href="https://www.instagram.com/grx10_official/" target="_blank" className="w-[35px] h-[35px] bg-transparent border border-white/30 rounded-md flex items-center justify-center text-sm font-bold text-white transition-all duration-300 hover:bg-[#E1198B] hover:border-[#E1198B]">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="https://in.linkedin.com/company/grx10" target="_blank" className="w-[35px] h-[35px] bg-transparent border border-white/30 rounded-md flex items-center justify-center text-sm font-bold text-white transition-all duration-300 hover:bg-[#E1198B] hover:border-[#E1198B]">
                in
              </a>
              <a href="https://www.youtube.com/@GRX10MarketingSolutions" target="_blank" className="w-[35px] h-[35px] bg-transparent border border-white/30 rounded-md flex items-center justify-center text-sm font-bold text-white transition-all duration-300 hover:bg-[#E1198B] hover:border-[#E1198B]">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-text-gray text-sm gap-6 md:gap-0 text-center md:text-left">
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center">
            <a href="#sitemap" className="text-white no-underline transition-colors duration-300 text-sm hover:text-[#E1198B]">
              Sitemap
            </a>
            <Link to="/privacy-policy" className="text-white no-underline transition-colors duration-300 text-sm hover:text-[#E1198B]">
              Privacy Policy
            </Link>
            <a href="#legal" className="text-white no-underline transition-colors duration-300 text-sm hover:text-[#E1198B]">
              Legal Disclaimer
            </a>
          </div>
          <p className="text-white text-sm">
            &copy; 2025 GRX10 Solutions Private Limited
          </p>
          <a href="#top" className="text-white no-underline font-bold transition-colors duration-300 text-sm tracking-wider hover:text-[#E1198B]">
            BACK TO TOP ↑
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
