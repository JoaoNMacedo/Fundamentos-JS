// aspectos adicionais sobre arrays.

//os arrays são copiados por referência

let nomes = ['joao', 'ana','carlos'];
let outros_nomes = nomes; //copia por referencia 

outros_nomes[1] = 'antonio';
console.log(nomes, outros_nomes);