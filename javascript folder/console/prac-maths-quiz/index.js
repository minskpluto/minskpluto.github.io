var additionqElement = document.querySelector(".additionq");
var subtractionqElement = document.querySelector(".subtractionq");
var multiplicationqElement = document.querySelector(".multiplicationq");
var divisionqElement = document.querySelector(".divisionq");

//Question generator function - addition, subtraction, multiplication and division

var questions = [];
var answers = []

function createadditionq () {
    var randomInteger1 = Math.ceil(Math.random()*9); //0-9.
    var randomInteger2 = Math.ceil(Math.random()*9);
    questions[0] = `${randomInteger1} + ${randomInteger2} =`;
    answers[0] = randomInteger1 + randomInteger2;
    additionqElement.innerHTML = questions[0];
}

function createsubtractionq() {
    var randomInteger1 = Math.ceil(Math.random()*9); //0-9.
    var randomInteger2 = Math.ceil(Math.random()*9);
    var bignumber;
    var smallnumber;
    if (randomInteger1 >= randomInteger2) {
        bignumber = randomInteger1;
        smallnumber = randomInteger2;
    } else if (randomInteger1 < randomInteger2) {
        bignumber = randomInteger2;
        smallnumber = randomInteger1;
    }
    questions[1] = `${bignumber} - ${smallnumber} =`;
    answers[1] = bignumber - smallnumber;
    subtractionqElement.innerHTML = questions[1];
    
}
function createmultiplicationq () {
    var randomInteger1 = Math.ceil(Math.random()*9); //0-9.
    var randomInteger2 = Math.ceil(Math.random()*9);
    questions[2] = `${randomInteger1} × ${randomInteger2} =`;
    answers[2] = randomInteger1 * randomInteger2;
    multiplicationqElement.innerHTML = questions[2];
}

function createdivisionq() {
    var randomInteger1 = Math.ceil(Math.random()*9); //0-9.
    var randomInteger2 = Math.ceil(Math.random()*9);
    var divisor;
    var dividend;
    var quotient;
    
    divisor = randomInteger1;
    dividend = randomInteger2;
    quotient = divisor * dividend;
    
    questions[3] = `${quotient}÷${divisor} =`;
    answers[3] = quotient/divisor;
    divisionqElement.innerHTML = questions[3];
}

var additionquseranswerelement = document.querySelector(".additionanswerInput")
var subtractionquseranswerelement = document.querySelector(".subtractionanswerInput")
var multiplicationquseranswerelement = document.querySelector(".multiplicationanswerInput")
var divisionquseranswerelement = document.querySelector(".divisionanswerInput")

console.log(additionquseranswerelement);
additionquseranswerelement.addEventListener("keyup", handleEnterKey);
function handleEnterKey() {
    
    if(event.code=="Enter") {
        //check the answer
        var useranswer = additionquseranswerelement.value;
        console.log(useranswer);
        if(useranswer == answers[0]) {
            alert("You are smart!!! :)")
            // remove the value of the user input
            additionquseranswerelement.value = "";
            //if correct, generates new question
            createadditionq();
        } else {
            alert(`You are stupid!!!`);
        }
    }
}

console.log(subtractionquseranswerelement);
subtractionquseranswerelement.addEventListener("keyup", handleEnterKey);
function handleEnterKey() {
    if(event.code=="Enter") {
        var useranswer = subtractionquseranswerelement.value;
        console.log(useranswer);
        if(useranswer == answers[1]) {
            alert("You are smart!!!")
            subtractionquseranswerelement.value = "";
            createsubtractionq();
        }else {
            alert('You are stupid!!!');
        }
    }
}

//handleaddtionEnterKey vs handlesubtractionenterkey

createadditionq();
createsubtractionq();
createmultiplicationq();
createdivisionq();

