const {test} = require("@jest/globals")

const {exponentiation} = require("./problem2")


test("test 1", () => {
    expect(exponentiation(2, 3)).toBe(8);
})
test("test 1", () => {
    expect(exponentiation(2, 12)).toBe(4096);
})
