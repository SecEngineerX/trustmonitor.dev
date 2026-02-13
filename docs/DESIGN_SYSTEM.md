# TrustMonitor Design System

**Philosophy:** Boring = Trustworthy. Every visual decision communicates institutional credibility.

**Reference:** Stripe's legal pages / McKinsey PDFs / Law firm websites.

---

## 🎨 COLOR PALETTE

### Primary Colors (LOCKED)

```css
:root {
  /* Backgrounds */
  --bg-primary: #FFFFFF;           /* Pure white - main background */
  --bg-secondary: #F9FAFB;         /* Light gray - alternating sections */
  
  /* Text */
  --text-primary: #111827;         /* Near black - headlines, body */
  --text-secondary: #4B5563;       /* Medium gray - subtext */
  --text-muted: #6B7280;           /* Low contrast - legal/disclaimer */
  
  /* Borders */
  --border: #E5E7EB;               /* Subtle borders only */
  
  /* Accent */
  --accent: #7F1D1D;               /* Deep blood red - liability/urgency */
  --accent-hover: #991B1B;         /* Slightly lighter on hover */
  
  /* Links */
  --link-blue: #1E40AF;            /* Enterprise blue for legal links */
  --link-blue-hover: #1E3A8A;      /* Darker on hover */
}
```

### Usage Rules

| Element | Color Variable | Use Case |
|---------|----------------|----------|
| Body background | `--bg-primary` | Default page background |
| Alternating sections | `--bg-secondary` | Every other section (Pain, Proof, Decision) |
| Headlines | `--text-primary` | All H1, H2, H3 |
| Body text | `--text-primary` | All paragraph text |
| Subheadings | `--text-secondary` | Section leads, captions |
| Legal text | `--text-muted` | Disclaimers, fine print |
| Borders | `--border` | Card borders, dividers, inputs |
| CTA buttons | `--accent` | Primary buttons, badge borders |
| CTA hover | `--accent-hover` | Button hover states |
| Text links | `--link-blue` | All href links in body copy |

### FORBIDDEN Colors

❌ **Any shade of green** (fintech/crypto vibe - instant rejection)
❌ **Gradients** (startup vaporware signal)
❌ **Shadows** (too playful)
❌ **Glows** (casino/gaming aesthetic)
❌ **Neon colors** (unprofessional)
❌ **Pastels** (too soft for liability messaging)

### Dark Mode

**Status:** FORBIDDEN

**Reason:** Enterprise buyers expect clean white backgrounds. Dark mode signals consumer product, not B2B tool.

---

## 📝 TYPOGRAPHY

### Font Families (LOCKED)

```css
:root {
  /* Headings */
  --font-headings: 'Helvetica Neue', 'Arial Black', 'Arial', sans-serif;
  
  /* Body */
  --font-body: 'Helvetica Neue', 'Arial', sans-serif;
  
  /* Code/Monospace */
  --font-mono: 'SF Mono', 'Monaco', 'Inconsolata', 'Courier New', monospace;
}
```

**Why Helvetica Neue:**
- Maximum readability
- Institutional feel (banks, law firms use it)
- No personality = trustworthy
- System font = fast load

**FORBIDDEN Fonts:**
- ❌ Serif fonts (Times New Roman, Georgia, Merriweather)
- ❌ Script fonts (Pacifico, Dancing Script)
- ❌ Display fonts (Impact, Bebas Neue)
- ❌ Any Google Font that isn't system-standard

### Font Sizes

```css
:root {
  /* Scale */
  --text-9xl: 120px;   /* Not used on landing */
  --text-8xl: 96px;    /* Hero headlines */
  --text-7xl: 72px;    /* Not used */
  --text-6xl: 64px;    /* Not used */
  --text-5xl: 48px;    /* Section headlines */
  --text-4xl: 36px;    /* Calculator results */
  --text-3xl: 32px;    /* Card headlines */
  --text-2xl: 24px;    /* Subheadings */
  --text-xl: 20px;     /* Large body text */
  --text-lg: 18px;     /* Body text */
  --text-base: 16px;   /* Default body */
  --text-sm: 14px;     /* Captions, disclaimers */
}
```

**CRITICAL RULE:** No font size below 16px for body text. 14px only for legal disclaimers.

### Font Weights

