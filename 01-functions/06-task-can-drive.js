// =============================================
// 1. FUNCTIONS — TASK: Can drive?
// =============================================
// Write canDrive(age, hasLicense) that returns true only if
// age is 18 or more AND hasLicense is true.
//
// The checks at the bottom print ✅ when your function is correct.

function canDrive(age, hasLicense) {
  return age >= 18 && hasLicense
}

// ----- Checks (do not edit) -----
check("canDrive(20, true)", () => canDrive(20, true), true);
check("canDrive(20, false)", () => canDrive(20, false), false);
check("canDrive(16, true)", () => canDrive(16, true), false);
check("canDrive(18, true)", () => canDrive(18, true), true);
