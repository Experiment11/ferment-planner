/*
  This file holds all the "stuff you can pick."
  Each item has:
    - id:    a short code name used by the program
    - name:  the friendly label you see on screen
    - svg:   a tiny cartoon drawing made of code (an SVG)
    - search: the words we send to Amazon to find the product

  To add a new item later, just copy one block, change the values,
  and it shows up on the page automatically.
*/

const VEGETABLES = [
  {
    id: "cabbage",
    name: "Cabbage",
    svg: `<svg viewBox="0 0 100 100"><circle cx="50" cy="55" r="34" fill="#9ccb7a"/><path d="M50 21c-14 6-22 20-18 36 7-10 11-24 18-36z" fill="#b6dd97"/><path d="M50 21c14 6 22 20 18 36-7-10-11-24-18-36z" fill="#86bb63"/><path d="M28 48c6 14 14 22 22 26" stroke="#6fa84f" stroke-width="2" fill="none"/><path d="M72 48c-6 14-14 22-22 26" stroke="#6fa84f" stroke-width="2" fill="none"/></svg>`,
    search: "fresh green cabbage",
  },
  {
    id: "cucumber",
    name: "Cucumbers",
    svg: `<svg viewBox="0 0 100 100"><rect x="38" y="18" width="24" height="64" rx="12" fill="#5fa84d"/><rect x="42" y="24" width="16" height="52" rx="8" fill="#79c162"/><circle cx="46" cy="36" r="2" fill="#4c8a3e"/><circle cx="54" cy="48" r="2" fill="#4c8a3e"/><circle cx="46" cy="60" r="2" fill="#4c8a3e"/></svg>`,
    search: "pickling cucumbers",
  },
  {
    id: "carrot",
    name: "Carrots",
    svg: `<svg viewBox="0 0 100 100"><path d="M50 30 L66 82 H34 Z" fill="#e8822f"/><path d="M50 36 L60 78 H40 Z" fill="#f29d53"/><path d="M50 30c-4-8-2-14 2-18m-2 18c4-8 10-10 14-10M50 30c0-10 4-14 4-18" stroke="#4f9c42" stroke-width="3" fill="none" stroke-linecap="round"/></svg>`,
    search: "fresh carrots",
  },
  {
    id: "cauliflower",
    name: "Cauliflower",
    svg: `<svg viewBox="0 0 100 100"><path d="M40 52h20l-2 24H42z" fill="#f3f0e6"/><circle cx="40" cy="46" r="12" fill="#f7f4ea"/><circle cx="60" cy="46" r="12" fill="#f7f4ea"/><circle cx="50" cy="38" r="13" fill="#fbf9f1"/><circle cx="50" cy="50" r="11" fill="#f3f0e6"/><path d="M30 52c-6-2-8-8-6-14M70 52c6-2 8-8 6-14" stroke="#7aa15f" stroke-width="4" fill="none" stroke-linecap="round"/></svg>`,
    search: "fresh cauliflower head",
  },
  {
    id: "radish",
    name: "Radishes",
    svg: `<svg viewBox="0 0 100 100"><circle cx="50" cy="58" r="24" fill="#e35d6a"/><circle cx="43" cy="51" r="7" fill="#f3939c"/><path d="M50 34c-3-8-1-14 3-18m-3 18c3-8 9-10 13-10" stroke="#4f9c42" stroke-width="3" fill="none" stroke-linecap="round"/></svg>`,
    search: "fresh radishes",
  },
  {
    id: "garlic",
    name: "Garlic",
    svg: `<svg viewBox="0 0 100 100"><path d="M50 30c-14 4-20 20-16 36 4 12 26 12 32 0 4-16-2-32-16-36z" fill="#f3efe4"/><path d="M50 30c14 4 20 20 16 36" stroke="#d9d2bf" stroke-width="2" fill="none"/><path d="M50 30v48" stroke="#d9d2bf" stroke-width="2"/><path d="M50 30c2-8 0-12-2-14" stroke="#c9b78f" stroke-width="3" fill="none" stroke-linecap="round"/></svg>`,
    search: "fresh garlic bulbs",
  },
  {
    id: "pepper",
    name: "Chili Peppers",
    svg: `<svg viewBox="0 0 100 100"><path d="M40 34c18-4 30 10 28 30-2 16-18 24-28 14-8-8 0-20-8-28-6-6-2-14 8-16z" fill="#d93b2b"/><path d="M40 34c-2-6-6-8-10-8" stroke="#4f9c42" stroke-width="4" fill="none" stroke-linecap="round"/></svg>`,
    search: "fresh chili peppers",
  },
  {
    id: "beet",
    name: "Beets",
    svg: `<svg viewBox="0 0 100 100"><path d="M50 40c-16 0-22 14-18 28 4 12 28 12 36 0 4-14-2-28-18-28z" fill="#9b2242"/><path d="M50 40c-16 0-22 14-18 28" stroke="#7a1733" stroke-width="2" fill="none"/><path d="M50 40c-3-8-1-14 3-18m-3 18c3-8 9-10 13-10M50 40c0-10-4-14-8-16" stroke="#4f9c42" stroke-width="3" fill="none" stroke-linecap="round"/></svg>`,
    search: "fresh beets",
  },
  {
    id: "ginger",
    name: "Ginger",
    svg: `<svg viewBox="0 0 100 100"><path d="M38 48c-8-4-10 8-4 14 4 4 2 10 8 12 8 4 16-2 20-10 6 4 14 0 12-8-2-6-10-4-14-10-4-6-16-4-22 2z" fill="#e4c48a"/><path d="M42 54c4 2 8 2 12 0M52 64c3 1 6 0 8-2" stroke="#c9a766" stroke-width="2" fill="none"/></svg>`,
    search: "fresh ginger root",
  },
  {
    id: "jalapeno",
    name: "Green Beans",
    svg: `<svg viewBox="0 0 100 100"><path d="M34 70c6-30 12-42 26-46" stroke="#5fa84d" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M40 68c5-24 10-34 22-40" stroke="#79c162" stroke-width="5" fill="none" stroke-linecap="round"/></svg>`,
    search: "fresh green beans",
  },
];

