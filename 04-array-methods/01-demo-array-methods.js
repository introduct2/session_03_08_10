// =============================================
// 4. ARRAY METHODS — DEMO: Array methods
// =============================================
// Array methods take a FUNCTION (usually an arrow function)
// and run it for every item in the array.
//
//   array.forEach(fn)  -> runs fn for each item, returns nothing
//   array.map(fn)      -> NEW array, every item changed by fn
//   array.filter(fn)   -> NEW array, only items where fn returns true
//   array.find(fn)     -> FIRST item where fn returns true (or undefined)
//   array.some(fn)     -> true if AT LEAST ONE item passes
//   array.every(fn)    -> true if ALL items pass
//   array.includes(x)  -> true if x is in the array

const prices = [600, 150, 2500, 800];

// forEach — do something with every item
prices.forEach((price) => console.log(`${price} baisa`));

// map — change every item, get a new array
const inOMR = prices.map((price) => price / 1000);
console.log(inOMR);  // [0.6, 0.15, 2.5, 0.8]
console.log(prices); // original is NOT changed

// filter — keep only some items
const cheap = prices.filter((price) => price < 1000);
console.log(cheap); // [600, 150, 800]

// find — get the first match
console.log(prices.find((price) => price > 1000)); // 2500
console.log(prices.find((price) => price > 9000)); // undefined

// some / every — yes or no questions
console.log(prices.some((price) => price > 2000));  // true
console.log(prices.every((price) => price > 100));  // true

// includes — is this value in the array?
const cities = ["Muscat", "Salalah", "Sohar"];
console.log(cities.includes("Sohar")); // true
console.log(cities.includes("Sur"));   // false

// With objects — the most common case
const menu = [
  { name: "Shawarma", price: 600, category: "food" },
  { name: "Karak", price: 150, category: "drink" },
  { name: "Fresh juice", price: 800, category: "drink" },
];
console.log(menu.map((item) => item.name));                     // ["Shawarma", "Karak", "Fresh juice"]
console.log(menu.filter((item) => item.category === "drink"));  // the 2 drink objects
console.log(menu.find((item) => item.name === "Karak"));        // the Karak object

// Chaining — filter first, then map
const drinkNames = menu
  .filter((item) => item.category === "drink")
  .map((item) => item.name);
console.log(drinkNames); // ["Karak", "Fresh juice"]
