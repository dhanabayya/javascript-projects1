const input = require('readline-sync');

let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//a) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
food = food.split(',').sort();
equipment = equipment.split(',').sort();
pets = pets.split(',').sort();
sleepAids = sleepAids.split(',').sort();
//b) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold=[];
cargoHold.push(food,equipment,pets,sleepAids);
console.log(cargoHold);

//c) Query the user to select a cabinet (0 - 3) in the cargoHold.
let question=input.question("Please select a cabinet(0-3) in the cargoHold : ");

//d) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
if(question<=3){
    console.log(`Hey, [${cargoHold[question]}] is the selected cabinet in the cargoHold  by you.`);
}else{
    console.log("Hey you are trying to access undefined index.");
}

//e) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
//let index1 = input.question("enter the first indexno: ");

let text = input.question("enter the item that you want to search:" );
if(cargoHold[question].includes(text)){
    console.log(`“Cabinet ${question} DOES contain ${text}.`)

}
else{
    console.log(`“Cabinet ${question} DOESNOT contain ${text}.`)
}