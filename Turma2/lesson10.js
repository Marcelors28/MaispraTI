// let thingslist = Array()

// thingslist['hardware'] = Array()
// thingslist['fruits'] = Array()
// thingslist['people'] = Array('Aristotoles', 'Talkei')

// thingslist['hardware'][0] = 'notebook'
// thingslist['hardware'][1] = 'mouse'
// thingslist['hardware'][2] = 'Teclado'
// thingslist['fruits'][0] = 'Laranja'
// thingslist['fruits'][1] = 'maça'

// console.table(thingslist)

// let fruitList = Array()

// fruitList[0] = 'Maça'
// fruitList[1] = 'Banana'
// fruitList[2] = 'Melancia'
// fruitList[3] = 'Uva'
// fruitList[4] = 'Morango'

// let index = fruitList.indexOf('Morango')

// if(index === -1){
//     console.log('Elemento não existe')
// }else{
//     console.log(`O elemento existe e está na posição:  ${index}`)

// ---------------------sort-----------//


// let numberList = []

// numberList[0] = 10
// numberList[1] = 12
// numberList[2] = 0
// numberList[3] = 16
// numberList[4] = 7
// numberList[5] = 9

// console.log(numberList.sort((a, b) => a - b))

//------------Function-------------//

// function calculateLandArea(width, height){
//     let area = width * height
//     return area
// }

// let width = 50
// let height = 100

// let area = calculateLandArea(width, height)

// console.log(`A area possui ${area} metros quadrados`)

//1. Exercicio// ordenar arrays em ordem alfabetica

let alfabeto = ['A', 'D', 'C', 'B', 'F' ]

function ordena(arrayASerOrdenado){
    return arrayASerOrdenado.sort()
}

console.log(ordena(alfabeto))