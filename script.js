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
	constructor(){
		super("dog")
	}
	bark(){
		console.log(this.makeSound() +" woof")
	}
}

class Cat extends Animal {
	constructor(){
		super("cat")
	}
	purr(){
		console.log(this.makeSound() +" purr")
	}
}

let dog =new Dog();
dog.bark()
let cat =new Cat();
cat.purr()

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
