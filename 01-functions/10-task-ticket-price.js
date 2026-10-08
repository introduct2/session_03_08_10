// =============================================
// 1. FUNCTIONS — TASK: Museum ticket
// =============================================
// Write ticketPrice(age, isStudent) that returns the price in OMR:
//   younger than 6               -> 0
//   60 or older, OR a student    -> 1
//   everyone else                -> 2
//
// The checks at the bottom print ✅ when your function is correct.

function ticketPrice(age, isStudent) {
  // your code here
}

// ----- Checks (do not edit) -----
check("ticketPrice(4, false)", () => ticketPrice(4, false), 0);
check("ticketPrice(25, true)", () => ticketPrice(25, true), 1);
check("ticketPrice(65, false)", () => ticketPrice(65, false), 1);
check("ticketPrice(30, false)", () => ticketPrice(30, false), 2);
