# Develcode Design System

**Develcode** ("Own the Shift") is a Brazilian software engineering company based in Caxias do Sul/RS,
founded in 2014. For 12+ years it has built software for large retail, insurance, health and public-sector
clients, and now positions itself around **SHIFT** — moving businesses through technology, with AI adoption
as the accelerator. Its service architecture is branded **Shift OS**, organised in four verticals:

| Vertical | Promise | Capabilities |
|---|---|---|
| **Shift Business** | Decide what to move in the business before writing code | Product Discovery · AI Opportunity Map · Delivery Assessment |
| **Shift Build** | The SDLC accelerated by AI, with governance | Product Engineering · Application Modernization · AI-Augmented Delivery · Software Sustainment · Cloud & Infrastructure |
| **Shift Data & IA** | Bring AI and data intelligence into the operation | Intelligent Agents · Process Automation · Data & Analytics · AI Strategy Roadmap · AI Integration |
| **Shift Management** | Executive observability of engineering, plus security | Executive Intelligence (powered by Thundera IA) · Cybersecurity |

Proof points used in market-facing material: 12 anos de mercado · +80% NPS · +100 clientes · +500 projetos ·
6× consecutive GPTW certifications. Own products: **Máquina.ISP** (AI agents across the ISP customer journey)
and **Thundera.IA** (engineering delivery intelligence). Clients shown publicly include RD Saúde, Epharma,
Bertolini, Fedrizzi Seguros, Riachuelo, Copasul, Leroy Merlin, Instituto Unibanco, SBK, Tokio Marine, BP8,
CNBB, Pernambucanas, Sodexo, Dalca, Obramax, Neomot, LFC Governo.

## Sources used to build this system

- `uploads/Apresentação Comercial - Develcode 2026 - Portfólio atualizado Oficial V1.pdf` — 15-page commercial
  deck. Page images were rendered and read; full-page references are in `assets/reference/`.
- `uploads/Logo devel 1 -preto.png` · `Logo devel 2 - branco.png` — official horizontal lockups (black / white).
- `uploads/Logo.png` — the looping "Shift ribbon" line motif in white (not a logo; stored as `assets/img/ribbon-white.png`).
- `uploads/Frame 1171274277.png` — grainy blue gradient background.
- `uploads/img 2.png` — light chevron/paper background.

No codebase, Figma file or website source was provided. Everything here is derived from the deck and the
logo files; nothing was invented beyond the primitives noted under *Intentional additions*.

---

## CONTENT FUNDAMENTALS

**Language.** Brazilian Portuguese for all narrative copy; **English for capability and product names**
(Product Discovery, AI-Augmented Delivery, Executive Intelligence). Never translate the capability names,
never write the narrative in English unless the audience is international.

**Person & stance.** First person plural, always: *"Existimos para…", "construímos software", "Chamamos esse
movimento de SHIFT", "Conheça algumas das histórias que ajudamos a construir."* The company is a partner that
moves with the client, never a vendor announcing itself. Second person appears as an invitation or an
imperative: *"Decida o que mover no negócio antes de escrever código."*, *"Leve IA e inteligência de dados para
dentro da sua operação."*

**Verbs of movement.** The vocabulary is kinetic and decisive: *mover, acelerar, construir, transformar,
governar, decidir, evoluir*. Avoid static consultancy verbs (*oferecer soluções, atuar, disponibilizar*).

**Emphasis is typographic, not exclamatory.** The one rhetorical device is **bold italic** on the moving part
of a sentence — *"Existimos para **mover negócios através da tecnologia.**"* One emphasis per sentence.
No exclamation marks. No rhetorical questions.

**Casing.** Sentence case everywhere, including slide titles ("Alguns de nossos Cases", "Nossa trajetória").
UPPERCASE only for the word SHIFT and for small eyebrow labels (client names above case cards). Never all-caps
headlines, never Title Case Every Word.

