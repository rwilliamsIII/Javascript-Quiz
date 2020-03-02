var startButton = document.getElementById("start-btn")
var questionBox = document.getElementById("question-box")
var questionElement = document.getElementById("question")
var answerButtonsElement = document.getElementById("answer-buttons")
let shuffledQuestions, currentQuestionIndex
var questions = [
    {
        question: "What is Javascript?",
        answers: [
            {text: "A recipe for coffee", correct: false},
            {text: "A worse version of JQuery", correct: false},
            {text: "An object-oriented computer programming language commonly used to create interactive effects within web browsers.", correct: true},
            {text: "A common torture practice", correct: false}
        ]
    }
]
startButton.addEventListener("click", startGame)




function startGame() {
    console.log("Started Game")
    startButton.classList.add("hide")
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionBox.classList.remove("hide")
    nextQuestion()
}

function nextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    answerButtonsElement.innerText = question.answers
}

function selectAnswer() {

}