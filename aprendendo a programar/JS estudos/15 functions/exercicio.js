//Exercicios Funções

let num1 = 10
let num2 = 20

function adicao(a, b){
    return a + b;
}

// console.log("Resultado da Adição:");
// console.log(adicao(num1, num2));
//-----------------------------------------------

function subtracao(a, b){
    return a - b;
}

// console.log("Resultado da Subtração:");
// console.log( `Console = ${subtracao(num1, num2)}`);

//------------------------------------------------
function mult(a, b){
    return a * b;
}

// console.log("Resultado da Multiplicação:");
// console.log(mult(num1, num2));

//-------------------------------------------------
function div(a, b){
    return a / b;
}

// console.log("Resultado da Divisão:");
// console.log(div(num1, num2));

console.clear();

console.log('Adição: ' + adicao(num1, num2));
console.log('Subtração: ' + subtracao(num1, num2));
console.log('Multiplicação: ' + mult(num1, num2));
console.log('Divisão: ' + div(num1, num2));

