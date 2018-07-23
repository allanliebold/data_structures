function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BST.prototype.insert = function(value) {
  if (value <= this.value) {
    if (!this.left) {
      this.left = new BST(value);
    } else {
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

// DFT - Depth First Traversal
BST.prototype.depthFirstTraversal = function(iteratorFunc, order) {
  if (order === 'pre-order') iteratorFunc(this.value);
  if (this.left) this.left.depthFirstTraversal(iteratorFunc); 
  if (order === 'in-order') iteratorFunc(this.value);
  if (this.right) this.right.depthFirstTraversal(iteratorFunc);
  if (order === 'post-order') iteratorFunc(this.value);
};

// BFT - Breadth First Traversal
BST.prototype.breadthFirstTraversal = function(iteratorFunc) {
  var queue = [this];
  while (queue.length) {
    var treeNode = queue.shift();
    iteratorFunc(treeNode);
    if (treeNode.left) queue.push(treeNode.left);
    if (treeNode.right) queue.push(treeNode.right);
  }
};

// Get Minimum Value
BST.prototype.getMinVal = function() {
  if (this.left) return this.left.getMinVal();
  else return this.value;
}

// Get Maximum Value
BST.prototype.getMaxVal = function() {
  if (this.right) return this.right.getMaxVal();
  else return this.value;
}

// Log Node Function
function log(node) {
  console.log(node.value); 
}

var testBst = new BST(10);
bst.insert(5);
testBst.insert(15);
testBst.insert(3);
testBst.insert(20);
testBst.insert(4);
testBst.DFT(log); // 4, 3, 20, 5, 15, 10 

bst.depthFirstTraversal(log, 'pre-order');
bst.depthFirstTraversal(log, 'post-order');
bst.breadthFirstTraversal(log);

console.log('Min: ', bst.getMinVal());
console.log('Max: ', bst.getMaxVal());
