// =============================================
// 1. FUNCTIONS — TASK: Bigger of two
// =============================================
// Write maxOfTwo(a, b) that returns the bigger number. Do NOT use Math.max.
//
// The checks at the bottom print ✅ when your function is correct.

function maxOfTwo(a, b) {
  if (a >= b)  {
    return a ;
  }
  return b ;
}

// ----- Checks (do not edit) -----
check("maxOfTwo(3, 7)", () => maxOfTwo(3, 7), 7);
check("maxOfTwo(10, 2)", () => maxOfTwo(10, 2), 10);
check("maxOfTwo(5, 5)", () => maxOfTwo(5, 5), 5);
check("maxOfTwo(-1, -8)", () => maxOfTwo(-1, -8), -1);