**Numbers.** Written the way the brand writes them: `12`, `+80%`, `+100`, `+500`, `300.000`, `-30%`, `84+`,
`4M+`, `6x consecutivas`. Portuguese thousand separators (`300.000`). Growth always carries a leading `+`,
reduction a leading `-`. Qualitative results are single words: *Elevada, Extintos*.

**Structure of a claim.** Always three beats: context → what we did → measured result. Case cards keep fixed
Portuguese labels **O Desafio** and **Resultados Obtidos**.

**Length.** Slide body copy is 1–3 short lines; capability descriptions are one sentence, max ~10 words
("Refatoração e migração faseada por workload."). Nothing runs to a paragraph.

**Emoji: never.** Not in decks, not in product UI, not in social captions. The only glyph the brand uses
decoratively is the ↘ arrow.

**Vibe.** Confident engineering, quietly technical, evidence-first. Reads like a senior CTO speaking to a
board: no hype, no "inovador/disruptivo", no startup exclamation.

---

## VISUAL FOUNDATIONS

**The Shift OS curve.** The section-index page uses its own supplied backdrop (`bg-shift-os-curve.png`): a matte
near-black field split by a large S-curve of brand blue entering from the right, traced by a thin white light
edge. Use the bitmap as-is — never redraw the curve with CSS shapes.

