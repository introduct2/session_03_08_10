// =============================================
// 4. ARRAY METHODS — TASK: Double all
// =============================================
// Write doubleAll(numbers) that returns a NEW array with every number doubled.
// Use: map
//
// The checks at the bottom print ✅ when your function is correct.

function doubleAll(numbers) {

  return numbers.map(n => n * 2);
}


// ----- Checks (do not edit) -----
check("doubleAll([1, 2, 3])", () => doubleAll([1, 2, 3]), [2, 4, 6]);
check("doubleAll([10, -5])", () => doubleAll([10, -5]), [20, -10]);
check("doubleAll([])", () => doubleAll([]), []);
