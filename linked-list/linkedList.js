import Comparator from './../utils/Comparator'

// doubly link list
class LinkedList {
    constructor(comparatorFunction) {
        this.head = null
        this.tail = null
        this.compare = new Comparator(comparatorFunction)
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

    delete(value) {
        if(!this.head) {
            return null
        }
        let deletedNode = null
        let currentNode = this.head

        while(currentNode) {
            if(this.compare.equal(currentNode.value, value)) {
                deletedNode = currentNode

                // If head is going to be deleted
                if(deletedNode === this.head) {
                    this.head = deletedNode.next
                    if(this.head) {
                        this.head.previous = null
                    }
                    // If all nodes in list has same value (the passed argument),
                    // Then all of the nodes will be deleted.
                    if(deletedNode === this.tail) {
                        this.tail = null
                    }

                // if tail is going to be deleted
                } else if (deletedNode === this.tail) {
                    this.tail = deletedNode.previous
                    this.tail.next = null
                } else {
                    const previousNode = deletedNode.previous
                    const nextNode = deletedNode.next
    
                    previousNode.next = nextNode
                    nextNode.previous = previousNode
                }
            } 
            currentNode = currentNode.next
        }
        return deletedNode
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
list.append(2)
list.append(2)
list.prepend(0)
list.prepend(-1)

list.delete(-1)