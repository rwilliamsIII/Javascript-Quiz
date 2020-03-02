var startButton = document.getElementById("start-btn")
var questionBox = document.getElementById("question-box")
var questionElement = document.getElementById("question")
var answerButtonsElement = document.getElementById("answer-buttons")
let shuffledQuestions, currentQuestionIndex
var secondsLeft = 10;

var questions = [
    {
        question: 'What is Javascript?',
        potential_answers: [
            {
                id: 'a',
                answer: 'An object-oriented computer programming language commonly used to create interactive effects within web browsers.'
            },
            {
                id: 'b',
                answer: 'A recipe for coffee.'
            },
            {
                id: 'c',
                answer: 'A worse version of JQuery.'
            },
            {
                id: 'd',
                answer: "A common torture practice."
            }
        ],
        correct_answer: 'a'
    },
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        potential_answers: [
            {
                id: 'a',
                answer: '<javascript>'
            },
            {
                id: 'b',
                answer: '<script>'
            },
            {
                id: 'c',
                answer: '<scripting>'
            },
            {
                id: 'd',
                answer: '<js>'
            }
        ],
        correct_answer: 'b'
    },
    {
        question: 'Where is the correct place to insert a JavaScript tag?',
        potential_answers: [
            {
                id: 'a',
                answer: 'In the <head> section'
            },
            {
                id: 'b',
                answer: 'Where ever you want. JS is the wild west, no rules!'
            },
            {
                id: 'c',
                answer: 'At the end of the <body> section'
            }
            
        ],
        correct_answer: 'c'
    }
]

startButton.addEventListener("click", startGame)




function startGame() {
    console.log("Started Game")
    
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    
    nextQuestion()
}

function nextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    answerButtonsElement.innerText = questions.answers
}

function selectAnswer() {

}