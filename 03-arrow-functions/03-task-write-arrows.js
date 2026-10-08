// =============================================
// 3. ARROW FUNCTIONS — TASK: Write arrow functions
// =============================================
// Write these as short arrow functions:
//   square(n)      -> n * n
//   toBaisa(omr)   -> omr * 1000
//   welcome(city)  -> "Welcome to <city>!"
//   isHot(temp)    -> true if temp is 40 or more
//
// The checks at the bottom print ✅ when your function is correct.

const square = (n) => n * n;
const toBaisa = (omr) => omr * 1000;
const welcome = (city) => `Welcome to ${city}!`;
const isHot = (temp) => temp >= 40;

// ----- Checks (do not edit) -----
check("square(6)", () => square(6), 36);
check("toBaisa(2.5)", () => toBaisa(2.5), 2500);
check("welcome(\"Nizwa\")", () => welcome("Nizwa"), "Welcome to Nizwa!");
check("isHot(43)", () => isHot(43), true);
check("isHot(30)", () => isHot(30), false);
