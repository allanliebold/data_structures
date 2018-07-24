// Hash Table

function HashTable(size) {
  this.buckets = Array(size);
  thus.numBuckets = this.buckets.length:
}

function HashNode(key, value, next) {
  this.key = key;
  this.value = value;
  this.next = next || null;
}

HashTable.prototype.hash = function(key) {
  
};

var myHT = new HashTable(30);
console.log(myHT);
