class Queue{
    constructor(){
        this.items = [];
    }

enqueue(item){
    this.items.push(item);
}

dequeue(item){
    if(!this.isEmpty()){
        return this.items.shift();
    }
}
front(){
    return this.items[0];
}

isEmpty(){
    return this.items.length ===0;
}

size(){
    return this.items.length;
}
}
const myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
console.log(myQueue.dequeue()); 
console.log(myQueue.front()); 
console.log(myQueue.isEmpty()); 