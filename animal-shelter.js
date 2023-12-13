const animalData = require('./animal-data.json');


class Animal {
    constructor(name, species, color, hunger = 50) {
        this.name = name,
        this.species = species,
        this.color = color,
        this.hunger = hunger
    }

    greet() {
        console.log(`Hi, I am ${this.name} the ${this.species}`)
    }

    feed() {
        this.hunger -= 20;
        console.log('Yum, I love food')
    }
} 


class Cat extends Animal {
    constructor(name, color, hunger = 50) {
        super(name, 'cat', color, hunger)
        this.food = 'fish'
    }
    greet() {
        console.log(`Meow, I am ${this.name} the ${this.species}.`)
    }
    feed() {
        this.hunger -= 20;
        console.log(`Yum, I love ${this.food}.`)
    }
}

class Dog extends Animal {
    constructor(name, color, hunger = 50) {
        super(name, 'dog', color, hunger)
        this.food = 'kibble'
    }
    greet() {
        console.log(`Woof, I am ${this.name} the ${this.species}.`)
    }
    feed() {
        this.hunger -= 20;
        console.log(`Yum, I love ${this.food}.`)
    }
}


class AnimalShelter {
    constructor() {
        this.animals = []
    }

    addAnimal(animal) {
        this.animals.push(animal)
    }

    adopt(animal) {
        const animalIndex = this.animals.indexOf(animal)
        this.animals.splice(animalIndex, 1)
    }

    getAnimalsBySpecies(species) {
        return this.animals.filter(n => n.species === species)
    }
}

const shelter = new AnimalShelter();

for (const i of animalData) {
    
    let animal;
    const hunger = i.hunger ? i.hunger : 50;
   
    if (i.species === 'cat') {
        animal = new Cat(i.name, i.color, hunger);
    } else if (i.species === 'dog') {
        animal = new Dog(i.name, i.color, hunger);
    } else {
        animal = new Animal(i.name, i.species, i.color, hunger);
    }
    shelter.addAnimal(animal)
}

const Jeff = new Cat('Jeff', 'black', 70)
const Bill = new Dog('Bill', 'brown', 80)

// console.table(Jeff)
// console.table(Bill)

// Jeff.greet()
// Jeff.feed()
// console.table(Jeff)

// Bill.greet()
// Bill.feed()
// console.table(Bill)

for (const animal of shelter.animals) {
    animal.greet()
    animal.feed()
}

for (const animal of shelter.animals) {
    console.table(animal)
}

console.table(shelter.getAnimalsBySpecies('dog'))