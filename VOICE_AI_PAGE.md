# Voice AI Page Documentation

## Overview
A dedicated product page for GRX10 Voice AI showcasing conversational AI capabilities, features, use cases, and technical specifications.

## Page Structure

### 1. Hero Section
- **Title**: "GRX10 Voice AI" (gradient text)
- **Subtitle**: "Conversational AI that's actually human."
- **Description**: Details about 700ms latency and natural conversations
- **CTAs**: "Get Started" and "Learn more" buttons
- **Background**: Purple and pink gradient glows from sides

### 2. Key Performance Metrics
Three metric cards displaying:
- **700ms** - Average Latency
- **98%** - Human-like Rating
- **24/7** - Always Available

### 3. Built for Real Conversations
Six feature cards showcasing:
- Ultra-Low Latency
- Culturally-Aware Context
- Deep Knowledge Base Integration
- WhatsApp & Multi-Channel
- CRM & System Integration
- Journey Orchestration

### 4. Proven Use Cases
Three detailed case studies:
- **Outbound Tele-Sales**
  - Challenge, Solution, Results format
  - Metrics: 10,000 calls/day, 32% conversion, ₹12L savings
  
- **Service Desk Automation**
  - 85% first-call resolution
  - 2 min wait time, 92% CSAT
  
- **Appointment Setting & Follow-up**
  - 12% no-show rate (down from 40%)
  - ₹18L recovered revenue

### 5. Engineering Excellence
Four technical specification cards:
- End-to-End Latency breakdown
- 99.9% Uptime SLA
- 10+ Languages support
- VAD (Voice Activity Detection)

### 6. Bottom CTA
- **Heading**: "Ready to Transform Your Customer Experience?"
- **Subtext**: Join invitation
- **Button**: "Join Now"

### 7. Simple Footer
- Logo
- Contact email: voiceai@grx10.com
- Social media icons

## Design System

### Colors
Same as main site:
- Primary Pink: #E1198B
- Purple: #8338ec
- Dark Background: #141414
- Card Gradient: linear-gradient(180deg, #310B20 0%, #1E1E32 100%)

### Typography
- H1: 5rem (desktop) → 2.5rem (mobile)
- H2: 5rem (desktop) → 3xl (mobile)
- H3: 2xl (desktop) → xl (mobile)
- Body: base to lg responsive

### Components Reused
- Gradient text utility
- Card styling
- Button styles
- Gradient background effects

## Routing

### Navigation
- **Home**: `/` - Main GRX10 website
- **Voice AI**: `/voice-ai` - Voice AI product page

Active link highlighting based on current route.

## Responsive Design

All sections are fully responsive:
- Mobile: < 640px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## Usage

### Navigate to Voice AI page
Click "Voice AI" in navigation or visit `/voice-ai` directly.

### Update Content
Edit `src/pages/VoiceAI.jsx` to modify:
- Metrics data
- Features list
- Use cases
- Engineering specs

## Future Enhancements
- [ ] Add actual images for use cases
- [ ] Implement contact form
- [ ] Add demo/trial functionality
- [ ] Analytics integration
- [ ] More detailed case studies

