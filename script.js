var startButton = document.getElementById("start-btn")
var questionBox = document.getElementById("question-box")
startButton.addEventListener("click", startGame)




function startGame() {
    console.log("Started Game")
    startButton.classList.add("hide")
    questionBox.classList.remove("hide")
}

function nextQuestion() {

}

function selectAnswer() {

}