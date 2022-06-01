const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe('caesar', () => {
    describe("error handling", () => {
it("should return false if the shift amount is 0", () =>{
    const actual = caesar("message",0);
    expect(actual).to.be.false;
})

it("should return false if the shift amount is greater than 25", () =>{
    const actual = caesar("message", 26);
    expect(actual).to.be.false;
})

it("should return false if the shift amount is less than -25", () => {
    const actual = caesar("message", -27);
    expect(actual).to.be.false;
});
    });
/*    describe('error handling', () => {
        it('returns lowercase letters/ignores capital letters ', () => {
            const expected = "phvvdjh";
            const actual = caesar("MESSAGE", 3);
            expect(actual).to.equal(expected);
        });
        it('shifts letters through the alphabet', () => {
            const expected = "qiwweki";
            const actual = caesar("message", 4);
            expect(actual).to.equal(expected);
        });
        it('should maintain spaces and other non-alphabet symbols', () => {
            const expected = "qiwweki!!";
            const actual = caesar("message!!", 4);
            expect(actual).to.equal(expected);
        });
    })
});*/
describe("encoding a message", () => {
it ("should return an encoded message by shifting the letters", () => {
    const message = "test"
    const shift = 3
    const actual = caesar(message, shift);
    const expected = "whvw"
    expect(actual).to.equal(expected);
})

it("should include spaces and nonalphabetic symbols", () => {
    const message = "test! Test!"
    const shift = 3
    const actual = caesar(message, shift);
    const expected = "whvw! whvw!"
    expect(actual).to.equal(expected);
})

it("should ignore capital letters", () => {
    const message = "Test"
    const shift = 1
    const actual = caesar(message, shift);
    const expected = "uftu"
    expect(actual).to.equal(expected);
})

it("should allow for a negative shift to the left", () => {
    const message = "test"
    const shift = -1
    const actual = caesar(message, shift);
    const expected = "sdrs"
    expect(actual).to.equal(expected);
})
})

describe("decoding a message", () =>{
it("should decode a message by shifting the letters the opposit direction", () => {
    const message = "uftu"
    const shift = 1
    const actual = caesar(message, shift, false);
    const expected = "test"

    expect(actual).to.equal(expected);
})
it ("should return a decoded message by shifting the letters", () => {
    const message = "test"
    const shift = 3
    const actual = caesar(message, shift);
    const expected = "whvw"
    expect(actual).to.equal(expected);
})

it("should include spaces and nonalphabetic symbols", () => {
    const message = "Test! Test!"
    const shift = 3
    const actual = caesar(message, shift);
    const expected = "whvw! whvw!"
    expect(actual).to.equal(expected);
})

it("should ignore capital letters", () => {
    const message = "Test"
    const shift = 1
    const actual = caesar(message, shift);
    const expected = "uftu"
    expect(actual).to.equal(expected);
})

it("should allow for a negative shift to the left", () => {
    const message = "test"
    const shift = -1
    const actual = caesar(message, shift);
    const expected = "sdrs"
    expect(actual).to.equal(expected);
})
})
})