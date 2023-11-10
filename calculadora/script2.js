const currentOperationText = document.querySelector("#currentOperationText");
const previousOperationText = document.querySelector("#previousOperationText")
const buttons = document.querySelectorAll(".button")

class Calculator {

}

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        if (numeros.numCalc.length < 8) {
            numeros.numCalc += botao.textContent; 
    
            currentOperationText.innerHTML = numeros.numCalc;
        }
    })
})