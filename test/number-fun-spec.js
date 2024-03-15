// Your code here
const { expect } = require('chai')
const { returnsThree, reciprocal } = require('../problems/number-fun')

describe('returnsThree', () => {
    it('should return the number 3', () => {
    const result = returnsThree(3)
        expect(result).to.equal(3)
})
})

describe('reciprocal', () => {
    it('should return the reciprocal of the given argument', () => {
        expect(reciprocal(2)).to.equal(0.5)
        expect(reciprocal(5)).to.equal(0.2)
    })

    it('should return 1 for arguement 1', () => {
        expect(reciprocal(1)).to.equal(1);
    })

    it('should return 0.000001 for argument 1000000', () => {
        expect(reciprocal(1000000)).to.equal(0.000001);
    })


    it('should not accept an argument less than 0 or over 1000000', () => {
        expect(() => reciprocal(0)).to.throw(RangeError, "Arguement must be between 1 and 1000000")
        expect(() => reciprocal(1000001)).to.throw(RangeError, "Arguement must be between 1 and 1000000")
    })
})
