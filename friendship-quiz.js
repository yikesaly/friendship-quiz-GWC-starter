//editing for pull request

// questions to be randomly asked on page load
var questionsList = ["What are your/your friend's favorite foods?", "What are your/your friend's favorite animals?"];


//randomly chooses a question to display
function init() {
  var randomIndex = Math.floor(Math.random() * questionsList.length);
  document.getElementById("question").innerHTML = questionsList[randomIndex];
}

window.onload = init;

var answerList = []; //initialize answerList to be empty

/* ADD YOUR CODE BELOW */

//adds user-submitted answer to answerList
function submitAnswer() {                                     //putting answers after clicking the button
  var answer = document.getElementById("answerInput").value;
  console.log(answer);
  answerList.push(answer);

}

//checks if user-submitted guess is in answerList
function checkGuess() {                                      //it checks on the second time
  found=false                                                // if it's not found it would be incorrect
  var guess = document.getElementById("guessInput").value;
  console.log(guess);                                        //defining the guess variable

for (var i = 0; i < answerList.length; i++){                //prove to be true or false
  if (guess == answerList[i]){
    alert("Wowz You Got It!");
    found = true;
  }
}
if (found == false){
  alert("Booo! It's Incorrect~");
  }
}
