// =============================================
// 1. FUNCTIONS — TASK: Rectangle
// =============================================
// Write TWO functions:
//   area(width, height)      -> width * height
//   perimeter(width, height) -> 2 * (width + height)
//
// The checks at the bottom print ✅ when your function is correct.

function area(width, height) {
return (width * height);
}

function perimeter(width, height) {
  return 2 * (width + height);
}

// ----- Checks (do not edit) -----
check("area(5, 3)", () => area(5, 3), 15);
check("area(10, 10)", () => area(10, 10), 100);
check("perimeter(5, 3)", () => perimeter(5, 3), 16);
check("perimeter(10, 10)", () => perimeter(10, 10), 40);
