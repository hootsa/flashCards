let questions = [
  "What is the supreme law of the land?",
  "What does the Constitution do?",
  "What are the first three words of the Constitution?",
  "What is an amendment?",
  "What do we call the first ten amendments to the Constitution?",
];
let answers = [
  "The Constitution",
  "Protects the basic rights of Americans",
  "We The People",
  "a change/addition (to the constitution)",
  "The Bill of Rights",
];

//get elements

function GetElement(idName) {
  const element = document.getElementById(idName);
  return element;
}

const entireBorderElement = GetElement("entireBorder");
const displayElement = GetElement("display");
const previousBtnElement = GetElement("previousBtn");
const nextBtnElement = GetElement("nextBtn");
const titleElement = GetElement("title");
const quantitiesEl = GetElement("quantities");
const questionInputEl = GetElement("questionInput");
const answerInputEl = GetElement("answerInput");
const submitBtnEl = GetElement("submitBtn");
console.log(submitBtnEl);
titleElement.classList.add("blue-color");

//Deafult page load

let isQuestion = true;
let currentIdx = 0;
printData();

// Add eventListener
displayElement.addEventListener("click", flip);
nextBtnElement.addEventListener("click", next);
previousBtnElement.addEventListener("click", previous);
submitBtnEl.addEventListener("click", submit);

function flip() {
  if (isQuestion) {
    isQuestion = false;
    printData();
  } else {
    isQuestion = true;
    printData();
  }
}

function next() {
  if (currentIdx >= questions.length - 1) {
    return;
  }
  currentIdx++;
  printData();
}

function previous() {
  if (currentIdx === 0) {
    return;
  }
  currentIdx--;
  printData();
}

function printData() {
  if (isQuestion) {
    displayElement.innerHTML = questions[currentIdx];
    titleElement.innerHTML = "Question";
    titleElement.classList.add("blue-color");
  } else {
    displayElement.innerHTML = answers[currentIdx];
    titleElement.innerHTML = "Answer";
    titleElement.classList.remove("blue-color");
    titleElement.classList.add("green-color");
  }

  quantitiesEl.innerHTML = currentIdx + 1 + "/" + questions.length;
}

function submit() {
  const questionInputValue = questionInputEl.value;
  const answerInputValue = answerInputEl.value;
  for (let i = 0; i < questions.length; i++) {
    const questionsItem = questions[i];
    if (questionsItem === questionInputValue) {
      return;
    }
  }
  if (!!questionInputValue && !!answerInputValue) {
    questions.push(questionInputValue);
    answers.push(answerInputValue);
  }

  console.log(questions, "mmmmm", questionInputValue);
  printData();
  clearInputs();
}

function clearInputs() {
  questionInputEl.value = "";
  answerInputEl.value = "";
}
