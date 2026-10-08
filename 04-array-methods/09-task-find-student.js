// =============================================
// 4. ARRAY METHODS — TASK: Find a student
// =============================================
// Write findStudent(students, name) that returns the student object with that name,
// or undefined if there is no such student.
// Use: find
//
// The checks at the bottom print ✅ when your function is correct.

const students = [
  { name: "Ahmed", score: 87 },
  { name: "Fatma", score: 95 },
  { name: "Khalid", score: 58 },
  { name: "Maryam", score: 72 },
];

function findStudent(students, name) {
  return students.find(student => student.name === name);
}

// ----- Checks (do not edit) -----
check("findStudent(students, \"Khalid\")", () => findStudent(students, "Khalid"), { name: "Khalid", score: 58 });
check("findStudent(students, \"Aisha\")", () => findStudent(students, "Aisha"), undefined);
