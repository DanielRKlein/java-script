
// meu código
function mathMethods(num1, num2) {
    const numberMax = Math.max(num1, num2);
    const numberMin = Math.min(num1, num2);
    const numberPow = Math.pow(num1, num2);
    const numberSqrt1 = Math.sqrt(num1);
    const numberSqrt2 = Math.sqrt(num2);

    const msg = `Maior número (max): ${numberMax} \nMenor número (min): ${numberMin} \n${num1} elevado por ${num2}: ${numberPow} \nRaiz quadrada de ${num1}: ${numberSqrt1} \nRaiz quadrada de ${num2}: ${numberSqrt2}`
    console.log(msg)

}

mathMethods(10,2);




//código pro grupo da faculdade
function operacoesMatematicas(a, b) {
    const numeroMaximo = Math.max(a, b);
    const numeroMinimo = Math.min(a, b);
    const resultadoPotencia = Math.pow(a, b);
    const raizQuadradaA = Math.sqrt(a);
    const raizQuadradaB = Math.sqrt(b);
    const aleatorioEntreAB = Math.random() * (b - a) + a;

    const mensagem = `Resultados das Operações Matemáticas:
    - Maior número: ${numeroMaximo}
    - Menor número: ${numeroMinimo}
    - ${a} elevado por ${b}: ${resultadoPotencia}
    - Raiz quadrada de ${a}: ${raizQuadradaA}
    - Raiz quadrada de ${b}: ${raizQuadradaB}
    - Número aleatório entre ${a} e ${b}: ${aleatorioEntreAB}`;

    console.log(mensagem);
}

operacoesMatematicas(10, 2);