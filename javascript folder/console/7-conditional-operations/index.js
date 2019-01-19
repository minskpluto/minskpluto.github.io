var a=10;
var b=6;

if (a > b) {
    console.log("a is larger than b");
}

var c = 4;
var d=7;

if (c>d) {
    console.log("c is larger than d")
}

var e="Minseo"
var f="Jihun"

if (e>f) {
    console.log("Minseo is larger than Jihun");
}

if (e.length > f.length) {
    console.log("Minseo wins!!!")
}

//if else

var g=12;
var h=5;

//there is a logic error. If g is equal to twelve, the result is incorrect.
if (g%h>2){
    console.log("The remainder is larger than 2")
}else{
    console.log("The remainder is smaller than 2")
}

// if ...else if ...(else)

if (g%h>2){
    console.log("The remainder is larger than 2")
}else if (g%h<2){
    console.log("The remainder is smaller than 2")
}else {
    console.log("The remainder is equal to 2")
}