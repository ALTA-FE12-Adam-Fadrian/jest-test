const {test} = require("@jest/globals");


const {primeNumber} = require("./problem3")



console.log(primeNumber(11)) // true
console.log(primeNumber(13)) // true
console.log(primeNumber(17)) // true
console.log(primeNumber(20)) // false
console.log(primeNumber(35)) // false
test("Test case 1", () => {
  expect(primeNumber(11)).toBe(true);
});

test("Test case 2", () => {
  expect(primeNumber(13)).toBe(true);
});

test("Test case 3", () => {
  expect(primeNumber(17)).toBe(true);
});

test("Test case 4", () => {
  expect(primeNumber(20)).toBe(true);
});

test("Test case 5", () => {
  expect(primeNumber(35)).toBe(false);
});

