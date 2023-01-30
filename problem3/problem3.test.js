const {test} = require("@jest/globals");


const {primeNumber} = require("./problem3")

test("Test case 1", () => {
  expect(primeNumber(11)).toEqual(true);
});

test("Test case 2", () => {
  expect(primeNumber(13)).toEqual(true);
});

test("Test case 3", () => {
  expect(primeNumber(17)).toEqual(true);
});

test("Test case 4", () => {
  expect(primeNumber(20)).toEqual(false);
});

test("Test case 5", () => {
  expect(primeNumber(35)).toEqual(false);
});

