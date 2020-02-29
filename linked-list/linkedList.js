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
            this.head.next = oldHead
        }
    }

    deleteHad() {
        if(!this.head) return null
        let removedHead = this.head
        // Only 1 node left
        if(this.head === this.tail) {
            this.head = this.tail = null
        } else {
            this.head = this.head.next
            this.head.prev = null
        }
        return removedHead.value
    }

    deleteTail() {
        if(!this.tail) return null
        let removedTail = this.tail
        if(this.head === this.tail) {
            this.head = this.tail = null
        } else {
            this.tail = this.tail.prev
            this.tail.next = null
        }

        return removedTail.value
    }

    search(value) {
        let currentNode = this.head
        while(currentNode) {
            if(currentNode.value === value) return currentNode
            currentNode = currentNode.next
        }

        return null
    }
}

let list = new LinkedList()
list.append(1)
list.append(2)
list.append(3)
list.append(4)

list.prepend(0)
list.prepend(-1)
list.prepend(-2)
list.prepend(-3)
