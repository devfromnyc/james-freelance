# James Freelance Portfolio

A modern, cyber-themed freelancing portfolio website featuring a signature macOS-style portfolio page with draggable folders and Finder-style windows.

**Live Demo:** Coming soon

## Features

### Visual Design
- **Cyber/Neon Theme** - Dark background with vibrant cyan, magenta, and blue accents
- **Animated Circuit Background** - Custom canvas-based animated circuit pattern on hero
- **Glow Effects** - Neon glow on buttons, borders, and text
- **Smooth Animations** - Framer Motion powered scroll reveals and transitions
- **Responsive Design** - Optimized for all screen sizes

### Homepage (Storytelling Flow)
The homepage guides visitors through 8 carefully crafted sections:

1. **Hero** - Full-screen with animated circuit background, creative headline, and dual CTAs
2. **About Me** - Personal introduction with photo, stats, and brief story
3. **Problem Section** - Pain points that resonate with potential clients
4. **How I Help** - Three service pillars (Web Dev, E-Commerce, AI Integration)
5. **AI Workflows Spotlight** - Visual workflow diagram showcasing AI expertise
6. **Featured Work** - Preview of top 3 portfolio projects
7. **Tech Stack** - Animated marquee of technologies
8. **Final CTA** - Strong closing call-to-action

### Portfolio Page (macOS Desktop Experience)
A unique, interactive portfolio presentation:

- **Desktop Environment** - Simulates a macOS desktop with menu bar and dock
- **Draggable Folders** - Each project is a folder icon that can be dragged anywhere
- **Finder-style Windows** - Click folders to open detailed project views with:
  - Screenshot carousel
  - Project description
  - Tech stack badges
  - Feature list
  - GitHub and Live Site links
- **Window Management** - Multiple windows, stacking, draggable by title bar
- **Mobile Fallback** - Responsive grid layout with full-screen modals on smaller screens

### Contact Form
- Working email integration via Resend API
- Client and server-side validation
- Success/error state handling
- Rate limiting protection

## Security Features

| Layer | Protection | Details |
|-------|-----------|---------|
| **Rate Limiting** | Prevents email flooding | Max 2 emails per IP per minute |
| **Honeypot Field** | Stops basic bots | Hidden field that bots auto-fill |
| **Disposable Email Blocking** | Reduces spam | Blocks known throwaway email domains |
| **Input Sanitization** | Prevents injection | Trims and limits all input lengths |
| **Email Validation** | Ensures valid contact | Regex validation on email format |
| **Security Headers** | XSS/Clickjacking protection | Configured via vercel.json |

## Tech Stack

- **Framework:** Next.js 16 (App Router) + React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Drag & Drop:** @dnd-kit/core + @dnd-kit/utilities
- **Email:** Resend API
- **Deployment:** Vercel

## Project Structure

```
james-freelance/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── page.tsx                  # Homepage
│   │   ├── layout.tsx                # Root layout with metadata
│   │   ├── globals.css               # Global styles + Tailwind theme
│   │   ├── portfolio/
│   │   │   └── page.tsx              # macOS desktop portfolio
│   │   ├── contact/
│   │   │   └── page.tsx              # Contact page
│   │   └── api/
│   │       └── contact/
│   │           └── route.ts          # Contact form API endpoint
│   │
│   ├── components/
│   │   ├── home/                     # Homepage sections
│   │   │   ├── Hero.tsx
│   │   │   ├── AboutMini.tsx
│   │   │   ├── ProblemSection.tsx
│   │   │   ├── HowIHelp.tsx
│   │   │   ├── AISpotlight.tsx
│   │   │   ├── FeaturedWork.tsx
│   │   │   ├── TechStack.tsx
│   │   │   └── FinalCTA.tsx
│   │   │
│   │   ├── portfolio/                # Portfolio page components
│   │   │   ├── Desktop.tsx           # Main desktop container
│   │   │   ├── MenuBar.tsx           # macOS-style menu bar
│   │   │   ├── Folder.tsx            # Draggable folder icon
│   │   │   ├── FinderWindow.tsx      # Project detail window
│   │   │   ├── Dock.tsx              # Bottom dock
│   │   │   └── MobilePortfolio.tsx   # Mobile-responsive version
│   │   │
│   │   ├── contact/
│   │   │   └── ContactForm.tsx       # Contact form with validation
│   │   │
│   │   ├── layout/
│   │   │   ├── Navbar.tsx            # Fixed navigation
│   │   │   └── Footer.tsx            # Site footer
│   │   │
│   │   └── ui/
│   │       ├── Button.tsx            # Reusable button component
│   │       └── CircuitBackground.tsx # Animated canvas background
│   │
│   ├── lib/
│   │   ├── projects.ts               # Portfolio project data
│   │   ├── siteConfig.ts             # Site metadata & social links
│   │   ├── email.ts                  # Resend email integration
│   │   └── rateLimit.ts              # Rate limiting utility
│   │
│   └── types/
│       └── index.ts                  # TypeScript interfaces
│
├── public/
│   └── images/
│       └── projects/                 # Project screenshots
│
├── .env.example                      # Environment variable template
├── vercel.json                       # Vercel configuration
├── tailwind.config.ts                # Tailwind configuration
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Resend account (for email functionality)

### Installation

```bash
# Clone the repository
git clone https://github.com/devfromnyc/james-freelance.git
cd james-freelance

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local
```

### Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `RESEND_API_KEY` | Yes | Your Resend API key ([get one here](https://resend.com)) |
| `CONTACT_EMAIL` | Yes | Email address for contact form submissions |

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
npm start
```

## Customization

### Adding/Editing Projects

Edit `src/lib/projects.ts`:

```typescript
{
  id: "my-project",
  title: "My Project",
  slug: "my-project",
  description: "Short description",
  longDescription: "Detailed description...",
  techStack: ["React", "Next.js", "TypeScript"],
  features: ["Feature 1", "Feature 2"],
  githubUrl: "https://github.com/...",
  liveUrl: "https://...",  // optional
  screenshots: ["/images/projects/my-project.png"],
  icon: "folder-code",  // folder | folder-code | folder-chart | folder-star
  featured: true,  // show on homepage?
}
```

### Updating Personal Info

Edit `src/lib/siteConfig.ts`:

```typescript
export const siteConfig = {
  name: "Your Name",
  title: "Your Title",
  description: "Your description",
  email: "your@email.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername",
};
```

### Adding Project Screenshots

1. Place images in `public/images/projects/`
2. Reference in project config: `screenshots: ["/images/projects/filename.png"]`
3. Recommended size: 1200x675 (16:9 aspect ratio)

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Platforms

Build the project and deploy the output to any Node.js hosting platform:

```bash
npm run build
```

## Accessibility

- Keyboard navigation support
- `prefers-reduced-motion` respected
- Semantic HTML structure
- ARIA labels on interactive elements

## Performance

- Static page generation where possible
- Lazy loading for below-fold content
- Optimized animations with Framer Motion
- Canvas-based background (GPU accelerated)

## License

MIT

---

Built with Next.js, Tailwind CSS, and Framer Motion.
