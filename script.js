//complete this code
class Animal {
	constructor(species){
		this.species = species
	}
	makeSound(){
		return this.species+" make sound"
	}
}

class Dog extends Animal {
	constructor(species){
		super(species)
	}
	bark(){
		console.log(this.makeSound() +" woof")
	}
}

class Cat extends Animal {
	constructor(species){
		super(species)
	}
	purr(){
		console.log(this.makeSound() +" purr")
	}
}

let dog =new Dog("dog");
dog.bark()
let cat =new Cat("cat");
cat.purr()

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
