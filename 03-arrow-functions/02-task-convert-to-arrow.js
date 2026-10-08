// =============================================
// 3. ARROW FUNCTIONS — TASK: Convert to arrow functions
// =============================================
// Rewrite these regular functions as SHORT arrow functions with the same names:
//
//   function triple(n) { return n * 3; }
//   function isPositive(n) { return n > 0; }
//   function fullName(first, last) { return `${first} ${last}`; }
//
// Example: const triple = (n) => ...
//
// The checks at the bottom print ✅ when your function is correct.

const triple = (n) => n * 3;
const isPositive = (n) => n > 0;
const fullName = (first, last) => `${first} ${last}`;

// ----- Checks (do not edit) -----
check("triple(4)", () => triple(4), 12);
check("isPositive(5)", () => isPositive(5), true);
check("isPositive(-2)", () => isPositive(-2), false);
check("fullName(\"Said\", \"Al Harthy\")", () => fullName("Said", "Al Harthy"), "Said Al Harthy");
