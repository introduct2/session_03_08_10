// =============================================
// 1. FUNCTIONS — TASK: Say hello
// =============================================
// Write sayHello(name) that RETURNS the text "Hello, <name>!".
// Example: sayHello("Fatma") -> "Hello, Fatma!"
//
// The checks at the bottom print ✅ when your function is correct.

function sayHello(name) {
  return `Hello, ${name}!`;
}

// ----- Checks (do not edit) -----
check("sayHello(\"Fatma\")", () => sayHello("Fatma"), "Hello, Fatma!");
check("sayHello(\"Khalid\")", () => sayHello("Khalid"), "Hello, Khalid!");
