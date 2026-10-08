// =============================================
// 4. ARRAY METHODS — STRETCH: Count by category
// =============================================
// Write countByCategory(menu) that returns an object like { food: 2, drink: 2, dessert: 1 }.
// Hint: start with const counts = {}; use forEach and counts[item.category].
// If a key does not exist yet, counts[key] is undefined — set it to 1 first.
//
// The checks at the bottom print ✅ when your function is correct.

const menu = [
  { name: "Shawarma", price: 600, category: "food" },
  { name: "Karak", price: 150, category: "drink" },
  { name: "Mandi", price: 2500, category: "food" },
  { name: "Fresh juice", price: 800, category: "drink" },
  { name: "Luqaimat", price: 1000, category: "dessert" },
];
function countByCategory(menu) {
  const counts = {};
  
  menu.forEach(item => {
    if (counts[item.category]) {
      counts[item.category]++;
    } else {
      counts[item.category] = 1;
    }
  });
  
  return counts;
}

// ----- Checks (do not edit) -----
check("countByCategory(menu)", () => countByCategory(menu), { food: 2, drink: 2, dessert: 1 });
