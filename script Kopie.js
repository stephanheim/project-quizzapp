let questions = [
  {
    question: "Wer hat HTML erfunden?",
    answer_1: "Robbie Williams",
    answer_2: "Lady Gaga",
    answer_3: "Tim Berners-Lee",
    answer_4: "Justin Bieber",
    right_answer: 3,
  },
  {
    question: "Welches ist die niedrigste Überschriftenebene in HTML?",
    answer_1: "&lt;h6&gt;",
    answer_2: "&lt;h1&gt;",
    answer_3: "&lt;h8&gt;",
    answer_4: "&lt;h3&gt;",
    right_answer: 1,
  },
  {
    question: "Wieviele Seiten hat die HTML5-Spezifikation?",
    answer_1: "rund 120",
    answer_2: "rund 6000",
    answer_3: "rund 600",
    answer_4: "rund 1200",
    right_answer: 4,
  },
  {
    question: "Wofür steht die Abkürzung DOM?",
    answer_1: "Distribution Object Module",
    answer_2: "Data Object Module",
    answer_3: "Document Object Model",
    answer_4: "Document Only Memory",
    right_answer: 3,
  },
  {
    question:
      "Netscape führte 1996 die Framesets ein. Welche HTML-Spezifikation hat ihnen endlich den Garaus gemacht?",
    answer_1: "HTML 5",
    answer_2: "HTML 2.0",
    answer_3: "HTML 4.01",
    answer_4: "HTML 3.2",
    right_answer: 1,
  },
  {
    question: "Für welches HTML-Element gibt es kein End-Tag (</befehl>)?",
    answer_1: "&lt;p&gt;",
    answer_2: "&lt;body&gt;",
    answer_3: "&lt;head&gt;",
    answer_4: "&lt;img&gt;",
    right_answer: 4,
  },
  {
    question: "Wie hiess der beliebteste Browser in den Neunziger Jahren?",
    answer_1: "Opera",
    answer_2: "Netscape Navigator",
    answer_3: "Internet Explorer",
    answer_4: "Mosaic",
    right_answer: 2,
  },
];

let currentQuestion = 0;
let correctAnswer = 0;
let AUDIO_SUCCESS = new Audio("audio/correct.mp3");
let AUDIO_FAIL = new Audio("audio/wrong.mp3");

function init() {
  document.getElementById("length").innerHTML = questions.length;
  showQuestion();
}

function showQuestion() {
  let question = questions[currentQuestion];

  if (currentQuestion >= questions.length) {
    // show End Screen
    document.getElementById("end-screen").style = "";
    document.getElementById("question-body").style = "display: none";
    document.getElementById("num-correct").innerHTML = correctAnswer;
    document.getElementById("num-total").innerHTML = questions.length;
    document.getElementById("header-img").src = "/img/trophy.png";
  } else {

    // show Question
    let percent = (currentQuestion + 1) / questions.length;
    percent = Math.round(percent * 100);
    document.getElementById("progress-bar").innerHTML = `${percent}%`;
    document.getElementById("progress-bar").style = `width: ${percent}%`;

    document.getElementById("num-quest").innerHTML = currentQuestion + 1;
    document.getElementById("question-text").innerHTML = question["question"];
    document.getElementById("answer_1").innerHTML = question["answer_1"];
    document.getElementById("answer_2").innerHTML = question["answer_2"];
    document.getElementById("answer_3").innerHTML = question["answer_3"];
    document.getElementById("answer_4").innerHTML = question["answer_4"];
  }
}

function answer(selection) {
  let question = questions[currentQuestion];
  let selectedQuestionNumber = selection.slice(-1);
  let idOfRightAnswer = `answer_${question["right_answer"]}`;

  if (selectedQuestionNumber == question["right_answer"]) {
    document.getElementById(selection).parentNode.classList.add("bg-success");
    AUDIO_SUCCESS.play();
    correctAnswer++;
  } else {
    document.getElementById(selection).parentNode.classList.add("bg-danger");
    document
      .getElementById(idOfRightAnswer)
      .parentNode.classList.add("bg-success");
    AUDIO_FAIL.play();
  }
  document.getElementById("next-btn").disabled = false;
}
function nextQuestion() {
  currentQuestion++;
  document.getElementById("next-btn").disabled = true;
  resetButtons();
  showQuestion();
}

function resetButtons() {
  document
    .getElementById("answer_1")
    .parentNode.classList.remove("bg-success", "bg-danger");
  document
    .getElementById("answer_2")
    .parentNode.classList.remove("bg-success", "bg-danger");
  document
    .getElementById("answer_3")
    .parentNode.classList.remove("bg-success", "bg-danger");
  document
    .getElementById("answer_4")
    .parentNode.classList.remove("bg-success", "bg-danger");
}

function restartGame() {
  document.getElementById("header-img").src = "./img/bg-app1.jpg"; // tausche Bild wieder aus   
  document.getElementById("end-screen").style = "display: none"; // end-Screen unsichtbar mache3n
  document.getElementById("question-body").style = ""; // quiz-Screen sichtbar machen
  currentQuestion = 0; // Variablen zurück setzen für neues Spiel
  correctAnswer = 0;
  init();
}
