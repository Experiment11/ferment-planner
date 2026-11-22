/*
  This is the "brain" of the page. It does several jobs:
    1. Draws the choice cards onto the page from the lists in data.js
    2. Remembers what you've selected
    3. Runs the brine calculator
    4. Builds your plan + shopping list whenever something changes
*/

// --- 1. Remember what's selected ----------------------------------
// A "Set" is just a list that never stores the same thing twice.
const selected = {
  vegetables: new Set(), // can pick many
  other: new Set(), // eggs, mushrooms, etc. — can pick many
  salt: null, // pick one
  container: null, // pick one
};

// --- 2. Draw the cards --------------------------------------------
// Builds one clickable card for an item. `type` says which group it's in.
function makeCard(item, type) {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `${item.svg}<span class="card-label">${item.name}</span>`;

  card.addEventListener("click", () => {
    if (type === "vegetables" || type === "other") {
      // Multi-choice groups: toggle on/off.
      const set = selected[type];
      if (set.has(item.id)) {
        set.delete(item.id);
        card.classList.remove("selected");
      } else {
        set.add(item.id);
        card.classList.add("selected");
      }
    } else {
      // Single-choice groups (salt, container): clear siblings first.
      const grid = card.parentElement;
      grid.querySelectorAll(".card").forEach((c) => c.classList.remove("selected"));
      card.classList.add("selected");
      selected[type] = item.id;
    }
    updatePlan();
  });

  return card;
}

// Fill a grid on the page with cards for a whole list.
function buildGrid(elementId, list, type) {
  const grid = document.getElementById(elementId);
  list.forEach((item) => grid.appendChild(makeCard(item, type)));
}

buildGrid("veg-grid", VEGETABLES, "vegetables");
buildGrid("other-grid", OTHER_PICKLABLES, "other");
buildGrid("salt-grid", SALTS, "salt");
buildGrid("container-grid", CONTAINERS, "container");

// --- 3. The brine calculator --------------------------------------
// Grab the calculator controls from the page.
const percentInput = document.getElementById("salt-percent");
const methodInput = document.getElementById("method");
const amountInput = document.getElementById("amount");
const amountLabel = document.getElementById("amount-label");
const calcResult = document.getElementById("calc-result");

function updateCalculator() {
  const percent = parseFloat(percentInput.value); // e.g. 2 means 2%
  const amount = parseFloat(amountInput.value); // grams of water or veg
  const method = methodInput.value; // "brine" or "dry"

  // The label changes depending on the method so it's never confusing.
  amountLabel.textContent =
    method === "brine"
      ? "Water amount (grams or ml)"
      : "Vegetable weight (grams)";

  // If the number is missing or not a number, ask for it kindly.
  if (isNaN(amount) || amount <= 0) {
    calcResult.innerHTML = "Enter an amount above to see your salt weight.";
    return;
  }

  // The core of the math is the same for both methods:
  // salt weight = amount * (percent / 100).
  // 1 gram of salt is roughly 1/6 of a tablespoon, so grams / 17 ≈ Tbsp.
  const saltGrams = amount * (percent / 100);
  const saltTbsp = saltGrams / 17;

  const grams = saltGrams.toFixed(1);
  const tbsp = saltTbsp.toFixed(1);

  if (method === "brine") {
    calcResult.innerHTML = `
      Dissolve <strong>${grams} g of salt</strong> (about <strong>${tbsp} Tbsp</strong>)
      into <strong>${amount} ml of water</strong> at <strong>${percent}%</strong> strength.
      Pour over your food until fully covered.`;
  } else {
    calcResult.innerHTML = `
      Sprinkle <strong>${grams} g of salt</strong> (about <strong>${tbsp} Tbsp</strong>)
      over <strong>${amount} g of chopped veg</strong> at <strong>${percent}%</strong>.
      Massage it in and let it release its own brine.`;
  }
}

// Recalculate whenever any control changes.
percentInput.addEventListener("change", updateCalculator);
methodInput.addEventListener("change", updateCalculator);
amountInput.addEventListener("input", updateCalculator);
updateCalculator(); // run once at startup so a result shows immediately

// --- 4. Helpers to look up a chosen item by its id ----------------
function findById(list, id) {
  return list.find((item) => item.id === id);
}

// Turn an item's search words into a real Amazon search link.
function amazonLink(searchText) {
  return "https://www.amazon.com/s?k=" + encodeURIComponent(searchText);
}

// --- 5. Build the plan + shopping list ----------------------------
function updatePlan() {
  const plan = document.getElementById("plan");

  const nothingPicked =
    selected.vegetables.size === 0 &&
    selected.other.size === 0 &&
    !selected.salt &&
    !selected.container;

  if (nothingPicked) {
    plan.innerHTML = `<p class="empty-note">Start picking above and your plan will appear here. 🫙</p>`;
    return;
  }

  // Gather the full item objects for everything selected.
  const vegItems = [...selected.vegetables].map((id) => findById(VEGETABLES, id));
  const otherItems = [...selected.other].map((id) => findById(OTHER_PICKLABLES, id));
  const foodItems = [...vegItems, ...otherItems];
  const saltItem = selected.salt ? findById(SALTS, selected.salt) : null;
  const containerItem = selected.container ? findById(CONTAINERS, selected.container) : null;

  // Build the shopping list, one row per selected item.
  const allChosen = [...foodItems, saltItem, containerItem].filter(Boolean);
  const listItems = allChosen
    .map(
      (item) => `
      <li>
        <span>${item.name}</span>
        <a class="buy-link" href="${amazonLink(item.search)}" target="_blank" rel="noopener">
          Find on Amazon
        </a>
      </li>`
    )
    .join("");

  const foodNames =
    foodItems.length > 0 ? foodItems.map((f) => f.name).join(", ") : "…pick something!";

  plan.innerHTML = `
    <p>You're planning to ferment / pickle <strong>${foodNames}</strong>.</p>
    <p class="hint">Use the brine calculator above to get your exact salt amount.</p>
    <h3>Shopping list</h3>
    <ul class="shopping-list">${listItems}</ul>`;
}
