// =============================================
// 5. FINAL — STRETCH: Library search
// =============================================
// Write these functions using array methods:
//   availableTitles(books)      -> titles of available books
//   booksBefore(books, year)    -> titles of books published before that year
//   findByAuthor(books, author) -> the book object of that author, or undefined
//   newestTitle(books)          -> title of the newest book
//
// The checks at the bottom print ✅ when your function is correct.

const books = [
  { title: "Season of Migration to the North", author: "Tayeb Salih", year: 1966, available: true },
  { title: "Celestial Bodies", author: "Jokha Alharthi", year: 2010, available: false },
  { title: "Men in the Sun", author: "Ghassan Kanafani", year: 1962, available: true },
  { title: "Palace Walk", author: "Naguib Mahfouz", year: 1956, available: true },
  { title: "Frankenstein in Baghdad", author: "Ahmed Saadawi", year: 2013, available: false },
];

function availableTitles(books) {
  return books.filter(book => book.available).map(book => book.title);
}

function booksBefore(books, year) {
  return books.filter(book => book.year < year).map(book => book.title);
}

function findByAuthor(books, author) {
  return books.find(book => book.author === author);
}

function newestTitle(books) {
  if (books.length === 0) return undefined;
  const newest = books.reduce((latest, book) => book.year > latest.year ? book : latest);
  return newest.title;
}

// ----- Checks (do not edit) -----
check("availableTitles(books)", () => availableTitles(books), ["Season of Migration to the North", "Men in the Sun", "Palace Walk"]);
check("booksBefore(books, 1965)", () => booksBefore(books, 1965), ["Men in the Sun", "Palace Walk"]);
check("findByAuthor(books, \"Jokha Alharthi\").title", () => findByAuthor(books, "Jokha Alharthi").title, "Celestial Bodies");
check("findByAuthor(books, \"Unknown\")", () => findByAuthor(books, "Unknown"), undefined);
check("newestTitle(books)", () => newestTitle(books), "Frankenstein in Baghdad");
