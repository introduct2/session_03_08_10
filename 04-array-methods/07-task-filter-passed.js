// =============================================
// 4. ARRAY METHODS — TASK: Passed students
// =============================================
// Write passedStudents(students) that returns only the students with score 60 or more.
// Use: filter
//
// The checks at the bottom print ✅ when your function is correct.

const students = [
  { name: "Ahmed", score: 87 },
  { name: "Fatma", score: 95 },
  { name: "Khalid", score: 58 },
  { name: "Maryam", score: 72 },
];


 function passedStudents(students) {
  return students.filter(student => student.score >= 60);
}


// ----- Checks (do not edit) -----
check("passedStudents(students)", () => passedStudents(students), [{ name: "Ahmed", score: 87 }, { name: "Fatma", score: 95 }, { name: "Maryam", score: 72 }]);
