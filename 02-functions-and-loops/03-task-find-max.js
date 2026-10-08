// =============================================
// 2. FUNCTIONS AND LOOPS — TASK: Find the max
// =============================================
// Write findMax(numbers) that returns the biggest number. Do NOT use Math.max.
// Hint: start with numbers[0].
//
// The checks at the bottom print ✅ when your function is correct.


function findMax(numbers) {
  let max = numbers[0];
  
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  
  return max;
}

// ----- Checks (do not edit) -----
check("findMax([3, 9, 2])", () => findMax([3, 9, 2]), 9);
check("findMax([32, 45, 29, 41])", () => findMax([32, 45, 29, 41]), 45);
check("findMax([-5, -1, -8])", () => findMax([-5, -1, -8]), -1);
check("findMax([7])", () => findMax([7]), 7);
