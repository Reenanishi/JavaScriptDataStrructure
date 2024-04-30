// function insertionSort(array){
//     //let i,j,temp;
//     for(let i = 1; i < array.length; i++ ){
//          temp = array[i];
//          let j = i-1;
//         while(j >= 0 && array [j] > temp ){
//             array[j+1] = array[j]
//             j = j+1

//         }
//         array[j+1]= temp
//     }
// }


// function insertionSort(array){
//     for(let i = 1; i < array.length; i++ ){
//         let numberToInsert = array[i];
//         let j = i - 1;

//     while (j >= 0 && array[j] > numberToInsert)  {
//         array[j+1] = array[j];
//         j = j-1
//     } 
//     array[j+1] = numberToInsert
//     }
// }

// console.log("InsertionSort Pactice");
//  const array = [2, 4, 1, 3, 7];
// insertionSort(array);
// console.log(array);



function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let currentElement = arr[i];
      let j = i - 1;
      
      while (j >= 0 && arr[j] > currentElement) {
        arr[j + 1] = arr[j];
        j--;
      }
      
      arr[j + 1] = currentElement;
    }
    
    return arr;
  }