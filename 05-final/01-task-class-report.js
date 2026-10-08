// =============================================
// 5. FINAL — TASK: Class report
// =============================================
// Write these functions (each one small!):
//   getAverage(students)     -> average score
//   getTopStudent(students)  -> NAME of the student with the highest score
//   getPassedNames(students) -> names of students with score 60 or more
//   reportLine(student)      -> text like "Ahmed: 87"
//   report(students)         -> array of report lines for all students
//
// The checks at the bottom print ✅ when your function is correct.

const students = [
  { name: "Ahmed", score: 87 },
  { name: "Fatma", score: 95 },
  { name: "Khalid", score: 58 },
  { name: "Maryam", score: 72 },
  { name: "Said", score: 64 },
  { name: "Aisha", score: 68 },
];

function getAverage(students) {
  if (students.length === 0) return 0;
  const totalScore = students.reduce((sum, s) => sum + s.score, 0);
  return totalScore / students.length;
}

function getTopStudent(students) {
  if (students.length === 0) return undefined;
  let top = students[0];
  for (let i = 1; i < students.length; i++) {
    if (students[i].score > top.score) {
      top = students[i];
    }
  }
  return top.name;
}

function getPassedNames(students) {
  return students.filter(s => s.score >= 60).map(s => s.name);
}

function reportLine(student) {
  return `${student.name}: ${student.score}`;
}

function report(students) {
  return students.map(reportLine);
}

// ----- Checks (do not edit) -----
check("getAverage(students)", () => getAverage(students), 74);
check("getTopStudent(students)", () => getTopStudent(students), "Fatma");
check("getPassedNames(students)", () => getPassedNames(students), ["Ahmed", "Fatma", "Maryam", "Said", "Aisha"]);
check("reportLine(students[0])", () => reportLine(students[0]), "Ahmed: 87");
check("report(students)", () => report(students), ["Ahmed: 87", "Fatma: 95", "Khalid: 58", "Maryam: 72", "Said: 64", "Aisha: 68"]);
