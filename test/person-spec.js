const chai = require('chai')
const expect = chai.expect
const Person = require('../problems/person')
const spies = require('chai-spies')
chai.use(spies)

describe('Person', () => {
    let person1, person2;
    beforeEach(() => {

        person1 = new Person('Mai', 30)
        person2 = new Person('Erin', 28)

    })

    describe('constructor', () => {
        it('should set name and age properties on the instance', () => {
            expect(person1.name).to.equal('Mai')
            expect(person1.age).to.equal(30)
        })
    })
    describe('sayHello()', () => {
        it("should return a greeting message with the person's name", () => {
            expect(person1.sayHello()).to.equal('Hello, my name is Mai.')

        })
    })
    describe('visit(otherPerson)', () => {
        it('should return a visit message', () => {
            expect(person1.visit(person2)).to.equal('Mai visited Erin.')
        })
    })

    describe('switchVisit(otherPerson)', () => {
        it('should invoke the visit function of the parameter', () => {
            expect(person1.switchVisit(person2)).to.equal('Erin visited Mai.')
        })
        it('should call otherPerson.visit',() => {
            const otherPersonSpy = chai.spy.on(person2, 'visit')
            person1.switchVisit(person2)
            expect(otherPersonSpy).to.have.been.called.once;
        })
    })
    describe('update(obj)', () => {
        it('should throw a TypeError if the incoming argument is not an object', () => {
            expect(() => person1.update('invalid')).to.throw(TypeError, 'Argument must be an object')
        })
    })
})
