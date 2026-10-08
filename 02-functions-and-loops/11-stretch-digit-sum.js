// =============================================
// 2. FUNCTIONS AND LOOPS — STRETCH: Digit sum
// =============================================
// Write digitSum(n) that returns the sum of the digits of n.
// Example: digitSum(2026) -> 2 + 0 + 2 + 6 = 10
// Hint: n % 10 is the last digit, Math.floor(n / 10) removes it.
//
// The checks at the bottom print ✅ when your function is correct.


function digitSum(n) {
  let sum = 0;
  
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  
  return sum;
}

// ----- Checks (do not edit) -----
check("digitSum(2026)", () => digitSum(2026), 10);
check("digitSum(5)", () => digitSum(5), 5);
check("digitSum(999)", () => digitSum(999), 27);
