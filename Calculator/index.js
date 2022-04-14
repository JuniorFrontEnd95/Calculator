
const number7 = document.querySelector('.number7');
const number8 = document.querySelector('.number8');
const number9 = document.querySelector('.number9');
const number4 = document.querySelector('.number4');
const number5 = document.querySelector('.number5');
const number6 = document.querySelector('.number6');
const number1 = document.querySelector('.number1');
const number2 = document.querySelector('.number2');
const number3 = document.querySelector('.number3');


const multiply = document.querySelector('.multiply');
const subtract = document.querySelector('.subtract');
const add = document.querySelector('.add');
const equals = document.querySelector('.equals');
const result = document.querySelector('.result');

let firstNumber = 0;
let secondNumber = 0;
let startBuildingSecondNumber = false;
let operation = '';


function buildNumber(numberReceived) {
  if (startBuildingSecondNumber === false) {
    firstNumber = firstNumber * 10 + numberReceived; 
    result.innerHTML = firstNumber;
  } else {
    secondNumber = secondNumber * 10 + numberReceived;
    result.innerHTML = secondNumber;
  }
}


number7.addEventListener('click', function(){
  buildNumber(7);
});
number8.addEventListener('click', function () {
  buildNumber(8);
});
number9.addEventListener('click', function () {
  buildNumber(9);
});
number4.addEventListener('click', function(){
  buildNumber(4);
});
number5.addEventListener('click', function () {
  buildNumber(5);
});
number6.addEventListener('click', function () {
  buildNumber(6);
});
number1.addEventListener('click', function(){
  buildNumber(1);
});
number2.addEventListener('click', function () {
  buildNumber(2);
});
number3.addEventListener('click', function () {
  buildNumber(3);
});

multiply.addEventListener('click', function(){
  startBuildingSecondNumber = true;
  operation = 'multiply';
  result.innerHTML = '*';
});
subtract.addEventListener('click', function(){
  startBuildingSecondNumber = true;
  operation = 'subtract';
  result.innerHTML = '-';
});
add.addEventListener('click', function(){
  startBuildingSecondNumber = true;
  operation = 'add';
  result.innerHTML = '+';
});
equals.addEventListener('click', function(){
  if (operation === 'add') {
    let operationResult = firstNumber + secondNumber;
    result.innerHTML = operationResult;
    firstNumber = '';
    secondNumber = '';
    startBuildingSecondNumber = false;
  } else if (operation === 'multiply'){
    let operationResult = firstNumber * secondNumber;
    result.innerHTML = operationResult;
    firstNumber = '';
    secondNumber = '';
    startBuildingSecondNumber = false;
  } else if(operation === 'subtract') {
    let operationResult = firstNumber - secondNumber;
    result.innerHTML = operationResult;
    firstNumber = '';
    secondNumber = '';
    startBuildingSecondNumber = false;
  }
  
});
