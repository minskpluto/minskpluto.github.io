//return keyword
var a = 10;
var b = 15;

function add(num1, num2){
    var sum = num1 + num2;
    return sum;
}

var result1 = add(a,b); //call
   console.log(result1);

//subtract function

function subtract(num1, num2){
    var difference = num1 - num2;
    return difference;
}
    
var result2 = subtract(a,b);
console.log(result2);

//challenging : takes a positive integer (number input)
//and calculate the sum of 1 to the input.
//(hint) for loop inside a function

for(var j=1;j <= 10; j++) {
    result2 = result2 + j;
}
console.log(result2);