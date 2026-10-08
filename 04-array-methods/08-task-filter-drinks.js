// =============================================
// 4. ARRAY METHODS — TASK: Only drinks
// =============================================
// Write getByCategory(menu, category) that returns only the items of that category.
// Use: filter
//
// The checks at the bottom print ✅ when your function is correct.

const menu = [
  { name: "Shawarma", price: 600, category: "food" },
  { name: "Karak", price: 150, category: "drink" },
  { name: "Mandi", price: 2500, category: "food" },
  { name: "Fresh juice", price: 800, category: "drink" },
  { name: "Luqaimat", price: 1000, category: "dessert" },
];

function getByCategory(menu, category) {
  // your code here
}

// ----- Checks (do not edit) -----
check("getByCategory(menu, \"drink\")", () => getByCategory(menu, "drink"), [{ name: "Karak", price: 150, category: "drink" }, { name: "Fresh juice", price: 800, category: "drink" }]);
check("getByCategory(menu, \"dessert\")", () => getByCategory(menu, "dessert"), [{ name: "Luqaimat", price: 1000, category: "dessert" }]);
check("getByCategory(menu, \"pizza\")", () => getByCategory(menu, "pizza"), []);
