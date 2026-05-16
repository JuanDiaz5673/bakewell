# Bakewell

Website for **Bakewell**, a Guyanese bakery and restaurant in South Richmond Hill, NY.
- Address: 127-08 Liberty Ave, South Richmond Hill, NY 11419
- Phone: (718) 322-5600
- Hours: Daily, 9:30 AM – 10 PM
- Live target: https://bakewell.website

Built on Next.js 16 (App Router) + React 19 + Tailwind CSS v4 as a static export, originally scaffolded from the Kabab King template.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Reference

- See [BAKEWELL_DATASHEET.md](BAKEWELL_DATASHEET.md) for the full content/brand inventory captured from the live bakewell.website.
- See [CLAUDE.md](CLAUDE.md) for architecture notes, design tokens, and outstanding launch items.

## Deploy

Static export targets Cloudflare Pages:

```bash
npm run build
# uploads /out
```
