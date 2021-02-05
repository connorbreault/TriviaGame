$("#qbox").hide();
$("#abox").hide();
$("#timer").hide();
$("#roundstats").hide();
$("#restart").hide();

//  VARIABLES
$(document).ready(function () {
  var rightAnswers = 0;

  var wrongAnswers = 0;

  var userGuess = "";

  var timer = 40;

  var timerRunning = false;

  var questions = [
    {
      question: "What does S.P.E.C.I.A.L. stand for?",
      choices: [
        "Strength, Perception, Endurance, Charisma, Intelligence, Agility, Luck",
        "Strength, Prescision, Energy, Creativity, Intuition, Attitude, Luck",
        "Stealth, Power, Endurance, Courage, Instinct, Awareness, Learning",
        "Sometimes, People, Call, Me, It, Kinda, Rude actually",
      ],
      answer: 0 || 3,
    },
    {
      question:
        "In the original game, why was the vault dweller sent out into the wasteland?",
      choices: [
        "To find a replacement power core",
        "Search for supplies",
        "To find a water chip",
        "To find his son",
      ],
      answer: 2,
    },
    {
      question: "In what year did the nuclear war occur?",
      choices: ["1969", "2420", "2017", "2077"],
      answer: 3,
    },
    {
      question: "Which soda company was popular before the war?",
      choices: ["Coca Cola", "Turbo", "Old Possum", "Nuka Cola"],
      answer: 3,
    },
    {
      question:
        "What S.P.E.C.I.A.L. skill determines how much the player can carry?",
      choices: ["U", "S", "C", "L"],
      answer: 1,
    },
    {
      question: "What does V.A.T.S. stand for?",
      choices: [
        "Vault-Tec Assisted Targeting System",
        "Virtual Assisted Targeting System",
        "Vault-Tec Aim Tracking System",
        "Virus Augmented Terminal Scope",
      ],
      answer: 0,
    },
    {
      question:
        "Where was the main character shot in the beginning of Fallout: New Vegas?",
      choices: ["Neck", "Back", "Head", "Arm"],
      answer: 2,
    },
    {
      question: 'Who said "Death is a preferable alternative to Communism"',
      choices: [
        "Freedom Fighter",
        "Liberty Prime",
        "My hero",
        "President Eden",
      ],
      answer: 1,
    },
    {
      question: "Why did The Master start infecting people with the FEV virus?",
      choices: [
        "It was an accident",
        "For fun",
        "To help people survive the wasteland, and eliminate racial differences",
        "To make an army of slaves",
      ],
      answer: 2,
    },
    {
      question: "Where is Bethesda Softworks headquartered?",
      choices: ["Bethesda, MD", "Irvine, CA", "Rockville, MD", "Boston, MA"],
      answer: 2,
    },
    {
      question:
        "What type of energy is required to use power armor in Fallout 4 and 76?",
      choices: [
        "Energy cells",
        "Fusion cells",
        "Fusion core",
        "Microfusion cell",
      ],
      answer: 2,
    },
    {
      question: "War. War never ''",
      choices: ["solves the problem", "changes", "stops", "ends"],
      answer: 1,
    },
    {
      question: "What was the main characters name in Fallout 3?",
      choices: ["Courier", "Vault Dweller", "Soul Survivor", "Lone Wanderer"],
      answer: 3,
    },
    {
      question: "Who founded the New California Republic?",
      choices: ["Mr.Burkes", "Amata", "Cheif Hanlon", "Tandi"],
      answer: 3,
    },
    {
      question: "What is your mom favorite verse in Fallout 3?",
      choices: ["Revelation 21:6", "Psalms 18:4", "Genesis 1:1", "John 3:16"],
      answer: 0,
    },
    {
      question: "What is your fathers name in Fallout 3?",
      choices: ["Tim", "John", "James", "Ron"],
      answer: 2,
    },
    {
      question: "What country started the Great War?",
      choices: ["Russia", "China", "Japan", "Korea"],
      answer: 1,
    },
    {
      question: "What was your sons name in Fallout 4?",
      choices: ["Alex", "Shawn", "James", "Aaron"],
      answer: 1,
    },
    {
      question:
        "What was the name of the main antagonist in the original Fallout?",
      choices: ["The Mechanist", "Caesar", "The Master", "Ulysses"],
      answer: 2,
    },
  ];

  //  FUNCTIONS

  //start functions
  $("#startbutt").on("click", function () {
    startGame();
    selectQuestion();
    $("#startbutt").hide();
  });
  function startGame() {
    startTimer();
    $("#qbox").show();
    $("#abox").show();
    $("#timer").show();
  }

  //timer functions
  function startTimer() {
    if (timerRunning == false) {
      intervalId = setInterval(decrement, 1000);
      timerRunning == true;
    }
  }

  function decrement() {
    $("#timer").html("<h3>Time remaining: " + timer + "</h3>");
    timer--;
    if (timer === 0) {
      complete();
    }
  }

  function stopTimer() {
    clearInterval(intervalId);
    timerRunning = false;
    $("#timer").hide();
  }

  //question functions
  function selectQuestion() {
    var sel = Math.floor(Math.random() * questions.length);
    newQuestion = questions[sel];
    $("#qbox").html(newQuestion.question);
    $("#btn1").html(newQuestion.choices[0]);
    $("#btn2").html(newQuestion.choices[1]);
    $("#btn3").html(newQuestion.choices[2]);
    $("#btn4").html(newQuestion.choices[3]);
  }

  function checkAnswer() {
    if (userGuess == newQuestion.answer) {
      rightAnswers++;
      selectQuestion();
    } else {
      wrongAnswers++;
      selectQuestion();
    }
  }

  //button function
  $(".butt").on("click", function () {
    userGuess = this.value;
    checkAnswer();
  });

  //complete
  function complete() {
    stopTimer();
    $("#qbox").hide();
    $("#abox").hide();
    $("#roundstats").show();
    $("#roundstats").html(
      "Right answers: " +
        rightAnswers +
        "<hr>" +
        "Wrong answers: " +
        wrongAnswers +
        "<hr>"
    );
    $("#restart").show();
  }

  //restart
  $("#restart").on("click", restart);
  function restart() {
    selectQuestion();
    $("#restart").hide();
    $("#roundstats").hide();
    startGame();
    timer = 20;
    rightAnswers = 0;
    wrongAnswers = 0;
    clearInterval(intervalId);
    startTimer();
  }
});
