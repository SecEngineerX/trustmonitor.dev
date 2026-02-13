# TrustMonitor Launch Checklist

**Purpose:** Ensure the landing page meets all quality, compliance, and credibility standards before going live.

**Rule:** Do NOT deploy until every checkbox is marked complete.

---

## ✅ DESIGN VALIDATION

### Colors
- [ ] All colors match exact hex values from DESIGN_SYSTEM.md
- [ ] No green colors anywhere on the page
- [ ] No gradients, shadows, or glows
- [ ] Only white (#FFFFFF) and light gray (#F9FAFB) backgrounds
- [ ] Accent red (#7F1D1D) used only for CTAs and urgency elements

### Typography
- [ ] Helvetica Neue (or Arial fallback) used throughout
- [ ] No serif fonts anywhere
- [ ] No italic text anywhere
- [ ] No font sizes below 16px for body text
- [ ] Hero headline is 96px (48px mobile)

### Spacing
- [ ] All sections have 96px top/bottom padding (64px mobile)
- [ ] Container max-width is 1280px
- [ ] Element gaps are consistent from spacing scale

### Components
- [ ] Primary buttons use exact CSS from DESIGN_SYSTEM.md
- [ ] No rounded corners (border-radius = 0)
- [ ] No box shadows anywhere

### Prohibited Elements
- [ ] No icons or illustrations
- [ ] No photos
- [ ] No decorative elements
- [ ] No dark mode toggle

---

## ✅ CONTENT VALIDATION

### Copy Principles
- [ ] No exclamation marks in headlines
- [ ] No emojis except ⚠️ in legal disclaimer
- [ ] Specific numbers used throughout
- [ ] Competitors named explicitly
- [ ] No startup jargon

### Required Sections (In Order)
- [ ] Hero
- [ ] Pain
- [ ] Calculator
- [ ] Proof
- [ ] Comparison
- [ ] Guarantee
- [ ] Decision
- [ ] Waitlist
- [ ] Footer

### Critical Elements
- [ ] Launch timeline visible ("Launching Q2 2026")
- [ ] Scarcity visible ("25 slots remaining")
- [ ] SLA preview PDF link works
- [ ] Pre-launch disclaimer in footer

---

## ✅ TECHNICAL VALIDATION

### HTML/CSS
- [ ] HTML validates (https://validator.w3.org)
- [ ] No console errors
- [ ] All images have alt text

### Performance
- [ ] Page loads in <3 seconds
- [ ] Images optimized (<200KB each)
- [ ] CSS minified for production

### SEO (Pre-Launch)
- [ ] robots.txt blocks all crawlers
- [ ] Meta robots: noindex, nofollow
- [ ] Title tag present
- [ ] Meta description present

---

## ✅ MOBILE RESPONSIVENESS

### iPhone 12/13/14 (390px)
- [ ] Hero visible without scrolling
- [ ] All grids stack vertically
- [ ] Buttons are full-width
- [ ] Text is readable

### Android Pixel (393px)
- [ ] Same checks as iPhone
- [ ] No horizontal scrolling

---

## ✅ FORM FUNCTIONALITY

### Submission
- [ ] Form submits to Formspree
- [ ] Required fields enforced
- [ ] Email validation works
- [ ] Redirects to /thank-you

### User Flow
- [ ] Thank you page exists
- [ ] Auto-reply email sent
- [ ] Notification sent to founding@trustmonitor.dev

---

## ✅ ASSETS & FILES

### Required Files
- [ ] SLA preview PDF exists at /public/sla-preview.pdf
- [ ] PDF downloads correctly
- [ ] Favicon exists
- [ ] robots.txt exists with Disallow: /

---

## ✅ HOSTING & DEPLOYMENT

### Vercel Setup
- [ ] Domain connected
- [ ] SSL certificate active (HTTPS)
- [ ] Build succeeds
- [ ] No 404 errors

### DNS
- [ ] DNS points to Vercel
- [ ] DNS propagation complete

---

## ✅ LEGAL & COMPLIANCE

### Required Pages
- [ ] Privacy Policy exists
- [ ] Terms of Service exists
- [ ] Both linked in footer

### Contact
- [ ] founding@trustmonitor.dev is active
- [ ] Email monitored for 72h reply

---

## ✅ CROSS-BROWSER TESTING

- [ ] Chrome (latest)
- [ ] Safari (latest)
- [ ] Firefox (latest)
- [ ] Mobile Safari (iOS)
- [ ] Mobile Chrome (Android)

---

## 🚨 BLOCKERS (DO NOT LAUNCH)

- [ ] Any green colors present
- [ ] Icons/illustrations present
- [ ] Startup jargon in copy
- [ ] Form has <5 fields
- [ ] Missing legal disclaimer
- [ ] robots.txt allows crawling
- [ ] SLA PDF missing
- [ ] Form doesn't submit
- [ ] SSL certificate missing

---

## 🎯 SUCCESS CRITERIA

### Week 1:
- 3-5 qualified applications
- 20+ SLA preview downloads
- Zero critical bugs

### Week 4:
- 15-25 qualified applications
- 100+ SLA preview downloads
- 3-5 enterprise inquiries

---

**Last Updated:** February 13, 2026  
**Status:** Use this before every deploy
