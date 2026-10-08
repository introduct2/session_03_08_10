// =============================================
// 2. FUNCTIONS AND LOOPS — TASK: Sum of an array
// =============================================
// Write sumArray(numbers) that returns the sum of all numbers.
// An empty array should return 0.
//
// The checks at the bottom print ✅ when your function is correct.

function sumArray(numbers) {
  return numbers.reduce((sum , num) => sum + num , 0 );
}

// ----- Chec
// ks (do not edit) -----
check("sumArray([1, 2, 3])", () => sumArray([1, 2, 3]), 6);
check("sumArray([10, 20, 30])", () => sumArray([10, 20, 30]), 60);
check("sumArray([])", () => sumArray([]), 0);
