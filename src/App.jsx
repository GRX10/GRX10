import React, { useState } from 'react'
import './App.css'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const credibilityCards = [
    {
      title: "Clean Energy Leader",
      description: "End-to-end revenue operations support from launch to growth. Unified installers and customers, ran digital and offline campaigns, established a voice-AI call centre, and deployed an on-ground sales team.",
      result: "#1 in incremental market share and consistent MoM revenue growth."
    },
    {
      title: "High-Growth e-Commerce Brand",
      description: "Enhanced digital presence with influencer-driven lead generation, AI routing, hybrid sales + fulfilment loop.",
      result: "Record-high conversion velocity and repeat buyers."
    },
    {
      title: "Industrial & Manufacturing Major",
      description: "Simplified complex technical products through clear brand storytelling, full-stack PR, media, analytics, and AI content optimisation.",
      result: "Doubled qualified inbound interest within six months."
    },
    {
      title: "Growth Private Equity",
      description: "Transformed sales collaboration with integrated CRM workflows, data enrichment pipelines, and real-time reporting dashboards.",
      result: "Unified sales operations and accelerated deal cycles by 35%."
    }
  ];

  const teamMembers = [
    { name: "Prem", role: "Co-founder" },
    { name: "Sriram", role: "Co-founder" },
    { name: "Sai", role: "COO" },
    { name: "Yamuna", role: "Head of Growth" },
    { name: "Arvind", role: "Head of Design" },
    { name: "Damu", role: "Head of Development" },
    { name: "Yash", role: "SMM" },
    { name: "Azim", role: "Head of Sales" },
    { name: "Archana", role: "Head of Sales" }
  ];

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
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <img src="/logo.png" alt="GRX10 Logo" className="logo-image" />
          </div>
          <button className="mobile-menu-toggle" onClick={toggleMobileMenu} aria-label="Toggle menu">
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
          <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <li><a href="#home" className="active" onClick={closeMobileMenu}>HOME</a></li>
            <li><a href="#services" onClick={closeMobileMenu}>Services</a></li>
            <li><a href="#about" onClick={closeMobileMenu}>About</a></li>
          </ul>
          <button className="nav-contact-btn">Contact us</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="container">
          <div className="hero-content">
            <h1 className="gradient-heading">We build <span className="gradient-text">Revenue.</span></h1>
            <p className="paragraph-text">Engineered by people who've done it before. Shaped by real operators.</p>
            <div className="hero-buttons">
              <button className="btn-primary">Get in touch</button>
              <button className="btn-secondary">Learn more</button>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="clients-section">
        <div className="slider-container">
          <div className="slider-track">
            <div className="client-slide">
              <img src="/melooha.png" alt="Melooha" />
            </div>
            <div className="client-slide">
              <img src="/fenice energy.png" alt="Fenice Energy" />
            </div>
            <div className="client-slide">
              <img src="/deesan home.png" alt="Deesan Home" />
            </div>
            <div className="client-slide">
              <img src="/Seshaasai.png" alt="Seshaasai" />
            </div>
            <div className="client-slide">
              <img src="/Eco soch.png" alt="Eco Soch" />
            </div>
            <div className="client-slide">
              <img src="/Atria Power.png" alt="Atria Power" />
            </div>
            <div className="client-slide">
              <img src="/ohmium.png" alt="Ohmium" />
            </div>
            {/* Duplicate slides for seamless loop */}
            <div className="client-slide">
              <img src="/melooha.png" alt="Melooha" />
            </div>
            <div className="client-slide">
              <img src="/fenice energy.png" alt="Fenice Energy" />
            </div>
            <div className="client-slide">
              <img src="/deesan home.png" alt="Deesan Home" />
            </div>
            <div className="client-slide">
              <img src="/Seshaasai.png" alt="Seshaasai" />
            </div>
            <div className="client-slide">
              <img src="/Eco soch.png" alt="Eco Soch" />
            </div>
            <div className="client-slide">
              <img src="/Atria Power.png" alt="Atria Power" />
            </div>
            <div className="client-slide">
              <img src="/ohmium.png" alt="Ohmium" />
            </div>
          </div>
        </div>
      </section>

      {/* Proven Credibility */}
      <section className="credibility-section">
        <div className="container">
          <h2 className="gradient-text">Proven Credibility</h2>
          <p className="section-subtitle">
            We've built full-funnel revenue systems across Clean Energy, e-Commerce, Industrial, 
            and Enterprise Tech - each powered by real data, live feedback, and applied AI.
          </p>
        </div>
        <div className="credibility-slider-container">
          <div className="credibility-slider-track">
            {credibilityCards.map((card, index) => (
              <div key={index} className="credibility-card">
                <div className="card-icon">
                  <img src="/proven credibility.png" alt="Proven Credibility" />
                </div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <div className="result">
                  <span className="result-label">Result:</span>
                  <p className="result-text">{card.result}</p>
                </div>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {credibilityCards.map((card, index) => (
              <div key={`duplicate-${index}`} className="credibility-card">
                <div className="card-icon">
                  <img src="/proven credibility.png" alt="Proven Credibility" />
                </div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <div className="result">
                  <span className="result-label">Result:</span>
                  <p className="result-text">{card.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2 className="gradient-text">The Team That Runs on Outcomes</h2>
          <p className="section-subtitle">
            Leaders from energy, technology, and marketing - operators who've built and scaled 
            revenue systems across industries and continents.
          </p>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
                <div className="linkedin-icon">in</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue System */}
      <section className="revenue-system-section">
        <div className="container">
          <h2 className="gradient-text">The GRX10 Revenue System</h2>
          <p className="section-subtitle">
            Five modules. One backbone. Every layer measurable. Every number connected to revenue.
          </p>
          <div className="revenue-diagram">
            <div className="diagram-circle">
              <div className="inner-circle">Revenue</div>
              <div className="middle-ring">
                <div className="ring-segment">SalesOps</div>
                <div className="ring-segment">VoiceOps</div>
                <div className="ring-segment">DemandOps</div>
                <div className="ring-segment">RevOps</div>
                <div className="ring-segment">SupportOps</div>
              </div>
              <div className="outer-labels">
                <span>AI & Expertise</span>
                <span>AI & Expertise</span>
                <span>AI & Expertise</span>
                <span>AI & Expertise</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="news-section">
        <div className="container">
          <h2 className="gradient-text">GRX10 in the news</h2>
          <p className="section-subtitle">Real conversations on scaling smarter, not just bigger.</p>
          <div className="news-grid">
            {newsItems.map((item, index) => (
              <div key={index} className="news-card">
                <div className="news-image"></div>
                <div className="news-content">
                  <h3>{item.title}</h3>
                  <p className="news-date">{item.date}</p>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2 className="gradient-text">Looking for something else?</h2>
          <p className="section-subtitle">
            Feel free to get in touch with us and we will get back to you in a day, Tops.
          </p>
          <button className="btn-primary">Get in touch</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-main">
            <div className="footer-column footer-left">
              <div className="footer-logo">
                <img src="/logo.png" alt="GRX10 Logo" className="logo-image" />
              </div>
              <div className="newsletter">
                <h4>Don't Miss out</h4>
                <p>Sign up for the latest update and news</p>
                <div className="newsletter-inputs">
                  <input type="email" placeholder="Your Email" />
                  <input type="text" placeholder="Your Contact" />
                </div>
                <button className="signup-btn">Sign up</button>
              </div>
            </div>
            
            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About us</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Services</h4>
              <ul>
                <li><a href="#pm">Product Management</a></li>
                <li><a href="#commerce">360° Commerce</a></li>
                <li><a href="#sales">Sales</a></li>
                <li><a href="#marketing">Marketing</a></li>
              </ul>
            </div>
            
            <div className="footer-column footer-right">
              <h4>Address</h4>
              <p>MKB Tower, 3rd floor, 2nd Cross Road, Appareddy Palya Rd, HAL 2nd Stage, 
                Indiranagar, Bengaluru, Karnataka 560008</p>
              <div className="social-icons">
                <a href="#instagram" className="social-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>
                <a href="#linkedin" className="social-icon">in</a>
                <a href="#youtube" className="social-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="footer-bottom-left">
              <a href="#sitemap">Sitemap</a>
              <a href="#privacy">Privacy Policy</a>
              <a href="#legal">Legal Disclaimer</a>
            </div>
            <p className="footer-copyright">&copy; 2025 GRX10 Solutions Private Limited</p>
            <a href="#top" className="back-to-top">BACK TO TOP ↑</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

