console.log("Calculator App!");

var NumberBtnElements = document.querySelectorAll('.btn-number');
var expressionElement = document.querySelector('.expression');
var cancelBtnElement = document.querySelector('.btn-cancel');
var additionBtnElement = document.querySelector('.addition-operation');
var subtractionBtnElement = document.querySelector('.subtraction-operation');
var multiplicationBtnElement = document.querySelector('.multiplication-operation');
var divisionBtnElement = document.querySelector('.division-operation');
var decimalBtnElement = document.querySelector('.btn-dot');
var openBracketBtnElement = document.querySelector('.bracket-open');
var closedBracketBtnElement = document.querySelector('.bracket-closed');
var deleteBtnElement = document.querySelector('.btn-delete');
var equalBtnElement = document.querySelector('.btn-equal');
var resultElement = document.querySelector('.result');

var evaluated = false;

console.log(NumberBtnElements);

for(var i = 0; i < NumberBtnElements.length; i++) {
    NumberBtnElements[i].addEventListener("click", handleNumberBtnClick);
}

function refreshAll() {
    if (evaluated === true) {
        expressionElement.innerHTML = "";
        resultElement.innerHTML = "";
        evaluated = false;
    }
}

function handleNumberBtnClick() {
    refreshAll();
    var number = event.target.innerHTML;
    expressionElement.innerHTML = expressionElement.innerHTML + number;
}

cancelBtnElement.addEventListener('click', handleCancelBtnClick);

function handleCancelBtnClick() {
    expressionElement.innerHTML = "";
    resultElement.innerHTML = "";
    evaluated = false;
}

additionBtnElement.addEventListener('click', handleAdditionBtnClick);

function handleAdditionBtnClick() {
    refreshAll();
    expressionElement.innerHTML = expressionElement.innerHTML + "+";
}

subtractionBtnElement.addEventListener('click', handleSubtractionBtnClick);

function handleSubtractionBtnClick() {
    refreshAll();
    expressionElement.innerHTML = expressionElement.innerHTML + "-";
}

multiplicationBtnElement.addEventListener('click', handleMultiplicationBtnClick);

function handleMultiplicationBtnClick() {
    refreshAll();
    expressionElement.innerHTML = expressionElement.innerHTML + "×";
}

divisionBtnElement.addEventListener('click', handleDivisionBtnClick);

function handleDivisionBtnClick() {
    refreshAll();
    expressionElement.innerHTML = expressionElement.innerHTML + "÷";
}

decimalBtnElement.addEventListener('click', handleDecimalBtnClick);

function handleDecimalBtnClick() {
    refreshAll();
    expressionElement.innerHTML = expressionElement.innerHTML + ".";
}

openBracketBtnElement.addEventListener('click', handleOpenBracketBtnClick);

function handleOpenBracketBtnClick() {
    refreshAll();
    expressionElement.innerHTML = expressionElement.innerHTML + "(";
}

closedBracketBtnElement.addEventListener('click', handleClosedBracketBtnClick);

function handleClosedBracketBtnClick() {
    refreshAll();
    expressionElement.innerHTML = expressionElement.innerHTML + ")";
}

deleteBtnElement.addEventListener('click', handleDeleteBtnClick);

function handleDeleteBtnClick() {
    refreshAll();
    expressionElement.innerHTML = expressionElement.innerHTML.slice(0, -1);
}

equalBtnElement.addEventListener('click', handleEqualBtnClick);

function handleEqualBtnClick() {
    var expression = expressionElement.innerHTML;
    // g stands for global
    expression = expression.replace(/×/g, "*");
    expression = expression.replace(/÷/g, "/");

    try{
        var result = eval(expression);
        resultElement.innerHTML = result;
        evaluated = true;
    } catch(error) {
        alert('Maths Error');
    }
    resultElement.innerHTML = eval(expression);
    evaluated = true;
}