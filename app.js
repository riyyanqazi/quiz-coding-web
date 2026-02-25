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
    question:
      "Which attribute is used to provide an alternate text for an image?",
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
    question: "Which HTML tag is used to display a picture on a webpage?",
    options: ["<img>", "<image>", "<src>", "<picture>"],
    answer: "<img>",
  },
  {
    question: "Which HTML element defines the title of a document?",
    options: ["<title>", "<head>", "<header>", "<h1>"],
    answer: "<title>",
  },
  {
    question: "Which HTML attribute specifies an inline style for an element?",
    options: ["font", "style", "class", "styles"],
    answer: "style",
  },
];
let score = 0;
let oneQuestion = 5;

let userAnser = [];
let Score = 0;
let allAnswer = [];
const correctAnswers = htmlQuiz.map((q) => q.answer);
console.log(correctAnswers);

let progress_fill = document.querySelector(
  ".progress-bar-custom .progress-fill",
);

let next_btn = document.querySelector(".next-btn");
let question = document.querySelector("h4");
let options = document.querySelectorAll(".answer-box .ans");
let timer = document.querySelector(".timer");

let count = 0;
let questionsCount = 0;
let question_count = document.querySelector(".quiz-card .question-count span");
let time;
if (window.location.href.includes("quizstart.html")) {
  time = 7;
  setInterval(() => {
    timer.innerText = `Timer : ${time}`;
    time--;
    if (time < 5) {
      timer.style.color = "red";
      time = 7;
    } else if (time == 0) {
    }
  }, 1000);
}

let num = 0;
question.innerText = htmlQuiz[questionsCount].question;
options.forEach((e, val) => {
  options[val].addEventListener("click", (e) => {
    userAnser.push(e.target.innerText);
    if (userAnser[val] === correctAnswers[val]) {
      score += oneQuestion;

      console.log(score);
    } else {
      console.log(`false`);
    }
  });

  options[val].innerText = htmlQuiz[questionsCount].options[val];
  options[val].innerText = htmlQuiz[questionsCount].options[val];
  options[val].innerText = htmlQuiz[questionsCount].options[val];
  options[val].innerText = htmlQuiz[questionsCount].options[val];
});

// next btn
next_btn.addEventListener("click", () => {
  time = 15;
  timer.style.color = "white";

  let a = 10;
  count += a;
  questionsCount++;

  if(questionsCount>=htmlQuiz.length) {
alert(`Quiz Completed ${score}`)
}
  progress_fill.style.width = `${count}%`;
  question_count.innerText = questionsCount;

  question.innerText = htmlQuiz[questionsCount].question;

  if (count == 100) {
    count = 0;
  }

  options.forEach((e, val) => {
    options[val].innerText = htmlQuiz[questionsCount].options[val];
    options[val].innerText = htmlQuiz[questionsCount].options[val];
    options[val].innerText = htmlQuiz[questionsCount].options[val];
    options[val].innerText = htmlQuiz[questionsCount].options[val];
  });
});

progress_fill.style.width = `${0}%`;
