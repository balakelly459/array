"use strict"

const numeros = [2, 27, 8, 13, 100, 12, 73]

//MAP FILTER REDUCE

//Criar um novo array com cada elemento do array numeros adicionando 100
const adicionar100 = (numero) => numero + 100
const numeros100 = numeros.map(adicionar100)
console.log(numeros100)

// Criar um novo array com cada elemento do array numeros descontando 50%
const desconto50PorCento = (numero) => numero * 0.5
const numerosDesconto50 = numeros.map(desconto50PorCento)
console.log(numerosDesconto50)

//Criar um array com os elementos do array numeros que são menores de 20
const eMenorQue20 = (numero) => numero < 20
const numerosMenores20 = numeros.filter(eMenorQue20)
console.log(numerosMenores20)

//Criar um novo array com os elementos do array numeros que são pares
const ePar = (numero) => numero % 2 == 0
const numerosPares = numeros.filter(ePar)
console.log(numerosPares)

//Somar todos os elementos do array numeros
const soma = (a, b) => a + b
const total = numeros.reduce(soma)
console.log(total)

//Somar todos os elementos pares menores que 20

const resultado = numeros
.filter(ePar)
.filter(eMenorQue20)
.reduce(soma)
console.log(resultado)


// let numero100
// let cont = 0
// const limite = 6
// while (cont <= limite) {
//     numeros100 [cont] = numeros[cont] + 100
//     cont+
// }