// Introdução a estruturas de dados: listas //

class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.head = null
        this.size = 0
    }

    add(data){
        let newNode = new Node(data)

        if(this.head === null){
            this.head = newNode
        } else{
            let current = this.head
            while(current.next !== null){
                current = current.next
            }

            current.next = newNode
        }

        this.size++
    }

    insertAt(data, index){ // adiciona uma posição na lista //
        if(index < 0 || index > this.size){
            return console.log('Index fora dos limites')
        }

        let newNode = new Node(data)
        let current = this.head
        let previous

        if(index === 0){
            newNode.next = this.head
            this.head = newNode
        } else {
            for(let i = 0; i < index; i++){
                previous = current
                current = current.next
            }

            newNode.next = current
            previous.next = newNode
        }
    }

    removeFrom(index){//remove posição na lista //
        if(index < 0 || index > this.size){
            return console.log('Index fora dos limites')
        }

        let current = this.head
        let previous

        if(index === 0){
            this.head = current.next
        } else {
            for(let i = 0; i < index; i++){
                previous = current
                current = current.next
            }

            previous.next = current.next
        }

        this.size = this.size - 1
        return current.data
    }

    indexOf(data){// procura posição na lista //
        let current = this.head
        let index = 0

        while(current !== null){
            if(current.data === data){
                return index
            }
            index++
            current = current.next
        }

        return -1
    }

    sizeOfList() {
        return this.size
    }

    printList() {
        let current = this.head
        while(current !== null){
            console.log(current.data)
            current = current.next
        }
    }
}

let list = new LinkedList()

list.add("Elemento 0") // printa na tela //
list.add("Elemento 1") 
list.add("Elemento 2") 
list.add("Elemento 3") 

console.log(list.indexOf("Elemento 3"))
list.removeFrom(1) // remove o elemento na posição 1//
list.printList() // printa a lista inteira//

console.log(list.sizeOfList()) //printa o tamanho da lista//
