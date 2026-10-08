// =============================================
// 5. FINAL — TASK: Cafe order
// =============================================
// Write these functions:
//   lineTotal(item)       -> price * quantity
//   subtotal(order)       -> sum of all line totals (USE lineTotal)
//   discount(amount)      -> 10% of amount if amount is 5000 or more, otherwise 0
//   finalTotal(order)     -> subtotal minus discount (USE the functions above)
//
// The checks at the bottom print ✅ when your function is correct.

const order = [
  { name: "Mandi", price: 2500, quantity: 2 },
  { name: "Karak", price: 150, quantity: 4 },
  { name: "Luqaimat", price: 1000, quantity: 1 },
];

function lineTotal(item) {
  return item.price * item.quantity;
}

function subtotal(order) {
  return order.reduce((sum, item) => sum + lineTotal(item), 0);
}

function discount(amount) {
  return amount >= 5000 ? amount * 0.1 : 0;
}

function finalTotal(order) {
  const sub = subtotal(order);
  return sub - discount(sub);
}
// ----- Checks (do not edit) -----
check("lineTotal(order[0])", () => lineTotal(order[0]), 5000);
check("subtotal(order)", () => subtotal(order), 6600);
check("discount(6600)", () => discount(6600), 660);
check("discount(4000)", () => discount(4000), 0);
check("finalTotal(order)", () => finalTotal(order), 5940);
check("finalTotal([{ name: \"Karak\", price: 150, quantity: 2 }])", () => finalTotal([{ name: "Karak", price: 150, quantity: 2 }]), 300);
