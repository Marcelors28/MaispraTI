// --------Manipulação de objetos--------//

// Calcular a média das notas dos alunos de um professor
// e verificar se está acima da média de aprovação.
// Use um loop for...in para iterar sobre as propriedades
// dentro de professor.grades. imprima se o professor está acima
// da média de aprovação (considerando 6.0 como média).

// const professor = {
//     name: "Tony Stark",
//     subject: "Physics",
//     grades: {
//         student1: 10.0,
//         student2: 8.0,
//         student1: 7.0
//     }
// }

// let sunGrades = 0
// let numberOfStudents = 0

// for(let student in professor.grades){
//     sunGrades += professor.grades[student]
//     numberOfStudents++
// }

// let average = sunGrades / numberOfStudents

// console.log(`A nota média da turma é: ${average.toFixed(2)}`)
// console.log(average >= 6
//     ? `${professor.name} está acima da média.`
//     : `${professor.name} está abaixo da média.`
// )

/*
    Verificar e listar livros publicados antes de 2000.
    Use um loop for...of para iterar sobre o array biblioteca.
    Imprima o título e o ano dos livros que atendem a essa condição.
*/

// const library = [
//     {title: "O Hobbit", autor: "J. R. R. Tolkian", year: 1925},
//     {title: "Harry Potter: O prisioneiro de Azkaban", autor: "J. K. Rolling", year: 1999},
//     {title: "Codigo limpo", autor: "J. M. Smith", year: 2010},
// ]

// for(let book of library){
//     if(book.year < 2000){
//         console.log(`O livro ${book.title}, escrito por ${book.autor}, foi publicado em ${book.year}`)
//     }
// }


/*
    Contar a quantidade de filmes por gênero.
    Use o método forLach para iterar sobre o array filmes.
    Para cada filme, verifique se o gênero já existe no objeto de contagem.
    Se existir, incremente a contagem; se não, adicione o gênero ao objeto com a contagem inicial de 1.
*/

const movies = [
    {title: "Tropa de elite", genero: "Militar"},
    {title: "Top Gun", genero: "Ação"},
    {title: "Interestelar", genero: "Sci-Fi"},
    {title: "Senhor dos Aneis", genero: "Aventura"},
    {title: "Poderoso chefão", genero: "Máfia"},
    {title: "Vingadores: Ultimato", genero: "Heróis"},
    {title: "Deadpool & Wolverine", genero: "Heróis"},
]

let generoCont = {}

movies.forEach(movie =>{
    if(generoCont[movie.genero]){
        generoCont[movie.genero]++
    }else {
        generoCont[movie.genero] = 1
    }
})

for(let genero in generoCont){
    console.log(`Existem ${generoCont[genero]} filmes do gênero ${genero}`)
}


