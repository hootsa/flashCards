// ex: ternary if syntax  const isOld = age>18 ? true : false;

const storageData = localStorage.getItem("flashcardData");
let data = storageData
  ? JSON.parse(storageData)
  : [
      {
        question: "How this flashcard work?",
        answer:
          "You can type your question in the question box and add your answer in the answer section then submit them into flashcard. ",
      },
    ];

//get elements

function GetElement(idName) {
  const element = document.getElementById(idName);
  return element;
}

//Deafult page load
let isQuestion = true;
let currentIdx = 0;

const entireBorderElement = GetElement("entireBorder");
const displayElement = GetElement("display");
const previousBtnElement = GetElement("previousBtn");
const nextBtnElement = GetElement("nextBtn");
const titleElement = GetElement("title");
const quantitiesEl = GetElement("quantities");
const questionInputEl = GetElement("questionInput");
const answerInputEl = GetElement("answerInput");
const submitBtnEl = GetElement("submitBtn");
titleElement.classList.add("blue-color");

printData();

// Add eventListener
entireBorderElement.addEventListener("click", flip);
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

function next(event) {
  event.stopPropagation();
  if (currentIdx >= data.length - 1) {
    return;
  }
  currentIdx++;
  printData();
}

function previous(e) {
  e.stopPropagation();
  if (currentIdx === 0) {
    return;
  }
  currentIdx--;
  printData();
}

function printData() {
  let eachObj = data[currentIdx];

  if (isQuestion) {
    displayElement.innerHTML = eachObj.question;
    titleElement.innerHTML = "Question";
    titleElement.classList.add("blue-color");
  } else {
    displayElement.innerHTML = eachObj.answer;
    titleElement.innerHTML = "Answer";
    titleElement.classList.remove("blue-color");
    titleElement.classList.add("green-color");
  }

  quantitiesEl.innerHTML = currentIdx + 1 + "/" + data.length;
}

function submit() {
  const questionInputValue = questionInputEl.value;
  const answerInputValue = answerInputEl.value;

  const hasInputValue = data.some((itemObj) => {
    if (questionInputValue === itemObj.question) {
      return true;
    }
    return false;
  });

  if (!!questionInputValue && !!answerInputValue && !hasInputValue) {
    const newData = { question: questionInputValue, answer: answerInputValue };
    data.push(newData);
  }

  localStorage.setItem("flashcardData", JSON.stringify(data));

  printData();
  clearInputs();
}

function clearInputs() {
  questionInputEl.value = "";
  answerInputEl.value = "";
}
