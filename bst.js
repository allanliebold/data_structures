function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BST.prototype.insert = function(value) {
  if (value <= this.value) {
    if (!this.left) {
      this.left = new BST(value);
    }
    else {
      this.left.insert(value);
    }
  } else if (value > this.value) {
    if (!this.right) {
      this.right = new BST(value);  
    } else {
      this.right.insert(value);
    }
  }
};

BST.prototype.contains = function(value) {
  if (value === this.value) {
    return true; 
  } else if (value < this.value) {
     if(!this.left) {
      return false; 
     } else {
      return this.left.contains(value); 
     }
  } else if (value > this.value) {
    if(!this.right) {
      return false; 
    } else {
      return this.right.contains(value); 
    }
  }
};

var bst = new BST(50);
bst.insert(30);
bst.insert(55);
bst.insert(100);

console.log(bst.left); // { value: 30, left: null, right: null }
console.log(bst.right); // { value: 50, left: null, right: { value: 100, left: null, right: null } }

bst.contains(30); // true
bst.contains(29); // false
bst.contains(100); // true

// Depth First Traversal
BST.prototype.DFT = function(iteratorFunc) {
  iteratorFunc(this.value);
};
