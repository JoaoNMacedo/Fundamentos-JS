//CiCLO FOR

for(inicio; condição;step){
    ações
}

for(let numero = 1; numero <=10 ; numero++){
    console.log(numero)

}
//pode ser ecrito assim
let numero = 1;
for(;numero <=10;numero++){
    console.log(numero);
}


// ou ainda
let numero = 1;
for(;numero <=10;){
    console.log(numero++);
}

//intercalando loop

for(let numero = 1; numero <= 10;){
    if(numero == 5)continue;
    console.log(numero)
}

//saltando fora do loop

for(let numero = 1; numero <= 10;numero++){
    console.log(numero)
    if(numero == 5)break;
}


//loop aninhados
for(let valor1 = 1;valor1 <=4;valor1++){
    for(let valor2 = 2; valor2 <=3; valor2++){
        console.log(`${valor1} x ${valor2} = ${valor1 * valor2}`);
    }
}

//sair dos loops com labels
ciclo : for(let valor1 = 1;valor1 <=4;valor1++){
    for(let valor2 = 2; valor2 <=3; valor2++){
        if(valor1 * valor2 == 6)break ciclo;
        console.log(`${valor1} x ${valor2} = ${valor1 * valor2}`);
    }
}
console.log('terminado')

