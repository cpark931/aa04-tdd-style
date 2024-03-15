const {expect} = require("chai");

const reverseString = require ("../problems/reverse-string");


describe ("reverseString",() => {

    it ("Should reverse the string",() => {
        const result = reverseString ("fun");
        expect(result).to.equal("nuf");
    })
    })
    it ("Should throw a TypeError if argument is not a string", () => {
        expect(() => reverseString(123)).to.throw(TypeError)
    })
