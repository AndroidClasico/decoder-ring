const { expect } = require("chai");
const { polybius } = require("../src/polybius");

//
describe("polybius function", () => {
    it("should encode a message by translating each letter to number pairs", () => {
        const input = "two";
        const actual = polybius(input);
        const expected = "442543"
        expect(actual).to.equal(expected);
    })
    it("decodes an input of numbers into letters", () => {
        const input = "442543";
        const actual = polybius(input, false);
        const expected = "two"
        expect(actual).to.equal(expected);
    })
    it("should maintain spaces", () => {
        let input = "two two";
        let actual = polybius(input);
        let expected = "442543 442543";
        expect(actual).to.equal(expected);
    })
    it("should ignore capitalization", () => {
        let input = "Hi";
        let actual = polybius(input);
        let expected = "3242";
        expect(actual).to.equal(expected);
    })
    it("should translate 42 to (i/j)", () => {
        let input = "42"
        let actual = polybius(input, false);
        let expected = "(i/j)";
        expect(actual).to.equal(expected);
    })  
    it("should translate i and j to 42", () => {
        let input = "ij"
        let actual = polybius(input);
        let expected = "4242";
        expect(actual).to.equal(expected);
    })
    it("should return false if input (excluding spaces) is an odd number of characters when decoding", () => {
        let input = "44254";
        let actual = polybius(input, false);
        expect(actual).to.be.false;
    })
})