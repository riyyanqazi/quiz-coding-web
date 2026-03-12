// 1. Data Objects for all Quizzes

const htmlQuiz = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyper Tool Multi Language",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    question: "Which HTML element is used to define the largest heading?",
    options: ["<heading>", "<h6>", "<h1>", "<head>"],
    answer: "<h1>",
  },
  {
    question: "Which HTML element is used to create a hyperlink?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    answer: "<a>",
  },
  {
    question: "Which attribute is used to provide alternate text for an image?",
    options: ["alt", "src", "title", "text"],
    answer: "alt",
  },
  {
    question: "Which HTML element is used to create a paragraph?",
    options: ["<para>", "<p>", "<pg>", "<paragraph>"],
    answer: "<p>",
  },
  {
    question: "Which HTML element is used to create an unordered list?",
    options: ["<ul>", "<ol>", "<li>", "<list>"],
    answer: "<ul>",
  },
  {
    question: "Which HTML element is used to define a table row?",
    options: ["<td>", "<tr>", "<table>", "<row>"],
    answer: "<tr>",
  },
  {
    question: "Which HTML tag is used to display a picture?",
    options: ["<img>", "<image>", "<src>", "<picture>"],
    answer: "<img>",
  },
  {
    question: "Which HTML element defines the title of a document?",
    options: ["<title>", "<head>", "<header>", "<h1>"],
    answer: "<title>",
  },
  {
    question: "Which HTML attribute specifies an inline style?",
    options: ["font", "style", "class", "styles"],
    answer: "style",
  },
];

