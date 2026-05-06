# Thorne AI Landing Page - Implementation Plan

## Project Overview

A single-page landing page for Thorne AI, a premium AI automation consulting service targeting mid-market SaaS founders. The page aims to capture leads for the "Premium Diagnostic" audit service ($1,500) with scarcity messaging and trust-building elements.

---

## Design System

### Theme
- **Mode:** Dark theme
- **Background:** Dark gray/near-black (#0a0a0a or similar)
- **Foreground:** White/light gray for text
- **Primary Accent:** Bright indigo/blue (#6366f1 or similar)

### Typography
- **Headings:** Cal Sans (or Inter/Geist as fallback) - modern geometric sans-serif
- **Body:** System sans-serif (Geist Sans)
- **Hierarchy:** Bold headings, regular body, muted secondary text

### Color Palette (5 colors max)
| Token | Usage | Approximate Value |
|-------|-------|-------------------|
| `--background` | Page background | #0a0a0a |
| `--foreground` | Primary text | #fafafa |
| `--primary` | CTA buttons, accents | #6366f1 (indigo) |
| `--muted` | Secondary text, borders | #71717a |
| `--card` | Card backgrounds | #18181b |

### Animations
- Scroll-triggered fade-in on sections (Framer Motion)
- Button hover: scale 1.02-1.05 + shadow increase
- Card hover: subtle lift with shadow
- Duration: 0.4-0.6s, ease-out easing

---

## Page Structure

### Sections (top-to-bottom)

1. **Navigation** - Logo + single CTA button (sticky optional)
2. **Hero** - Headline, subheadline, primary CTA, subtle mesh gradient background
3. **Value Proposition** - Problem/solution positioning with key benefits
4. **Interactive Value Calculator** - Slider showing potential ROI savings
5. **Service Tiers** - Three pricing cards (Premium Diagnostic highlighted)
6. **Success Stories** - 3 testimonials with client photos/names
7. **How It Works** - 3-4 step process visualization
8. **Lead Capture Form** - Multi-field form with validation
9. **Footer** - Copyright, minimal links

---

## Component Architecture

```
app/
├── page.tsx                    # Main landing page
├── globals.css                 # Design tokens + dark theme
└── layout.tsx                  # Root layout with fonts

components/
├── landing/
│   ├── Navigation.tsx          # Top nav bar
│   ├── Hero.tsx                # Hero section with CTA
│   ├── ValueProposition.tsx    # Benefits/problem-solution
│   ├── ValueCalculator.tsx     # Interactive ROI slider
│   ├── PricingSection.tsx      # Three tier cards
│   ├── Testimonials.tsx        # 3 client testimonials
│   ├── ProcessSteps.tsx        # How it works
│   ├── LeadForm.tsx            # Contact form
│   ├── FormSuccessModal.tsx    # Success overlay
│   └── Footer.tsx              # Page footer
└── ui/                         # shadcn components (pre-installed)
```

---

## Interactive Elements

### 1. Value Calculator
**Purpose:** Show potential time/money savings from AI automation

**Behavior:**
- Slider input for "hours spent on repetitive tasks per week" (range: 5-40 hrs)
- Secondary input or assumption for hourly rate ($50-$200)
- Live calculation: `hours × rate × 52 weeks = annual savings`
- Display: "You could save up to $X per year"

**Implementation:**
- React useState for slider value
- Calculated display updates on change
- Touch-friendly slider (min 44px tap target on mobile)

### 2. Lead Form
**Fields:**
- Full name (required)
- Email (required, validated)
- Company name (required)
- Company size (optional dropdown)
- Message/pain point (optional textarea)

**Validation:**
- Client-side only
- Email regex validation
- Required field indicators

**Submit Behavior:**
- Button shows loading state
- On success: Display full-screen success modal
- Form fields cleared after success

### 3. Form Success Modal
**Behavior:**
- Full overlay with success message
- Stays open until user clicks "Close" or "Got it" button
- Message includes next steps (e.g., "We'll reach out within 24 hours")
- Backdrop click does NOT close (intentional engagement)

---

## Technical Requirements

### Dependencies to Install
```bash
pnpm add framer-motion
```

### Existing Dependencies (already available)
- Next.js 16
- Tailwind CSS
- shadcn/ui components (Button, Card, Input, etc.)
- Lucide React icons
- clsx/cn utility

### Font Setup
- Use Geist Sans (already configured) or add Cal Sans via Google Fonts
- Apply via `font-sans` Tailwind class

---

## Implementation Order

### Phase 1: Foundation
1. Update `globals.css` with dark theme design tokens
2. Update `layout.tsx` with proper fonts and html background class
3. Create `page.tsx` skeleton with section placeholders

### Phase 2: Static Sections
4. Build `Navigation.tsx`
5. Build `Hero.tsx` with gradient background
6. Build `ValueProposition.tsx`
7. Build `PricingSection.tsx` with three cards
8. Build `Testimonials.tsx` with 3 testimonials
9. Build `ProcessSteps.tsx`
10. Build `Footer.tsx`

### Phase 3: Interactive Components
11. Build `ValueCalculator.tsx` with live slider
12. Build `LeadForm.tsx` with validation
13. Build `FormSuccessModal.tsx`

### Phase 4: Polish
14. Add Framer Motion scroll animations to all sections
15. Add hover effects to buttons and cards
16. Mobile responsiveness testing and fixes
17. Accessibility review (focus states, contrast, alt text)

---

## Content Requirements

### Hero Copy
- **Headline:** "Stop Drowning in Busywork. Let AI Handle It."
- **Subheadline:** Focus on time savings for SaaS founders
- **CTA:** "Book Your Premium Diagnostic"
- **Scarcity:** "Only 2 spots left this month"

### Pricing Tiers
1. **Premium Diagnostic** - $1,500 (highlighted)
   - Comprehensive AI audit
   - Custom automation roadmap
   - 2-week delivery
   
2. **Ongoing Support** - Custom pricing
   - Monthly optimization
   - Priority support
   - Quarterly reviews

3. **Custom Solutions** - Enterprise
   - Bespoke integrations
   - Dedicated support
   - Full implementation

### Testimonials (3)
- Placeholder names/companies
- Quotes focused on time savings and ROI
- Professional headshot placeholders

### Process Steps (4)
1. Book diagnostic call
2. Receive custom audit
3. Review automation roadmap
4. Implement solutions

---

## Responsive Breakpoints

| Breakpoint | Behavior |
|------------|----------|
| Mobile (<640px) | Single column, stacked cards, full-width form |
| Tablet (640-1024px) | 2-column grid where appropriate |
| Desktop (>1024px) | Full layout, 3-column pricing cards |

---

## Success Criteria

- All sections render correctly on desktop and mobile
- Value calculator updates live on slider change
- Form validates required fields before submission
- Success modal displays on form submit
- Scroll animations trigger as sections enter viewport
- All interactive elements have proper hover/focus states
- Color contrast meets WCAG AA standards

---

## Notes

- Form submission is frontend-only (no backend API)
- Testimonials and case studies use placeholder content
- "Slots remaining" is static text (not dynamic)
- No authentication or admin functionality required
