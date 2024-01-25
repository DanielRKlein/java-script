const display = document.querySelector("#currentOperationText");
const previousDisplay = document.querySelector("#previousOperationText");
const equals = document.querySelector("#equals");
const reset = document.querySelector("#reset");
const pointButton = document.querySelector("#ponto");
const numericButton = document.querySelectorAll(".numerico");
const operatorButton = document.querySelectorAll(".operator");

let currentOperation = "";
let currentValue = null;
let currentValueText = "";
let operator = null;
let previousValue = null;
let previousValueText = "";
let calc = false;
let counter = 0;


//funcoes 


function updateDisplay() {
    display.textContent = currentOperation;
    previousDisplay.textContent = previousValueText;
}


function getPreviousOperation(operation) {
    operator = operation;
    if (!calc){
        switch (operation) {
        case ('+') :
            previousValue += parseFloat(currentOperation);
            counter = 0;
            currentOperation = previousValue
            break;
        case ('-') :
            if (previousValue !== null){
                previousValue -= parseFloat(currentOperation);
                counter = 0;
                currentOperation = previousValue
            }
            else {
                previousValue = parseFloat(currentOperation)
                counter = 0;
                currentOperation = previousValue
            }
            break;
        case('*') :
            if (previousValue !== null) {
                previousValue *= parseFloat(currentOperation);
                counter = 0;
            }
            else{
                previousValue = parseFloat(currentOperation)
                counter = 0;
                currentOperation = previousValue
            }
            break;
        case('/') :
            if (previousValue !== null) {
                previousValue /= parseFloat(currentOperation);
                counter = 0;
            }
            else {
                previousValue = parseFloat(currentOperation)
                counter = 0;
                currentOperation = previousValue
            }
            break;
        default :
            previousValue = parseFloat(currentOperation);
        }
    }
    else if (counter === 0){
        previousValue = previousValue + ` ${operation}`;
    }
    previousValueText = previousValue + ` ${operation}`;
    counter++
    calc = true
    updateDisplay();
}



function getCurrentOperation() {
    if (operator !== null){
        currentValue = parseFloat(currentOperation);
    }
    }


function insertPonto(event) {
    if (!currentOperation.includes(".")) {
        currentOperation += event.target.textContent;
        updateDisplay();
    }}


function insert(event) {
    if (calc == true) {
        currentOperation = "";
        currentOperation = event.target.textContent;
        calc = false;
        updateDisplay()
    }
    else {
        currentOperation += event.target.textContent;
        updateDisplay()
    }
    
    
}


function calcula() {

    if (currentOperation != ""){
        switch (operator) {
        case ("+") :
            getCurrentOperation();
            currentOperation = previousValue + currentValue;
            previousValueText = previousValueText + ` ${currentValue}`;
            updateDisplay()
            break;
        case ("-") :
            getCurrentOperation();
            currentOperation = previousValue - currentValue;
            previousValueText = previousValueText + ` ${currentValue}`;
            updateDisplay()
            break;
        case ("*") :
            getCurrentOperation();
            currentOperation = previousValue * currentValue;
            previousValueText = previousValueText + ` ${currentValue}`;
            updateDisplay()
            break;
        case ("/") :
            getCurrentOperation();
            currentOperation = previousValue / currentValue;
            previousValueText = previousValueText + ` ${currentValue}`;
            updateDisplay()
            break;
    }}
    calc = true
    counter ++
    previousValue = currentOperation
    currentValue = previousValue
}



//eventos

numericButton.forEach((button) => button.addEventListener("click", insert));

pointButton.addEventListener("click", insertPonto);

operatorButton.forEach((button) => button.addEventListener("click", () => {
    if (currentOperation != ""){
        getPreviousOperation(button.textContent);
        updateDisplay()}
}));

equals.addEventListener("click", calcula);

reset.addEventListener("click", () => {
    currentValueText = "";
    currentOperation = "";
    previousValueText = "";
    counter = 0;
    previousValue = null;
    currentValue = null;
    operator = null;
    calc = false;
    updateDisplay()

});
