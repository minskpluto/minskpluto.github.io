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


function sumAll(num) {
    var result = 0;
    for(var i= 1; i<= num; i++){
    result= result+i;}
    return result;
}
console.log(sumAll(10));

// sumAll(10);