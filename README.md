# Dennis Musyoka — Portfolio Website

A clean, responsive, single-page portfolio built with vanilla HTML, CSS, and JavaScript. Dark theme with cyan/blue accents. No frameworks, no build tools — just open `index.html` in a browser.

---

## Live Preview

Double-click `index.html` to open locally, or deploy to any static hosting provider (GitHub Pages, Netlify, Vercel, etc.).

---

## Project Structure

```
portfolio/
├── index.html            # Main page (all sections)
├── styles.css            # All styles (dark theme, responsive)
├── script.js             # Project cards, mobile nav, active nav highlight
├── assets/
│   └── profile.jpg       # Profile photo (displayed in hero card)
├── QA-REPORT.md          # Full QA test results
└── README.md             # This file
```

---

## Sections

| Section | Description |
|---------|-------------|
| **Hero** | Name, tagline, CTA buttons, social links with icons, profile card |
| **About** | Short bio and a list of focus areas |
| **Skills** | 4 skill cards — Web Designing, Networking, System Development, Vibe Coding |
| **Projects** | 3 project cards rendered from JavaScript (easy to add more) |
| **Contact** | Direct contact info with icons + mailto form |
| **Footer** | Copyright with auto-updating year + back-to-top link |

---

## How to Customise

### Change Your Info

Open `index.html` and edit the text directly. Key spots:

- **Name & tagline** — inside the `<section class="hero">` block
- **Email** — search for `musyokadennis860@gmail.com` (appears in hero card + contact section + form action)
- **Phone** — search for `+254715837099`
- **Social links** — search for `github.com/Smexden`, `linkedin.com`, `instagram.com`
- **Profile photo** — replace `assets/profile.jpg` with your own image (keep the same filename, or update the `src` attribute)

### Add or Edit Projects

Open `script.js` and edit the `projects` array at the top of the file:

```js
const projects = [
  {
    title: "Project Name",
    type: "Category",           // e.g. "Web", "Mobile", "System"
    description: "Short description of the project.",
    tags: ["HTML", "CSS"],      // Shown as chips/badges
    liveUrl: "https://...",     // Leave "" to hide the Live button
    codeUrl: "https://..."      // Leave "" to hide the Code button
  },
  // Add more objects here...
];
```

Cards are generated automatically — no HTML editing needed.

### Change the Accent Colour

Open `styles.css` and change the CSS custom properties at the top:

```css
:root {
  --accent: #22d3ee;       /* Primary cyan */
  --accent-2: #60a5fa;     /* Secondary blue */
  --accent-3: #a78bfa;     /* Tertiary purple */
}
```

These three colours control the gradient on the name text, buttons, avatar ring, nav highlight, and section dividers.

### Change the Font

Replace the Google Fonts `<link>` in `index.html` and update `--font` in `styles.css`:

```css
--font: "Your Font", system-ui, sans-serif;
```

---

## Features

- **Fully responsive** — tested at 360px, 428px, 768px, 1024px, and 1440px
- **Dark theme** with subtle background glows and gradient accents
- **Sticky header** with scroll-aware active nav highlighting
- **Mobile hamburger menu** with open/close/outside-click handling
- **Inline SVG icons** for GitHub, LinkedIn, Instagram, email, phone, code, and external link — no icon library needed
- **Gradient avatar ring** with soft glow around profile photo
- **Hover lift** on all cards and buttons with consistent transitions
- **Section dividers** — subtle gradient lines between sections
- **Accessible**:
  - Skip-to-content link
  - Visible `:focus-visible` outlines
  - Correct heading hierarchy (H1 > H2 > H3)
  - `aria-label`, `aria-expanded`, `aria-controls` on interactive elements
  - `prefers-reduced-motion` disables all animations and transitions
  - Meaningful `alt` text on images
- **No dependencies** — no npm, no build step, no frameworks
- **Auto-updating footer year** via JavaScript

---

## Deployment

### GitHub Pages

1. Push this folder to a GitHub repository
2. Go to **Settings > Pages**
3. Set source to **main branch**, root folder
4. Your site will be live at `https://<username>.github.io/<repo-name>/`

### Netlify / Vercel

1. Drag and drop the project folder into the dashboard, or connect your GitHub repo
2. No build command needed — it's static HTML
3. Done

### Any Web Host

Upload `index.html`, `styles.css`, `script.js`, and the `assets/` folder to your web root. That's it.

---

## Browser Support

Tested and working in:

- Chrome (latest)
- Firefox (latest)
- Safari / Mobile Safari
- Edge (latest)

Uses standard CSS (custom properties, grid, flexbox, backdrop-filter) and vanilla ES6 JavaScript. No polyfills needed for modern browsers.

---

## Contact

- **Email:** [musyokadennis860@gmail.com](mailto:musyokadennis860@gmail.com)
- **Phone:** [+254 715 837099](tel:+254715837099)
- **GitHub:** [github.com/Smexden](https://github.com/Smexden)
- **Instagram:** [@smex_den](https://www.instagram.com/smex_den/)

---

## License

This project is free to use and modify for personal and educational purposes.
