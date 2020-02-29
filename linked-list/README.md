# Linked Lists
Linked List is a data structure that represents a sequence of nodes. Linked list pair data with 'pointers'. The pointers indicating the next piece of data 's memory location until it hits the tail node.

##  What not array?
The difference between Linked Lists and arrays is how they are stored in memory.
__Linked Lists supports sequential access vs array supports direct access.__

### Linked List - sequential access
Element can be stored anywhere in memory. Because of this, you cannot directly jump to a certain position. If you want to access to the third node of Linked Lists, you need to go through from the beginning node to third node.

#### Pros
Since Linked List node can exist anywhere in memory, it's really fast to add or/and remove node, and this happens in constant time. To add a new node to a linked list, you can just replace the pointers on either side of the added node.


### Arrays - direct access
Elements in arrays need to stay next each other and need to be in an order in memory. This makes it easy to access any of the element.

#### Cons
If you want to insert an element in the array, you need to shift the rest of element over.
For example array: [1, 2, 3, 5, 6, 7, 8, 9]
When you want to add `4` between index 2 and index 3, all elements after index 3 needs to be shifted over in memory. If memory right after this array is already occupied, this whole array need to be allocated in other place of memory. This is very expensive.


## Linked List types
### Singly Linked List

### Doubly Linked List

### Circly Linked List


## Run this code
### Append and prepend methods
After instantiate a linked list with a variable name `list`, let's check how `list` looks like:
```
> list

LinkedList { tail: null, head: null }
```

Since I haven't added any value to this linked list, the tail nor head have any value.

Let's append four elements:
```
list.append(1)
list.append(2)
list.append(3)
list.append(4)
```

Then `list` has four values. The head value is `1` and the tails value is `4`:
```
> list
LinkedList {
  tail: Node {
    value: 4,
    prev: Node { value: 3, prev: [Node], next: [Circular] },
    next: null
  },
  head: Node {
    value: 1,
    prev: null,
    next: Node { value: 2, prev: [Circular], next: [Node] }
  }
}

```

Now let's prepend four elements:
```
list.prepend(0)
list.prepend(-1)
list.prepend(-2)
list.prepend(-3)
```

Now the tail value of `list` is `4` and the head value is `-3`:
```
> list

LinkedList {
  tail: Node {
    value: 4,
    prev: Node { value: 3, prev: [Node], next: [Circular] },
    next: null
  },
  head: Node {
    value: -3,
    prev: null,
    next: Node { value: -2, prev: null, next: [Circular] }
  }
}
```

### DeleteHead and deleteTail methods
Now let's test `deleteHead()` method, which doesn't take any argument and delete the head/tail of the list:
```
> list.deleteHead()
-3

```
Now it deletes the head of the list. This is how the `link` looks like after the deletion:
```
> list
LinkedList {
  tail: Node {
    value: 4,
    prev: Node { value: 3, prev: [Node], next: [Circular] },
    next: null
  },
  head: Node {
    value: -2,
    prev: null,
    next: Node { value: -3, prev: null, next: [Circular] }
  }
}
```
Now the list head value is `-2`.
Let's delete the tail of the list too:
```
> list.deleteTail()
4
```
The tail node which value was 4 was deleted and now the `link` looks like this:
```
LinkedList {
  tail: Node {
    value: 3,
    prev: Node { value: 2, prev: [Node], next: [Circular] },
    next: null
  },
  head: Node {
    value: -2,
    prev: null,
    next: Node { value: -3, prev: null, next: [Circular] }
  }
}

```

### Search Method
Let's search an element of the `list`:
```
> list.search(-2)
Node {
  value: -2,
  prev: null,
  next: Node { value: -3, prev: undefined, next: [Circular] }
}
```
Now the head node value is `-2`, so the `prev` is null.


### Play around
1. Instantiate an empty linked list. Try run any delete methods. They return an error since the list is empty.
2. Append one element to the list, which tail node and head node are going to be the same. Then run delete method again(`deleteTail()` or `deleteHead()`). The list is going to loose the tail and the head, and the both values are going to be null.

```
> let list = new LinkedList()
undefined
> list
LinkedList { tail: null, head: null }
> deleteHead()
Thrown:
ReferenceError: deleteHead is not defined
> deleteTail()
Thrown:
ReferenceError: deleteTail is not defined
> list
LinkedList { tail: null, head: null }
> list.append(1)
undefined
> list
LinkedList {
  tail: Node { value: 1, prev: undefined, next: undefined },
  head: Node { value: 1, prev: undefined, next: undefined }
}
> list.deleteHead()
1
> list
LinkedList { tail: null, head: null }

```