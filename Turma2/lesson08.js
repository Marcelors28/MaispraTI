// Escreva um algoritimo para imprimir os 50 primeiros numeros primos maior que 100.
// obs: numero primo é aquele divisivel somente por 1 e ele mesmo.

// const prompt = require('prompt-sync')()

// let prime = Number(prompt('Qual número que deseja verficar: '))

// for(let i = 1; i < prime; i++){
// 	if((prime % i === 0) && (i !==1)){
// 		console.log('Não é primo!')
// 		break
// 	}

// 	if(i === (prime - 1)){
// 		console.log('É primo!')
// 	}

// }

// -------------------Arrays---------------------//

// let carros = Array()

// carros[0] = 'Civic'
// carros[1] = 10
// carros[2] = true
// carros ['Hyago'] = '10'



let livros = ['Senhor dos Anéis', 'O Hobbit', 'Harry Potter']

// livros.push('Sherlook holmes')
// livros.unshift('1984')
// livros.pop()

livros.splice(1, 0, 'Livro')

console.log(livros)

