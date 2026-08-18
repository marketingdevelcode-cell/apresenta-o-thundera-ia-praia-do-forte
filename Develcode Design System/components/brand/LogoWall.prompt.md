Client proof wall — a plain grid of logos, no cards, no borders.

```jsx
<LogoWall columns={6} logos={[{src:'/assets/img/clientes-logos.png', alt:'Clientes'}]} />
```

Keep rows even (6 per row at 1280px). The shipped `assets/img/clientes-logos.png` is the official wall, already
knocked out to white for the blue register — drop it in as a single image rather than rebuilding the grid.
Use `tone="knockout"` only when a client supplies coloured artwork.
