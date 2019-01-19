//while :repeat!!!

var i = 1;
var result = 1;

while(i <= 5){
    result = result * i;
    i = i + 1;
}

console.log(result);
//shorthand: for
var result2 = 1;

for(var j=1;j <= 10; j++) {
    result2 = result2 + j;
}

console.log(result2)

//j++ means j=j+1