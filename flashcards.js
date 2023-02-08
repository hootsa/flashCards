let questions = [
  "What is the supreme law of the land?",
  "What does the Constitution do?",
  "What are the first three words of the Constitution?",
  "What is an amendment?",
  "What do we call the first ten amendments to the Constitution?",
  "What is one right or freedom from the first amendment?",
  "How many amendments does the Constitution have?",
  "What did the Declaration of Independence do?",
  "What are three rights in the Declaration of Independence?",
  "What is freedom of religion?",
];
let answers = [
  "The Constitution",
  "Protects the basic rights of Americans",
  "We The People",
  "a change/addition (to the constitution)",
  "The Bill of Rights",
  "Speech",
  "27",
  "Declared our Independence",
  "Life, Liberty, and the Pursuit of Happiness",
  "you can practice any religion or not practice a religion",
];

// get elements
const entireBorderElement = document.getElementById("entireBorder");
const displayElement = document.getElementById("display");
const previousBtnElement = document.getElementById("previousBtn");
const nextBtnElement = document.getElementById("nextBtn");
const titleElement = document.getElementById("title");

// Add eventListener
displayElement.addEventListener("click", flip);
displayElement.innerHTML = questions[0];
titleElement.innerHTML = "Question";

let isQuestion = true;

function flip() {
  console.log(titleElement.innerHTML);
  if (isQuestion) {
    isQuestion = false;
    displayElement.innerHTML = answers[0];
    titleElement.innerHTML = "Answer";
  } else {
    isQuestion = true;
    displayElement.innerHTML = questions[0];
    titleElement.innerHTML = "Question";
  }
}

nextBtnElement.addEventListener("click", next);
previousBtnElement.addEventListener("click", previous);

let currentIndexDisply = 0;
let i = 0;

function next() {
  if (currentIndexDisply !== questions.length - 1) {
    i++;
    displayElement.innerHTML = questions[i];
    currentIndexDisply++;
  } else {
    currentIndexDisply = 0;
  }
}

function previous() {
  if (currentIndexDisply !== questions.length - 1) {
    i--;
    displayElement.innerHTML = questions[i];
    currentIndexDisply--;
  } else {
    currentIndexDisply = 0;
  }
}
