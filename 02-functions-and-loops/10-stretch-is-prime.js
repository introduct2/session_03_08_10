// =============================================
// 2. FUNCTIONS AND LOOPS — STRETCH: Prime number
// =============================================
// Write isPrime(n). A prime number is bigger than 1 and can only be divided
// by 1 and itself (2, 3, 5, 7, 11, 13 ...).
// Hint: loop from 2 to n - 1 and check n % i.
//
// The checks at the bottom print ✅ when your function is correct.


function isPrime(n) {
  if (n <= 1) return false;
  
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false; 
    }
  }
  
  return true;
}


// ----- Checks (do not edit) -----
check("isPrime(2)", () => isPrime(2), true);
check("isPrime(7)", () => isPrime(7), true);
check("isPrime(13)", () => isPrime(13), true);
check("isPrime(1)", () => isPrime(1), false);
check("isPrime(9)", () => isPrime(9), false);
