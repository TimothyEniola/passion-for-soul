# RCCG Ministry Website

A professional, modern website for The Redeemed Christian Church of God (RCCG) parish, built with React, Vite, and Tailwind CSS v4.

## Features

- **Hero Carousel**: Auto-rotating hero section with inspiring messages and Bible verses
- **About Section**: Mission, Vision, and Core Values with elegant icons
- **Service Times**: Display of all church service schedules
- **Events Section**: Showcase upcoming church events with images and details
- **Media/Sermons**: Latest sermon videos and messages
- **Contact Form**: Contact form with prayer request option
- **Parish Finder**: Call-to-action for finding nearby parishes
- **Responsive Design**: Fully responsive across all devices
- **Modern UI**: Professional design with smooth animations and transitions

## Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS v4** - Utility-first CSS framework
- **Lucide React** - Icon library
- **Google Fonts** - Playfair Display & Source Sans 3

## Color Palette

- **Primary Navy**: `#011F5B` - Deep, trustworthy blue
- **Secondary Gold**: `#d4af37` - Warm, welcoming accent
- **Background**: `#f8f9fa` - Light gray
- **Text**: `#2d3748` - Dark charcoal

## Typography

- **Headings**: Playfair Display (elegant serif)
- **Body**: Source Sans 3 (clean sans-serif)

## Getting Started

### Prerequisites

- Node.js 20.19+ or 22.12+
- npm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation header
│   ├── HeroSection.jsx     # Hero carousel
│   ├── AboutSection.jsx    # Mission, Vision, Values
│   ├── ServicesSection.jsx # Service times
│   ├── EventsSection.jsx   # Upcoming events
│   ├── MediaSection.jsx    # Sermons and media
│   ├── ContactSection.jsx  # Contact form
│   └── Footer.jsx          # Footer with links
├── data/
│   └── mockData.js         # Mock data for content
├── App.jsx                 # Main app component
├── App.css                 # Custom styles
└── index.css               # Tailwind imports and base styles
```

## Customization

### Update Church Information

Edit `src/data/mockData.js` to update:
- Hero slides and messages
- Service times
- Events
- Sermons
- About content (mission, vision, values)

### Change Colors

Update color values in the components or add custom colors to your Tailwind configuration.

### Add More Sections

Create new components in `src/components/` and import them in `App.jsx`.

## License

This project is created for RCCG parishes. Feel free to customize for your local parish needs.

## Support

For questions or support, please contact your parish administrator.