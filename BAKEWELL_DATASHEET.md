# Bakewell — Site Datasheet

Source site: https://bakewell.website/
Captured: 2026-05-16

This document is the verbatim content + brand inventory of the current Bakewell site, intended as the source-of-truth input for the Kabab-King-stack rebuild that lives in this repo.

---

## 1. Business Profile

| Field | Value |
|---|---|
| Name | Bakewell |
| Concept | Bakery + Restaurant (authentic Guyanese cuisine, Caribbean baking) |
| Address | 127-08 Liberty Ave, South Richmond Hill, NY 11419, United States |
| Phone | +1 718-322-5600 |
| Email | bakewell.website@gmail.com |
| Hours | Mon–Sun, 09:30 AM – 10:00 PM (every day, identical) |
| Facebook | https://www.facebook.com/bakewel/mentions/ |
| Yelp | https://www.yelp.com/biz/bakewell-bakery-and-restaurant-south-richmond-hill |
| Reservation CTA | Phone — `tel:+1 718-322-5600` ("Get A Reservation Now") |
| Copyright line | © 2025 Copyright bakewell.website |

---

## 2. Site Map

The live site is two URLs plus anchor sections on `/`.

| Path | Type | Notes |
|---|---|---|
| `/` | Page | Home with carousel hero + #about, #locations, #reviews, #contact anchors |
| `/menu` | Page | Image-gallery menu (6 photo placeholders, **no text items/prices on page**) |
| `/#about` | Anchor | About section on home |
| `/#locations` | Anchor | Address + hours on home |
| `/#reviews` | Anchor | Customer guestbook on home |
| `/#contact` | Anchor | Email + phone on home (note: link text in nav is `#cotnact` — likely a typo on the live site) |

CTAs found in the wild: `Get A Reservation Now` (tel), `View Menu`, `Browse Full Menu`, `see more`, `Open Map`, `Contact Now`.

---

## 3. Verbatim Content

### 3.1 Hero (rotating carousel — 3 slides)

**Slide 1**
- Authentic Guyanese Flavors
- Delicious Fried Chicken & Rice
- CTA: `Get A Reservation Now`

**Slide 2**
- Warm, Welcoming Service
- Friendly Staff & Hassle-Free Delivery
- CTA: `View Menu`

**Slide 3**
- Wide Variety of Baked Goods
- Tasty Pastries & Fresh Bread
- Body: "Savor an array of tasty pastries and authentic bread options, including tennis rolls. Each item showcases Bakewell's commitment to quality and tradition."
- CTAs: `Get A Reservation Now`, `View Menu`

### 3.2 Welcome Section

- Eyebrow tagline: **Taste the moment**
- Heading: **Welcome to Bakewell**
- Body:

> Bakewell, located in South Richmond Hill, NY, stands out as a beloved spot for authentic Guyanese flavors and freshly baked goods. Known for its exceptional homemade fried chicken and vibrant rice dishes like chicken fried rice and roast lamb fried rice, Bakewell delivers hearty, well-seasoned meals that keep customers coming back. Their pastries and breads, including tennis rolls and cassava pone, showcase genuine Caribbean baking traditions. Beyond the food, Bakewell's warm, attentive service creates a welcoming atmosphere, making every visit comfortable and memorable. For those craving quality Guyanese comfort food paired with sincere hospitality, Bakewell is a true neighborhood gem.

- CTA: `see more` → `#about`

### 3.3 Menu Preview

- Eyebrow tagline: **Taste the best**
- Heading: **Discover Menu**
- CTA: `Browse Full Menu` → `/menu`

### 3.4 About Section

- Eyebrow tagline: **About the Place**
- Heading: **Bakewell**
- Body (two paragraphs):

> Located in the heart of South Richmond Hill, NY, Bakewell is more than just a bakery or a restaurant—it's a cornerstone of authentic Guyanese flavors and heartfelt hospitality. From the moment you step inside, the warm welcome and attentive service set the tone for an exceptional dining experience. Customers consistently praise the freshness and quality of Bakewell's offerings, highlighting dishes like the homemade fried chicken, chicken chow mein, and roast lamb fried rice that brilliantly capture the vibrant, bold seasonings of Guyanese cuisine.
>
> What truly stands out at Bakewell is their commitment to preserving traditional recipes while ensuring every bite tastes fresh and perfectly balanced. The fried chicken, described as the best homemade version by patrons, showcases generous portions and crisp, juicy meat. Their chicken fried rice and savory pastries add depth and variety that draw food lovers back time and again. Even specialty items like cassava pone bring a genuine touch of home, though recent feedback suggests they are listening carefully to maintain consistent quality.
>
> Beyond the food, Bakewell's hassle-free, reliable delivery service and friendly, community-centered atmosphere make it a trusted spot for both casual meals and special occasions. Whether you're craving classic Guyanese-Chinese dishes or searching for the perfect tennis roll, Bakewell delivers a rich culinary experience steeped in culture and care. It's a place that not only fills the stomach but also warms the soul, inviting you to savor the true taste of Guyanese tradition right in Queens.

