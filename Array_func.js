let numb= [1, 2, 3, 4, 5]
numb.push(7);
console.log("Push method : "+ numb);

numb.pop(); //remove last element
console.log("Pop method : " + numb);

numb.unshift(0); //Add 0 in the begining
console.log("Unshift method: " + numb);

numb.shift(); 
console.log("Shift method : " + numb);

numb.splice(1,1);
console.log("Splice method : " + numb);
