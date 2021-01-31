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
