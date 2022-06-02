// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe('polybius', () => {
    describe("message handling", () => {
    it("should encode a message by translating each letter to number pairs", () =>{
        const actual = polybius( "test");
        const expected = "44513444";
    expect(actual).to.equal(expected);
})
    it("should translate both 'i' and 'j' to 42", () =>{
        const actual = polybius("jiggle");
        const expected = "424222221351";
    expect(actual).to.equal(expected);
})
    it("should leave spaces as is", () => {
        const actual = polybius("a test");
        const expected = "11 44513444"
    expect(actual).to.equal(expected);
})
    it('should decode a message by translating each pair of numbers into a letter.', () =>{
        const actual = polybius("44513444", false);
        const expected = "test"
    expect(actual).to.equal(expected);
});
    it('should return false if the length of all numbers is odd',()=>{
        const actual = polybius("43434353344", false);
    expect(actual).to.be.false;
    });
})
})