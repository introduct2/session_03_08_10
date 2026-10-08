// =============================================
// 1. FUNCTIONS — TASK: Is even
// =============================================
// Write isEven(n) that returns true if n is even, otherwise false.
// Hint: use %
//
// The checks at the bottom print ✅ when your function is correct.

function isEven(n) {
  return n % 2 === 0;
}

// ----- Checks (do not edit) -----
check("isEven(4)", () => isEven(4), true);
check("isEven(7)", () => isEven(7), false);
check("isEven(0)", () => isEven(0), true);
