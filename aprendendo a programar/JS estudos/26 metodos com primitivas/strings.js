//alguns metodos e prpriedades de strings
// os metodos retornam sempre um novo valor

let nome = "João Macedo";

//principal propriedade das strings: numero de caracteres

console.log(`Numero de Caracteres da string: ${nome.length}`);

//metodo para colocar a string um uppercase
console.log(nome.toUpperCase());

//apresentar um caracter dentro de uma string nume determinada posição 
// indices de base zero

console.log(nome.charAt(0));

//metodos para juntar strings
let s1 = "um ";
let s2 = "dois ";
let s3 = "tres ";
let s_total = s1 + s2 + s3;
console.log(s_total);

let outra_s_total = s1.concat(s2, s3);
console.log(outra_s_total);

//verifica se uma contem outra 
console.log(nome.includes('João'));

let frase = "essa frase tem varis palavras"
console.log(frase.split(" "));

