# UI kit · Apresentação Comercial Develcode

A click-through rebuild of the 15-page commercial deck (`uploads/Apresentação Comercial - Develcode 2026 …pdf`),
composed entirely from this design system's components. It is the only product surface the provided
sources define, so it is the only UI kit here.

- `index.html` — interactive deck: arrow keys or the pill tabs move between slides; the "Shift OS"
  slide is clickable — pick a vertical and the capability slide follows.
- `Slides.jsx` — one function per slide type (Title, Statement, Shift OS index, Vertical, Cases,
  Proof, Clients, Contact) plus the real deck content (four verticals, three cases, GPTW proof).
- `Deck.jsx` — navigation shell.

Not rebuilt, because no source was supplied: the **Máquina.ISP** and **Thundera.IA** product UIs
(the deck only shows their logos), the website, and the timeline slide's illustration.