// Things that aren't vegetables but are commonly pickled/fermented.
const OTHER_PICKLABLES = [
  {
    id: "eggs",
    name: "Eggs",
    svg: `<svg viewBox="0 0 100 100"><ellipse cx="42" cy="56" rx="18" ry="24" fill="#f7efe0"/><ellipse cx="62" cy="52" rx="15" ry="20" fill="#fbf6ec"/><ellipse cx="38" cy="48" rx="5" ry="7" fill="#fff" opacity="0.7"/></svg>`,
    search: "fresh eggs for pickling",
  },
  {
    id: "jalapenos",
    name: "Jalapeños",
    svg: `<svg viewBox="0 0 100 100"><path d="M38 32c16-2 28 12 26 32-2 14-16 20-26 12-8-6-2-18-10-26-6-6 0-16 10-18z" fill="#3f9142"/><path d="M38 32c-2-5-6-7-10-7" stroke="#2f6e31" stroke-width="4" fill="none" stroke-linecap="round"/></svg>`,
    search: "fresh jalapeno peppers",
  },
  {
    id: "onion",
    name: "Red Onion",
    svg: `<svg viewBox="0 0 100 100"><path d="M50 36c-16 0-22 16-18 30 4 12 32 12 36 0 4-14-2-30-18-30z" fill="#b14a7a"/><path d="M50 36v54M38 42c-4 16-2 30 4 42M62 42c4 16 2 30-4 42" stroke="#8f3760" stroke-width="2" fill="none"/><path d="M46 36c1-6 3-9 4-11 1 2 3 5 4 11" stroke="#cdbf6a" stroke-width="3" fill="none"/></svg>`,
    search: "red onions",
  },
  {
    id: "mushroom",
    name: "Mushrooms",
    svg: `<svg viewBox="0 0 100 100"><path d="M26 54c0-16 11-26 24-26s24 10 24 26z" fill="#c67b4e"/><rect x="42" y="54" width="16" height="26" rx="6" fill="#e9dcc4"/><circle cx="40" cy="46" r="3" fill="#a9623a"/><circle cx="56" cy="44" r="3" fill="#a9623a"/><circle cx="50" cy="50" r="2.5" fill="#a9623a"/></svg>`,
    search: "fresh button mushrooms",
  },
];