const cssQuiz = [
  {
    question: "What does CSS stand for?",
    options: [
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Colorful Style Sheets",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    question: "Which property is used to change background color?",
    options: ["color", "bgcolor", "background-color", "canvas-color"],
    answer: "background-color",
  },
  {
    question: "Which CSS property controls the text size?",
    options: ["font-style", "text-size", "font-size", "text-style"],
    answer: "font-size",
  },
  {
    question: "What is the default value of the position property?",
    options: ["relative", "fixed", "absolute", "static"],
    answer: "static",
  },
  {
    question: "How do you select an element with id 'demo'?",
    options: [".demo", "demo", "*demo", "#demo"],
    answer: "#demo",
  },
  {
    question: "Which property is used to change the font of an element?",
    options: ["font-style", "font-weight", "font-family", "font-variant"],
    answer: "font-family",
  },
  {
    question: "How do you make the text bold?",
    options: [
      "font-weight:bold;",
      "style:bold;",
      "font:bold;",
      "text-decoration:bold;",
    ],
    answer: "font-weight:bold;",
  },
  {
    question: "Which property is used to change the left margin?",
    options: ["padding-left", "margin-left", "indent", "margin-right"],
    answer: "margin-left",
  },
  {
    question: "How do you select elements with class name 'test'?",
    options: ["*test", ".test", "test", "#test"],
    answer: ".test",
  },
  {
    question: "Which property is used to center text?",
    options: ["text-align", "align-content", "vertical-align", "text-center"],
    answer: "text-align",
  },
];

const jsQuiz = [
  {
    question: "Which keyword is used to declare a constant?",
    options: ["var", "let", "const", "constant"],
    answer: "const",
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    options: ["<js>", "<scripting>", "<script>", "<javascript>"],
    answer: "<script>",
  },
  {
    question: "How do you create a function in JavaScript?",
    options: [
      "function = myFunction()",
      "function myFunction()",
      "function:myFunction()",
      "myFunction() function",
    ],
    answer: "function myFunction()",
  },
  {
    question: "How do you write an IF statement in JavaScript?",
    options: ["if i = 5 then", "if i == 5 then", "if (i == 5)", "if i = 5"],
    answer: "if (i == 5)",
  },
  {
    question: "How does a FOR loop start?",
    options: [
      "for (i = 0; i <= 5)",
      "for i = 1 to 5",
      "for (i = 0; i <= 5; i++)",
      "for (i <= 5; i++)",
    ],
    answer: "for (i = 0; i <= 5; i++)",
  },
  {
    question: "How do you add a comment in JavaScript?",
    options: [
      "'This is a comment",
      "//This is a comment",
      "",
      "*This is a comment*",
    ],
    answer: "//This is a comment",
  },
  {
    question: "Which operator is used to assign a value?",
    options: ["*", "-", "=", "x"],
    answer: "=",
  },
  {
    question: "What is the correct way to write a JavaScript array?",
    options: [
      "var colors = 1 = ('red'), 2 = ('green')",
      "var colors = ['red', 'green', 'blue']",
      "var colors = (1:'red', 2:'green')",
      "var colors = 'red', 'green'",
    ],
    answer: "var colors = ['red', 'green', 'blue']",
  },
  {
    question: "How do you round 7.25 to the nearest integer?",
    options: ["Math.rnd(7.25)", "round(7.25)", "Math.round(7.25)", "rnd(7.25)"],
    answer: "Math.round(7.25)",
  },
  {
    question: "Which event occurs when the user clicks on an element?",
    options: ["onmouseclick", "onchange", "onclick", "onmouseover"],
    answer: "onclick",
  },
];

// 2. Logic to select the quiz
function startData(event) {
  event.preventDefault();
  localStorage.setItem("quizTopic", a);
}
let selectedTopic = localStorage.getItem("quizTopic") || "html";
let currentQuizData;

if (selectedTopic === "css") {
  currentQuizData = cssQuiz;
} else if (selectedTopic === "js") {
  currentQuizData = jsQuiz;
} else {
  currentQuizData = htmlQuiz;
}

let score = 0;
let oneQuestionScore = 5;
let questionsCount = 0;
let time = 8;
let timerInterval;

let progress_fill = document.querySelector(
  ".progress-bar-custom .progress-fill",
);
let next_btn = document.querySelector(".next-btn");
let question_el = document.querySelector("h4");
let options_el = document.querySelectorAll(".answer-box .ans");
let timer_el = document.querySelector(".timer");
let question_count_el = document.querySelector(
  ".quiz-card .question-count span",
);

function startTimer() {
  clearInterval(timerInterval);
  time = 8;
  timer_el.innerText = `Timer : ${time}`;
  timerInterval = setInterval(() => {
    time--;
    timer_el.innerText = `Timer : ${time}`;
    if (time <= 0) {
      clearInterval(timerInterval);
      next_btn.click();
    }
  }, 1000);
}

function loadQuestion() {
  if (questionsCount >= currentQuizData.length) {
    localStorage.setItem("userScore", score);
    localStorage.setItem(
      "totalQuiz",
      currentQuizData.length * oneQuestionScore,
    );
    window.location.href = "profile.html";
    return;
  }

  question_el.innerText = currentQuizData[questionsCount].question;
  question_count_el.innerText = questionsCount + 1;
  progress_fill.style.width = `${(questionsCount / currentQuizData.length) * 100}%`;

  options_el.forEach((opt, index) => {
    opt.innerText = currentQuizData[questionsCount].options[index];
    opt.style.border = "none";
    opt.onclick = () => {
      options_el.forEach((o) => (o.style.border = "none"));
      opt.style.border = "2px solid #ffb300";
      opt.dataset.selected = opt.innerText;
    };
    delete opt.dataset.selected; // Reset selection for new question
  });

  startTimer();
}

next_btn.addEventListener("click", () => {
  let selectedAns = "";
  options_el.forEach((opt) => {
    if (opt.style.border.includes("rgb(255, 179, 0)")) {
      selectedAns = opt.innerText;
    }
  });

  if (selectedAns === currentQuizData[questionsCount].answer) {
    score += oneQuestionScore;
  }

  questionsCount++;
  loadQuestion();
});

if (window.location.href.includes("quizstart.html")) {
  loadQuestion();
}
