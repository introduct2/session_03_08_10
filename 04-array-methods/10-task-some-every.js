// =============================================
// 4. ARRAY METHODS — TASK: Some and every
// =============================================
// Write TWO functions:
//   hasFailed(scores) -> true if at least one score is below 60   (use: some)
//   allPassed(scores) -> true if every score is 60 or more         (use: every)
//
// The checks at the bottom print ✅ when your function is correct.

function hasFailed(scores) {
  // your code here
}

function allPassed(scores) {
  // your code here
}

// ----- Checks (do not edit) -----
check("hasFailed([78, 45, 92])", () => hasFailed([78, 45, 92]), true);
check("hasFailed([78, 92])", () => hasFailed([78, 92]), false);
check("allPassed([78, 60, 92])", () => allPassed([78, 60, 92]), true);
check("allPassed([78, 45, 92])", () => allPassed([78, 45, 92]), false);
