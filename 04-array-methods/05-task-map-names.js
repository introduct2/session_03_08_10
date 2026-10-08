// =============================================
// 4. ARRAY METHODS — TASK: Student names
// =============================================
// Write getNames(students) that returns an array of only the names.
// Use: map
//
// The checks at the bottom print ✅ when your function is correct.

const students = [
  { name: "Ahmed", score: 87 },
  { name: "Fatma", score: 95 },
  { name: "Khalid", score: 58 },
  { name: "Maryam", score: 72 },
];

function getNames(students) {
  return students.map(student => student.name);
}

// ----- Checks (do not edit) -----
check("getNames(students)", () => getNames(students), ["Ahmed", "Fatma", "Khalid", "Maryam"]);
check("getNames([])", () => getNames([]), []);
