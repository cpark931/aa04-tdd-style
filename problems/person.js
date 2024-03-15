class Person {
  constructor (name, age){
    this.name = name;
    this.age = age;
  }
  sayHello() {
    return `Hello, my name is ${this.name}.`;
  }

  visit(otherPerson) {
    return `${this.name} visited ${otherPerson.name}.`;
  }

  switchVisit(otherPerson) {
    return otherPerson.visit(this);
   //return `${otherPerson.name} visited ${this.name}.`
  }

  update(obj) {
    if (typeof obj !== 'object'){
      throw new TypeError ('Argument must be an object');
    }
  }
}

module.exports = Person;
