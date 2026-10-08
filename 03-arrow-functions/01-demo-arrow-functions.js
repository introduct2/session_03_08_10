// =============================================
// 3. ARROW FUNCTIONS — DEMO: Arrow functions
// =============================================
// An arrow function is a shorter way to write a function.
// We need them for array methods (next topic).

// Regular function
function double(n) {
  return n * 2;
}

// Arrow function — same thing
const doubleArrow = (n) => {
  return n * 2;
};

// Short arrow — when the body is ONE expression:
// no { }, no return — the value is returned automatically
const doubleShort = (n) => n * 2;

console.log(double(5), doubleArrow(5), doubleShort(5)); // 10 10 10

// Two parameters
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5

// Returning text
const greet = (name) => `Hello, ${name}!`;
console.log(greet("Maryam"));

// Returning a boolean
const isAdult = (age) => age >= 18;
console.log(isAdult(20), isAdult(15)); // true false
