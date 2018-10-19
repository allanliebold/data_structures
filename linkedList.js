// Linked List (Doubly Linked)
function LinkedList() {
  this.head = null;
  this.tail = null;
}

// Node
function Node(value, next, prev) {
  this.value = value;  
  this.next = next;
  this.prev = prev;
}

// Add to head
LinkedList.prototype.addToHead = function(value) {
  var newNode = new Node(value, this.head, null);
  if (this.head) {
    this.head.prev = newNode;
  } else {
    this.tail = newNode;
  }
  // Refactor this.head != null ? this.head.prev = newNoade : this.tail = newNode
  this.head = newNode;
};

// Add to tail
LinkedList.prototype.addToTail = function(value) {
  var newNode = new Node(value, null, this.tail);
};


