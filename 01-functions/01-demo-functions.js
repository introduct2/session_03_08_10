// =============================================
// 1. FUNCTIONS — DEMO: What is a function
// =============================================
// A function is a named block of code you can run many times.
//
//   function name(parameter1, parameter2) {
//     return result;
//   }
//
// parameter -> the input name inside the function (a, b)
// argument  -> the real value you pass when you call it (2, 3)
// return    -> sends a value BACK to where the function was called

// 1. A function without parameters
function sayHi() {
  console.log("Hi!");
}
sayHi(); // calling the function
sayHi(); // we can call it again and again

// 2. Parameters and return
function add(a, b) {
  return a + b;
}
const result = add(2, 3);
console.log(result);      // 5
console.log(add(10, 20)); // 30

// 3. return vs console.log
function logDouble(n) {
  console.log(n * 2); // only PRINTS the value
}
function getDouble(n) {
  return n * 2;       // GIVES the value back
}
const a = logDouble(5); // prints 10
const b = getDouble(5); // prints nothing
console.log(a);         // undefined — logDouble gave nothing back
console.log(b);         // 10 — we can use this value

// 4. return stops the function
function checkAge(age) {
  if (age >= 18) {
    return "Adult";
  }
  return "Minor"; // only reached when age < 18
}
console.log(checkAge(25));
console.log(checkAge(12));

// 5. One function, many uses
function shawarmaCost(count) {
  return count * 600;
}
console.log(`1 shawarma: ${shawarmaCost(1)} baisa`);
console.log(`3 shawarma: ${shawarmaCost(3)} baisa`);
