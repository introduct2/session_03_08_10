// =============================================
// 4. ARRAY METHODS — TASK: Cheap dishes
// =============================================
// Write cheapNames(menu, maxPrice) that returns the names of items that cost
// maxPrice or less.
// Use: filter + map
//
// The checks at the bottom print ✅ when your function is correct.

const menu = [
  { name: "Shawarma", price: 600, category: "food" },
  { name: "Karak", price: 150, category: "drink" },
  { name: "Mandi", price: 2500, category: "food" },
  { name: "Fresh juice", price: 800, category: "drink" },
  { name: "Luqaimat", price: 1000, category: "dessert" },
];

function cheapNames(menu, maxPrice) {
  // your code here
}

// ----- Checks (do not edit) -----
check("cheapNames(menu, 800)", () => cheapNames(menu, 800), ["Shawarma", "Karak", "Fresh juice"]);
check("cheapNames(menu, 100)", () => cheapNames(menu, 100), []);
