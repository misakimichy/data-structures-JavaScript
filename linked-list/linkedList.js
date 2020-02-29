// doubly link list
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

    deleteHead() {
        if(!this.head) return null
        let removedHead = this.head
        if(this.head === this.tail) {
            this.head = this.tail = null
        } else {
            this.head = this.head.prev
            this.head.next = null
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
        let currentNode = this.head;
        while(currentNode) {
            if (currentNode.value === value) return currentNode;
            currentNode = currentNode.next; 
        }
        return null;
    }
}

class Node {
    constructor(value, prev, next) {
        this.value = value
        this.prev = prev
        this.next = next
    }
}

let list = new LinkedList()

// Tail of this linked list is going to be 4
list.append(1)
list.append(2)
list.append(3)
list.append(4)

// Head of this linked list is going to be -3
list.prepend(0)
list.prepend(-1)
list.prepend(-2)
list.prepend(-3)

list.search(-2)

list.deleteHead()
list.deleteTail()