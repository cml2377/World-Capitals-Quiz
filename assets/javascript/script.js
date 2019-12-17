//var questions holds all of the possible questions the page can load
var questions = [
    {
        //each group in the curly braces is an object, and property:choices has its own array that holds the capital values
        question: "What is the capital of Argentina?",
        choices: ["Buenos Aires", "Córdoba", "Rosario", "San Juan"],
        answer: "Buenos Aires"
    },

    {
        question: "What is the capital of Ukraine?",
        choices: ["Kharkiv", "Kyiv", "Sevastopol", "Mykolayiv"],
        answer: "Kyiv"
    },

    {
        question: "What is the capital of Vietnam?",
        choices: ["Hanoi", "Ho Chi Minh City", "Da Nang", "Hoi An"],
        answer: "Hanoi"
    },

    {
        question: "What is the capital of Canada?",
        choices: ["Toronto", "Vancouver", "Montreal", "Ottawa"],
        answer: "Ottawa"
    },
    {
        question: "What is the capital of Italy?",
        choices: ["Milan", "Naples", "Rome", "Venice"],
        answer: "Rome"
    },

    {
        question: "What is the capital of India?",
        choices: ["Mumbai", "New Delhi", "Bangalore", "Kolkata"],
        answer: "New Delhi"
    },

    {
        question: "What is the capital of Egypt?",
        choices: ["Sharm El Sheikh", "Alexandria", "Cairo", "Tripoli"],
        answer: "Cairo"
    },

    {
        question: "What is the capital of Botswana?",
        choices: ["Maun", "Molepolole", "Francistown", "Gaborone"],
        answer: "Gaborone"
    },

    {
        question: "What is the capital of Malaysia?",
        choices: ["Kuala Lumpur", "Singapore", "Kuching", "Johor Bahru"],
        answer: "Kuala Lumpur"
    },

    {
        question: "What is the capital of Finland?",
        choices: ["Oslo", "Helsinki", "Stockholm", "Copenhagen"],
        answer: "Helsinki"
    }
];

$(document).ready(function () {
    var welcomeBox = $("#welcome");
    var questionBox = $("#question");
    var endingScoreBox = $("#endingScoreBox");
    var highScoresBox = $("#highScores");

    var questionTxtEl = $("#questionTxt");
    var answerBtn1 = $("#choice1");
    var answerBtn2 = $("#choice2");
    var answerBtn3 = $("#choice3");
    var answerBtn4 = $("#choice4");
    var feedbackEl = $("#feedback");
    var getStartedBtn = $("#getStarted");
    var currentQuestion = 0;
    //create timer
    var timer = 200;
    var timerCountdownEl = $("#timerCountdown");
    var timerReference = undefined;

    welcomeBox.show();
    questionBox.hide();
    endingScoreBox.hide();
    highScoresBox.hide();

    //when the page loads, the questions get shuffled.
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        const temp = questions[i];
        questions[i] = questions[j];
        questions[j] = temp;
    }
    //when you click on getStarted, the welcomeBox hides, and first rando question shows.
    getStartedBtn.click(function (event) {
        //hide various boxes and show question box.
        welcomeBox.hide();
        questionBox.show();
        //this picks the first question of the questions array and puts it in the local variable, question1. 
        var question1 = questions[0];
        //this makes the h3 text, var question1's question value.
        questionTxtEl.text(question1.question);
        //create a local variable with the choices of question 1. 
        var question1choices = question1.choices;
        //fill in each button with a choice from the array
        answerBtn1.text(question1choices[0]);
        answerBtn2.text(question1choices[1]);
        answerBtn3.text(question1choices[2]);
        answerBtn4.text(question1choices[3]);
        //start countdown
        timerReference = window.setInterval(function () {
            timer--;
            if (timer < 0) {
                //showScore();
            } else {
                timerCountdownEl.text(timer);
            };
        }, 1000);

    });
    //when an answerBtn is clicked, it is either correct or false. If correct, feedback=Correct!, pause for 1 second, and continue.
    $(".answer").on("click", function (event) {
        event.preventDefault();
        var correctAnswer = questions[currentQuestion].answer;
        var theirAnswer = event.target.innerText;
        if (theirAnswer == correctAnswer) {
            feedbackEl.text("Correct!").show();
        } else {
            //deduct 10 seconds, and go to next question.
            feedbackEl.text("Wrong!").show();
            timer -= 10;
        }
        //pause for 1 second, then go to next question.
        window.setTimeout(function () {
            //goes to next question
            showNextQuestionOrScore();
        }, 1000);
    });

    function showNextQuestionOrScore() {
        currentQuestion++;
        if (currentQuestion == questions.length) {
            questionBox.hide();
            endingScoreBox.show();
            $("#endingScore").text("Ending Score: " + timer);
            window.clearInterval(timerReference);
        } else {
            var question1 = questions[currentQuestion];
            //this makes the h3 text, var question1's question value.
            questionTxtEl.text(question1.question);
            //create a local variable with the choices of question 1. 
            var question1choices = question1.choices;
            //fill in each button with a choice from the array
            answerBtn1.text(question1choices[0]);
            answerBtn2.text(question1choices[1]);
            answerBtn3.text(question1choices[2]);
            answerBtn4.text(question1choices[3]);
        }
    }

});


//If timer runs out, feedback=Time's up!, pause for 1 second, and end the quiz. 

//High Scores container has an ordered list that orders the array of high scores by HIGH -> LOW

/*
localStorage.setItem('Score1', 'Score2');

var cat = localStorage.getItem('myCat');

localStorage.clear();

*/