```css
:root {
  --weight-normal: 400;    /* Body text */
  --weight-medium: 500;    /* Emphasized text */
  --weight-bold: 700;      /* Subheadings */
  --weight-black: 900;     /* Hero headlines */
}
```

**Usage:**
- Hero headlines: `--weight-black`
- Section headlines: `--weight-bold`
- Body text: `--weight-normal`
- Links: `--weight-medium`

### Line Heights

```css
:root {
  --leading-tight: 1.1;      /* Headlines */
  --leading-normal: 1.5;     /* Body text */
  --leading-relaxed: 1.6;    /* Long-form content */
}
```

### Letter Spacing

```css
:root {
  --tracking-tight: -0.02em;   /* Large headlines */
  --tracking-normal: 0;        /* Body text */
  --tracking-wide: 0.05em;     /* All-caps labels */
}
```

### FORBIDDEN Typography

❌ **Italic text** (anywhere - makes copy feel informal)
❌ **All-caps headlines** (shouting, unprofessional)
❌ **Underlined text** (except links)
❌ **Centered text** (except in specific card components)
❌ **Justified text** (poor readability)

---

## 📏 SPACING SYSTEM

### Scale

```css
:root {
  --space-1: 4px;      /* Tight spacing */
  --space-2: 8px;      /* Small gaps */
  --space-3: 16px;     /* Default spacing */
  --space-4: 24px;     /* Component padding */
  --space-5: 32px;     /* Large gaps */
  --space-6: 48px;     /* Section element gaps */
  --space-7: 64px;     /* Section padding (small) */
  --space-8: 96px;     /* Section padding (default) */
  --space-9: 128px;    /* Section padding (large) */
}
```

### Container Widths

```css
:root {
  --container: 1280px;         /* Default max-width */
  --container-narrow: 800px;   /* Proof, Waitlist sections */
}
```

### Section Padding

**Rule:** Every section must have minimum 96px top/bottom padding.

```css
.section {
  padding: var(--space-8) 0;  /* 96px top/bottom */
}

@media (max-width: 768px) {
  .section {
    padding: var(--space-7) 0;  /* 64px on mobile */
  }
}
```

### Whitespace Philosophy

**Rule:** Whitespace is your only visual element. Use it generously.

- **Between sections:** 96px minimum
- **Between elements in section:** 48px
- **Between related items:** 24px
- **Component internal padding:** 24-32px

**FORBIDDEN:**
❌ Tight spacing (<16px between unrelated elements)
❌ Inconsistent spacing (pick one value from scale)
❌ Decorative spacing (no "visual rhythm" experiments)

---

## 🔘 COMPONENTS

### Button - Primary

**Usage:** Main CTA ("Apply to Founding Program", "Calculate Your Loss")

```css
.btn-primary {
  background: transparent;
  border: 2px solid var(--accent);
  color: var(--accent);
  font-family: var(--font-headings);
  font-weight: var(--weight-bold);
  font-size: var(--text-xl);
  padding: var(--space-4) var(--space-6);  /* 24px 48px */
  text-decoration: none;
  display: inline-block;
  transition: all 0.2s ease;
  cursor: pointer;
  line-height: 1;
  border-radius: 0;  /* No rounded corners */
}

.btn-primary:hover {
  background: var(--accent);
  color: var(--bg-primary);
  border-color: var(--accent);
}
```

**FORBIDDEN:**
❌ Rounded corners (border-radius > 0)
❌ Box shadows
❌ Gradient backgrounds
❌ Icon prefixes

### Button - Secondary

**Usage:** Secondary actions ("Review SLA Preview", "Learn More")

```css
.btn-secondary {
  background: transparent;
  border: 1px solid var(--border);
  color: var(--text-primary);
  font-family: var(--font-body);
  font-weight: var(--weight-medium);
  font-size: var(--text-lg);
  padding: var(--space-3) var(--space-5);  /* 16px 32px */
  text-decoration: none;
  display: inline-block;
  transition: all 0.2s ease;
  cursor: pointer;
  border-radius: 0;
}

.btn-secondary:hover {
  border-color: var(--text-primary);
  background: transparent;
}
```

### Link

**Usage:** In-text links to SLA, legal docs

