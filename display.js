// const is a variable that can't be changed
const questions = [
    {
        question: "How is a code block indicated in Python?",
        answers: [
            { text: "Brackets", correct: false},
            { text: "Indentation", correct: true},
            { text: "Key", correct: false},
            { text: "None of the above", correct: false},
        ]
    },
    {
        question: "Which of the following is not a valid set of operation in Python?",
        answer: [
            { text: "Union", correct: false},
            { text: "Intersection", correct: false},
            { text: "Difference", correct: false},
            { text: "None of the above", correct: true},
        ]
    },
    {
        question: "In which language python is written?",
        answer: [
            { text:"C++", correct: false},
            { text:"C", correct: true},
            { text:"Java", correct: false},
            { text:"None of the above", correct: false},
        ]
    },
    {
        question: "As what datatype are the *args stored, when passed into a function?",
        answer: [
            { text:"List", correct: false},
            { text:"Tuple", correct: true},
            { text:"Dictionary", correct: false},
            { text:"None of the above", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

//we have defined the index of question and score at zero
let currentQuestionIndex= 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    }
    else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = 'You scored ${score} out of ${questions.length}!';
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    }else {
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length) {
        handleNextButton();
    } else{
        startQuiz();
    }
 }
 
 
 
 
 
 
 
 
 
 )

startQuiz();