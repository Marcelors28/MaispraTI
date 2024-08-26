/*
    1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
    utilizando uma estrutura de controle if.
*/

// const prompt = require('prompt-sync')()

// let num = Number(prompt('Insira um número: '))

// if(num % 2 === 0){
//      console.log('Número Par')
//     } else{
//      console.log('Número Ímpar')
//     }

/*
    2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
    adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
    controle if-else.
*/

// const prompt = require('prompt-sync')()

// let age = Number(prompt('Insira sua idade: '))

// if((age >= 0) && (age <= 12)){

//     console.log('Criança: 0 - 12 anos')

// }else if ((age >= 13) && (age <= 17)){

//     console.log('Adolescente: 13 - 17 anos')

// }else if ((age >= 18) && (age <= 59)){

//     console.log('Adulto: 18 - 59 anos')

// }else{
//     console.log('Idoso: 60 anos ou mais')
// }

/*
    3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
    "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.
*/

// const prompt = require('prompt-sync')()

// let note = Number(prompt('Insira sua nota: '))

// if (note >= 6){
//     console.log('Aprovado')
// }else if (note < 6 && note >= 5){
//     console.log('Recuperação')
// }else{
//     console.log('Reprovado')
// }

/*

    4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
    Utilize switch-case para implementar a lógica de cada opção selecionada

*/

// const prompt = require('prompt-sync')()


// let option = Number(prompt('Digite sua opção: 1 - Opção 1 , 2 - Opção 2, 3 - Opção 3: '))


// switch(option){
//     case 1:
//         console.log('A opção 1 foi escolhida')
//         break
//     case 2:
//         console.log('A opção 2 foi escolhida')
//         break
//     case 3:
//         console.log('A opção 3 foi escolhida')
//         break
//     default:
//         console.log('Opção inválida, favor digite uma opção válida !')
// }


/*
        5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
    determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
    utilizando if-else.
*/

// const prompt = require('prompt-sync')()

// let peso = Number(prompt('Insira seu peso: '))
// let altura = Number(prompt('Insira sua altura (ex: 1.69):' ))

// imc = 0

// imc = (peso / (altura * altura))

// if(imc < 18.5){

//     console.log('Abaixo do peso: IMC < 18.5')

// }else if ((imc >= 18.5) && (imc <= 24.9)){

//     console.log('Peso normal: IMC 18.5 - 24.9')

// }else if ((imc >= 25) && (imc <= 29.9)){

//     console.log('Sobrepeso: IMC 25 - 29.9')

// }else if ((imc >= 30) && (imc <= 34.9)){

//     console.log('Obesidade grau I: IMC 30 - 34.9')

// }else if ((imc >= 35) && (imc <= 39.9)){

//     console.log('Obesidade grau II: IMC 35 - 39.9')

// }else {

//     console.log(' Obesidade grau III: IMC >= 40')
// }

/*
        6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
    formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
    Isósceles, escaleno ou eqüilátero.

    Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
    Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
    Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
    Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

*/


// const prompt = require('prompt-sync')()

// console.log('Verificação de tipos de triângulos (Isósceles, escaleno ou eqüilátero)')
// let numA = Number(prompt('Insira o valor do lado A: '))
// let numB = Number(prompt('Insira o valor do lado B: ' ))
// let numC = Number(prompt('Insira o valor do lado C: :' ))


// if(numA + numB > numC && numA + numC > numB && numB + numC > numA){

//     if(numA == numB && numB == numC){
//             console.log('Triângulo equilátero')
//     }else if(numA !== numB && numB !== numC){
//             console.log('Triângulo escaleno')
//         }else if(numA == numB || numA == numC || numB == numC){                 
//             console.log('Triângulo isósceles')
//     }

// } else{
//     console.log('Os dados fornecidos não formam um triângulo.')
// }


/*

    7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
    forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
    compradas, calcule e escreva o valor total da compra.

*/


// const prompt = require('prompt-sync')()

// let numApples = Number(prompt('Insira a quantidade de maçãs compradas: '))

// let sale1 = 0

// if(numApples > 12){
//     sale1 = numApples * 0.25
// }else {
//     sale1 = numApples * 0.30
// }

// console.log(`O custo das maçãs compradas é ${sale1.toFixed(2)} reais.`)


/*
    8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
    e escreve-los em ordem crescente.

*/


// const prompt = require('prompt-sync')()

// let num1 = Number(prompt('Insira o primeiro valor: '))
// let num2 = Number(prompt('Insira o segundo valor: '))

// if(num1 !== num2){

//     if(num1 > num2){
//         console.log(`${num2}, ${num1}`)
//     }else if(num2 >num1){
//         console.log(`${num1}, ${num2}`)
//     }
// }else {
//     console.log('Os valores digitados são iguais')
// }

/*

    9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console
    utilizando um loop for.

*/

// for(let i = 10; i >= 1; i --){
//     console.log(i)
    
// }


/*
    10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
*/

// const prompt = require('prompt-sync')()

// let numInt = Number(prompt('Insira um valor: '))

// for(let i = 0; i < 10; i ++){
//     console.log(numInt)
    
// }


/*
    11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
    utilizando um loop for.
*/

// const prompt = require('prompt-sync')()

// let sum = 0

// for(let i = 0; i < 5; i ++){

//     let num = Number(prompt('Insira um número: ')) 

//     sum += num
// }

// console.log (`A soma total dos números é: ${sum}`)


/*
    12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
    10) utilizando um loop for
*/

// const prompt = require('prompt-sync')()

// let multiplier = Number(prompt('Informe o número que voce quer saber a tabuada: '))

// for(let counter = 0; counter <= 10; counter++){
//     console.log(`${multiplier} * ${counter} =` , multiplier * counter)
// }


/*
    13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
    a média aritmética desses números.
*/

// const prompt = require('prompt-sync')()

// let sum = 0
// let counter = 0

// while (true) {

//     let num = parseFloat(prompt('Digite um número decimal ou 0 para sair:'));
    
//     if (num === 0) {
//         console.log(`Saíndo...`)
//         break
//     }
    
//     sum += num  
//     counter++ 
// }

// if (counter != 0) {

//     let average = sum / counter;
//     console.log(`A média dos números inseridos é: ${average.toFixed(1)}`);  
// }
   

/*
    14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
    utilizando um loop for ou while.
*/


// const prompt = require('prompt-sync')()

// let num = Number(prompt('Insira um número para calcular o fatorial: '))

// result = 1
// count = 1

// while(count <= num){
//     result *= count
//     count++
// }

// console.log(`${result.toFixed(2)}`)


/*
    15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
    Fibonacci utilizando um loop for
*/

// const prompt = require('prompt-sync')()

// let a = 0;
// let b = 1;

// for (let i = 0; i < 10; i++) {
//     console.log(a);
//     const nextTerm = a + b;
//     a = b;
//     b = nextTerm;
// }




