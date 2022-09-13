//ARROW FUNCTIONS
/*
Existe uma forma simples e curta ao nível da sintaxe para criar funções, e que
é geralmente mais interessante do que function expressions.

São funções designadas por Arrow Functions.
*/ 

// let funcao = (argumentos) => expressao;

//Essa assinatura cria uma função que aceita argumentos, depois expressao do lado
//direito e retorna o resutado.

let funcao = function(a,b,c){
    return a + b + c;
};

// vejamos um exemplo concreto:
let adicao = (a,b) => a + b;

//é uma abreviação de:
// let adicao = function(a,b){
//     return a + b;
// }

//para executar a função 
console.log(adicção(10,20));