```css
.link {
  color: var(--link-blue);
  text-decoration: underline;
  text-underline-offset: 2px;
  font-weight: var(--weight-medium);
  transition: all 0.2s ease;
}

.link:hover {
  color: var(--link-blue-hover);
  text-decoration: none;
}
```

### Badge

**Usage:** "Launching Q2 2026", "Most Selected"

```css
.badge {
  display: inline-block;
  font-size: 12px;
  font-weight: var(--weight-bold);
  text-transform: uppercase;
  letter-spacing: var(--tracking-wide);
  padding: var(--space-1) var(--space-2);  /* 4px 8px */
  border: 1px solid var(--accent);
  color: var(--accent);
  background: transparent;
  border-radius: 0;
}
```

### Container

**Usage:** Max-width wrapper for all sections

```css
.container {
  max-width: var(--container);  /* 1280px */
  margin: 0 auto;
  padding: 0 var(--space-4);  /* 0 24px */
}

.container-narrow {
  max-width: var(--container-narrow);  /* 800px */
  margin: 0 auto;
  padding: 0 var(--space-4);
}
```

---

## 📱 RESPONSIVE DESIGN

### Breakpoints

```css
/* Mobile */
@media (max-width: 768px) {
  /* Stack all grids vertically */
  /* Reduce headline sizes */
  /* Full-width buttons */
}

/* Tablet */
@media (min-width: 769px) and (max-width: 1024px) {
  /* Optional: intermediate styles */
}

/* Desktop */
@media (min-width: 1025px) {
  /* Default styles apply */
}
```

### Mobile Typography

```css
@media (max-width: 768px) {
  :root {
    --text-8xl: 48px;   /* Hero: 96px → 48px */
    --text-5xl: 32px;   /* Sections: 48px → 32px */
    --text-3xl: 24px;   /* Cards: 32px → 24px */
  }
}
```

### Mobile Spacing

```css
@media (max-width: 768px) {
  .section {
    padding: var(--space-7) 0;  /* 96px → 64px */
  }
  
  .container {
    padding: 0 var(--space-3);  /* 24px → 16px */
  }
}
```

### Mobile Layout Rules

1. **All grids stack vertically** (no side-by-side cards)
2. **Buttons become full-width**
3. **Remove `<br>` tags in headlines** (let text wrap naturally)
4. **Tables become stacked cards** (horizontal scroll forbidden)

---

## 🚫 ABSOLUTE PROHIBITIONS

### Visual Elements

❌ **Icons** (Font Awesome, Heroicons, etc.)
❌ **Illustrations** (abstract shapes, scenes)
❌ **Photos** (stock photos, team photos)
❌ **Decorative elements** (dividers, ornaments)
❌ **Animations** (beyond hover transitions)

### Effects

❌ **Box shadows** (none, ever)
❌ **Text shadows** (none, ever)
❌ **Gradients** (solid colors only)
❌ **Opacity** (except for disabled states)
❌ **Filters** (blur, grayscale, etc.)

### Typography

❌ **Italic text** (except for blockquote attribution)
❌ **All-caps headlines** (only for small labels)
❌ **Exclamation marks** in headlines
❌ **Question marks** in headlines
❌ **Emojis** (except ⚠️ in legal disclaimer)

---

## ✅ IMPLEMENTATION CHECKLIST

Before deploying:

- [ ] All colors match exact hex values
- [ ] No font sizes below 16px (body text)
- [ ] No rounded corners >4px anywhere
- [ ] No box shadows anywhere
- [ ] No gradients anywhere
- [ ] No icons/illustrations
- [ ] All sections have 96px padding
- [ ] Mobile responsive (tested on iPhone 12+)
- [ ] All buttons use exact CSS specs
- [ ] No green colors anywhere
- [ ] No dark mode toggle

---

## 📚 REFERENCES

### Visual Inspiration (What to Match)

✅ **Stripe Legal Pages** - https://stripe.com/legal
✅ **McKinsey PDFs** - https://www.mckinsey.com/featured-insights
✅ **Law Firm Websites** - https://www.skadden.com
✅ **Government Forms** - https://www.irs.gov/forms-pubs

### Anti-Patterns (What to Avoid)

❌ Dribbble landing pages
❌ Product Hunt featured pages
❌ Startup pitch decks
❌ SaaS template libraries

---

**Last Updated:** February 13, 2026  
**Status:** Locked - No exceptions
