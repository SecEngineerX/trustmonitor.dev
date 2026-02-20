# TrustMonitor Design System

**Status:** LOCKED — No modifications without documented rationale

**Last Updated:** February 16, 2026

---

## Core Principles

1. **Institutional Feel**: Enterprise legal document aesthetic
2. **Maximum Whitespace**: Let numbers breathe, don't crowd
3. **Zero Warmth**: Cold, factual, precise — not friendly
4. **Data-Driven**: Show specific numbers, not abstract claims

---

## Color Palette

### LOCKED COLORS

```css
--bg-primary: #FFFFFF;        /* Pure white — no off-whites */
--text-primary: #111827;      /* Near black — not pure black */
--text-secondary: #6B7280;    /* Gray for supporting text */
--accent: #7F1D1D;            /* Blood red for liability */
--link-blue: #1E40AF;         /* Enterprise blue for links */
--border-gray: #E5E7EB;       /* Subtle borders */
--bg-subtle: #F9FAFB;         /* Barely-there backgrounds */
```

### FORBIDDEN COLORS

❌ **NO GREEN** (fintech/crypto association)
❌ **NO GRADIENTS** (consumer tech vibe)
❌ **NO SHADOWS/GLOWS** (softens institutional feel)
❌ **NO DARK MODE** (complicates message, dilutes precision)

### Usage Rules

- **Red (`--accent`)**: Use ONLY for liability amounts, $0 payouts, missed incidents
- **Blue (`--link-blue`)**: Links, TrustMonitor payouts, positive outcomes
- **Gray (`--text-secondary`)**: Disclaimers, supporting copy, technical specs

---

## Typography

### Font Stack

```css
--font-headings: 'Helvetica Neue', Arial, sans-serif;
--font-body: 'Helvetica Neue', Arial, sans-serif;
--font-mono: 'SF Mono', Monaco, 'Courier New', monospace;
```

**Why Helvetica Neue?**
- Institutional standard (legal, financial docs)
- High readability at all sizes
- No personality — purely functional

### Scale

```css
--text-6xl: 60px;   /* Hero headlines */
--text-5xl: 48px;   /* Section headlines */
--text-4xl: 36px;   /* Subsections */
--text-3xl: 30px;   /* Card headers */
--text-2xl: 24px;   /* Component titles */
--text-xl: 20px;    /* Large body */
--text-lg: 18px;    /* Lead paragraphs */
--text-base: 16px;  /* Body text (MINIMUM) */
--text-sm: 14px;    /* Small print */
--text-xs: 12px;    /* Tiny labels */
```

### FORBIDDEN

❌ **NO SERIF FONTS** (too traditional/academic)
❌ **NO ITALIC TEXT** (softens message)
❌ **NO TEXT <16PX** (accessibility violation)
❌ **NO ALL-CAPS BODY TEXT** (except CTAs/labels)

### Line Height

```css
--line-tight: 1.2;      /* Headlines */
--line-normal: 1.5;     /* Body text */
--line-relaxed: 1.75;   /* Lead paragraphs */
```

---

## Spacing

### Scale (8px base unit)

```css
--space-1: 4px;
--space-2: 8px;
--space-3: 16px;
--space-4: 24px;
--space-5: 32px;
--space-6: 48px;
--space-7: 64px;
--space-8: 96px;
--space-9: 128px;
```

### Usage

- **Section padding**: `--space-8` (96px) desktop, `--space-6` (48px) mobile
- **Card gaps**: `--space-6` (48px)
- **Component padding**: `--space-4` (24px)
- **Text margins**: `--space-3` (16px)

### Rule: More is More

When in doubt, add MORE whitespace. This isn't consumer SaaS — the emptiness conveys institutional gravity.

---

## Layout

### Container Widths

```css
--container-max: 1200px;      /* Default content */
--container-narrow: 800px;    /* Hero, form */
--container-wide: 1400px;     /* Full-width sections */
```

### Grid Gaps

