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

var questionTxtEl = $("#questionTxt");
var answerBtn1 = $("#choice1");
var answerBtn2 = $("#choice2");
var answerBtn3 = $("#choice3");
var answerBtn4 = $("#choice4");
var feedbackEl = $("#feedback");
var getStartedBtn = $("#getStarted");

//when I click on getStartedBtn, the page will shuffle the questions, then load each question 1 by 1 until all 10 are answered. 
//It will also have a timer of 30 seconds for each question, and will alert, then load the next question.

getStartedBtn.click(function (event) {
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

});