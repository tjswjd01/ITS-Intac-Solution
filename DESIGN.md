# ITS Design System

The visual rules for intacsolution.com. Direction: calm, premium, restrained
U.S. B2B. Based on the owner's approved mockups and briefs (Nov 2026), not on
a comparison with other websites.

Tokens live in `tailwind.config.ts` under `its-*`. Use the names, not raw hex.
Shared building blocks are in `src/components/site/primitives.tsx`.

## Color

| Token | Value | Role |
|---|---|---|
| `its-navy` | `#14243D` | Headings, primary buttons, the single dark block on a page |
| `its-slate-ink` | `#566173` | Body copy (5.8:1 on off-white) |
| `its-slate` | `#758194` | Dividers, placeholder text, large supporting type only |
| `its-offwhite` | `#F7F6F3` | Page background, quiet cards |
| white | `#FFFFFF` | Alternating sections, cards |
| soft gray | `#E8EBED` / `#F1F3F3` | Light banners and strips |
| `its-line` | `#E3E5E8` | Card and section borders |
| `its-dusty` | `#A5B5C5` | Icon strokes, illustration lines |
| `its-dusty-soft` | `#EDF1F5` | Icon tiles, chips |
| `its-mint-ink` | `#4F6F69` | Eyebrow and category text (5.1:1) |
| `its-mint` | `#8FAAA5` | Decorative rules and dots only, never text |
| `its-coral` | `#D97868` | Tiny accents only, under 3% of a page |

Rules:
- Primary buttons are navy. Coral is never a button or a large surface.
- No electric blue, no loud gradients, no bright mint.
- At most one navy block per page besides a closing banner.
  Direct Hire is the approved exception, described below.
- Text must reach 4.5:1 contrast. Use the `-ink` shades for text.

### Direct Hire: editorial contrast

The owner asked for more contrast on Direct Hire (Nov 2026). That page alone
balances dark, mid and light surfaces, and no two neighboring sections share a
background.

| Token | Value | Role |
|---|---|---|
| `its-charcoal` | `#252D35` | The one dark section mid-page, dark statement tiles |
| `its-warm` | `#E7EAED` | Mid-gray bands and tiles |
| `its-soft-slate` | `#AAB4BF` | Lines, icons and labels on dark surfaces |

- Order: navy hero, off-white, mid-gray, white, off-white, charcoal, white,
  mid-gray. Full-width dark appears twice only: the hero and one charcoal
  section. Other navy is contained: one column, one card, the closing card.
- The hero visual is `PartnershipGraphic`, a code-drawn ring pattern set into
  the background. Replace it only with an approved ITS photo.
- Layouts vary by section: ruled index, flowchart, matrix, mixed-size tiles,
  phase columns, statement list. Avoid rows of identical cards.
- Coral stays tiny: one point in the hero, one status dot, and the initial of
  each Why ITS word (`#C8614F`, large type only).
- Shadows are allowed on raised panels here, up to
  `0 26px 60px rgba(20,36,61,0.24)` for navy and `0.08` for white.
- Use these tokens on other pages only with the owner's approval.

## Typography

- Family: Pretendard (variable, self-hosted in `src/app/fonts`). The Latin
  subset is preloaded; Korean glyphs load only when a page uses them.
- Headings: weight 600, tracking -0.03em to -0.035em, navy.
- Body: 16 to 17px, line height 1.65 to 1.75, `its-slate-ink`.

| Use | Size | Line height |
|---|---|---|
| Page H1 | clamp(2.2rem, 4.6vw, 3.6rem) | 1.06 |
| Section H2 | clamp(1.75rem, 3vw, 2.5rem) | 1.12 |
| Compact H2 | clamp(1.5rem, 2.4vw, 2rem) | 1.15 |
| Card title | 17 to 19px | 1.25 |
| Body | 16 to 17px | 1.7 |
| Small body | 14.5px | 1.6 |
| Eyebrow | 12px, uppercase, tracking 0.16em | |

## Spacing and layout

- Container: `.layout-container` (1380px, 1520px from 1440px wide).
- Section padding: `py-16 md:py-24`; compact strips `py-12 md:py-14`.
- Page heroes start at `pt-28 md:pt-36` to clear the floating header.
- Card gaps 12 to 20px; text columns stay under about 620px wide.
- Alternate off-white and white sections instead of adding dividers.

## Shape and depth

- Radius: cards 16 to 24px, large panels 24 to 32px, buttons and chips full.
- Borders do the work: 1px `its-line`. Shadows are rare and soft
  (`0 14px 34px rgba(20,36,61,0.07)`), used on floating illustration cards.

## Components

- Buttons: `navyButtonClassName` (primary), `outlineButtonClassName`
  (secondary), `lightButtonClassName` (on navy). Min height 48px. All have a
  visible focus outline.
- Text link: `ArrowLink`, navy with a mint underline.
- `Eyebrow`: mint-ink label, optional trailing rule.
- `SectionTitle`, `PageHero`, `CtaBanner`.
- Header: floating white pill; `NavDropdown` for Solutions and Resources.
- Cards: white or off-white, 1px border, no heavy shadow, icon in a small
  dusty tile (icon 18 to 24px, stroke 1.4 to 1.6).
- Motion: `Reveal` fade-up once on first view; slow float on illustration
  cards. Everything stops under `prefers-reduced-motion`.

## Imagery and icons

- Icons: lucide-react only, dusty blue-gray strokes. No emoji.
- Photos: real ITS media only. No stock or AI images shown as ITS people,
  equipment or sites.
- Direct Hire, Careers and Insights use original shape-based illustrations,
  not photos of people and not refurbishment imagery.
- Refurbishment photos belong to Managed Operations and Automation pages.

## Content rules

- No unverified numbers, client names, quotes, jobs, articles or dates.
  Placeholders are labelled "Sample" and kept out of search indexing.
- Service scope: staffing covers warehouse and logistics labor; automation
  means refurbishment-process equipment and AMR robots in the ITS facility,
  never general warehouse automation. NEMO is internal, not a product.
- Page copy sits in content files (`homeContent.ts`, `src/content/*`) so the
  owner can edit wording without touching layout.
