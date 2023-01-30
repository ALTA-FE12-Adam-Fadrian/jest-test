const {test} = require("@jest/globals")

const {studentScore} = require("./problem1")

test("test 1", () => {
    expect(studentScore(80)).toBe("A");
})
test("test 1", () => {
    expect(studentScore(65)).toBe("B+");
})
test("test 1", () => {
    expect(studentScore(51)).toBe("B");
})
test("test 1", () => {
    expect(studentScore(36)).toBe("C");
})
test("test 1", () => {
    expect(studentScore(15)).toBe("D");
})
test("test 1", () => {
    expect(studentScore(111)).toBe("invalid");
})

