# Sugo AI brand assets

The shareable, full-canvas logo exports live in
[`public/brand/logos`](../../public/brand/logos). Because they are under
`public`, the website can also address them from `/brand/logos/<filename>`.

## Supplied logo exports

| File | Artwork | Background | Dimensions |
| --- | --- | --- | --- |
| [`sugo-mark-simple-transparent.png`](../../public/brand/sugo-mark-simple-transparent.png) | Simple pixel tomato; canonical site mark | Transparent | 372 × 398 |
| [`sugo-mark-simple-viola-background.png`](../../public/brand/logos/sugo-mark-simple-viola-background.png) | Simple pixel tomato | Viola | 1000 × 1000 |
| [`sugo-mark-complex-viola-background.png`](../../public/brand/logos/sugo-mark-complex-viola-background.png) | Detailed pixel tomato | Viola | 1000 × 1000 |
| [`sugo-mark-simple-white-background.png`](../../public/brand/logos/sugo-mark-simple-white-background.png) | Simple pixel tomato | White | 1000 × 1000 |
| [`sugo-mark-complex-white-background.png`](../../public/brand/logos/sugo-mark-complex-white-background.png) | Detailed pixel tomato | White | 1000 × 1000 |

The canonical site mark is an RGBA PNG with a transparent background. The four
full-canvas supplied files are flattened RGB PNGs without an alpha channel. The
two source files described as “no background” therefore have a white background
and are named accordingly here.

For layouts that need a transparent background, use the canonical site mark or
the variants in [`prototypes/art`](../../prototypes/art). Do not remove a
flattened background by color selection without checking the tomato's white
highlight and soft edge pixels.

## Naming

- `simple` is the reduced coral-and-green mark.
- `complex` is the detailed tomato with the navy pixel outline.
- Background treatment is always stated explicitly in the filename.
