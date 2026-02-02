# CedarRX - Expert Compounding Pharmacy Website

A modern, trustworthy website for CedarRX, an expert compounding pharmacy in Twin Falls, Idaho.

## 🎨 Design System

This project uses a carefully crafted design system inspired by Cedar Clinic, featuring:

- **Cedar Green** (#2D5F4F) - Primary brand color
- **Warm Cream** (#FBF9F6) - Main backgrounds
- **Deep Forest** (#1E4038) - Dark sections and footer
- **Clean Typography** - Inter font family throughout
- **Subtle Animations** - Professional, medical-grade interactions

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
cedarrx/
├── app/
│   ├── globals.css          # Global styles and Tailwind
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Homepage
├── components/
│   ├── Hero.tsx             # Hero section
│   ├── Services.tsx         # Services grid
│   ├── WhyCedarRX.tsx       # Why choose us
│   ├── HowItWorks.tsx       # 3-step process
│   ├── Testimonials.tsx     # Customer testimonials
│   └── Footer.tsx           # Site footer
├── design-agent-template/   # Design agent files
├── .DESIGN                  # Quick design reference
├── DESIGN-AGENT.md          # Complete design system
├── .cursorrules             # Cursor AI rules
└── package.json
```

## 🎯 Key Features

- **Warm, Trustworthy Design** - Natural green palette with cream backgrounds
- **Fully Responsive** - Mobile-first design that works on all devices
- **Smooth Animations** - Powered by Framer Motion
- **SEO Optimized** - Proper metadata and semantic HTML
- **Easy to Update** - Config objects in each component for simple content updates

## 🛠️ Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Font:** Inter (via Google Fonts)

## 📝 Using the Design Agent

This project includes a design agent system for rapid development:

### Quick Start
```
@.DESIGN Build a new section
```

### Full Reference
```
@DESIGN-AGENT.md Create a contact form section
```

See `HOW-TO-USE-AGENT.md` for complete instructions.

## 🎨 Customizing Content

Each component has a `config` object at the top of the file. Simply edit these to update content:

```tsx
// Example from Hero.tsx
const config = {
  eyebrow: 'Twin Falls, Idaho',
  title: 'Your Expert',
  titleAccent: 'Compounding Pharmacy',
  // ... more config
};
```

## 🌐 Deployment

This project is ready to deploy to Vercel, Netlify, or any platform that supports Next.js:

```bash
npm run build
npm run start
```

## 📄 License

© 2026 CedarRX. All rights reserved.

## 🤝 Support

For questions or support, contact:
- **Phone:** 208-329-7811
- **Email:** info@cedarrx.com
- **Address:** 1309 Blue Lakes Blvd. N, Twin Falls, ID 83301

---

Built with ❤️ using the CedarRX Design Agent System
