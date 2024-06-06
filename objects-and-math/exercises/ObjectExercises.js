let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: function () { return Math.floor(Math.random() * 11) }
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 2,
   move: function () { return Math.floor(Math.random() * 11) }
};


// After you have created the other object literals, add the astronautID property to each one.
let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 3,
   move: function () { return Math.floor(Math.random() * 11) }
};

let dog = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 4,
   move: function () { return Math.floor(Math.random() * 11) }
};

let waterBear = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 5,
   move: function () { return Math.floor(Math.random() * 11) }
};

// Add a move method to each animal object

// Create an array to hold the animal objects.
let crew = [superChimpOne, superChimpTwo, salamander, dog, waterBear];

// Print out the relevant information about each animal.
function crewReports(animal) {
   console.log(`${animal["name"]} is a ${animal["species"]}. They are ${animal["age"]} years old and ${animal["mass"]} kilograms. Their ID is ${animal["astronautID"]}.`);
}
for (let i = 0; i < crew.length; i++) {
   crewReports(crew[i]);
}
// Start an animal race!
function fitnessTest(arr) {
   let results = [], numSteps, turns;
   for (let i = 0; i < arr.length; i++) {
      numSteps = 0;
      turns = 0;
      while (numSteps < 20) {
         numSteps += arr[i].move();
         turns++;
      }
      results.push(`${arr[i].name} took ${turns} turns to take 20 steps.`);
   }
   return results;

}
console.log(fitnessTest(crew));