**Three registers.** Every layout is one of exactly three: **blue** (grainy blue gradient, white type — brand
moments, cases, clients), **dark** (near-black textured, white type, blue accents — the Shift OS verticals and
contact), **light** (white/#F0F0F5 paper with a faint chevron relief, black type — statements, proof, closing).
Maximum two registers per spread; never more than two background colours in one deck.

**Colour.** One brand colour: blue. `#0057EA` is the logo blue and the primary; `#026BF0` is the interactive /
accent blue used for glows and links; `#0F7FFB` and `#0035E2` are the gradient ends. Blue is the only accent —
no secondary brand hue. Neutrals run near-black (`#010A0C`–`#12141A`) to paper (`#F0F0F5`). Semantic
green/amber/red exist for product status only and never appear in brand communication.

**Type.** **Satoshi** is the primary face and carries everything structural, in three roles: **italic bold
display** for hero words ("*Shift*"), **bold** for titles and card names, **regular** for body. **Montserrat**
is the secondary face — supporting copy, eyebrow labels, table and metric text, and anywhere a slightly cooler,
wider voice helps separate a second layer of information. Tracking is slightly negative on display sizes
(-0.02em), body runs at 1.5 line-height. No serif anywhere, no third family.

**Backgrounds.** Always a texture, never a flat fill: the blue register carries visible film **grain**; the light
register carries a soft **chevron / folded-paper relief**; the dark register carries faint diagonal light streaks.
Full-bleed is the default — backgrounds run edge to edge and content sits on an 80px side / 56px top-bottom
margin. Photography is used sparingly, full-bleed inside a 16px-rounded frame.

**The ribbon.** A looping, many-stroked line ribbon (an infinity/orbit form) is the brand's ornament. It appears
centred behind the lockup on title and closing slides at 15–55% opacity, and never over body copy.

**The ↘ motif.** A down-right arrow inside a circle is the brand's one icon. It leads pill labels, callouts and
capability names. It means "this moves forward".

**Imagery.** Two families. **Photography:** real people in engineering contexts (data centre, screens, teams),
colour-graded **cool** — blue cast, deep shadows, digital-scanline overlay. Never warm, never white-background
stock, never illustration of people. **Abstract renders:** silk-like folded surfaces, halftone dot fields and
light-streak fields, one per Shift vertical
(`vertical-image-business/build/data/management.png`) — always cropped into a narrow full-height column on the
right edge of a vertical page, never as a full-bleed background behind copy. Supporting graphics: the hairline
**wave lines** (`lines-wave-light.png`) along the bottom of light pages, and the striped **blue line panel**
(`panel-blue-vertical-lines.png`) behind the lockup on contact/closing pages. No hand-drawn illustration in the
brand at all.

**Corner radii.** Pills (999px) for anything interactive or label-like — buttons, capability labels, result rows,
tabs. 16px for cards, 12px for metric tiles, 24–32px for large callout banners, 8px only for text inputs.
Nothing is square except full-bleed panels.

**Cards.** Two flavours. On dark: near-black `#010A0C` fill, hairline `#16181D` border, lifted by a **pale white
halo** (`0 0 32px rgba(255,255,255,.16)`) rather than a drop shadow, often with an oversized ghost numeral at 4%
opacity behind the content. On light: white fill, 1px `#E1E2E6` border, soft neutral shadow. Never a coloured
left border. Never a gradient card fill except the blue proof tiles.

**Glow, not shadow, is the signature.** The capability box is the canonical example. The card: `#0B0C0E` fill,
1px `#2A2D33` border, 16px radius, lifted by a pale halo (`0 0 26px rgba(255,255,255,.13)`), `overflow:hidden`,
padding 22/26/26. Inside it a pill with a **near-black fill** (`#05070A`), a **2px `#1D6BF5` border**, white bold
text and a triple glow (`0 0 14px rgba(29,107,245,.9), 0 0 34px rgba(2,107,240,.35), inset 0 0 12px rgba(29,107,245,.25)`);
the circled ↘ repeats the same fill and border with its own `0 0 10px` glow. The pill is pulled **20px left** so
the arrow circle overhangs the card edge; the description sits 30px in, aligned under the pill's text, max 34ch.
Behind it an oversized ghost numeral (190px, weight 900, `rgba(255,255,255,.035)`) bleeds off the card's top-left.
On vertical pages the image column is a **296px rounded (14px) panel flush to the right edge with 56px top and
bottom margins**, and a `110px` blue glow rises from the bottom edge of the page. Outside this pattern, use the
glow on at most one element per view — it is the brand's spotlight.

**Borders.** 2px for anything interactive (pills, buttons, inputs, contact cards), 1px hairlines for card edges
and list dividers. Divider lines on dark are `rgba(255,255,255,.35)`.

**Transparency & blur.** Sparingly and only on dark: `rgba(2,107,240,.05–.16)` fills behind outlined elements to
make them feel lit. Glass blur (`saturate(140%) blur(14px)`) is reserved for overlays on photography. No frosted
panels on the light register.

**Protection.** Text over photography gets a bottom scrim (`--scrim-dark`), never a blur box or a translucent
capsule.

**Layout rules.** 1280×720 slides, 80/56px margins; logo bottom-left or top-left, the X mark top-right;
3-column grids for cases and products, 4-column for metrics, 24px gutters. Content is left-aligned; only the
title and closing slides centre.

**Animation.** Restrained and short: 140ms for hover, 220ms for glow and shadow, 400ms for panels, 700ms for a
slide reveal (fade + 16px rise). Easing is flat — `cubic-bezier(.4,0,.2,1)` standard, `cubic-bezier(.2,.8,.2,1)`
for entrances. No bounce, no spring, no parallax, no looping ambient motion.

**Hover states.** Filled blue lightens one step (600 → 500) and gains a blue glow; outlined elements fill with a
5–10% blue wash; cards lift 2px and their halo intensifies. **Press** shifts down 1px — never a scale-down.
**Focus** is a 3px `rgba(2,107,240,.35)` ring, always visible, never removed.

---

## ICONOGRAPHY

- **The brand's own icon set is a set of one: the circled ↘** (U+2198). It is drawn as a 2px-stroked circle
  containing the arrow glyph, in blue on light and white-in-blue on dark. It leads every capability label in the
  deck. Reproduce it with the `ArrowLabel` component, not by drawing an SVG.
- **No icon font, sprite sheet or SVG set exists in the provided sources.** The deck's few pictograms (a cart, a
  client's own mark) are client logos, not system icons.
- **Substitution — flagged:** for product UI needs (arrows, chevrons, status, navigation) use
  **[Lucide](https://lucide.dev)** from CDN at **20px, stroke 2, `currentColor`**, which matches the deck's
  2px-stroke geometry. Load it as
  `<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></script>` and call `lucide.createIcons()`.
  Swap it out if Develcode adopts a licensed set.
- **Unicode as icon:** ↘ ← → ✓ are used inline; nothing else. **Emoji are never used.**
- Client and product logos live in `assets/logos/` and `assets/img/clientes-logos.png` and are used as-is;
  on the blue register they are knocked out to white.

---

## Index

| Path | What it is |
|---|---|
| `styles.css` | The single stylesheet consumers link. `@import`s everything below. |
| `tokens/colors.css` | Brand blue ramp, ink neutrals, navy, semantic, light/dark aliases. |
| `tokens/typography.css` | Font stacks, weights, type scale, line-heights, tracking. |
| `tokens/spacing.css` | 4px spacing scale, slide geometry, gutters, card padding. |
| `tokens/radius.css` | Radii + border widths. |
| `tokens/elevation.css` | Neutral shadows, pale halos, blue glows, focus ring. |
| `tokens/motion.css` | Durations and easings. |
| `tokens/backgrounds.css` | Gradients, bitmap backdrops, grain, scrims, glass blur. |
| `tokens/fonts.css` | `@font-face` for self-hosted Satoshi + Montserrat import. |
| `guidelines/*.html` | Foundation specimen cards (Colors, Type, Spacing, Brand). |
| `assets/fonts/` | Self-hosted Satoshi web fonts (variable + static weights). |
| `assets/logos/` | Official lockups, X mark (blue/white), GPTW seal, product logos. |
| `assets/img/` | Blue grain, light chevron, dark texture, Shift OS curve, ribbon motif, wave lines, blue line panel, four vertical images, team photo, client wall. |
| `assets/reference/` | Rendered pages from the source deck, for cross-checking. |
| `slides/` | Nine sample slide types, ready to copy. |
| `ui_kits/apresentacao/` | Interactive rebuild of the commercial deck. |
| `templates/pitch-deck/` | Deck starting template for consuming projects. |
| `SKILL.md` | Agent-skill entry point. |

### Components

**Brand** — `ArrowLabel`, `CaseCard`, `GlowCard`, `Logo`, `LogoWall`, `MetricTile`, `ResultRow`, `SectionHeading`
(in `components/brand/`).

**Core** — `Badge`, `Button`, `Card`, `Checkbox`, `IconButton`, `Input`, `Select`, `Switch`, `Tabs`
(in `components/core/`).

Each component ships `<Name>.jsx`, `<Name>.d.ts` (props contract) and `<Name>.prompt.md` (when & how to use).

### Intentional additions

The sources define no component library, only a deck. The brand components above are direct transcriptions of
deck elements. The core set (`Button`, `Input`, `Select`, `Checkbox`, `Switch`, `Tabs`, `Badge`, `Card`,
`IconButton`) was added so product UI can be built at all — each follows the deck's geometry (pills, 2px
borders, blue glow) rather than any framework default.

### Fonts

- **Primary — Satoshi** (`--font-core`, `--font-display`): **self-hosted** from `assets/fonts/` — variable
  300–900 plus a true italic, with static 300/400/500/700/900 fallbacks. Used for display, headings, buttons,
  labels and UI.
- **Secondary — Montserrat** (`--font-secondary`): loaded from Google Fonts, weights 300–800 plus italics.
  Used for supporting copy, eyebrows, metric/table text.
- `--font-mono` falls back to the system monospace; the brand defines no mono face.

The Satoshi files here are the Fontshare web cuts. If Develcode licenses a different cut, replace the files in
`assets/fonts/` in place — `tokens/fonts.css` needs no change.
