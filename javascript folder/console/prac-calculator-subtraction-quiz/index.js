var questionElement = document.querySelector(".questions")

var newQuestion;
var answer;
//Math.random() generates random number from 0-1
function createQuestion(){
    var randomInteger1 = Math.ceil(Math.random(bignumber)*9); //0-9.
    var randomInteger2 = Math.ceil(Math.random(smallnumber)*9);
    var bignumber;
    var smallnumber;

    if (randomInteger1>=randomInteger2){
        bignumber = randomInteger1;
        smallnumber = randomInteger2;
    } else if (randomInteger1<randomInteger2) {
        bignumber = randomInteger2;
        smallnumber = randomInteger1;
    }

    newQuestion = `${bignumber} - ${smallnumber} =`;
    answer = bignumber - smallnumber;

    questionElement. innerHTML = newQuestion;
}

createQuestion();

var userAnswerElement = document.querySelector(".answerinput");

userAnswerElement.addEventListener("keyup", handleEnterKey);

function handleEnterKey() {
    
    if(event.code=="Enter") {
        //check the answer
        var userAnswer = userAnswerElement.value;
     
        if(userAnswer == answer) {
            alert("You are smart!!! :)")
            // remove the value of the user input
            userAnswerElement.value = "";
            //if correct, generates new question
            createQuestion();
        } else {
            alert(`You are stupid!!!`);
        }
    }
}

