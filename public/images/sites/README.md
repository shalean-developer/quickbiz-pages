# Site Screenshots

This directory contains placeholder images for the sites gallery. Replace these with actual screenshots of the live websites.

## Required Images

For each site, provide:

### Shalean (shalean/)
- `hero.png` - Main hero screenshot of the homepage
- `screenshot-2.png` - Additional screenshot (booking page or services)

### Exotic TM Spa (exotictmspa/)
- `hero.png` - Main hero screenshot of the spa website
- `screenshot-2.png` - Additional screenshot (treatments or booking)

### Team Edlick (teamedlick/)
- `hero.png` - Main hero screenshot of the agency website
- `screenshot-2.png` - Additional screenshot (portfolio or services)

## Image Guidelines

- **Format**: PNG or JPG
- **Dimensions**: Minimum 1920x1080px (16:9 aspect ratio recommended)
- **File size**: Optimize images to under 500KB each
- **Alt text**: Already defined in the code, but ensure screenshots are clear and representative

## How to Replace

1. Navigate to the appropriate subdirectory
2. Replace the placeholder images with actual screenshots
3. Keep the same file names
4. Optimize images before committing (use tools like TinyPNG or ImageOptim)

## Adding More Sites

To add a new site to the gallery:

1. Create a new subdirectory under `public/images/sites/{slug}/`
2. Add hero.png and screenshot-2.png
3. Update `src/data/sites.ts` with the new site data
4. The site will automatically appear in the gallery