### 3.5 Reviews / Guestbook

- Heading: **People talk**
- Subheading: **Guestbook**

Each entry on the live site is truncated to ~110–130 chars. Verbatim excerpts as displayed:

| # | Author | Excerpt (as shown) |
|---|---|---|
| 1 | A | "This was my first time ordering food from bakewell and I will say it was amazing. It was the best homemade fried chicken I've ever tasted…" |
| 2 | Sammie Arjune | "Love Bakewell! It's my go-to spot for bread, tennis rolls, and especially their chicken fried rice, absolutely love it!…" |
| 3 | Rebecca Bridglall | "I stopped by Bakewell in Richmond Hill and was blown away by how good the food was! I ordered the chicken chow mein…" |
| 4 | LISA JAGNARINE | "From the moment I walked into this bakery, I was greeted with a smile and genuine warmth. The customer service is…" |
| 5 | stacy joe | "Always a happy trip to Bakewell ,they are always stocked with a wide variety of food ,very tasty pastry options…" |

### 3.6 Location Section

- Heading (implied): **Our address**
- Address: `127-08 Liberty Ave, South Richmond Hill, NY 11419, United States`
- Open Hours block (identical every day):
  - Monday: 09:30 AM – 10:00 PM
  - Tuesday: 09:30 AM – 10:00 PM
  - Wednesday: 09:30 AM – 10:00 PM
  - Thursday: 09:30 AM – 10:00 PM
  - Friday: 09:30 AM – 10:00 PM
  - Saturday: 09:30 AM – 10:00 PM
  - Sunday: 09:30 AM – 10:00 PM
- CTA: `View Menu` → `/menu`

### 3.7 Contact Section

- Heading: **Contact us**
- Main Email: bakewell.website@gmail.com
- Phone: +1 718-322-5600
- CTA: `Contact Now`

### 3.8 Footer

- `© 2025 Copyright bakewell.website`

### 3.9 /menu Page

> **NOTE — gap to fill before rebrand ships.** The `/menu` route on the live site renders six unnamed image placeholders (`photo-1.jpg` through `photo-6.jpg`, plus a `1.jpg`). It has **no item names, descriptions, categories, or prices in the DOM** — so a verbatim menu cannot be captured from the live site alone. Dishes referenced anywhere across the site (and therefore safe to assume are on the menu):
>
> Homemade fried chicken · Chicken fried rice · Roast lamb fried rice · Chicken chow mein · Tennis rolls · Cassava pone · Assorted pastries · Fresh bread

Image URLs on the menu page:
- https://bakewell.website/public/media/bakewell-website/1.jpg
- https://bakewell.website/public/media/bakewell-website/photo-1.jpg
- https://bakewell.website/public/media/bakewell-website/photo-2.jpg
- https://bakewell.website/public/media/bakewell-website/photo-3.jpg
- https://bakewell.website/public/media/bakewell-website/photo-4.jpg
- https://bakewell.website/public/media/bakewell-website/photo-5.jpg
- https://bakewell.website/public/media/bakewell-website/photo-6.jpg

---

## 4. Brand — Colors

Pulled from `/public/css/template/color/color-10.css`.

| Role | Hex | Notes |
|---|---|---|
| **Primary brand** | `#2E7D32` | Dark Guyanese green — used on fixed nav, blog cards, pricing panels, dish panels, portfolio hover, pagination active |
| **Accent** | `#C65D3C` | Terracotta / earth — accordion toggles, owl-carousel active dot, button hovers, feature icons, prev/next hover |
| **Accent (transparent)** | `rgba(198,93,60, 0.2–0.5)` | Sliders and translucent borders |
| **Background — light** | `#F9FBE7` | Cream — body background, `.bg-white`, accordion, striped tables, team boxes, product tabs nav |
| **Heading text on dark** | `#ffffff` | All `h1–h6` and blog/shop titles |
| **Body text** | `#a5a5a5` | Body copy + blog "more" links + service "more" links |
| **Text — black accent** | `#282828` | `.text-black` |
| **Sidebar links** | `#9b9b9b` | Widget category links |
| **Tab content** | `#000000` | Home tab content |
| **Overlay opacity** | `0.65–0.75` | Dark gradient overlays on hero/cards |

