function linearSearch (arr, target){
    for(let i = 0; i < arr.length; i++){
        if (arr[i] === target){
            return i;
        }
    }
    return -1; // Return -1 if the target is not found in the array
}
//console.log(linearSearch([10, 4, 7, 2, 8, 5],7));
const myArray = [10, 4, 7, 2, 8, 5];
//const targetValue =7;
const targetValue =12;
const result = linearSearch(myArray, targetValue);


//console.log(`Found ${targetValue} at index ${result}`);

if(result  !== -1){
    console.log(`Found ${targetValue} at index ${result}`);
} else {
 console.log(`${targetValue} not found in the array.`);
}


