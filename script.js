// const frodo = {
//     name: "frodo",
//     health: 150,
//     strength: 25,
//     xp: 0,
  
//     // Return the character description
//     describe() {
//       return `${this.name} has ${this.health} health points, ${this
//         .strength} as strength and ${this.xp} XP points`;
//     }
//   };
  
//   // frodo is harmed by an arrow
//   frodo.health -= 20;
  
//   // frodo gains a strength necklace
//   frodo.strength += 10;
  
//   // frodo learns a new skill
//   frodo.xp += 15;
  
//   console.log(frodo.describe());

//   const aragorn = {
//     name: "aragorn",
//     health: 130,
//     strength: 30,
//     xp: 0,
  
//     // Return the character description
//     describe() {
//       return `${this.name} has ${this.health} health points, ${this
//         .strength} as strength and ${this.xp} XP points`;
//     }
//   };

//   console.log(aragorn.describe());
  
/**USING CLASSES TO CREATE CHARACTERS IN RPG GAMES */


  //creating a class for the characters above
  class Character {
    constructor(name, health, strength) {
      this.name = name;
      this.health = health;
      this.strength = strength;
      this.xp = 0; // XP is always zero for new characters
    }

      

    // Attack a target
  attack(target) {
    if (this.health > 0) {
      const damage = this.strength;
      console.log(
        `${this.name} attacks ${target.name} and causes ${damage} damage points`
      );
      target.health -= damage;
      if (target.health > 0) {
        console.log(`${target.name} has ${target.health} health points left`);
      } else {
        target.health = 0;
        const bonusXP = 10;
        console.log(
          `${this.name} eliminated ${target.name} and wins ${bonusXP} experience points`
        );
        this.xp += bonusXP;
      }
    } else {
      console.log(`${this.name} can’t attack (they've been eliminated)`);
    }
  }
  // Return the character description

    // Return the character description
    describe() {
      return `${this.name} has ${this.health} health points, ${this
        .strength} as strength and ${this.xp} XP points`;
    }
  }



  //using the class above, use it to create objects/characters

const frodo = new Character("Frodo", 150, 25, 10,10);
const aragorn = new Character("Aragorn", 130, 30);
const dragon = new Character("Smaug",40,20)




//let game begin
console.log("Welcome to the adventure! Here are our heroes:");
console.log(frodo.describe());
console.log(aragorn.describe());

console.log("A dragon has appeared: it's named " + dragon.name);

dragon.attack(frodo);
dragon.attack(aragorn);
frodo.attack(dragon);
aragorn.attack(dragon);

console.log(frodo.describe());
console.log(aragorn.describe());
console.log(dragon.describe());





/*****DOG CLASS */
//dog class
// class Dog {
//     constructor(name,breed,size){
//         this.name = name
//         this.breed = breed
//         this.size = size
//     }

//     bark(){
//        return "WOOOOOOF"
//     }
// }

// const sushi = new Dog("Sushi","Morkie",24)

// console.log(`${sushi.name} is a ${sushi.breed} dog measuring ${sushi.size}`);
// console.log(`Look, a Gato! ${sushi.name} barks: ${sushi.bark()}`);

// const snowy = new Dog("Snowy","Terrier",30)
// console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
// console.log(`Look, a Gato! ${snowy.name} barks: ${snowy.bark()}`);

//objects using literal notation

// const person = {
//   name:["Bob","Smith"],
//   age: 32,
//   bio: function(){
//     console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old`);
//   },
//   introduceSelf: function(){
//     console.log(`Hi I'm ${this.name[0]}`);
    
//   }


// }

// function Person(name) {
//   this.name = name
//   this.introduceSelf = function () {
//     console.log(`Hi I am ${this.name}`);
    
//   }
// }

//objects using a constructor
// const eric = new Person("Eric");
// eric.name
// eric.introduceSelf()


//Test your skills: Objects basics
//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Test_your_skills:_Object_basics

//In our next task, we want you to have a go at creating your own object literal to represent one of your favorite bands.


const band = {
    name: "Ramona",
    nationality: "Mexico",
    genre: "Indie Rock",
    members:4,
    formed:2015,
    split: false,
    albums: [
      {name:"La segunda Luz del Dia",
      released:2015
      },
      {
        name:"Ceres",
        released:2017
      }
    ]
}

