// =============================================
// 2. FUNCTIONS AND LOOPS — TASK: Count vowels
// =============================================
// Write countVowels(text) that counts the letters a, e, i, o, u in the text.
// The text is always lowercase.
// Hint: for...of works on strings too — it gives you one letter at a time.
//
// The checks at the bottom print ✅ when your function is correct.


function countVowels(text) {
  let count = 0;
  const vowels = "aeiou";
  
  for (let char of text) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  
  return count;
}

// ----- Checks (do not edit) -----
check("countVowels(\"muscat\")", () => countVowels("muscat"), 2);
check("countVowels(\"salalah\")", () => countVowels("salalah"), 3);
check("countVowels(\"sky\")", () => countVowels("sky"), 0);
