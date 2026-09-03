# OnTime Digital Solutions — Agency Website (React + Vite + Express)

A high-converting, mobile-first, RTL Arabic agency website built with **React + Vite + Express**. Deployable to Render (free) directly from GitHub.

## Tech Stack

- **React 18** — component-based UI
- **Vite 5** — fast build tool
- **Express 4** — production server that serves the built React app
- **Pure CSS** — custom dark premium theme, no UI framework

## Features

- **Hero with conversion-focused copy** — "حوّل زوارك إلى عملاء"
- **Animated stats** — projects, clients, satisfaction rate, years of experience
- **8 services** — websites, apps, e-commerce, ERP, CRM, digital marketing, AI automation, support
- **Portfolio with results** — real outcomes with measurable badges (+150% sales, -60% time, etc.)
- **Process** — 4 clear steps from first message to delivery
- **Why us** — trust builders with icons
- **Testimonials** — 3 client reviews with 5-star ratings
- **Pricing packages** — 3 tiers (انطلاقة, نمو, توسع) with featured "most popular" plan
- **FAQ** — 6 objection-handling questions with accordion
- **Contact form** — sends details directly to your WhatsApp
- **Sticky mobile CTA** — persistent "free consultation" button on mobile
- **Floating WhatsApp button** — always visible
- **Scroll reveal animations** — smooth IntersectionObserver-based reveals
- **SEO meta tags** — title, description, keywords, Open Graph

## Project Structure

```
├── index.html              # Vite entry HTML
├── package.json             # Dependencies and scripts
├── vite.config.js           # Vite config
├── render.yaml              # Render Blueprint config
├── server/
│   └── index.js             # Express production server
├── public/
│   └── favicon.svg          # Brand favicon
└── src/
    ├── main.jsx             # React entry point
    ├── App.jsx              # Main app component
    ├── index.css            # All styles
    ├── data/
    │   └── siteData.js      # All content data (services, pricing, FAQ, etc.)
    ├── hooks/
    │   ├── useReveal.js     # Scroll reveal hook
    │   └── useCounter.js    # Animated counter hook
    └── components/
        ├── Header.jsx
        ├── Hero.jsx
        ├── Stats.jsx
        ├── Services.jsx
        ├── Work.jsx
        ├── Process.jsx
        ├── WhyUs.jsx
        ├── Testimonials.jsx
        ├── Pricing.jsx
        ├── FAQ.jsx
        ├── Contact.jsx
        ├── CTA.jsx
        ├── Footer.jsx
        ├── WhatsAppFloat.jsx
        └── StickyCTA.jsx
```

## Before you deploy — 1 required edit

Every WhatsApp link currently points to a placeholder number:
`213000000000`

Open `src/data/siteData.js` and replace the `WHATSAPP_NUMBER` constant with your real WhatsApp number in international format, no `+`, no spaces (e.g. a Algerian number `0551 23 45 67` becomes `213551234567`).

That's the only place you need to change — all WhatsApp links and the contact form use this constant.

## Deploy to Render (free) — Web Service

### Option A: Render Blueprint (recommended)

1. Push this folder to a GitHub repository.
2. On [render.com](https://render.com), click **New +** → **Blueprint**.
3. Connect the repository. Render will automatically detect `render.yaml` and deploy the site with the correct settings.



### Option B: Manual Web Service

1. Push this folder to a GitHub repository.
2. On [render.com](https://render.com), click **New +** → **Web Service**.
3. Connect the repository.
4. Settings:
   - **Name:** `ontime-digital`
   - **Environment:** `Node`
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm start`
   - **Plan:** Free
5. Click **Create Web Service**. Render will install dependencies, build the React app, and start the Express server automatically.

Your site will be live at a free `.onrender.com` URL in about 2-3 minutes.

## Local Development

```bash
npm install
npm run dev        # Start Vite dev server at http://localhost:3000
```

## Production Build

```bash
npm run build       # Build React app to dist/
npm start           # Start Express server serving the built app
```

## Customizing later

- **Colors:** all defined as CSS variables at the top of `src/index.css` under `:root`
- **Services:** edit the `SERVICES` array in `src/data/siteData.js`
- **Pricing:** edit the `PRICING` array in `src/data/siteData.js`
- **Portfolio:** edit the `WORK` array in `src/data/siteData.js`
- **Testimonials:** edit the `TESTIMONIALS` array in `src/data/siteData.js`
- **FAQ:** edit the `FAQS` array in `src/data/siteData.js`
- **Fonts:** Tajawal (headlines) + Cairo (body), loaded from Google Fonts in `index.html`
