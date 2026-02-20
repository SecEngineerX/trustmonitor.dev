# TrustMonitor Landing Page

**Status:** Pre-launch validation page
**Tech Stack:** Next.js 14, TypeScript, Plain CSS
**Target Launch:** Q2 2026

---

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Setup

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your Formspree ID:

```
NEXT_PUBLIC_FORMSPREE_ID=your_formspree_id_here
```

Get a Formspree ID at: https://formspree.io/

### 3. Development

```bash
npm run dev
```

Open http://localhost:3000

### 4. Build

```bash
npm run build
npm start
```

### 5. Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Or push to GitHub and connect via Vercel dashboard.

---

## Project Structure

```
trustmonitor/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout
│   │   ├── page.tsx                # Landing page
│   │   └── thank-you/
│   │       └── page.tsx            # Post-submission
│   │
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Hero.tsx            # Nuclear version
│   │   │   ├── Pain.tsx            # $0 liability
│   │   │   ├── Calculator.tsx      # Interactive calculator
│   │   │   ├── Proof.tsx           # Evidence bundle
│   │   │   ├── Comparison.tsx      # Competitor table
│   │   │   ├── Guarantee.tsx       # Pricing tiers
│   │   │   ├── Decision.tsx        # Binary choice
│   │   │   ├── Waitlist.tsx        # Form
│   │   │   └── Footer.tsx          # Footer
│   │   │
│   │   └── shared/
│   │       ├── Button.tsx          # Button component
│   │       ├── Container.tsx       # Layout wrapper
│   │       └── Badge.tsx           # Badge component
│   │
│   ├── styles/
│   │   ├── globals.css             # Reset + base
│   │   ├── variables.css           # Design tokens
│   │   └── typography.css          # Font styles
│   │
│   └── utils/
│       ├── constants.ts            # Copy, pricing, config
│       └── calculator.ts           # Payout logic
│
├── public/
│   ├── robots.txt                  # Blocks crawlers
│   └── sla-preview.txt             # Placeholder (needs PDF)
│
├── docs/
│   ├── DESIGN_SYSTEM.md            # Design rules
│   ├── CONTENT_RULES.md            # Copy guidelines
│   └── LAUNCH_CHECKLIST.md         # Pre-launch validation
│
├── package.json
├── tsconfig.json
├── next.config.js
└── .env.example
```

---

## Key Features

### 1. Nuclear Hero
- Specific incident timestamp
- Specific revenue loss ($43K)
- $0 liability punch line

### 2. Interactive Calculator
- Real-time payout estimation
- Slider for incident count
- Input for average loss
- Tier recommendations

### 3. Cryptographic Proof
- Evidence bundle example
- OpenTimestamps verification
- Multi-region consensus

### 4. Competitor Comparison
- Direct comparison table
- Real competitor quotes
- Factual data only

### 5. Pricing Tiers
- Standard: $499/mo, $200 cap
- Professional: $2,499/mo, $500 cap (MOST SELECTED)
- Enterprise: Custom, $1,000+ cap

### 6. Qualification Form
- 8 required fields
- Business metrics validation
- Honeypot spam protection
- Formspree integration

---

## Design System

### Colors (LOCKED)
```css
--bg-primary: #FFFFFF
--text-primary: #111827
--accent: #7F1D1D        /* Blood red for liability */
--link-blue: #1E40AF     /* Enterprise blue */
```

### Typography
```css
--font-headings: 'Helvetica Neue', Arial, sans-serif
--font-body: 'Helvetica Neue', Arial, sans-serif
--font-mono: 'SF Mono', Monaco, monospace
```

### FORBIDDEN
❌ NO green colors
❌ NO Tailwind/shadcn
❌ NO dark mode
❌ NO rounded corners >4px
❌ NO marketing speak

See `docs/DESIGN_SYSTEM.md` for full rules.

---

## Content Guidelines

