class Stack{  
    constructor(){
        this.items =[];
    }
    push(item){
        this.items.push(item);
    }

    pop(){
        if(!this.isEmpty()){
            return this.items.pop();
        }
    }

    peak(){
        return this.items[this.items.length -1];
    }

    isEmpty(){
        return this.items.length ===0;
    }

    size(){
        return  this.items.length;
    }
}

const myStack = new Stack();
    myStack.push(1);
    myStack.push(2);
    myStack.push(3);
console.log(myStack.pop());
console.log(myStack.peak());
console.log(myStack.isEmpty());



