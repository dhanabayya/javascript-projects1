let str = "blue";
let reversed = "";

for (let i = 0; i < str.length; i++) {
    reversed = str[i] + reversed;
}

//for(let i= str.length-1; i>-1; i--){
//   reversed = reversed+str[i];
//}
console.log(reversed);