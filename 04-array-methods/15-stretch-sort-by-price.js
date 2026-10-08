// =============================================
// 4. ARRAY METHODS — STRETCH: Sort by price
// =============================================
// Write sortByPrice(menu) that returns a NEW array sorted from cheapest to most expensive.
// The original menu must NOT change.
// Hint: [...menu] makes a copy, then .sort((a, b) => a.price - b.price)
//
// The checks at the bottom print ✅ when your function is correct.

const menu = [
  { name: "Shawarma", price: 600, category: "food" },
  { name: "Karak", price: 150, category: "drink" },
  { name: "Mandi", price: 2500, category: "food" },
  { name: "Fresh juice", price: 800, category: "drink" },
  { name: "Luqaimat", price: 1000, category: "dessert" },
];


function sortByPrice(menu) {
  return [...menu].sort((a, b) => a.price - b.price);
}


// ----- Checks (do not edit) -----
check("sortByPrice(menu).map((item) => item.name)", () => sortByPrice(menu).map((item) => item.name), ["Karak", "Shawarma", "Fresh juice", "Luqaimat", "Mandi"]);
check("(sortByPrice(menu), menu[0].name)", () => (sortByPrice(menu), menu[0].name), "Shawarma");
