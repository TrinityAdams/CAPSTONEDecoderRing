// Write your tests here!

const { expect } = require("chai")
const { substitution } = require("../src/substitution")

describe('substitution',()=>{
    describe('error handling',()=>{
it('should return false if the substitution alphabet is missing',()=>{
    const actual = substitution("message")
    expect(actual).to.be.false;
})
it('should return false if the alphabet is not 26 characters',()=>{
    const actual = substitution("message",24)
    expect(actual).to.be.false;
})
it('should return false if the substitution alphabet does not contain unique characters',()=>{
    const actual = substitution("message","mremremremremremremremreee");
    expect(actual).to.be.false;
})
it('should alter a message by using the given substitution alphabet', ()=>{
const actual = substitution("message", "plmoknijbuhvygctfxrdzeswaq");
const expected = "ykrrpik";
expect(actual).to.equal(expected);
})

it('should work with any kind of key with unique characters', ()=>{
const actual = substitution("message", ".waeszrdxtfcygvuhbijnokmpl");
const expected = "ysii.rs";
expect(actual).to.equal(expected);
})
it('should preserve spaces',()=>{
    const message = "my message";
    const alphabet = ".waeszrdxtfcygvuhbijnokmpl"
    const actual = substitution("my message", ".waeszrdxtfcygvuhbijnokmpl");
    const expected = "yp ysii.rs";
    expect(actual).to.equal(expected);

});
    });

})
