# Ferment Planner — Roadmap

A beginner-friendly website for planning fermentation projects. Pick what you
want to ferment or pickle, get a salt-brine recommendation, and build a shopping
list with Amazon links.

## Tech choices (kept deliberately simple)

- Plain **HTML + CSS + JavaScript**, no frameworks and no build step.
- Open `index.html` in a browser to run it — nothing to install.
- Cartoon images are **inline SVG drawn in code** (in `data.js`), so they are
  original and have no licensing concerns.
- Amazon links are plain **product-search URLs** for now. They can be swapped
  for real Amazon Associates affiliate links later.

## File guide

| File         | Role                                                      |
| ------------ | --------------------------------------------------------- |
| `index.html` | Page structure (the skeleton)                             |
| `styles.css` | Colors, spacing, layout (the styling)                     |
| `data.js`    | The lists of veggies, picklables, salts, containers       |
| `app.js`     | The logic: clicks, brine calculator, shopping list        |

## Done so far

- [x] Pick multiple vegetables
- [x] "Other picklables" group (eggs, jalapeños, onion, mushrooms)
- [x] Pick a salt and a container
- [x] Brine calculator (choose salt %, brine vs. dry-salt method, enter amount)
- [x] Auto-generated shopping list with Amazon search links

## Next ideas (not built yet)

- [ ] Save your plan so it persists when you return (browser localStorage)
- [ ] Per-food suggested ferment times and tips
- [ ] Fancier cartoon artwork
- [ ] Real Amazon Associates affiliate links (requires an Associates account)
- [ ] Print / share a plan

## For the learner

This project is also a learning vehicle. The code is heavily commented in plain
language. A good first exercise: add a new vegetable by copying one block in
`data.js` and changing its values — it will appear on the page automatically.
