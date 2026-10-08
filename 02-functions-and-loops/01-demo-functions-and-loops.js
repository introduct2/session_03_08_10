// =============================================
// 2. FUNCTIONS AND LOOPS — DEMO: Loops inside functions
// =============================================
// A loop inside a function: the function does the work, then RETURNS the result.

function sumTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
}
console.log(sumTo(10));  // 55
console.log(sumTo(100)); // 5050

// A function that takes an ARRAY
function countLongNames(names) {
  let count = 0;
  for (const name of names) {
    if (name.length > 5) { // strings have .length too!
      count++;
    }
  }
  return count;
}
console.log(countLongNames(["Ahmed", "Maryam", "Said", "Khalid"])); // 2

// A function that builds and returns a NEW array
function firstNumbers(n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    result.push(i);
  }
  return result;
}
console.log(firstNumbers(5)); // [1, 2, 3, 4, 5]
