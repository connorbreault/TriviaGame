//make a list of questions & answers
//start button + function
//randomly select and render questions to the container
//start a timer
//function to track user guesses
//function to determine if user guess is correct
//done button that stops timer and displays round stats
//the timer = 0, hide questions and display round stats
//restart button = start button

$("#qbox").hide()
$("#abox").hide()
$("#timer").hide()
$("#roundstats").hide()
$("#restart").hide()

//  VARIABLES
$(document).ready(function() {

var rightAnswers = 0

var wrongAnswers = 0

var userGuess = ""

var timer = 40

var timerRunning = false

var questions = [
    {
        question: "What Does S.P.E.C.I.A.L. Stand For?",
        choices: ["Strength, Perception, Endurance, Charisma, Intelligence, Agility, Luck", "Strength, Prescision, Energy, Creativity, Intuition, Attitude, Luck", "Stealth, Power, Endurance, Courage, Instinct, Awareness, Learning", "Sometimes, People, Call, Me, It, Kinda, Rude actually"],
        answer: 0 || 3,
    },
    {
        question: "In The First Game, Why Was The Vault Dweller Sent Out Into The Wasteland?",
        choices: ["To find a replacement power core", "Search for supplies", "To find a water chip", "To find his son"],
        answer: 2,
    },
    {
        question: "In What Year Did The Nuclear War Occur?",
        choices: ["1969", "2420", "2017", "2077"],
        answer: 3,
    },
    {
        question: "Which Soda Company Was Popular Before The War?",
        choices: ["Coca Cola", "Turbo", "Old Possum", "Nuka Cola"],
        answer: 3,
    },
    {
        question: "What S.P.E.C.I.A.L. Skill Determines How Much The Player Can Carry?",
        choices: ["U", "S", "C", "L"],
        answer: 1,
    },
    {
        question: "What Does V.A.T.S. Mean?",
        choices: ["Vault-Tec Assisted Targeting System", "Virtual Assisted Targeting System", "Vault-Tec Aim Tracking System", "Virus Augmented Terminal Scope"],
        answer: 0,
    },
    {
        question: "Where Was The Main Character Shot In The Beginning Of Fallout: New Vegas?",
        choices: ["Neck", "Back", "Head", "Arm"],
        answer: 2,
    },
    {
        question: 'Who Said "Death is a preferable alternative to Communism"',
        choices: ["Freedom Fighter", "Liberty Prime", "My hero", "President Eden"],
        answer: 1,
    },
    {
        question: "Why Did The Master Start Infecting People With The FEV Virus?",
        choices: ["It was an accident", "For fun", "To help people survive the wasteland, and eliminate racial differences", "To make an army of slaves"],
        answer: 2,
    },
    {
        question: "Where Is Bethesda Softworks Headquartered?",
        choices: ["Bethesda, MD", "Irvine, CA", "Rockville, MD", "Boston, MA"],
        answer: 2,
    },
    {
        question: "What type of energy is required to use power armor in Fallout 4 and 76?",
        choices: ["Energy cells", "Fusion cells", "Fusion core", "Microfusion cell"],
        answer: 2
    }
]



//  FUNCTIONS

//start functions
$("#startbutt").on("click", function(){
    startGame()
    selectQuestion()
    $("#startbutt").hide()
})
function startGame(){
    startTimer()
    $("#qbox").show()
    $("#abox").show()
    $("#timer").show()
}


//timer functions
function startTimer(){
    if(timerRunning == false){
        intervalId = setInterval(decrement, 1000)
        timerRunning == true
    }
}

function decrement(){
    $("#timer").html("<h3>Time remaining: " + timer + "</h3>");
    timer --;
    if(timer === 0) {
            complete()
    }
}

function stopTimer(){
    clearInterval(intervalId)
    timerRunning = false
    $("#timer").hide()
}


//question functions
function selectQuestion(){
    var sel = Math.floor(Math.random()*questions.length)
    newQuestion = questions[sel]
    $("#qbox").html(newQuestion.question)
    $("#btn1").html(newQuestion.choices[0])
    $("#btn2").html(newQuestion.choices[1])
    $("#btn3").html(newQuestion.choices[2])
    $("#btn4").html(newQuestion.choices[3])
}

function checkAnswer(){
    if(userGuess == newQuestion.answer){
        rightAnswers++
        selectQuestion()
    } else{
        wrongAnswers++
        selectQuestion()
    }
}


 //button function
$(".butt").on("click", function(){
    userGuess = this.value
    checkAnswer()
})


//complete
function complete(){
    stopTimer()
    $("#qbox").hide()
    $("#abox").hide()
    $("#roundstats").show()
    $("#roundstats").html("Right answers: " + rightAnswers + "<hr>" + "Wrong answers: " + wrongAnswers + "<hr>")
    $("#restart").show()
}


//restart
$("#restart").on("click", restart)

function restart(){
    selectQuestion()
    $("#restart").hide()
    $("#roundstats").hide()
    startGame()
    timer = 20
    rightAnswers = 0
    wrongAnswers = 0
    clearInterval(intervalId)
    startTimer()
}
})