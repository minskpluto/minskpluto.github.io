var questionElement = document.querySelector(".questions")

var answer;
//Math.random() generates random number from 0-1
function createQuestion(){
    var randomInteger1 = Math.ceil(Math.random()*9); //0-9.
    var randomInteger2 = Math.ceil(Math.random()*9);
    var newQuestion = randomInteger1
    newQuestion = `${randomInteger1} × ${randomInteger2} =`;
    answer = randomInteger1 * randomInteger2;

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

