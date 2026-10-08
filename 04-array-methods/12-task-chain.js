// =============================================
// 4. ARRAY METHODS — TASK: Names of products in stock
// =============================================
// Write inStockNames(products) that returns the NAMES of products that are in stock.
// Use: filter, then map (chaining)
//
// The checks at the bottom print ✅ when your function is correct.

const products = [
  { name: "Laptop", price: 450, inStock: true },
  { name: "Mouse", price: 10, inStock: false },
  { name: "Keyboard", price: 25, inStock: true },
  { name: "Monitor", price: 120, inStock: false },
];

function inStockNames(products) {
  // your code here
}

// ----- Checks (do not edit) -----
check("inStockNames(products)", () => inStockNames(products), ["Laptop", "Keyboard"]);
check("inStockNames([])", () => inStockNames([]), []);
