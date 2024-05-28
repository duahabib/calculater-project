const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

/*

This is also a comment !

And this is!

*/

// Gets input from input field

function getUserNumberInput() {
  return parseInt(userInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {

  const calDescription =  `${resultBeforeCalc} ${operator} ${calcNumber}` ;
  outputResult(currentResult, calDescription);// from vendor file
}

function writeTolog(operationIdentifier, prevResult , operationNumber , newResult){
  const logEntry = {
    operator : operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult
  };
  logEntries.push(logEntry);
  console.log(logEntries);

}

function add() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult += enteredNumber;

  createAndWriteOutput('+', initialResult, enteredNumber);
  writeTolog('ADD', initialResult, enteredNumber , currentResult);
  
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput('-', initialResult, enteredNumber);
  writeTolog('SUBTRACT', initialResult, enteredNumber , currentResult);
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult *=  enteredNumber;
  createAndWriteOutput('*', initialResult, enteredNumber);
  writeTolog('MULTIPLY', initialResult, enteredNumber , currentResult);
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput('/', initialResult, enteredNumber);
  writeTolog('DIVIDE', initialResult, enteredNumber , currentResult);
}




addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);


