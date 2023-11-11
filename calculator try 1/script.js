const currentOperationText = document.querySelector("#currentOperationText");
const previousOperationText = document.querySelector("#previousOperationText")
const numeros = {
    //cria array de botoes numéricos
    numButtons : document.querySelectorAll(".numerico"),

    numCalc : '' 
    //numCalc é uma string que armazena e concatena o textContent de cada (button.numerico), criando assim o número na tela...
};

const operadores = {
    opButtons : document.querySelectorAll(".operator"), num: 0, counter: 0, subtractNum: 0, sequence : 0, somatoria : 0 ,somatoriab: false,

  /*
    . As funções a seguir são ativadas ao apertar os botoes de operadores. Elas armazenam o número da tela (parseFloat(numCalc)) na variável this.num e limpam a tela, possibilitando a digitação de um novo número.

    . Caso seja pressionado o operador novamente, elas operam e exibem o resultado da operação do número que está na tela (parseFloat(numCalc)) com o número armazenado em this.num. Em seguida, esse NOVO número é armazenado em this.num.

    . Se clicar novamente sem digitar nenhum número, acontceria a exibição de NaN pois elas tentar operar ('') com (this.num). Graças a um mecanismo de contadores, a função não será chamada mais de uma vez sem o usuário pressionar um novo botão numérico (caso pressione um operador duas vezes seguidas {counter == 1} a função nao seria chamada por conta de um if em "operadores.opButtons.forEach(function(botao) {" que só permite chamar a função caso counter < 1)

    . Se pressionar algum botão numérico, limpam a tela (pois a função de exibir os números na tela usa numCalc, que foi zerado) e resetam o contador (na função de exibir os números na tela, foi estabelecido que sempre que um número é digitado, {contador = 0}), permitindo assim realizar mais uma soma.
*/


    soma : function() {
        this.counter++; 
        this.num = this.num + parseFloat(numeros.numCalc);
        currentOperationText.innerHTML = this.num;
        numeros.numCalc = '';
        this.somatoriab = true;
        somatoria = this.num;
    },
    subtração : function() {
        this.counter++; 
        this.num = parseFloat(numeros.numCalc);

        if (this.sequence < 1) {
            currentOperationText.innerHTML = this.num;
            numeros.numCalc = '';
            this.sequence++;
            this.subtractNum = this.subtractNum + this.num;
        }
        else {
            currentOperationText.innerHTML = (this.subtractNum - this.num);
            numeros.numCalc = '';
            this.subtractNum = this.subtractNum - this.num;
        }

    },
    multiplicador : function() {
        this.counter++; 
        if (this.num < 1) {
            this.num = 1;
        }
        this.num = this.num * parseFloat(numeros.numCalc);
        currentOperationText.innerHTML = this.num;
        numeros.numCalc = '';

    },

    divisor : function() {
        this.counter++; 
        this.num = parseFloat(numeros.numCalc);

        if (this.sequence < 1) {
            currentOperationText.innerHTML = this.num;
            numeros.numCalc = '';
            this.sequence++;
            this.subtractNum = this.subtractNum + this.num; //isso pode trazer problemas com operaçoes multiplas
        }
        else {
            currentOperationText.innerHTML = (this.subtractNum / this.num);
            numeros.numCalc = '';
            this.subtractNum = this.subtractNum / this.num;
        }

    }
}

const resetButton = document.querySelector("#reset");

resetButton.addEventListener('click', function() {
    numeros.numCalc = '';
    operadores.num = 0;
    currentOperationText.innerHTML = '';
    operadores.subtractNum = 0;
    operadores.sequence = 0;
    
})

//loop for para percorrer array.length de botoes numéricos
numeros.numButtons.forEach(function(botao) { 
    botao.addEventListener('click', function() {
        operadores.counter = 0; // contador é zerado

        if (numeros.numCalc.length < 8) {
        numeros.numCalc += botao.textContent; 
        //concatenando e armazenando

        currentOperationText.innerHTML = numeros.numCalc; //mostrando na tela
        }

    });
});

operadores.opButtons.forEach(function(botao) {
    botao.addEventListener('click', function() {
        if (operadores.counter < 1 && numeros.numCalc.length >= 1) {

            switch (botao.textContent) {

                case '+' :
                    operadores.counter = 0;
                    operadores.soma();
                    break;
                case '-' :
                    operadores.counter = 0;
                    operadores.subtração();
                    break;
                case '*' :
                    operadores.counter = 0;
                    operadores.multiplicador();
                    break;

                case '/' :
                    operadores.counter = 0;
                    operadores.divisor();
                    break;

            }
        }        //if (botao.textContent == '+' && operadores.counter < 1) {
            //operadores.counter = 0;
            //operadores.soma();
        //}
    })
})

