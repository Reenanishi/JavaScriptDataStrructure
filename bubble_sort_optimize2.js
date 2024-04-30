function bubbleSort(array) {
  let n = array.length;
  var temp;
  let sorted = true;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (array[i] > array[j]) {
        temp = array[j];
        array[j] = array[i];
        array[i] = temp;
        sorted = false;
      }
    }

    if (sorted) {
      console.log("yyy");
      break;
    }
  }
}

console.log("Bubble Sort Pactice");
let testArray1 = [2, 4, 1, 3, 7];
bubbleSort(testArray1);
console.log("Output1 = " + testArray1);
let testArray2 = [1, 2, 3, 4, 5, 6, 7];
bubbleSort(testArray2);
console.log("Output2 = " + testArray2);
let testArray3 = [7, 6, 5, 4, 3, 2, 1];
bubbleSort(testArray3);
console.log("Output3 = " + testArray3);
let testArray4 = [1, 1, 1];
bubbleSort(testArray4);
console.log("Output4 = " + testArray4);
let testArray5 = [-1, -3, -2, 0, 4, 1, 5, 3];
bubbleSort(testArray5);
console.log("Output5 = " + testArray5);
