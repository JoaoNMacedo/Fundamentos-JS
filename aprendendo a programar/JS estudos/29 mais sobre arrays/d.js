// length pode não corresponder ao número total de elementos do array.
// length não conta o número de elementos. Vê apenas o último índice e acrecenta + 1 

let nomes = ['joao', 'ana','carlos'];
nomes[100] = 'antonio';
console.log(nomes)

console.log(nomes.length)