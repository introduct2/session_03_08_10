// =============================================
// 4. ARRAY METHODS — TASK: Format the menu
// =============================================
// Write formatMenu(menu) that returns an array of text lines like "Karak — 150 baisa".
// Use: map and a template literal
//
// The checks at the bottom print ✅ when your function is correct.

const menu = [
  { name: "Shawarma", price: 600, category: "food" },
  { name: "Karak", price: 150, category: "drink" },
  { name: "Mandi", price: 2500, category: "food" },
  { name: "Fresh juice", price: 800, category: "drink" },
  { name: "Luqaimat", price: 1000, category: "dessert" },
];

function formatMenu(menu) {

  return menu.map(item => `${item.name} — ${item.price} baisa`);
}


// ----- Checks (do not edit) -----
check("formatMenu(menu)", () => formatMenu(menu), ["Shawarma — 600 baisa", "Karak — 150 baisa", "Mandi — 2500 baisa", "Fresh juice — 800 baisa", "Luqaimat — 1000 baisa"]);
