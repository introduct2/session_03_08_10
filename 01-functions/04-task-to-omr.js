// =============================================
// 1. FUNCTIONS — TASK: Baisa to OMR
// =============================================
// 1 OMR = 1000 baisa. Write toOMR(baisa) that returns the amount in OMR.
//
// The checks at the bottom print ✅ when your function is correct.

function toOMR(baisa) {
return baisa/1000 }

// ----- Checks (do not edit) -----
check("toOMR(1000)", () => toOMR(1000), 1);
check("toOMR(1650)", () => toOMR(1650), 1.65);
check("toOMR(250)", () => toOMR(250), 0.25);
