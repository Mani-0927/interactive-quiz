const quizData = [
  {
    question: "Which language is used for web structure?",
    options: ["CSS", "JavaScript", "HTML", "Python"],
    correct: "HTML"
  },
  {
    question: "Which is used for styling web pages?",
    options: ["HTML", "CSS", "C++", "Java"],
    correct: "CSS"
  },
  {
    question: "Which language makes websites interactive?",
    options: ["HTML", "CSS", "JavaScript", "SQL"],
    correct: "JavaScript"
  },
  {
    question: "Which tag is used for linking CSS?",
    options: ['script', 'style', 'link', 'css'],
    correct: "link"
  },
  {
    question: "Which is not a programming language?",
    options: ["Python", "Java", "HTML", "C"],
    correct: "HTML"
  }
];

const quizDiv = document.getElementById("quiz");
const resultDiv = document.getElementById("result");
const quizForm = document.getElementById("quizForm");

function loadQuiz() {
  quizDiv.innerHTML = "";

  quizData.forEach((item, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");

    questionDiv.innerHTML = `
      <h3>Q${index + 1}. ${item.question}</h3>
      <div class="options">
        ${item.options.map(option => `
          <label>
            <input type="radio" name="q${index}" value="${option}">
            ${option}
          </label>
        `).join("")}
      </div>
    `;

    quizDiv.appendChild(questionDiv);
  });
}
  quizForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let score = 0;
  let allAnswered = true;

  quizData.forEach((item, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);

    if (!selected) {
      allAnswered = false;
    } else if (selected.value === item.correct) {
      selected.parentElement.style.backgroundColor = "green";
      score++;
    }
    else {
      selected.parentElement.style.backgroundColor = "red";
    }
  });

  if (!allAnswered) {
    alert("Please fill all questions before submitting the quiz!");
    return;
  }

  resultDiv.innerHTML = `You scored ${score} out of ${quizData.length}`;

});

loadQuiz();
