const { caesar } = require("../src/caesar");
const { expect } = require("chai");

describe("caesar function", () => {
    it("returns false if the shift value is not present", () => {
        const actual = caesar();
        expect(actual).to.be.false;
      });
    
    it("returns false if shift is 0, less than -25, or greater than 25", () => {
        let shift = 0;
        const actual = caesar();
        expect(actual).to.be.false;
        shift = -26
        expect(actual).to.be.false;
        shift = 26
        expect(actual).to.be.false;
    })

    it("should maintain spaces", () => {
        const actual = caesar("ab ab", 2);
        const expected = "cd cd";
        expect(actual).to.equal(expected);
    })

    it("should ignore capitalization", () => {
        const actual = caesar("Zebra Magazine", 3);
        const expected = "cheud pdjdclqh";
        expect(actual).to.equal(expected);
    })

    
    it("should wrap to front or back of alphabet if shift goes to beginning or end of alphabet", () => {
        const actual = caesar("abc", -3);
        const expected = "xyz";
        expect(actual).to.equal(expected);
    })

})