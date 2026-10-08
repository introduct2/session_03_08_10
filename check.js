// Checks helper — do not edit.
// Prints ✅ when a function returns the expected value, ❌ otherwise.

function check(label, run, expected) {
  let actual;
  try {
    actual = run();
  } catch (error) {
    console.log(`❌ ${label} -> error: ${error.message}`);
    return;
  }
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  if (ok) {
    console.log(`✅ ${label}`);
  } else {
    console.log(`❌ ${label} -> expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`);
  }
}

globalThis.check = check;
