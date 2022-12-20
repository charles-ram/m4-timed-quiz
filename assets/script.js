// Timer variables.
var timeleft = 30;
var quizTimer = setInterval(function() {
    if (timeleft <= 0) {
        endQuiz();
    } else {
        document.getElementById("timer-countdown").innerHTML = timeleft + " seconds left."
    }
    timeleft -= 1;
}, 3000);

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
    
}

function endQuiz() {
    clearInterval(quizTimer);
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
    // Save timer value.
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
    // Clear timer.
    endQuiz();
}

// Saves the score and clears the timer.
function saveScore() {
    document.getElementById("rules-card").style.display = "none";
    document.getElementById("question-one").style.display = "none";
    document.getElementById("question-two").style.display = "none";
    document.getElementById("question-three").style.display = "none";
    document.getElementById("question-four").style.display = "none";
    document.getElementById("question-five").style.display = "none";
    document.getElementById("input-score").style.display = "none";
    document.getElementById("score-sheet").style.display = "block"; // Makes score sheet card visible.
    // Save timer value into a variable.
    // Save the data on the API.
    // Clear timer.
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
    startOver();
}
 init()