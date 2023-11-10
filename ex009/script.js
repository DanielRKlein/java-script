const display = document.querySelector("#currentOperationText");
const previousDisplay = document.querySelector("#previousOperationText")
const equals = document.querySelector("#equals");
const reset = document.querySelector("#reset");
const pointButton = document.querySelector("#ponto")
const numericButton = document.querySelectorAll(".numerico");
const operatorButton = document.querySelectorAll(".operator");

let currentOperation = "";
let currentValue = null;
let operator = null;
let previousValue = null;
let previousValueText = "";
let calc = false;


//funcoes 

function getPreviousOperation(operation) {
    previousValue = (currentOperation);
    previousValueText = previousValue + ` ${operation}`
    currentOperation = "";
    operador = operation;
    atualizaDisplay();
}

function getCurrentOperation() {
    if (!operador == null){
        currentValue = parseFloat(currentOperation);
    }
    }


function atualizaDisplay() {
    display.textContent = currentOperation;
    previousDisplay.textContent = previousValueText;
}

function insertPonto(event) {
    if (!currentOperation.includes(".")) {
        currentOperation += event.target.textContent;
        atualizaDisplay();
    }

    }


function insert(event) {
    
    if (calc) {
        currentOperation = event.target.textContent;
        calc = false;
    }
    else {
        currentOperation += event.target.textContent;
    }

    atualizaDisplay()
}


//eventos

numericButton.forEach((button) => button.addEventListener("click", insert))

pointButton.addEventListener("click", insertPonto)

operatorButton.forEach((button) => button.addEventListener("click", () => {

    switch (button.textContent) {
        case ("+") :
            getPreviousOperation(button.textContent);


            break;
        case ("-") :
            getPreviousOperation(button.textContent);
            break;
        case ("*") :
            getPreviousOperation(button.textContent);
            break;
        case ("/") :
            getPreviousOperation(button.textContent);
            break;
    }

}))

equals.addEventListener("click", calcula())
