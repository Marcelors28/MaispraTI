
//---------funções especiais-----------/

// let teste = function(){
//     console.log('Olá mundo')
// }

// teste()

// function showFunction(sucessCallback, errorCalback){
//     if(false){
//         sucessCallback('Requisição bem sucedida')
//     } else {
//         errorCalback('Erro na requisição')
//     }
// }

// let sucessCallback = function(message){
//     console.log(message)
// }

// let errorCalback = function(message){
//     console.error(message)
// }


// showFunction(sucessCallback, errorCalback)


//*********exercicios colocar em uma função********/

// // 1. Soma dos elementos de um Array

// let arrSum = function(arr){
//      let sum = 0

// for(let i = 0; i < arr.length; i++){
//      sum += arr[i]
//  }

//  return sum

// }

// let arr = [10, 20 , 40, 30]
// let sum = arrSum(arr)

// console.log(sum)

// // 2. Encontre o maior número em um array

// function findMax(arr){
//     let max = arr[0]

// for(let i = 0; i < arr.length; i++){
//     if(arr[i] > max){
//         max = arr[i]
//     }
// }

// return max

// }

// console.log(findMax([1, 2, 3, 4, 5]))

// //3. Reverter um Array

// let reversed = []

// for(let k = arr.length - 1; k >= 0; k--){
//     reversed.push(arr[k])
// }

// console.log(reversed)

// //4. Criem um novo arrray contendo apenas 
// //números pares

// let evens = []

// for(let m = 0; m < arr.length; m++){
//     if(arr[m] % 2 ===0){
//         evens.push(arr[m])
//     }
// }

// console.log(evens)

// //5. Contar Ocorrências de um valor

// let vet = [10, 10, 7 , 5, 10]

// let value = 10

// let count = 0

// for(let l = 0; l < vet.length; l++){
//     if(vet[l] === value){
//         count++
//     }
// }

//---------manipulação de string------ */

// let nome = 'Equipe olimpica'

// console.log('Jaques'.length)
// console.log('Jaques'.charAt(0))
// console.log(nome.indexOf('q'))

// //console.log(nome.replace('Jaques', 'Hyago'))

// console.log(nome.substr(7, 8))
// console.log(nome.toLocaleUpperCase())
// console.log(nome.toLocaleLowerCase())

// console.log('-' + nome.trim() + '-')

//Matemáticos

// console.log(Math.ceil(100.73)) // rredonda pra cima
// console.log(Math.floor(100.73)) // rredonda pra baixo
// console.log(Math.round(100.73)) // rredonda forma lógica
// console.log(Math.sqrt(100)) // raiz quadrada
// console.log(Math.pow(100, 2)) // potencia
// console.log(Math.cbrt(100)) // raiz cubica
// console.log(Math.abs(100.20)) // número absoluto
// console.log(Math.random()) // número aleatório

// datas

// let date = new Date()

// console.log(date.getDate()) //dia atual
// console.log(date.getMonth() + 1) //mes atual
// console.log(date.getFullYear()) //ano atual

// console.log(date.toDateString()) //data e hora atual
// date.setDate(date.getDate() + 720)
// console.log(date.toString()) //alterar a data

// date.setFullYear(date.getFullYear() + 720)// altera ano
// console.log(date.toString())

// let date1 = new Date(2024, 7, 6)

// console.log(date1.toString())

// console.log(date1.getTime())//converte data para milisegundos

// let date1 = new Date(2024, 7, 6)
// let date2 = new Date(2023, 7, 6)

// console.log(date1.toString())

// console.log(date1.getTime())
// console.log(date2.getTime())

// let miliseconds_between_dates = Math.abs(date1.getTime() - date2.getTime())
// console.log(miliseconds_between_dates)

// let miliseconds_per_day = (1 * 24 * 60 * 60 *1000)
// console.log(`Um dia tem ${miliseconds_per_day} milisegundos`)

// console.log(`A diferença entre as datas é de ${Math.ceil(miliseconds_between_dates/miliseconds_per_day)} dias`)

//exercios//

//1.inverter uma string

// const prompt = require('prompt-sync')()

// let nome = String(prompt('Qual seu nome ?: '))

// console.log(nome.replace(`${nome}`, 'Hyago'))

//2.Contar vogais



//3.Gerar número aleatório

// const prompt = require('prompt-sync')()

// let num = Number(prompt('Deseja gerar um número aleatório?: 1 - Sim / 2 - Não '))


// if(num === 1){
//     console.log(Math.random())
// }else if (num === 2){
//     console.log('Obrigado')
// }else{
//     console.log('Digite um número válido')
// }



//4.dias entre duas datas

// const prompt = require('prompt-sync')()

// let date1 = new Date(prompt('Digite a primeira data(AAAA/MM/DD): '))
// let date2 = new Date(prompt('Digite a segunda data(AAAA/MM/DD): '))

// let miliseconds_between_dates = Math.abs(date1.getTime() - date2.getTime())

// let miliseconds_per_day = (1 * 24 * 60 * 60 *1000)

// console.log(`A diferença entre as datas é de ${Math.ceil(miliseconds_between_dates/miliseconds_per_day)} dias`)


//5.Formatar data


