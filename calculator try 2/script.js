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
        previousValue = parseFloat(currentOperation);
        previousValueText = previousValue + ` ${operation}`;
        currentOperation = "";
        operator = operation;
        counter++
    
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
        currentOperation = event.target.textContent;
        calc = false;
    }
    else {
        currentOperation += event.target.textContent;
    }
    
    updateDisplay()
}


function calcula() {

    switch (operator) {
        case ("+") :
          if(counter)  {
                getCurrentOperation();
                currentOperation = previousValue + currentValue;
                previousValueText = previousValueText + ` ${currentValue}`;
            }
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
    }
}



//eventos

numericButton.forEach((button) => button.addEventListener("click", insert));

pointButton.addEventListener("click", insertPonto);

operatorButton.forEach((button) => button.addEventListener("click", () => {
    getPreviousOperation(button.textContent);
    currentOperation = "";
    updateDisplay()
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
