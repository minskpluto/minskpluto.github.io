var additionqElement = document.querySelector(".additionq");
var subtractionqElement = document.querySelector(".subtractionq");
var multiplicationqElement = document.querySelector(".multiplicationq");
var divisionqElement = document.querySelector(".divisionq");

//Question generator function - addition, subtraction, multiplication and division

var questions = {};
var answers = {};

function createQuestion (type) {
    var randomInteger1 = Math.ceil(Math.random()*9); //0-9.
    var randomInteger2 = Math.ceil(Math.random()*9);

    if (type === "addition") {
        createAddQuestion(randomInteger1, randomInteger2);
    } else if (type==="subtraction") {
        createSubtractQuestion(randomInteger1, randomInteger2);
    } else if (type ==="multiplication") {
        createMultiplicationQuestion(randomInteger1, randomInteger2);
    } else if(type ==="division") {
        createDivisionQuestion(randomInteger1, randomInteger2);
    }
}

function createAddQuestion (num1, num2) {
    questions["addition"] = `${num1} + ${num2} = `;
    answers["addition"] = num1 + num2;
    additionqElement.innerHTML = questions["addition"];
}

function createSubtractQuestion (num1, num2) {
    var smallnumber;
    var bignumber;
    if (num1>=num2){
        bignumber = num1;
        smallnumber = num2;
    } else if (num1<num2) {
        bignumber = num2;
        smallnumber = num1;
    }
    questions["subtraction"] = `${bignumber} - ${smallnumber} = `;
    answers ["subtraction"] = bignumber - smallnumber;
    subtractionqElement.innerHTML = questions["subtraction"];
}

function createMultiplicationQuestion(num1, num2) {
    questions["multiplication"] = `${num1} * ${num2} = `;
    answers["multiplication"] = num1 * num2;
    multiplicationqElement.innerHTML = questions["multiplication"];
}

function createDivisionQuestion (num1, num2) {
    var divisor;
    var quotient;
    var dividend;

    quotient = num1 * num2;
    divisor = num1;
    dividend = num2; 

    questions["division"] = `${quotient} ÷ ${divisor} =`;
    divisionqElement.innerHTML = questions["division"];
    answers["division"] = dividend;
}

createQuestion("addition");
createQuestion("subtraction");
createQuestion("multiplication");
createQuestion("division");

var additionInputElement = document.querySelector('.additionanswerInput');
var subtractionInputElement = document.querySelector('.subtractionanswerInput');
var multiplicationInputElement = document.querySelector('.multiplicationanswerInput');
var divisionInputElement = document.querySelector('.divisionanswerInput');

additionInputElement.addEventListener('keyup', handleEnterKey);
subtractionInputElement.addEventListener('keyup', handleEnterKey);
multiplicationInputElement.addEventListener('keyup', handleEnterKey);
divisionInputElement.addEventListener('keyup', handleEnterKey);

function handleEnterKey() {
    if (event.code ==="Enter") {
        var targetInputElement = event.target;
        var useranswer = targetInputElement.value;
        var questionType = targetInputElement.dataset.questionType;
        
        if(useranswer == answers[questionType]) {
            alert ("You are so smart!!!")
            createQuestion(questionType);
            targetInputElement.value = "";
        } else {
            alert("Wrong idiot!")
        }
    }
    
}
