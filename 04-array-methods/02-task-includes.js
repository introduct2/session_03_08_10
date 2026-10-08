// =============================================
// 4. ARRAY METHODS — TASK: Has city?
// =============================================
// Write hasCity(cities, city) that returns true if city is in the array.
// Use: includes
//
// The checks at the bottom print ✅ when your function is correct.

function hasCity(cities, city) {

  return cities.includes(city);
}

// ----- Checks (do not edit) -----
check("hasCity([\"Muscat\", \"Sur\"], \"Sur\")", () => hasCity(["Muscat", "Sur"], "Sur"), true);
check("hasCity([\"Muscat\", \"Sur\"], \"Ibri\")", () => hasCity(["Muscat", "Sur"], "Ibri"), false);
check("hasCity([], \"Muscat\")", () => hasCity([], "Muscat"), false);
