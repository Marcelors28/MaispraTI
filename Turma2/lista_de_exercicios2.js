// Exercícios com 'for'

// 1 - Imprima a sequência de Fibonacci até o 10º termo
// Escreva um programa que use um loop for para imprimir os primeiros 10 termos da sequência de Fibonacci. (0, 1, 1, 2, 3, 5, 8, 13, 21, 34)
// Dica: A sequência de Fibonacci é calculada somando os dois termos anteriores para obter o próximo termo.

const prompt = require('prompt-sync')()


// let a = 0;
// let b = 1;

// for (let i = 0; i < 10; i++) {
//     console.log(a);
//     const nextTerm = a + b;
//     a = b;
//     b = nextTerm;
// }

// 2 - Verifique se um número é primo
// Escreva um programa que use um loop for para verificar se um número fornecido (por exemplo, 29) é primo. 
// Imprima "É primo" ou "Não é primo".
// Dica: Um número primo só é divisível por 1 e por ele mesmo







// 3 - Imprima um triângulo de números

// Escreva um programa que use um loop for para imprimir um triângulo de números.
// Dica: Utilize dois loops for, um dentro do outro.

// const alturaTriangulo = 5; // Altura do triângulo (número de linhas)

// for (let linha = 1; linha <= alturaTriangulo; linha++) {
//     let linhaAtual = "";
//     for (let coluna = 1; coluna <= linha; coluna++) {
//         linhaAtual += coluna + " ";
//     }
//     console.log(linhaAtual);
// }


// 4 - Calcule o fatorial de um número
// Escreva um programa que use um loop while para calcular o fatorial de um número fornecido 
// (por exemplo, 5). O fatorial de 5 (5!) é 120.
// Dica: O fatorial de n (n!) é o produto de todos os números de 1 a n.

// const num = Number(prompt('Digite um número: '))

// resultado = 1
// count = 1

// while(count <= num){
//     resultado *= count
//     count++
// }

// console.log(`${resultado}`)


// 5 - Inverta os dígitos de um número
// Escreva um programa que use um loop while para inverter os dígitos de um número 
// fornecido (por exemplo, 1234 deve ser impresso como 4321).
// Dica: Use operações de módulo e divisão para extrair os dígitos.

// revisar !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const num = Number(prompt('Digite um número: '))

// let numeroInvertido = 0

// while (num > 0) {

//     let ultimoDigito = num % 10
//     numeroInvertido = numeroInvertido * 10 + ultimoDigito
//     num = (num / 10)
   
// }

// console.log(`${numeroInvertido}`)

// 6 - Verifique se um número é palíndromo
// Escreva um programa que use um loop while para verificar se um número fornecido (por exemplo, 121) é um palíndromo. 
// Um número é palíndromo se ele é igual ao seu reverso.

// function isPalindrome(num) {
//     const originalNum = num;
//     let reversedNum = 0;

//     while (num > 0) {
//         const lastDigit = num % 10;
//         reversedNum = reversedNum * 10 + lastDigit;
//         num = Math.floor(num / 10);
//     }

//     return originalNum === reversedNum;
// }

// // Exemplo de uso:

// const numeroFornecido = Number(prompt('Digite um número: '))

// if (isPalindrome(numeroFornecido)) {
//     console.log(`${numeroFornecido} é um palíndromo.`);
// } else {
//     console.log(`${numeroFornecido} não é um palíndromo.`);
// }

// Exercícios com 'do while'
// 7 - Conte o número de dígitos de um número
// Escreva um programa que use um loop do while para contar o número de dígitos de um número fornecido (por exemplo, 12345 tem 5 dígitos).

// function contarDigitos(numero) {
//     let contador = 0;
//     let valorAbsoluto = Math.abs(numero);

//     do {
//         valorAbsoluto = Math.floor(valorAbsoluto / 10);
//         contador++;
//     } while (valorAbsoluto > 0);

//     return contador;
// }

// const numeroFornecido = Number(prompt('Digite um número: '))
// const quantidadeDigitos = contarDigitos(numeroFornecido);
// console.log(`O número ${numeroFornecido} tem ${quantidadeDigitos} dígitos.`);

// 8 - Calcule a soma dos dígitos de um número     
// Escreva um programa que use um loop do while para calcular a soma dos dígitos de um número 
// fornecido (por exemplo, a soma dos dígitos de 1234 é 10).
// Dica: Use operações de módulo para extrair os dígitos e depois some-os

// var n = prompt("Digite um número:");
// var soma = 0;

// while (n != 0) {
//     soma += n % 10;
//     n = Math.floor(n / 10);
// }

// console.log("A soma dos dígitos é: " + soma);


// // 9 - Imprima um padrão de estrela decrescente
// // Escreva um programa que use um loop do while para imprimir um padrão de estrelas decrescente.
// // Dica: Utilize dois loops, um dentro do outro

// function imprimirStrelas(numeroLinhas) {
//     let linha = 1;

//     while (linha <= numeroLinhas) {
//         let estrelas = '';
//         let coluna = 1;

//         while (coluna <= linha) {
//             estrelas += '* ';
//             coluna++;
//         }

//         console.log(estrelas);
//         linha++;
//     }
// }


// const numeroLinhasDesejado = Number(prompt('Digite um número: '))
// imprimirStrelas(numeroLinhasDesejado);





// //Exercicio 10 repetições

// // let num1 = Number(prompt('Informe o primeiro valor: '))
// // let num2 = Number(prompt('Informe o segundo valor: '))

// // let a = num1
// // let b = num2

// // do{
// //     let temp = b
// //     b = a % b
// //     a= temp
// // } while (b !== 0)

// // const MDC = a
// // console.log(`O maior divisor comum de ${num1} e ${num2} é ${MDC}`)