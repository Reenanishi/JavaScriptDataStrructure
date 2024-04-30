function selctionSort(array){
    let n = array.length;
    var temp;
    var lowestValue;
    for(let i = 0; i <array.length; i++){
        let lowestValue = array[i];
        let indexOfLowestValue = i;
        for(let j = i; j < array.length; j++){
            if(array[j] < lowestValue) {
                lowestValue = array[j];
                indexOfLowestValue =j;
            }
        }
        temp = array[i];
        array[i] = array[indexOfLowestValue];
        array[indexOfLowestValue] = temp;
    }
    array;
}
console.log("Selection Sort Pactice");
let testArray1 = [2, 4, 1, 3, 7];
selctionSort(testArray1);
console.log("Output1 = " + testArray1);
let testArray2 = [7, 11, 9, 4, 5];
selctionSort(testArray1);
console.log("Output2 = " + testArray2);
let testArray3 = [3, 2, 4, 9, 11];
selctionSort(testArray1);
console.log("Output3 = " + testArray3);
