# GRX10 Website

A modern, responsive React.js website for GRX10 with a clean component-based architecture.

## Features

- ✅ Modern, responsive design (Desktop, Tablet, Mobile)
- ✅ Multi-page application with React Router
- ✅ Smooth scrolling navigation with mobile hamburger menu
- ✅ Component-based architecture for easy maintenance
- ✅ Tailwind CSS for styling
- ✅ Hero section with CTA
- ✅ Animated client logos slider
- ✅ Services showcase with credibility cards
- ✅ Team section with grid layout
- ✅ Revenue system visualization
- ✅ News/Blog section
- ✅ Voice AI product page
- ✅ Contact form in footer
- ✅ Mobile-friendly navigation

## Project Structure

```
├── public/                  # Static assets (images, logos)
├── src/
│   ├── components/          # React components
│   │   ├── Navbar.jsx       # Navigation with mobile menu & routing
│   │   ├── Hero.jsx         # Hero section
│   │   ├── ClientsSlider.jsx # Client logos slider
│   │   ├── CredibilitySection.jsx # Credibility cards
│   │   ├── TeamSection.jsx  # Team grid
│   │   ├── RevenueSystem.jsx # Revenue diagram
│   │   ├── NewsSection.jsx  # News cards
│   │   ├── CTASection.jsx   # Call to action
│   │   └── Footer.jsx       # Footer with newsletter
│   ├── pages/               # Page components
│   │   ├── Home.jsx         # Home page
│   │   └── VoiceAI.jsx      # Voice AI product page
│   ├── styles/              # Custom CSS
│   │   └── team-grid.css    # Team grid positioning
│   ├── App.jsx              # Main app with routing
│   ├── App.css              # Minimal app styles
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles + Tailwind
├── index.html               # HTML template
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js        # PostCSS configuration
├── vite.config.js           # Vite configuration
└── package.json             # Project dependencies
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd "GRX10 Website"
```

2. Install dependencies
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

Create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Component Architecture

### Why This Structure?

- **Maintainability**: Each component is self-contained with its own logic and styles
- **Reusability**: Components can be easily reused or extended
- **Scalability**: Easy to add new sections or features
- **Performance**: Modular CSS reduces bundle size
- **Development**: Easier to work on specific features without affecting others

### Component Breakdown

1. **Navbar** - Sticky navigation with mobile hamburger menu
2. **Hero** - Main landing section with gradient text and CTAs
3. **ClientsSlider** - Infinite scrolling client logos
4. **CredibilitySection** - Showcase of work with animated cards
5. **TeamSection** - Team members grid with responsive layout
6. **RevenueSystem** - Interactive circular diagram
7. **NewsSection** - Latest news/blog posts grid
8. **CTASection** - Call-to-action section
9. **Footer** - Footer with newsletter signup and links

## Responsive Design

The website is fully responsive with breakpoints for:
- **Desktop**: > 1200px
- **Tablet**: 900px - 1200px (2-column team grid)
- **Mobile**: 768px - 900px (mobile menu, stacked layouts)
- **Small Mobile**: < 480px (optimized for small screens)

## Customization

### Updating Content

Edit the component files in `src/components/` to update content:
- Team members: `TeamSection.jsx`
- News items: `NewsSection.jsx`
- Credibility cards: `CredibilitySection.jsx`
- Client logos: `ClientsSlider.jsx`

### Styling

- Global variables: `src/styles/variables.css`
- Component styles: `src/styles/[ComponentName].css`
- Modify CSS custom properties in `variables.css` for theme changes

### Adding New Sections

1. Create new component in `src/components/NewSection.jsx`
2. Create styles in `src/styles/NewSection.css`
3. Import and add to `src/App.jsx`

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling with CSS custom properties
- **Modern JavaScript (ES6+)** - Latest JavaScript features

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

© 2025 GRX10 Solutions Private Limited

## Contributing

For contributions or suggestions, please contact the development team.
