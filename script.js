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
    constructor(name, health, strength, inventory) {
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

const frodo = new Character("Frodo", 150, 25);
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


console.log(frodo.describe());
console.log(aragorn.describe());
console.log(dragon.describe());


//dog class
class Dog {
    constructor(name,breed,size){
        this.name = name
        this.breed = breed
        this.size = size
    }

    bark(){
       return "WOOOOOOF"
    }
}

const sushi = new Dog("Sushi","Morkie",24)

console.log(`${sushi.name} is a ${sushi.breed} dog measuring ${sushi.size}`);
console.log(`Look, a cat! ${sushi.name} barks: ${sushi.bark()}`);

const snowy = new Dog("Snowy","Terrier",30)
console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);