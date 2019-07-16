//make a list of questions & answers
//start button + function
//randomly select and render questions to the container
//start a timer
//function to track user guesses
//function to determine if user guess is correct
//done button that stops timer and displays round stats
//the timer = 0, hide questions and display round stats
//restart button = start button

//variables
$(document).ready(function() {

var rightAnswers = 0

var wrongAnswers = 0

var unanswered = 0

var userGuess = ""

var qSelector

var timer = 60

var timeOut;

var clockRunning = false

var questions = [
    {
        question: "What Does S.P.E.C.I.A.L. Stand For?",
        choices: ["Strength, Perception, Endurance, Charisma, Intelligence, Agility, Luck", "Strength, Prescision, Energy, Creativity, Intuition, Attitude, Luck", "Stealth, Power, Endurance, Courage, Instinct, Awareness, Learning", "Sometimes, People, Call, Me, It, Kinda, Rude actually"],
        answer: 1,
    },
    {
        question: "In The First Game, Why Was The Vault Dweller Sent Out Into The Wasteland?",
        choices: ["To find a replacement power core", "Search for supplies", "To find a water chip", "To find his son"],
        answer: 3,
    },
    {
        question: "In What Year Did The Nuclear War Occur?",
        choices: ["1969", "2420", "2017", "2077"],
        answer: 4,
    },
    {
        question: "Which Soda Company Was Popular Before The War?",
        choices: ["Coca Cola", "Turbo", "Nuka Cola", "Old Possum"],
        answer: 3,
    },
    {
        question: "What S.P.E.C.I.A.L. Skill Determines How Much The Player Can Carry?",
        choices: ["U", "S", "C", "L"],
        answer: 2,
    },
    {
        question: "What Does V.A.T.S. Mean?",
        choices: ["Vault-Tec Assisted Targeting System", "Virtual Assisted Targeting System", "Vault-Tec Aim Tracking System", "Virus Augmented Terminal Scope"],
        answer: 1,
    },
    {
        question: "Where Was The Main Character Shot In The Beginning Of Fallout: New Vegas?",
        choices: ["Neck", "Back", "Head", "Arm"],
        answer: 3,
    },
    {
        question: 'Who Said "Death is a preferable alternative to Communism"',
        choices: ["Freedom Fighter", "Liberty Prime", "My hero", "President Eden"],
        answer: 2,
    },
    {
        question: "Why Did The Master Start Infecting People With The FEV Virus?",
        choices: ["It was an accident", "For fun", "To help people survive the wasteland, and eliminate racial differences", "To make an army of slaves"],
        answer: 3,
    },
    {
        question: "Where Is Bethesda Softworks Headquartered?",
        choices: ["Bethesda, MD", "Irvine, CA", "Rockville, MD", "Boston, MA"],
        answer: 3,
    },
]
})