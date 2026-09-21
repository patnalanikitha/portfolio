# Modern Developer Portfolio & Showcase Suite

An authentic, eye-catching, and high-performance developer portfolio built specifically to stand out at hackathons, project collaborations, and recruiter reviews.

---

## Features Overview

1. **AOS (Animate On Scroll) Integration**: Smooth, staggered scroll reveal animations across sections, capability cards, and showcase projects.
2. **Cyber-Glassmorphic Aesthetics**: Modern dark obsidian theme (`#07080c`), glowing radial gradients, frosted glass cards (`backdrop-filter: blur(16px)`), and subtle 1px border highlights.
3. **Interactive 60fps Particle Background**: Canvas-based constellation mesh that dynamically responds to mouse movement and cursor gravity.
4. **Modern Developer Console (CLI)**:
   - Toggle anywhere by pressing the **`** (backtick) key or clicking **`Console`** in the header.
   - Clean, authentic developer commands: `help`, `about`, `skills`, `projects`, `contact`, and `clear`.
5. **Direct Project Entry**: Deep-dive case studies accessible directly from project cards with amber element logos.

---

## Featured Production Projects

### 1. StudyFlow — AI Academic Companion & Pixel Focus Studio
- **Live Deployment**: [studyflow-zeta-nine.vercel.app](https://studyflow-zeta-nine.vercel.app/)
- **GitHub Repository**: [github.com/patnalanikitha/studyflow](https://github.com/patnalanikitha/studyflow)
- **Deep-Dive Case Study**: [studyflow.html](studyflow.html)
- **Core Engineering**:
  - **Google Gemini AI SDK**: Automated extraction of flashcard decks and conceptual quizzes from notes.
  - **SuperMemo-2 (SM-2)**: Authentic cognitive spaced repetition interval algorithm.
  - **Procedural Audio Engine**: Real-time Web Audio API synthesizing rain, binaural alpha waves, and 8-bit retro focus chimes with zero audio assets.
  - **Pixel Focus Studio**: Companion progression ("Mochi the Pixel Cat"), streaks, and XP mechanics.

### 2. Komorebi Café — A Cozy Barista Experience
- **Live Deployment**: [komorebi-cafe-tan.vercel.app](https://komorebi-cafe-tan.vercel.app/)
- **GitHub Repository**: [github.com/patnalanikitha/komorebi-cafe](https://github.com/patnalanikitha/komorebi-cafe)
- **Deep-Dive Case Study**: [komorebi.html](komorebi.html)
- **Core Engineering**:
  - **Artisan Brewing Simulation**: Real-time fluid mechanics, latte art fern rendering, and multi-vessel physics (Demitasse, Gibraltar, Ribbed Glass).
  - **Zero-Asset Procedural Web Audio**: 100% mathematical sound synthesis for espresso extraction, rain soundscapes, steam wand hisses, and 4-harmonic service bells.
  - **Barista Grimoire**: Authentic specialty coffee formulas (Melbourne Flat White, Cortado, Long Black, Affogato).
  - **Pixel Narrative Progression**: Dynamic dialogue and orders from pixel patrons (Clara, Milo, Elena, Kenji) with reward stamps.

---

## How to Run Locally

### Option 1: Instant Browser Launch (Zero Installation)
Simply double-click or open `index.html` directly in any web browser (Chrome, Edge, Firefox, Safari).

### Option 2: Local Static Server (VS Code / Python)
- In VS Code: Right-click `index.html` and click **"Open with Live Server"**.
- Or via terminal:
  ```bash
  python -m http.server 8000
  ```
  Open `http://localhost:8000` in your browser.

---

## Free 1-Click Deployment

### Deploy to GitHub Pages
1. Push this folder to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of developer portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```
2. Go to your repo on GitHub: **Settings** -> **Pages**.
3. Under **Branch**, select `main` and root `/`, then click **Save**.
4. Your site will be live at `https://YOUR_USERNAME.github.io/portfolio/` in ~1 minute!

### Deploy to Vercel or Netlify
- Drag and drop this folder directly into the [Vercel Dashboard](https://vercel.com) or [Netlify Drop](https://app.netlify.com/drop).
- Zero configuration needed.

---

## Updating Profile Data
To update or modify your bio, skills, or projects in the future, simply edit the clean configuration object in [`js/portfolio-data.js`](js/portfolio-data.js).
