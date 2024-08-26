// // 1. Soma dos elementos de um Array

// let sum = 0
// let arr = [10, 20 , 30, 40]


// for(let i = 0; i < arr.length; i++){
//     sum += arr[i]
// }

// console.log(sum)

// // 2. Encontre o maior número em um array

// let max = arr[0]

// for(let j = 0; j < arr.length; j++){
//     if(arr[j] > max){
//         max = arr[j]
//     }
// }

// console.log(max)

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

// console.log(`O valor ${value} ocorre ${count} vezes no vetor.`)

//arrays/vetores multidimensionais

// let matriz = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]

// // console.table(matriz)

// // console.log(matriz[1][1])

// for(let i = 0; i < matriz.length; i++){
//     for(let j = 0; j < matriz[i].length; j++)

// console.log(`Elemento na posição [${i}][${j}]: 
//     ${matriz[i][j]}`)

// }

// Soma de matrizes

let arr1 = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
]

let arr2 = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1]
]

let resultado = []

if(arr1.length !== arr2.length || arr1[0].length !== arr2[0].length){
    throw new Error("Os arrays devem ter o mesmo tamanho")

}

for(let i = 0; i < arr1.length; i++){
    let somaLinha = []
    for(let j = 0; j < arr1[i].length; j++){
        somaLinha.push(arr1[i][j] + arr2[i][j])
    }
    resultado.push(somaLinha)
}

console.table(resultado)
