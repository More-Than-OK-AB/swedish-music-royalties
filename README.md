# Musikroyalties i Sverige

A website explaining music royalties in Sweden - what types exist, who collects them, and practical scenarios for different types of music creators.

## Local Development

This is a static site with no build step. To test locally:

```bash
npx serve .
```

Then open http://localhost:3000 in your browser.

## Deployment

This is a static HTML/CSS/JS site. To deploy on GitHub Pages:

1. Push to GitHub
2. Go to Settings → Pages
3. Select "main" branch and save

## Structure

- `index.html` - Main information page with royalty explanations
- `scenarios.html` - Interactive scenario selector
- `about.html` - About page and disclaimer
- `css/styles.css` - Styling
- `js/scenarios.js` - Scenario data and logic

## Adding New Scenarios

Edit the `scenarios` array in `js/scenarios.js` to add new scenarios.
