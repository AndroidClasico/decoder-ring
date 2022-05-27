const { substitution } = require("../src/substitution");
const { expect } = require("chai");

describe("substitution function", () => {

    describe("error handling", () => {
        it("returns false is alphabet is not exactly 26 characters in length", () => {
            let input = '';
            let alphabet = 'yhg';
            let actual = substitution(input, alphabet, (encode = true));
            expect(actual).to.be.false;
            alphabet = '' 
            expect(actual).to.be.false;
        })
        it("returns false if any duplicate characters in alphabet", () => {
            let alphabet = 'abbcccddddefghijklmpooqwty'
            let actual = substitution("input", alphabet);
            expect(actual).to.be.false;
        })
        it("should ignore capitalization", () => {
            let input = "ABcde";
            let alphabet = "lmopknijbruhvyqctfxdzeswag";
            let expected = "lmopk";
            let actual = substitution(input, alphabet);
            expect(actual).to.equal(expected);

        })
    

    })
    
    describe("encoding a message", () => {
        it("should encode a message by using the given substitution alphabet", () => {
            let input = "abcde";
            let alphabet = "lmopknijbruhvyqctfxdzeswag";
            let expected = "lmopk";
            let actual = substitution(input, alphabet, (encode = true));
            expect(actual).to.equal(expected);
        })
        it("should work with any kind of key with unique characters", () => {
            let input = "abc";
            let alphabet = "!?opknijbruhvyqctfxdzeswag";
            let expected = "!?o"
            let actual = substitution(input, alphabet, (encode = true));
            expect(actual).to.equal(expected);
        })
        it("should preserve spaces", () => {
            let input = "a caz";
            let alphabet = "!?opknijbruhvyqctfxdzeswag";
            let expected = "! o!g"
            let actual = substitution(input, alphabet, (encode = true));
            expect(actual).to.equal(expected);
        })


    })
    
    describe("decoding a message", () => {
        it("should decode a message by using the given substitution alphabet", () => {
            let input = "lmopk";
            let alphabet = "lmopknijbruhvyqctfxdzeswag";
            let expected = "abcde";
            let actual = substitution(input, alphabet, (encode = false));
            expect(actual).to.equal(expected);
        })
        it("should work with any kind of key with unique characters", () => {
            let input = "!?o";
            let alphabet = "!?opknijbruhvyqctfxdzeswag";
            let expected = "abc";
            let actual = substitution(input, alphabet, (encode = false));
            expect(actual).to.equal(expected);
        })
        it("should preserve spaces", () => {
            let input = "! o!g";
            let alphabet = "!?opknijbruhvyqctfxdzeswag";
            let expected = "a caz";
            let actual = substitution(input, alphabet, (encode = false));
            expect(actual).to.equal(expected);
        })
    

    })

})