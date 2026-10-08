// =============================================
// 2. FUNCTIONS AND LOOPS — STRETCH: Reverse a string
// =============================================
// Write reverseString(text) that returns the text backwards.
// Hint: text[i] gives one letter, text.length gives the length — loop from the end.
//
// The checks at the bottom print ✅ when your function is correct.

function reverseString(text) {
  let reversed = "";
  for (let i = text.length - 1; i >= 0; i--) {
    reversed += text[i];
  }
  return reversed;
}

// ----- Checks (do not edit) -----
check("reverseString(\"Oman\")", () => reverseString("Oman"), "namO");
check("reverseString(\"abc\")", () => reverseString("abc"), "cba");
check("reverseString(\"\")", () => reverseString(""), "");
 