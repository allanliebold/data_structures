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

var myHT = new HashTable(30);
console.log(myHT);
console.log('hello world'.charCodeAt(4)); // 111
