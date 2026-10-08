// =============================================
// 2. FUNCTIONS AND LOOPS — TASK: Count passed
// =============================================
// Write countPassed(scores, passMark) that returns how many scores are
// equal to or greater than passMark.
//
// The checks at the bottom print ✅ when your function is correct.

function countPassed(scores, passMark) {
  // your code here
}

// ----- Checks (do not edit) -----
check("countPassed([78, 45, 92, 60], 60)", () => countPassed([78, 45, 92, 60], 60), 3);
check("countPassed([78, 45, 92, 60], 80)", () => countPassed([78, 45, 92, 60], 80), 1);
check("countPassed([50, 40], 60)", () => countPassed([50, 40], 60), 0);
check("countPassed([], 60)", () => countPassed([], 60), 0);
