// =============================================
// 4. ARRAY METHODS — STRETCH: Total with reduce
// =============================================
// Write totalPrice(menu) that returns the sum of all prices.
// Use: reduce   ->   array.reduce((sum, item) => sum + ..., 0)
// The 0 is the starting value of sum.
//
// The checks at the bottom print ✅ when your function is correct.

const menu = [
  { name: "Shawarma", price: 600, category: "food" },
  { name: "Karak", price: 150, category: "drink" },
  { name: "Mandi", price: 2500, category: "food" },
  { name: "Fresh juice", price: 800, category: "drink" },
  { name: "Luqaimat", price: 1000, category: "dessert" },
];


function totalPrice(menu) {
  return menu.reduce((sum, item) => sum + item.price, 0);
}
// ----- Checks (do not edit) -----
check("totalPrice(menu)", () => totalPrice(menu), 5050);
check("totalPrice([])", () => totalPrice([]), 0);
