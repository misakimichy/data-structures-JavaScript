// doubly link list
class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    // Add to the end (tail) of the list
    append(value) {
        let node = new Node(value)
        // If the list is empty, create a new Node
        if(!this.head) {
            this.head = this.tail = node
            return this
        }
        this.tail.next = node
        node.previous = this.tail
        this.tail = node
        return this
    }

    // Add to the beginning (head) of the list
    prepend(value) {
        // Make a new node to be a head
        let node = new Node(value, this.head)

        // If a head exists, make its previous reference to be new head
        if(this.head) {
            this.head.previous = node
        }
        this.head = node
        if(!this.tail) {
            this.tail = node
        }
        return this
    }

    deleteHead() {
        if(!this.head) return null
        let removedHead = this.head
        if(this.head === this.tail) {
            this.head = this.tail = null
        } else {
            this.head = this.head.previous
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
            this.tail = this.tail.previous
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
    constructor(value, next = null, previous = null) {
        this.value = value
        this.next = next
        this.previous = previous
    }
}

let list = new LinkedList()

list.append(1)
list.append(2)

list.prepend(0)
list.prepend(-1)
