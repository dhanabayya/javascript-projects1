function makeLine(size){
    let line = '';
    for(let i = 0; i < size; i++){
        line += '#';     
    }
    return line;
}
console.log(makeLine(5));
function makeSquare(size){
    let square = "";
    for(let i = 0; i < size; i++){
       square += makeLine(size)+ "\n";
    }return square.trim();
    
}
console.log(makeSquare(5));
function makeRectangle(width, height){
    let rectangle = '';
    for(let i = 0; i < height; i++){
        rectangle += makeLine(width)+"\n";
    }
    return rectangle.trim();
}
console.log(makeRectangle(5,3));
function makeDownwardStairs(height){
    let stairs ='';
    for(let i = 1; i <= height; i++){
        stairs += makeLine(i)+"\n";
    }
    return stairs.trim();
}
console.log(makeDownwardStairs(5));
function makeSpaceLine(numSpaces, numChars){
    let spaceLine ="";
    for(let i = 0; i < numSpaces; i++){
        spaceLine += ' ';
    }
    return spaceLine += makeLine(numChars)+spaceLine;
}
console.log(makeSpaceLine(3,5));
function makeIsoscelesTriangle(height){
    let triangle ='';
    for(let i = 0; i < height; i++){
        triangle += makeSpaceLine(height-i-1,i*2+1)+"\n";
    }
    return triangle.slice(0, -1);
}
console.log(makeIsoscelesTriangle(5));
function makeDiamond(height){
    let daimond ="";
    daimond += makeIsoscelesTriangle(height)+"\n"+makeIsoscelesTriangle(height).split('').reverse().join('');
    return daimond;
}
console.log(makeDiamond(5));