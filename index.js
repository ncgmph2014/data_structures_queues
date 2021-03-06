/**Queues */
function Queue() {
  collection = [];
  this.print = function() {
    console.log(collection);
  };
  this.enqueue = function(element) {
    collection.push(element);
  };
  this.dequeue = function() {
    return collection.shift();
  };

  this.front = function() {
    return collection[0];
  };

  this.size = function() {
    return collection.length;
  };
  this.isEmpty = function() {
    return collection.length === 0;
  };
}

var q = new Queue();
q.enqueue("a");
q.enqueue("b");
q.enqueue("c");
q.print();
q.dequeue();
q.print();
console.log(q.front());
q.print();

function PriorityQueue() {
  var collection = [];
  this.printCollection = function() {
    console.log(collection);
  };
  this.enqueue = function(element) {
    if (this.isEmpty()) {
      collection.push(element);
    } else {
      var added = false;
      for (let i = 0; i < collection.length; i++) {
        if (element[i] < collection[i][1]) {
          //this doesn't work for some reason, but i understand how it would work if it did
          //checking priorities
          collection.splice(i, 0, element);
          added = true;
          break;
        }
      }
      if (!added) {
        collection.push(element);
      }
    }
  };
  this.dequeue = function() {
    var value = collection.shift();
    return value[0];
  };

  this.front = function() {
    return collection[0]; //same as regular queue
  };

  this.size = function() {
    return collection.length; //same as regular queue
  };

  this.isEmpty = function() {
    return collection.length === 0;
  };
}

var pq = new PriorityQueue();
pq.enqueue(["Who cares?", 2]);
pq.enqueue(["Dalai Llama, idk", 3]);
pq.enqueue(["Peanut Butter man", 1]);
pq.printCollection();
pq.dequeue();
pq.front();
pq.printCollection();
