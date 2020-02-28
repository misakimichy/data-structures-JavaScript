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