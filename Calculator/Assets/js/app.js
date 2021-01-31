// Define UI Variables
const number = document.querySelector(".input-number");
const clearBtn = document.querySelector(".clear-btn");
const negativeBtn = document.querySelector(".negative-btn");
const divideBtn = document.querySelector(".divide-btn");
const timesBtn = document.querySelector(".times-btn");
const minusBtn = document.querySelector(".minus-btn");
const plusBtn = document.querySelector(".plus-btn");
const equalsBtn = document.querySelector(".equal-btn");
const decimalBtn = document.querySelector(".decimal-btn");
const percentBtn = document.querySelector(".percent-btn");

const zeroBtn = document.querySelector(".zero-btn");
const oneBtn = document.querySelector(".one-btn");
const twoBtn = document.querySelector(".two-btn");
const threeBtn = document.querySelector(".three-btn");
const fourBtn = document.querySelector(".four-btn");
const fiveBtn = document.querySelector(".five-btn");
const sixBtn = document.querySelector(".six-btn");
const sevenBtn = document.querySelector(".seven-btn");
const eightBtn = document.querySelector(".eight-btn");
const nineBtn = document.querySelector(".nine-btn");

// control variable
var operationSettled = "";
var operatorActive = false;
var firstNumber = "";
var operation = "";

// Number input function
function addNumberOne() {
  if (number.textContent == 0 || operatorActive == true) {
    operatorActive = false;
    number.textContent = 1;
  } else {
    number.textContent += 1;
  }
}
function addNumberTwo() {
  if (number.textContent == 0 || operatorActive == true) {
    operatorActive = false;
    number.textContent = 2;
  } else {
    number.textContent += 2;
  }
}
function addNumberThree() {
  if (number.textContent == 0 || operatorActive == true) {
    operatorActive = false;
    number.textContent = 3;
  } else {
    number.textContent += 3;
  }
}
function addNumberFour() {
  if (number.textContent == 0 || operatorActive == true) {
    operatorActive = false;
    number.textContent = 4;
  } else {
    number.textContent += 4;
  }
}
function addNumberFive() {
  if (number.textContent == 0 || operatorActive == true) {
    operatorActive = false;
    number.textContent = 5;
  } else {
    number.textContent += 5;
  }
}
function addNumberSix() {
  if (number.textContent == 0 || operatorActive == true) {
    operatorActive = false;
    number.textContent = 6;
  } else {
    number.textContent += 6;
  }
}
function addNumberSeven() {
  if (number.textContent == 0 || operatorActive == true) {
    operatorActive = false;
    number.textContent = 7;
  } else {
    number.textContent += 7;
  }
}
function addNumberEight() {
  if (number.textContent == 0 || operatorActive == true) {
    operatorActive = false;
    number.textContent = 8;
  } else {
    number.textContent += 8;
  }
}
function addNumberNine() {
  if (number.textContent == 0 || operatorActive == true) {
    operatorActive = false;
    number.textContent = 9;
  } else {
    number.textContent += 9;
  }
}
function addNumberZero() {
  if (number.textContent == 0 || operatorActive == true) {
    operatorActive = false;
    number.textContent = 0;
  } else {
    number.textContent += 0;
  }
}
oneBtn.addEventListener("click", addNumberOne);
twoBtn.addEventListener("click", addNumberTwo);
threeBtn.addEventListener("click", addNumberThree);
fourBtn.addEventListener("click", addNumberFour);
fiveBtn.addEventListener("click", addNumberFive);
sixBtn.addEventListener("click", addNumberSix);
sevenBtn.addEventListener("click", addNumberSeven);
eightBtn.addEventListener("click", addNumberEight);
nineBtn.addEventListener("click", addNumberNine);
zeroBtn.addEventListener("click", addNumberZero);

function clearInput() {
  number.textContent = "0";
  firstNumber = 0;
  operationSettled = "";
}
clearBtn.addEventListener("click", clearInput);

// operation button click function
function plusButtonClick() {
  operation = "add";
  calculator();
}
function minusButtonClick() {
  operation = "minus";
  calculator();
}
function timesButtonClick() {
  operation = "times";
  calculator();
}
function divideButtonClick() {
  operation = "divide";
  calculator();
}
function negativeButtonClick() {
  operation = "negative";
  calculator();
}
function percentButtonClick() {
  operation = "percent";
  calculator();
}
function equalButtonClick() {
  calculator();
  operationSettled = "";
}

// Operation input function
function additionOperation() {
  firstNumber += parseInt(number.textContent);
}
function subtractionOperation() {
  firstNumber -= parseInt(number.textContent);
}
function multiplicationOperation() {
  firstNumber *= parseInt(number.textContent);
}
function divisionOperation() {
  if (number.textContent == "0") {
    firstNumber = "Error";
  } else {
    firstNumber /= parseInt(number.textContent);
  }
}
function negativeOperation() {
  firstNumber *= -1;
}
function percentOperation() {
  firstNumber /= 100;
}
// calculator function
function calculator() {
  operatorActive = true;
  if (operationSettled == "") {
    operationSettled = operation;
    firstNumber = parseInt(number.textContent);
    if (operationSettled == "negative") {
      negativeOperation();
    } else if (operationSettled == "percent") {
      percentOperation();
    }
  } else {
    if (operationSettled == "add") {
      additionOperation();
    } else if (operationSettled == "minus") {
      subtractionOperation();
    } else if (operationSettled == "times") {
      multiplicationOperation();
    } else if (operationSettled == "divide") {
      divisionOperation();
    }
    operationSettled = operation;
  }
  number.textContent = firstNumber;
}

plusBtn.addEventListener("click", plusButtonClick);
minusBtn.addEventListener("click", minusButtonClick);
timesBtn.addEventListener("click", timesButtonClick);
divideBtn.addEventListener("click", divideButtonClick);
equalsBtn.addEventListener("click", equalButtonClick);
negativeBtn.addEventListener("click", negativeButtonClick);
percentBtn.addEventListener("click", percentButtonClick);
