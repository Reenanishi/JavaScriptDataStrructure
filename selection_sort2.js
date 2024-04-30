function selection_Sort2(array){
    for(let i = 0; i < array.length - 1; i++){
        let minIndex= i;
        for (let j = i+1; j <array.length; j++ ){
            if(array[j] < array[minIndex]){
                minIndex = j;
            }
        }
        [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
    return array;
}

console.log("Selection Sort Pactice 2");
let testArray1 = [2, 4, 1, 3, 7];
selection_Sort2(testArray1);
console.log("Output1 = " + testArray1);
let testArray2 = [7, 11, 9, 4, 5];
selection_Sort2(testArray1);
console.log("Output2 = " + testArray2);
let testArray3 = [3, 2, 4, 9, 11];
selection_Sort2(testArray1);
console.log("Output3 = " + testArray3);