// doubly link list

class Node {
    constructor(value, prev, next) {
        this.value = value
        this.prev = prev || null
        this.next = next || null
    }
}

class LinkedList {
    constructor() {
        this.head = this.tail = null
    }

    // Add to the end (tail) of the list
    append(value) {
        // If the list is empty, create a new Node
        if(!this.tail) {
            this.head = this.tail = new Node(value)
        } else {
            let oldTail = this.tail
            this.tail = new Node(value)
            oldTail.next = this.tail
            this.tail.prev = oldTail
        }
    }

    // Add to the beginning (head) of the list
    prepend(value) {
        // If the list is empty, create a new Node
        if(!this.head) {
            this.head = this.tail = new Node(value)
        } else {
            let oldHead = this.head
            this.head = new Node(value)
            oldHead.next = this.head
            this.head.prev = oldHead
        }
    }

    removeTail() {

    }


    removeHail() {

    }

    search() {

    }
}