### Tone
- Cold, institutional, legal precision
- Specific numbers, not abstractions
- Zero warmth, zero hype

### Examples

✅ **GOOD:**
> "February 10, 2026 — 2:47 AM. Your payment gateway was down for 22 minutes. You lost $43,000. Their liability? $0."

❌ **BAD:**
> "Imagine losing thousands because your monitoring failed! Join the revolution!"

See `docs/CONTENT_RULES.md` for full guidelines.

---

## Environment Variables

Required:
```
NEXT_PUBLIC_FORMSPREE_ID=your_formspree_id
```

Optional:
```
NEXT_PUBLIC_SITE_URL=https://trustmonitor.dev
NEXT_PUBLIC_LAUNCH_DATE=2026-03-31
```

---

## Pre-Launch Checklist

See `docs/LAUNCH_CHECKLIST.md` for complete validation.

**Critical:**
- [ ] Formspree ID configured
- [ ] All links tested
- [ ] Mobile responsive
- [ ] Form submits successfully
- [ ] No console errors
- [ ] robots.txt blocks crawlers
- [ ] SSL enabled

---

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel dashboard
3. Add environment variables
4. Deploy

Or via CLI:
```bash
vercel --prod
```

### Environment Variables in Vercel

Dashboard → Settings → Environment Variables

Add:
- `NEXT_PUBLIC_FORMSPREE_ID`
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_LAUNCH_DATE`

---

## Formspree Setup

1. Go to https://formspree.io
2. Create account
3. Create new form
4. Copy form ID (e.g., `xyz123`)
5. Add to `.env.local`
6. Configure form settings:
   - Name: "TrustMonitor Founding Applications"
   - Notification email: founding@trustmonitor.dev
   - Redirect: /thank-you
   - Spam protection: Enabled

---

## Testing

### Manual Testing

```bash
npm run dev
```

Test:
- [ ] Hero CTAs scroll to sections
- [ ] Calculator updates in real-time
- [ ] Form submits and redirects
- [ ] Mobile menu works (if added)
- [ ] All links resolve

### Type Checking

```bash
npm run type-check
```

### Build Test

```bash
npm run build
```

Should complete with no errors.

---

## Monitoring

### Form Submissions
- Check Formspree dashboard daily
- Respond within 48 hours
- Update founding slots count

### Error Tracking
- Vercel dashboard → Analytics
- Review build logs
- Check for 404s

### Performance
- Lighthouse in Chrome DevTools
- Target: >90 Performance, 100 Accessibility

---

## Maintenance

### Weekly
- [ ] Check form submissions
- [ ] Verify competitor SLA links
- [ ] Update founding slots count

### Monthly
- [ ] Review dollar amounts
- [ ] Check Formspree quota
- [ ] Performance audit

### Quarterly
- [ ] Re-verify competitor quotes
- [ ] Update content if needed
- [ ] Legal review

---

## Troubleshooting

### Form Not Submitting
1. Check Formspree ID in `.env.local`
2. Verify environment variables in Vercel
3. Check browser console for errors
4. Test with different email addresses

### Build Errors
1. Run `npm run type-check`
2. Check for missing imports
3. Verify all CSS modules exist
4. Clear `.next` folder and rebuild

### Styling Issues
1. Check CSS import order in `globals.css`
2. Verify CSS variables in `variables.css`
3. Clear browser cache
4. Test in incognito mode

---

## Support

**Technical Issues:**
- GitHub Issues: (add after repo public)
- Email: founding@trustmonitor.dev

**Documentation:**
- Design System: `docs/DESIGN_SYSTEM.md`
- Content Rules: `docs/CONTENT_RULES.md`
- Launch Checklist: `docs/LAUNCH_CHECKLIST.md`

---

## License

Proprietary. All rights reserved.

This is a pre-launch validation page. TrustMonitor is not yet operational.

---

**Last Updated:** February 16, 2026
**Status:** Pre-launch validation
**Target Launch:** Q2 2026
