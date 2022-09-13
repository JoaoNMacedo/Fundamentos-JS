//ARRAYS

/*strings, number, boolean, etc. permitem guardar um unico valor.
objetos permitem guardar uma estrutura de valores com determinadas chaves como nome das prpriedades
arrays são coleções de valores organizados por uma determinada ordem,
*/

// let nome = new Array();
// let nomes = [];

let nomes = ['joao', 'ana','carlos' ];

// para apresentar um valor de array, usamos o seu indice
console.log(nomes[0]);

//podemos alterar um valor de um arrray, recorrendo ao indice
nomes[1] = 'antonio';
console.log(nomes);

//para saber o total de valores de um array, usamos a propriedade length
console.log(nomes.length);

//um array pode conter elementos com qualquer tipo de valores
let dados = [
 'joao',
 100,
 true,
 10.25
];

console.log(dados);

//pode até conter uma coleção de objetos
let clientes = [
    {nome:'joao',idade:48},
    {nome: 'ana',idade: 31},
    {nome:'carlos',idade:27}
];

//se eu quiser apresentar os dados de um cliente:
console.log(clientes[1].nome);

//se eu quiser iterar por todos os valores do array
clientes.forEach(cliente => {
    console.log(`O(A) cliente ${cliente.nome} tem ${cliente.idade} anos de idade.`);    
});

//ou

for (let i = 0; i < clientes.length; i++) {
    console.log(`O (A) cliente ${clientes[i].nome} tem ${clientes[i].idade} anos de idade.`);
}