let bandInfo = `This ${band.genre} band ${band.name} from ${band.nationality} formed in  ${band.formed} released their first albumn titled ${band.albums[0].name} in ${band.albums[0].released}`

console.log(bandInfo);

///more object practice


const Cat = {
  name : 'Bertie',
  breed : 'Cymric',
  color : 'white',
  greeting: function() {
  console.log(`Hello, said ${Cat.name} the ${Cat.breed}.`);
  }
}

Cat.greeting()

///above code using constructor

function Gato(name,breed,color) {
  this.name = name
  this.breed = breed
  this.color = color
  this.greeting = function(){
    console.log(`Hello, said ${this.name} the ${this.color} ${this.breed}.`)
  }
}

let pantera = new Gato('Pantera','Panther','Black')
let cheetara = new Gato('Chetahra',"Cheetah",'Orange')
pantera.greeting()
cheetara.greeting()


//understanding classes
//to avoid redundancy create a new Person class
//this Person class will then share some properties
//to the Professor class and the Student class

class Person{
  constructor(name){
    this.name = name
  }
  
}

class Professor extends Person{//class declaration has extend keyword
  teaches//declare new properties here **optional
  constructor (name,teaches){//constructor instantiates an object with the following properties
    super(name); //call superclass constructor using super() along with the correct parameter previously declared in the parent super class above
    this.teaches = teaches
  }
  
  gradePaper() {//method
    console.log("You get an A");
  }
  introduction(){//method
    console.log(`My name is professor ${this.name} and I teach ${this.teaches}`);
  }
}
//creates two objects using the new keyword
let walsh = new Professor("Walsh", "CS101");
let lillian = new Professor("Lillian", "Poetry")

walsh.introduction()
lillian.introduction()


class Student extends Person{
  #year //new property declaration**optional
  constructor(name,year){
    super(name)
    this.#year = year //the # makes year private
  }
  introduction(){
    console.log(`Hello my name is ${this.name} and I am in ${this.#year}`);
  }
  canStudyArchery() {
    return this.#year>1;
  }
}

let gael = new Student("Gael",1)
gael.introduction()
console.log(gael.year);//will return undefined
gael.canStudyArchery()//should return true

//***TEST YOUR SKILLS */
// In this task we provide you with the start of a definition for a Shape class. It has three properties: name, sides, and sideLength. This class only models shapes for which all sides are the same length, like a square or an equilateral triangle.
// Add a constructor to this class. The constructor takes arguments for the name, sides, and sideLength properties, and initializes them.
// Add a new method calcPerimeter() method to the class, which calculates its perimeter (the length of the shape's outer edge) and logs the result to the console.
// Create a new instance of the Shape class called square. Give it a name of square, 4 sides, and a sideLength of 5.
// Call your calcPerimeter() method on the instance, to see whether it logs the calculation result to the browser's console as expected.
// Create a new instance of Shape called triangle, with a name of triangle, 3 sides and a sideLength of 3.
// Call triangle.calcPerimeter() to check that it works OK.
class Shape {
  constructor(name,sides,sideLength){
    this.name = name
    this.sides = sides
    this.sideLength = sideLength
  }
  calcPerimeter(){
    const perimeter = (this.sideLength)*(this.sides)
    console.log(`the perimeter of ${this.name} is ${perimeter}`);
  }

}

let square = new Shape("Square",4,5)
square.calcPerimeter()

let triangle = new Shape("Triangle",3,3)
triangle.calcPerimeter()

//Next creare a Square class that inherits from Shape and adds a calcArea() to calculate area of square. set up constructor so taht name property of Square is automatically set to square and sides to 4. the only property needed when invoking is sideLength 

class Square extends Shape {

  constructor(sideLength){
      super("square",4,sideLength)//this automatically sets name of square and number of sides to 4
  } 
    
  calcArea(){
    const area = (this.sideLength**2)
    console.log(`Area of ${this.name} is ${area}`);
    
  }
}

//create a square instance
  square = new Square(5)
 square.calcPerimeter()
 square.calcArea()