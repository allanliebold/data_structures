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
  
};

var bst = new BST(50);
bst.insert(30);
bst.insert(55);
bst.insert(100);

console.log(bst.left); // { value: 30, left: null, right: null }
console.log(bst.right); // { value: 50, left: null, right: { value: 100, left: null, right: null } }


