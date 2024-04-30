let myArray = [10,20,25,30,35,45,50];
console.log("Array:    " + myArray);
myArray[2] = 28;
console.log("New Array:" + myArray);
// ____________________________________________

let  newValue
let myArray = [10,20,25,30,35,45,50];
for(let i = 0; i < myArray.length; i++){
    newValue = myArray[i] * 2;
    myArray[i] = newValue;
   
   // myArray[i] = myArray[i] * 2;

}
console.log(newValue);
