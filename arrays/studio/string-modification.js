const input = require('readline-sync');
let str = "LaunchCode";
let question =input.question("pls enter the number of letters that will be relocated.");

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
if(str.length<question){
    question=3;
   
    console.log("Error: The given number is undefined index");
    console.log(`The number you given is larger than length of ${str} so we do default no 3`);
}
let str1 = str.slice(0,question);
let str2 = str.slice(question,str.length);
let str3 = str2.concat(str1);
console.log(str3);
//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`${str} is the original string from this we are getting modified string of ${str3}`);
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
