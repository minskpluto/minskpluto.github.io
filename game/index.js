var cardDivs = document.querySelectorAll('.card');
var levelOneContainer = document.querySelector('.level-1');
var levelTwoContainer = document.querySelector('.level-2');
var scoreHeadingElement = document.querySelector('.score');
console.log(cardDivs);

var clickedCardDivs = [];

var level = 1;
var levelOneScore = 0;
var levelTwoScore = 0;

for(var i = 0; i < cardDivs.length; i++) {
    cardDivs[i].addEventListener('click', handleCardClick);
}

function handleCardClick(){
    var clickedCard = event.target;
    // console.log(clickedCard.tagName);

    if (clickedCard.tagName == "DIV" && clickedCardDivs.length !=2) {
        clickedCard.classList.remove('unselected')
        clickedCardDivs.push(clickedCard);
    } else if (clickedCard.tagName == "IMG") {
        alert ("Do not click a card twice!!!")
    }

    console.log(clickedCardDivs);

    if (clickedCardDivs.length == 2)  {
        var firstImage = clickedCardDivs[0].firstElementChild;
        var secondImage = clickedCardDivs[1].firstElementChild;
        console.log(secondImage);
        console.log(firstImage);
        if (firstImage.id == secondImage.id) {
            console.log("Success");

            if (level==1) {
                levelOneScore++;
                if(levelOneScore == 8) {
                    alert('Level up!!');
                    level = 2;
                    levelOneContainer.style.display = "none";
                    levelTwoContainer.style.display = "grid";
                }
            }
             
            if (level==2) {
                levelTwoScore++;
                
                if (levelTwoScore ==18) {
                alert('COMPLETE!!!')
                }
            }
            
            scoreHeadingElement.innerHTML = `Score: ${levelOneScore + levelTwoScore}`;

            setTimeout(alertWellDone, 100);
            clickedCardDivs = [];
        } else {    
            setTimeout(flipOver, 1000);
        }   
    }
}


function alertWellDone() {
    alert("Well done!!!");
}

function flipOver() {
    if (clickedCardDivs.length ==2) {
        clickedCardDivs[0].classList.add('unselected');
        clickedCardDivs[1].classList.add('unselected');
    
        clickedCardDivs = [];
    }
   
}
