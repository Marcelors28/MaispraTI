// Introdução a objetos----------->>>>

// let serie = {
//     nome: "The Boys",
//     genero: ["Ação, Parodia, Heróis"],
//     nrTemporadas: 4,
//     status: "Em andamento",
//     classificacao: 18,
//     nrEpisodios: {
//         temp1: 10,
//         temp2: 10,
//         temp3: 50
//     },

//     mostrarCaracteristicas: function(){
//         return `O nome da série é:  ${this.nome} e sua classificação é + ${this.classificacao}`
//     }

// }

// console.log(serie.mostrarCaracteristicas())


// let livro = {
//     nome: "O filosofo",
//     genero: "História, filosofia",
//     ano: 1885,
//     autor: "Epicteto",

//     mostrarCaracteristicas: function(){
//         return `O nome do livro é:  ${this.nome} foi escrito por ${this.autor}`
//     }

// }

// console.log(livro.mostrarCaracteristicas())


// let carro = {
//     nome: "Hb20",
//     marca: "Hyunday",
//     ano: 2015,
//     cor: "branco",

//     mostrarCaracteristicas: function(){
//         return `O nome do carro é:  ${this.nome} da marca ${this.marca} e da cor ${this.cor} `
//     }

// }

// console.log(carro.mostrarCaracteristicas())

// let motor = "1000"
// let nome = "bmw s1000rr"
// let tipo = "esportiva"

// let moto = {
//     nome: nome,
//     tipo: tipo,
//     motor: motor
// }

// console.log(moto)

// let atleta = {
//     nome: "Raysa Leal",
//     esporte: "Skate street",
//     idade: 16
// }

// atleta.nacionalidade = 'Brasil'
// atleta.medalhas = {
//     ouro: 10,
//     prata: 1,
//     bronze:1
// }

// atleta.celebrarVitoria = () => { return "GANHEI"}

// console.log(atleta)
// console.log(atleta.celebrarVitoria())

// let obj1 = {
//     nome: "Bruce",
//     profissao: "Batman"
// }

// let obj2 = obj1

// obj2.companheiro = "Robin"

// console.log(obj1)
// console.log(obj2)

//----------Função construtora-----------

// function computador(processador, gpu, ram, armazenamento){
//     this.processador = processador
//     this.gpu = gpu
//     this.ram = ram
//     this.armazenamento = armazenamento

//     this.ligar = function(){
//         console.log(`O ${this.processador} está funcionando`)
//     }

//     this.mostrarEspecificacoes = function(){
//         return `processador: ${this.processador}
//                     gpu: ${this.gpu}
//                     ram: ${ram}
//                     armazenamento: ${armazenamento}`

//     }
// }

// let pc = new computador("19", "RTX4090", "16GB", "500GB SSD")
// console.log(pc.mostrarEspecificacoes())



//--------------Função Factory(técnica designer parther)-----------

function jogos(titulo, genero, anoLancamento, empresa){
    return {
        titulo,
        genero,
        anoLancamento,
        empresa
    }
}

let jogo1 = jogos("Final fantasy", "RPG", "1997", "Square Soft")

// console.log(jogo1)



//-------------Estrutura de repetição (For in, For of, For int)----->>>>


//--- for in (Estruturas chave-valor)--->>>>


// for(let key in jogo1){
//     console.log(`${key}: ${jogo1[key]}`)
// }

//--- for of (Para estruturas iterável)--->>>>

const jogadores = ['Pelé', 'CR7', 'Messi']

for(let jogador of jogadores){
    console.log(jogador)
}

const NOME = "Silva"

for(let char of NOME){
    console.log(char)
}

for(let jogo of Object.keys(jogo1)){
    console.log(jogo1[jogo])
}




