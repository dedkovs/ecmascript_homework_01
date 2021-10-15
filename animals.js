class Animal {
  #name;
  constructor(name) {
    this.#name = name;
  }

  get name() {
    return this.#name;
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
    this.created = new Date();
  }
}

const dog = new Dog('Rex');

console.log('%c*** ANIMALS ***', 'color: dodgerblue');
console.log(dog.name);
