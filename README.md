# Dreamtime website

Static HTML/CSS site. Serve this directory with a static HTTP server; no build or dependencies required.

## Add the trailer
Set `patidaTrailerUrl` in `assets/site-config.js` to a public HTTPS YouTube watch, share, Shorts, or embed URL. The Patida page replaces the coming-soon placeholder with a responsive privacy-enhanced embed. Empty or invalid URLs retain the placeholder. No autoplay or YouTube request occurs without a valid configured URL.

## Sources
- Dreamtime artwork: `../dreamtime/art/dreamtime night logo.png`.
- Patida illustration: `../summazing/docs/store/patida-feature-graphic.png`.
- Screenshots: `../summazing/docs/visual-previews/original.png` and `solved-next-phone.png`. These are labeled development previews.
- Gameplay copy: `../summazing/docs/store/full-description-v2.md`.
- Platform label: For Android · iOS coming soon, as specified by the site owner. No store URL is configured.

Assets are copied locally. Existing privacy pages, domain settings, advertising and Google verification files are preserved.

## Layered homepage artwork
The homepage reuses the traced lettering and hill clipping paths from `../dreamtime/art/editable-v1/dreamtime-master.svg`. The original PNG supplies the moon and painted hill textures through shared inline SVG definitions. CSS supplies an expandable sky and stars; the title and hills retain independent proportions. Adjust `.landscape-content` padding or `.landscape` min-height to expand the sky without stretching the logo or hills.
