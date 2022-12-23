// Timer variables.
var timeleft = 30;
var quizTimer;
var scores = [];
let scoreInput = document.getElementById("#initials-input")


// Broke the task of saving, storing, and rendering the score into 3 separate functions.

function saveScore() {
    showScore();
    // Stores the values in local storage and re-renders the score list.
    storeScore();
    retrieveScore();
    renderScore();
}

// Stores the scores into local storage as a object.
function storeScore() {
    var highscore = {
        initials: document.getElementById("initials-input").value.trim(),
        score: timeleft
    };
    console.log(scores);
    scores.push(highscore);
    localStorage.setItem("scores", JSON.stringify(scores));
};

// Retreives the scores from local storage as a string.
function retrieveScore() {
    var storedScores = JSON.parse(localStorage.getItem("scores"));
    if (storedScores !== null) {
        scores = storedScores;
    }
}

// Creates a list element for the input values and appends them.
function renderScore() {
    var scoreList = document.getElementById("score-list")
    scoreList.innerHTML = "";
    console.log(scores)
    for (var i = 0; i < scores.length; i++) {
        var score = scores[i];

        var li = document.createElement("li");
        li.textContent = "Initials: " + score.initials + " Seconds left: " + score.score;
        li.setAttribute("data-index", i);
        scoreList.appendChild(li);
    }
}

// Clears the timer.
function endQuiz() {
    clearInterval(quizTimer);
}

// Deducts time whenever wrong choice is selected.
function incorrectAnswer() {
    timeleft--;
}


// Starts the quiz and timer.
function startQuiz() {
    document.getElementById("rules-card").style.display = "none";
    document.getElementById("question-one").style.display = "block"; // Makes question one visible.
    document.getElementById("question-two").style.display = "none";
    document.getElementById("question-three").style.display = "none";
    document.getElementById("question-four").style.display = "none";
    document.getElementById("question-five").style.display = "none";
    document.getElementById("input-score").style.display = "none";
    document.getElementById("score-sheet").style.display = "none";
    // Starts timer.
    timeleft = 30;
    document.getElementById("timer-countdown").textContent = timeleft + " seconds left.";
    quizTimer = setInterval(function() {
        timeleft--;
        document.getElementById("timer-countdown").textContent = timeleft + " seconds left.";
        // Once timer runs to 0, it will take you to the input score page.
        if (timeleft <= 0) {
            endQuiz();
            correctAnswerFive();
        }
    }, 1000);
}

// Displays question two by correctly answering question one.
function correctAnswerOne() {
    document.getElementById("rules-card").style.display = "none";
    document.getElementById("question-one").style.display = "none";
    document.getElementById("question-two").style.display = "block"; // Makes question two visible.
    document.getElementById("question-three").style.display = "none";
    document.getElementById("question-four").style.display = "none";
    document.getElementById("question-five").style.display = "none";
    document.getElementById("input-score").style.display = "none";
    document.getElementById("score-sheet").style.display = "none";
}

// Displays question three by correctly answering question two.
function correctAnswerTwo() {
    document.getElementById("rules-card").style.display = "none";
    document.getElementById("question-one").style.display = "none";
    document.getElementById("question-two").style.display = "none";
    document.getElementById("question-three").style.display = "block"; // Makes question three visible.
    document.getElementById("question-four").style.display = "none";
    document.getElementById("question-five").style.display = "none";
    document.getElementById("input-score").style.display = "none";
    document.getElementById("score-sheet").style.display = "none";
}

// Displays question four by correctly answering question three.
function correctAnswerThree() {
    document.getElementById("rules-card").style.display = "none";
    document.getElementById("question-one").style.display = "none";
    document.getElementById("question-two").style.display = "none";
    document.getElementById("question-three").style.display = "none";
    document.getElementById("question-four").style.display = "block"; // Makes question four visible.
    document.getElementById("question-five").style.display = "none";
    document.getElementById("input-score").style.display = "none";
    document.getElementById("score-sheet").style.display = "none";
}

// Displays question five by correctly answering question four.
function correctAnswerFour() {
    document.getElementById("rules-card").style.display = "none";
    document.getElementById("question-one").style.display = "none";
    document.getElementById("question-two").style.display = "none";
    document.getElementById("question-three").style.display = "none";
    document.getElementById("question-four").style.display = "none";
    document.getElementById("question-five").style.display = "block"; // Makes question five visible.
    document.getElementById("input-score").style.display = "none";
    document.getElementById("score-sheet").style.display = "none";
}

// Displays initials input card when called. Used in the fifth and final question to display score at the end of the questionaire.
function correctAnswerFive() {
    document.getElementById("rules-card").style.display = "none";
    document.getElementById("question-one").style.display = "none";
    document.getElementById("question-two").style.display = "none";
    document.getElementById("question-three").style.display = "none";
    document.getElementById("question-four").style.display = "none";
    document.getElementById("question-five").style.display = "none";
    document.getElementById("input-score").style.display = "block"; // Makes input score card visible.
    document.getElementById("score-sheet").style.display = "none";
    endQuiz();
}

// Displays the rule page and clears the timer.
function startOver() {
    document.getElementById("rules-card").style.display = "block"; // Makes rule card visible.
    document.getElementById("question-one").style.display = "none";
    document.getElementById("question-two").style.display = "none";
    document.getElementById("question-three").style.display = "none";
    document.getElementById("question-four").style.display = "none";
    document.getElementById("question-five").style.display = "none";
    document.getElementById("input-score").style.display = "none";
    document.getElementById("score-sheet").style.display = "none";
    endQuiz();
}

function showScore() {
    document.getElementById("rules-card").style.display = "none";
    document.getElementById("question-one").style.display = "none";
    document.getElementById("question-two").style.display = "none";
    document.getElementById("question-three").style.display = "none";
    document.getElementById("question-four").style.display = "none";
    document.getElementById("question-five").style.display = "none";
    document.getElementById("input-score").style.display = "none";
    document.getElementById("score-sheet").style.display = "block"; // Makes score sheet card visible.
}

// Sets everything in place on page start.
function init() {
    retrieveScore();
    startOver();
}
 init()