const SALTS = [
  {
    id: "sea-salt",
    name: "Fine Sea Salt",
    svg: `<svg viewBox="0 0 100 100"><path d="M34 40h32l-4 40H38z" fill="#dfe6ee"/><path d="M34 40h32l-1 8H35z" fill="#c3ccd6"/><rect x="40" y="30" width="20" height="12" rx="3" fill="#aeb8c4"/><circle cx="46" cy="60" r="2" fill="#fff"/><circle cx="54" cy="68" r="2" fill="#fff"/><circle cx="50" cy="54" r="2" fill="#fff"/></svg>`,
    search: "fine sea salt for fermenting no additives",
  },
  {
    id: "kosher-salt",
    name: "Kosher Salt",
    svg: `<svg viewBox="0 0 100 100"><path d="M32 42h36l-5 38H37z" fill="#eef1f4"/><rect x="38" y="32" width="24" height="12" rx="2" fill="#c9d0d8"/><rect x="43" y="56" width="4" height="4" fill="#cfd6de"/><rect x="53" y="62" width="4" height="4" fill="#cfd6de"/><rect x="48" y="52" width="4" height="4" fill="#cfd6de"/></svg>`,
    search: "kosher salt no iodine no anti-caking",
  },
  {
    id: "pickling-salt",
    name: "Pickling Salt",
    svg: `<svg viewBox="0 0 100 100"><rect x="34" y="34" width="32" height="46" rx="4" fill="#f3efe4"/><rect x="34" y="34" width="32" height="14" rx="4" fill="#7aa15f"/><text x="50" y="66" font-size="10" text-anchor="middle" fill="#7a7568" font-family="sans-serif">SALT</text></svg>`,
    search: "pickling and canning salt",
  },
];

const CONTAINERS = [
  {
    id: "mason-jar",
    name: "Mason Jar",
    svg: `<svg viewBox="0 0 100 100"><rect x="34" y="34" width="32" height="48" rx="6" fill="#cfe6f2" stroke="#9cc3d6" stroke-width="2"/><rect x="38" y="26" width="24" height="10" rx="3" fill="#b0b8c0"/><rect x="38" y="52" width="24" height="26" rx="3" fill="#d7edc9" opacity="0.8"/></svg>`,
    search: "wide mouth mason jars 32 oz",
  },
  {
    id: "clay-pot",
    name: "Clay Crock",
    svg: `<svg viewBox="0 0 100 100"><path d="M32 46c0-6 6-10 18-10s18 4 18 10l-3 32c0 4-6 6-15 6s-15-2-15-6z" fill="#c67b4e"/><ellipse cx="50" cy="46" rx="18" ry="6" fill="#a9623a"/><path d="M30 42h40" stroke="#8f4f2d" stroke-width="3"/></svg>`,
    search: "fermentation crock pot stoneware",
  },
  {
    id: "fermentation-kit",
    name: "Airlock Lid Kit",
    svg: `<svg viewBox="0 0 100 100"><rect x="36" y="40" width="28" height="42" rx="5" fill="#cfe6f2" stroke="#9cc3d6" stroke-width="2"/><rect x="40" y="30" width="20" height="12" rx="3" fill="#7aa15f"/><circle cx="50" cy="26" r="6" fill="#5a6b4e"/><rect x="47" y="14" width="6" height="10" rx="2" fill="#5a6b4e"/></svg>`,
    search: "fermentation airlock lids wide mouth jars",
  },
];