**Net palette (rebrand-ready):**
- Primary green `#2E7D32`
- Terracotta `#C65D3C`
- Cream `#F9FBE7`
- White `#FFFFFF`
- Charcoal `#282828`
- Mid-gray `#a5a5a5`

---

## 5. Brand — Typography

Pulled from `/public/css/template/font/font-16.css` + Google Fonts request in HTML.

Loaded fonts: `Great Vibes | Satisfy | Kaushan Script | Raleway` (Google Fonts URL on the live site) — though the live CSS actually maps to the families below. Discrepancy noted for handoff.

| Role | Font | Where it's used |
|---|---|---|
| **Display headings** | `Playfair Display`, serif | `h1`–`h6`, `.font-heading`, slider headlines, page titles, section titles, testimonials, counters, dish prices, footer widget headings |
| **Body / UI** | `Fira Sans`, sans-serif | `body`, `.font-body`, `.btn`, `.form-control`, blockquotes, blog titles, shop titles, slider bios |
| **Decorative subtitle** | `Gloria Hallelujah`, cursive | Eyebrow taglines, tab headings, page subtitles, slider sub-headlines, banner content, landing hero h6, history panels |
| **Logo** | `Baloo 2`, cursive | `.logo span` only |

**Net typography (rebrand-ready):**
- Display: **Playfair Display** (400/600/700)
- Body: **Fira Sans** (300/400/500/600)
- Decorative script: **Gloria Hallelujah** (eyebrows/taglines)
- Logo: **Baloo 2** (display weight only)

> Recommended Google Fonts URL for the new site:
> `https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Fira+Sans:wght@300;400;500;600&family=Gloria+Hallelujah&family=Baloo+2:wght@600;700&display=swap`

---

## 6. Brand — Mood & Imagery

- **Mood:** warm, welcoming, community-focused, Caribbean/Guyanese heritage; rustic-meets-modern; family bakery + neighborhood restaurant.
- **Logo:** wordmark "Bakewell" in the nav (no visual mark identified in source). Treat as text-based logotype; new design can build a logotype using **Baloo 2** + the green/terracotta palette.
- **Hero imagery (verbatim from the live carousel):**
  - Slide 1 — fried chicken and rice dishes
  - Slide 2 — service / staff interaction
  - Slide 3 — freshly baked pastries and breads (tennis rolls, cassava pone)
- **Tone of voice:** "heartfelt hospitality," "warm welcome," "true neighborhood gem," "fills the stomach but also warms the soul," "authentic," "traditional," "fresh."

---

## 7. Assets to Replace (Kabab King → Bakewell)

Tracked here so nothing slips during rebrand:

| Kabab King asset | Bakewell equivalent needed |
|---|---|
| `/public/header-logo.png` (KK wordmark) | Bakewell logo |
| `/public/navbar-logo.png` | Same Bakewell logo (nav size) |
| `/public/halal-logo.png` | Likely not applicable to Bakewell — drop or replace with Yelp/award badge |
| `/public/kk-hero.png` | Bakewell hero photo (fried chicken plate or bakery counter) |
| `/public/menu/*.jpg` (26 dish photos) | Bakewell dish photos — TBD, possibly the 7 `photo-*.jpg` images currently on bakewell.website/menu |
| OG image `kk-hero.png` | Bakewell OG image |

---

## 8. Open Questions (must answer before final rebuild)

1. **Menu data** — the live `/menu` is photos only. Do we have a PDF/photo of the in-store menu with names and prices? Without it, the rebuilt menu page would be photo-only too.
2. **Order Online + Catering** — Kabab King has dedicated `/order` and `/catering` pages. Bakewell currently has neither (CTA is "phone for reservation"). Keep, remove, or replace with "Call to Order"?
3. **Halal badge** — the KK hero shows a halal badge. Bakewell is Guyanese (not advertised as halal). Drop.
4. **Watermark** — the cloned layout includes a fixed diagonal "Made by Intellizen LLC" watermark on every page. Remove for Bakewell? (Almost certainly yes.)
5. **Domain / canonical** — final URL of the rebuilt site (still bakewell.website, or a staging URL like bakewell.pages.dev first)?
6. **Reviews** — keep the 5 verbatim guestbook entries above, or fetch the full Yelp set?

---

## 9. Source CSS files (for deep reference)

- All CSS bundle: https://bakewell.website/public/css/all_css.min.css?v=2215.8
- Color theme: https://bakewell.website/public/css/template/color/color-10.css
- Font theme: https://bakewell.website/public/css/template/font/font-16.css
