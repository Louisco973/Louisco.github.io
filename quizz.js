const questions = [
    {
        question: "Un panier marqué derrière la ligne à trois points vaut combien de points ?",
        answers: ["1 point", "2 points", "3 points", "4 points"],
        correct: 2
    },
    {
        question: "Combien de joueurs d'une équipe sont présents sur le terrain ?",
        answers: ["4 joueurs", "5 joueurs", "6 joueurs", "7 joueurs"],
        correct: 1
    },
    {
        question: "Combien vaut un lancer franc réussi ?",
        answers: ["1 point", "2 points", "3 points", "0 point"],
        correct: 0
    },
    {
        question: "Quelle est la hauteur officielle d'un panier de basketball ?",
        answers: ["2,50 m", "2,75 m", "3,05 m", "3,50 m"],
        correct: 2
    },
    {
        question: "Combien de points vaut un panier marqué à l'intérieur de la ligne à trois points ?",
        answers: ["1 point", "2 points", "3 points", "4 points"],
        correct: 1
    },
    {
        question: "Quel joueur est surnommé 'King James' ?",
        answers: ["Stephen Curry", "LeBron James", "Kevin Durant", "Kobe Bryant"],
        correct: 1
    },
    {
        question: "Quelle équipe NBA joue à San Antonio ?",
        answers: ["Lakers", "Celtics", "Spurs", "Heat"],
        correct: 2
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const questionNumberElement = document.getElementById("question-number");
const scoreElement = document.getElementById("score");
const resultMessageElement = document.getElementById("result-message");
const nextButton = document.getElementById("next-button");

const quizBox = document.getElementById("quiz-box");
const finalResult = document.getElementById("final-result");
const finalScore = document.getElementById("final-score");
const restartButton = document.getElementById("restart-button");


function showQuestion() {

    const current = questions[currentQuestion];

    questionNumberElement.textContent =
        `Question ${currentQuestion + 1} / ${questions.length}`;

    questionElement.textContent = current.question;

    answersElement.innerHTML = "";

    resultMessageElement.textContent = "";

    nextButton.style.display = "none";

    current.answers.forEach((answer, index) => {

        const button = document.createElement("button");

        button.textContent = answer;

        button.classList.add("answer-button");

        button.addEventListener("click", () => selectAnswer(index));

        answersElement.appendChild(button);
    });
}


function selectAnswer(selectedAnswer) {

    const current = questions[currentQuestion];

    const buttons =
        document.querySelectorAll(".answer-button");

    buttons.forEach((button, index) => {

        button.disabled = true;

        if (index === current.correct) {

            button.classList.add("correct");

        } else {

            button.classList.add("wrong");
        }
    });

    if (selectedAnswer === current.correct) {

        score++;

        scoreElement.textContent = `Score : ${score}`;

        resultMessageElement.textContent =
            "✅ Bonne réponse !";

    } else {

        resultMessageElement.textContent =
            "❌ Mauvaise réponse !";
    }

    nextButton.style.display = "block";

    if (currentQuestion === questions.length - 1) {

        nextButton.textContent = "VOIR MON SCORE 🏆";

    } else {

        nextButton.textContent = "QUESTION SUIVANTE →";
    }
}


nextButton.addEventListener("click", () => {

    currentQuestion++;

    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        showFinalResult();
    }
});


function showFinalResult() {

    quizBox.classList.add("hidden");

    finalResult.classList.remove("hidden");

    finalScore.textContent =
        `Tu as obtenu ${score} / ${questions.length} !`;
}


restartButton.addEventListener("click", () => {

    currentQuestion = 0;

    score = 0;

    scoreElement.textContent = "Score : 0";

    finalResult.classList.add("hidden");

    quizBox.classList.remove("hidden");

    showQuestion();
});


showQuestion();