```css
gap: var(--space-6);  /* Default */
gap: var(--space-4);  /* Tight layouts */
```

---

## Components

### Buttons

**Primary (Dark)**
```css
background: var(--text-primary);
color: var(--bg-primary);
border: 2px solid var(--text-primary);
```

**Secondary (Outline)**
```css
background: var(--bg-primary);
color: var(--text-primary);
border: 2px solid var(--text-primary);
```

**Hover State**
```css
transform: translateY(-2px);
background: var(--accent);
```

**FORBIDDEN:**
❌ Rounded corners >4px
❌ Gradient backgrounds
❌ Icon-only buttons without text

### Cards

```css
background: var(--bg-primary);
border: 1px solid var(--border-gray);
border-radius: var(--border-radius-sm); /* 4px max */
padding: var(--space-6);
```

**Highlight variant:**
```css
border: 2px solid var(--link-blue);
box-shadow: 0 4px 12px rgba(30, 64, 175, 0.1);
```

### Forms

**Inputs**
```css
padding: var(--space-3);
border: 1px solid var(--border-gray);
border-radius: var(--border-radius-sm);
font-size: var(--text-base);
```

**Labels**
```css
font-weight: var(--weight-medium);
margin-bottom: var(--space-2);
```

**Required Indicator**
```css
color: var(--accent);
```

---

## Borders & Shadows

### Borders

```css
--border-width: 1px;
--border-radius: 2px;       /* Minimal */
--border-radius-sm: 4px;    /* Maximum allowed */
```

### Shadows

**ONLY use for highlighted cards:**
```css
box-shadow: 0 4px 12px rgba(30, 64, 175, 0.1);
```

**FORBIDDEN:**
❌ Drop shadows on text
❌ Inner shadows
❌ Multiple shadow layers
❌ Colored shadows (except blue highlight)

---

## Animations

### Transitions

```css
--transition-fast: 150ms ease-in-out;
--transition-base: 250ms ease-in-out;
```

**Allowed Animations:**
✅ Button hover (translateY, background)
✅ Link underline on hover
✅ Input border color on focus

**FORBIDDEN:**
❌ Page load animations
❌ Scroll-triggered animations
❌ Loading spinners (show content immediately)
❌ Slide-ins, fade-ins, etc.

---

## Responsive Breakpoints

```css
/* Desktop-first approach */
@media (max-width: 768px) {
  /* Mobile adjustments */
}
```

**Mobile Changes:**
- Reduce heading sizes by 1 step
- Reduce section padding to `--space-6`
- Stack grids to single column
- Full-width buttons

---

## Icons & Images

### FORBIDDEN

❌ **NO ICONS** (not even chevrons on buttons)
❌ **NO ILLUSTRATIONS**
❌ **NO STOCK PHOTOS**
❌ **NO BRAND LOGOS** (except competitor comparison)

### Exceptions

✅ Checkmarks for feature lists (Unicode ✓)
✅ Warning symbols for status quo (Unicode ⚠)
✅ Lock emoji for security (🔒)

---

## Code Blocks

```css
font-family: var(--font-mono);
font-size: var(--text-sm);
background: var(--text-primary); /* Dark background */
color: rgba(255, 255, 255, 0.9); /* Light text */
padding: var(--space-6);
border-radius: var(--border-radius-sm);
```

---

## Validation Checklist

Before deploying:

- [ ] No green colors anywhere
- [ ] No rounded corners >4px
- [ ] No illustrations/icons/photos
- [ ] All text ≥16px
- [ ] No italic text
- [ ] No dark mode support
- [ ] Whitespace feels institutional
- [ ] Numbers use monospace font
- [ ] Liability amounts in red
- [ ] TrustMonitor payouts in blue

---

## References

- W3C Contrast Checker: https://webaim.org/resources/contrastchecker/
- Typescale: https://typescale.com
- 8pt Grid System: https://spec.fm/specifics/8-pt-grid

---

**Remember:** This isn't a friendly SaaS product. It's a legal contract disguised as a landing page. Design accordingly.
