# Austin Xu — Portfolio

A production-ready, dark-themed developer portfolio built with Next.js App Router, Tailwind CSS, and Framer Motion.

## Stack

- **Framework**: Next.js 14 (App Router, static export)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: GitHub Pages via GitHub Actions

---

## Getting Started

### Prerequisites

- Node.js 18+ and npm

> **WSL users:** If `npm` resolves to the Windows version, install Node.js via nvm inside WSL:
> ```bash
> curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
> source ~/.bashrc
> nvm install 20
> ```

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Build & Export

This site uses Next.js static export (`output: 'export'`), which generates a fully static site in the `out/` directory.

```bash
npm run build
```

The static output will be in `./out/`.

---

## Deploy to GitHub Pages

### Option 1: GitHub Actions (Recommended)

The workflow at `.github/workflows/deploy.yml` automatically builds and deploys on every push to `main`.

**Setup steps:**

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Under **Source**, select **GitHub Actions**
4. Push to `main` — the workflow deploys automatically

Your site will be live at:
```
https://<your-username>.github.io/<repo-name>/
```

**If deploying to a subdirectory** (e.g., `/portfolio`), update the workflow env:
```yaml
env:
  NEXT_PUBLIC_BASE_PATH: /portfolio
```

And update `next.config.js` if needed.

### Option 2: Manual deployment

```bash
npm run build
npx gh-pages -d out
```

---

## Customization

### Personal information

Update the following files with your real details:

| File | What to update |
|------|---------------|
| `components/Navbar.tsx` | GitHub URL |
| `components/Hero.tsx` | GitHub URL, headline |
| `components/Projects.tsx` | GitHub links, demo links |
| `components/Footer.tsx` | Email address, GitHub URL |
| `app/layout.tsx` | SEO metadata |

### Resume

Place your resume at `public/resume.pdf`. The "Download PDF" button in the footer links to this file.

### Contact form

The contact form in `components/Footer.tsx` submits to a placeholder handler. To make it functional:

1. Sign up at [Formspree](https://formspree.io) (free tier available)
2. Create a new form and copy your endpoint
3. In `Footer.tsx`, replace the `handleSubmit` mock with a real fetch:

```ts
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setSubmitting(true)
  await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formState),
  })
  setSubmitting(false)
  setSubmitted(true)
}
```

---

## Project Structure

```
portfolio/
├── app/
│   ├── globals.css         # Global styles, CSS variables
│   ├── layout.tsx          # Root layout + metadata
│   └── page.tsx            # Page composition
├── components/
│   ├── Navbar.tsx          # Fixed navigation
│   ├── Hero.tsx            # Hero section
│   ├── Projects.tsx        # Project cards grid
│   ├── SystemsThinking.tsx # Philosophy / stat cards
│   ├── Skills.tsx          # Skill groups
│   ├── Blog.tsx            # Writing / articles
│   └── Footer.tsx          # Contact form + links
├── public/
│   ├── resume.pdf          # Add your resume here
│   └── .nojekyll
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Pages CI/CD
├── next.config.js
├── tailwind.config.ts
└── tsconfig.json
```

---

## Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#000000` | Page background |
| Accent | `#00ff9f` | Primary highlight, CTAs |
| Secondary | `#1f2937` | Card borders, subtle UI |
| Card BG | `#0a0a0a` | Card backgrounds |
| Muted | `#6b7280` | Secondary text |
