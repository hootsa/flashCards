let data = [
  {
    question: "What is the supreme law of the land?",
    answer: "The Constitution",
  },
  {
    question: "What does the Constitution do?",
    answer: "Protects the basic rights of Americans",
  },
  {
    question: "What are the first three words of the Constitution?",
    answer: "We The People",
  },
  {
    question: "What is an amendment?",
    answer: "a change/addition (to the constitution)",
  },
  {
    question: "What do we call the first ten amendments to the Constitution?",
    answer: "The Bill of Rights",
  },
];

// let questions = [
//   "What is the supreme law of the land?",
//   "What does the Constitution do?",
//   "What are the first three words of the Constitution?",
//   "What is an amendment?",
//   "What do we call the first ten amendments to the Constitution?",
// ];
// let answers = [
//   "The Constitution",
//   "Protects the basic rights of Americans",
//   "We The People",
//   "a change/addition (to the constitution)",
//   "The Bill of Rights",
// ];

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
  let eachObjItem = data[currentIdx];
  if (isQuestion) {
    displayElement.innerHTML = eachObjItem.question;
    titleElement.innerHTML = "Question";
    titleElement.classList.add("blue-color");
  } else {
    displayElement.innerHTML = eachObjItem.answer;
    titleElement.innerHTML = "Answer";
    titleElement.classList.remove("blue-color");
    titleElement.classList.add("green-color");
  }

  quantitiesEl.innerHTML = currentIdx + 1 + "/" + data.length;
}

function submit() {
  const questionInputValue = questionInputEl.value;
  const answerInputValue = answerInputEl.value;

  //   for (let i = 0; i < data.length; i++) {
  //     const eachObj = data[i];
  //     const questionA = eachObj.question;
  //     if (questionA === questionInputValue) {
  //       return;
  //     }
  //   }

  const hasInputValue = data.some((itemObj) => {
    if (questionInputValue === itemObj.question) {
      return true;
    }
    return false;
  });

  if (!!questionInputValue && !!answerInputValue && !hasInputValue) {
    const newData = { answer: answerInputValue, question: questionInputValue };
    data.push(newData);
  }

  printData();
  clearInputs();
}

function clearInputs() {
  questionInputEl.value = "";
  answerInputEl.value = "";
}
