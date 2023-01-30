const {test} = require("@jest/globals")

const {studentScore} = require("./problem1")

test("test 1", () => {
    expect(studentScore(80)).toEqual("A");
})
test("test 1", () => {
    expect(studentScore(65)).toEqual("B+");
})
test("test 1", () => {
    expect(studentScore(51)).toEqual("B");
})
test("test 1", () => {
    expect(studentScore(36)).toEqual("C");
})
test("test 1", () => {
    expect(studentScore(15)).toEqual("D");
})
test("test 1", () => {
    expect(studentScore(111)).toEqual("invalid");
})

