/*Existe um metodo designado SPLICE que é uma autêntica caixa de ferramentas para gerir arrays
*/

let nomes = ['joao','ana','carlos','antonio'];

//como remover um elemento do array?
//os arrays são objetos na sua essencia, portanto podemos testar o delete

// delete nomes[2];

// console.log(nomes);

//como podemos ver, o elemento foi de facto removido, mas continua lá no seu epaço.
//ser vir-mos o tamanho do array continua com 4.

// console.log(nomes.length);

nomes.splice(2,1);
console.log(nomes);
console.log(nomes.length);

