// =============================================
// 4. ARRAY METHODS — TASK: Prices to OMR
// =============================================
// Write pricesToOMR(prices) that converts every price from baisa to OMR.
// Use: map
//
// The checks at the bottom print ✅ when your function is correct.

function pricesToOMR(prices) {

  return prices.map(price => price / 1000);
}

// ----- Checks (do not edit) -----
check("pricesToOMR([600, 150, 2500])", () => pricesToOMR([600, 150, 2500]), [0.6, 0.15, 2.5]);
check("pricesToOMR([1000])", () => pricesToOMR([1000]), [1]);
